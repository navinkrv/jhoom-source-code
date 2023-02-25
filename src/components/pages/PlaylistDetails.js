import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListElement } from "../ListElement";

export const PlaylistDetails =()=>{
    const {listId}=useParams();
    const [playlistData,setPlaylistData]=useState();

    useEffect(()=>{
            axios.get("https://saavn.me/playlists?id="+listId)
            .then((res)=>{
                    setPlaylistData(res.data.data);
            })
    },[listId])
console.log(playlistData);
return(

    <div className="playlistDetails">
            <h2>{playlistData!==undefined? playlistData.name: "loading"}</h2>
            <img className="banner" src={playlistData!==undefined? playlistData.image[1].link: "loading"} alt="" />
            <center>
           <hr />
            </center>

            <h2>SONGS</h2>

            {playlistData!==undefined? playlistData.songs.map((item)=>{
                        return (
                           <ListElement  key={item.id} data={item}/>
                          
                        )
                    }):""}
    </div>
    
)
}