import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from 'axios';







export default function Home (){
const [topChartsData,setTopChartsData]=useState([]);
const [punjabiSongsData,setPunjabiSongsData]= useState([]);
//top charts
const topCharts = async ()=>{
   
   axios.get('https://saavn.me/search/playlists?query=new%20hindi&&limit=4')
    .then(function (response) {
        setTopChartsData(response.data.data.results)
    })
    .catch(function (error) {
    
    console.log(error);
    })

   
    }

//punjabi songs
    const punjabiSongs = async ()=>{
   
   axios.get('https://saavn.me/search/playlists?query=punjabi%20hits&&limit=4')
    .then(function (response) {
        setPunjabiSongsData(response.data.data.results)
    })
    .catch(function (error) {
    
    console.log(error);
    })

   
    }

  

    useEffect(()=>{
       topCharts()
       punjabiSongs();

    },[])


  
    


    return(
        <div className="home-body">
           <div className="section-container">
                <h2>TOP CHARTS</h2>
                <center>

                <hr />
                </center>
            <div className="section">
                {topChartsData.map((topChartsData)=>{
                    return(
                        <Card name={topChartsData.name} key={topChartsData.id} id={topChartsData.id} songCount={topChartsData.songCount} img={topChartsData.image[2].link} />
                    )
                })}
                
                
            </div>

           </div>

                {/* punjabi songs */}

                <div className="section-container">
                <h2>Punjabi Hits</h2>
                <center>

                <hr />
                </center>
            <div className="section">
                {punjabiSongsData.map((data)=>{
                    return(
                        <Card name={data.name} key={data.id} id={data.id} songCount={data.songCount} img={data.image[2].link} />
                    )
                })}
                
                
            </div>

           </div>

           
        
              
           
              
                
        </div>
    )
}