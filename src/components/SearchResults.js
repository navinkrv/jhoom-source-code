import axios from "axios";
import React, { useEffect,useState } from "react";
import {  useParams } from "react-router-dom";
import { ListElement } from "./ListElement";

export  const SearchResults =(props)=>{
    const {query}=useParams();
    const [results,setResults]= useState([]);

    
    
    
    useEffect(()=>{
       axios.get("https://saavn.me/search/songs?query="+query)
        .then((res)=>{
            // console.log(res.data)
                setResults(res.data.data.results)
                
        }).catch((err)=>{console.log(err);})
    },[query])


    // console.log(results)
    // console.log(results.results);
    // const songs=results.songs;
    // console.log(songs)
    // const album=results.albums;
    // const playlist=results.playlists;
    // console.log(album)
    return(
        <div className="search">
                
                <h2>Songs</h2>
                <div className="songs">
                {
                  results &&  results.map((item)=>{
                        return (
                           <ListElement  key={item.id} data={item}/>
                          
                        )
                    })
                }
                
                
                </div>


                {/* <h2>Album</h2>
                <div className="songs">
                {
                  album &&  album.results.map((item)=>{
                        return (
                            <ListElement key={item.id} data={item}/>
                        )
                    })
                }
              
                </div>


                <h2>Playlists</h2>
                <div className="songs">
                {
                  playlist &&  playlist.results.map((item)=>{
                        return (
                            <ListElement key={item.id} data={item}/>
                        )
                    })
                }
                
                
                </div>
        */}
        </div>
    )
}