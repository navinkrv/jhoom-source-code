import {React} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addQueue } from "../store/createSlice";


export const ListElement =(props)=>{
// console.log(props.data)
    const dispatch=useDispatch();
    // const [relatedData,setRelatedData]=useState({});

    
       const clickHandler=()=> {
                const newQuery=props.data.name.slice(0,6);
                // console.log(newQuery);
                    
                let response=[];
                axios.get("https://saavn.me/search/songs?query="+newQuery+"&limit=10")
                .then((res)=>{
                        // console.log(res.data.data.results)
                        response=res.data.data.results;
                        response=[props.data,...response];
                        dispatch(addQueue(response))
                }).catch((err)=>{
                    console.log(err);
                })


                

       } 

    return(

        props.data &&
        <div className="list-element"  onClick={clickHandler}>
            <img className="listImg" src={props.data.image[1].link} alt="" />
                <div className="details">
                    <h5>{props.data.name}</h5>
                    <p>{props.data.primaryArtists.slice(0,25)}</p>
                </div>

        </div>

        // <>sdfs</>
        
    )
}