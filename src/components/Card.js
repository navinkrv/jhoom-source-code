import React from "react";
import { Link } from "react-router-dom";

export default function Card (props){

    return(
    <Link to={"/playlist-details/"+props.id}>    <div className="video-card">
                <img src={props.img} alt="" />
                <div className="video-details">
                    <h5>{props.name.slice(0,15)+".."}</h5>
                    <div className="card-footer">
                        <p>PlayList</p>
                       <p>-</p>
                        <p>{props.songCount} Songs</p>
                    </div>
                    
                </div>

        </div>
        </Link>
    )
}