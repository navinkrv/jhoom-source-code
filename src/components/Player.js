
import {React,useEffect,useState,useRef} from "react";
import { useSelector } from "react-redux";

export const Player = ()=>{
    const [pbtn,setpbtn]=useState("►")
    const x=useRef();
    let play=useSelector((state)=>state.playQueue)
   //  console.log(play[0][0].downloadUrl[2].link);
   const [playCount,setPlayCount]=useState(0);
   
    //  const x = document.querySelector("#player");
     const [currentTime,setCurrentTime]=useState("0")
   //   const [duration,setDuration]=useState(0)

      

     

       useEffect(()=>{
         if(x.current.paused===false){
            x.current.pause()
            x.current.load()
            x.current.play()
         }
         else{
             
            if(document.querySelector("source").src !== "http://"+window.location.host+window.location.pathname){
               x.current.load() 
               x.current.play()
               document.querySelector("#player").play()
         setpbtn("⏸︎")

            }
            
         }

         if(document.querySelector("source").src=="https://"+window.location.host+window.location.pathname || document.querySelector("source").src=="http://"+window.location.host+window.location.pathname){
            document.querySelector(".player").style.display="none"
         }
         else{
            document.querySelector(".player").style.display="flex"
         }
      
         setInterval(( )=>{
            
          setCurrentTime(x.current.currentTime) 
         },1000)


      },[play])

      
      
      
      
       const durationHandler=(e)=>{
       x.current.currentTime= (e.target.value/100)*x.current.duration;
        
       }

       
       
       
       const playHandler=(e)=>{
          
          if(e.target.innerHTML==="►"){

         document.querySelector("#player").play()
         setpbtn("⏸︎")
            
            setCurrentTime((x.current.currentTime/x.current.duration)*100)

           
       
            
        }else{
            setpbtn("►")
            document.querySelector("#player").pause()
            // urls.push(play[0][0].downloadUrl[2].link)
            
            
          
            
        }
       
       }
       const nextHandler=()=>{
          setPlayCount(playCount+1)
          x.current.pause();
          x.current.load();
          x.current.play();
          document.querySelector("#player").play()
         setpbtn("⏸︎")
       }
       
       const prevHandler=()=>{
         setPlayCount(playCount-1)
         x.current.pause();
         x.current.load();
         x.current.play();
         document.querySelector("#player").play()
        setpbtn("⏸︎")
       }

  return(
    <div className="player">
        <audio id="player" ref={x}  >
       <source src={play[0]==null ? "" : play[0][playCount].downloadUrl[2].link } type="audio/mp4"   /> 
        </audio>

       <div className="row">
         <img src={play[0]==null ? "" : play[0][playCount].image[0].link} alt="" />
          <div className="column">
            <div className="row">
           
           
            <input type="range" step="0.5" min="0" max="100" onChange={durationHandler}  value={currentTime ?  currentTime : "0"}
           className="trackSlider" />
           
           
            {/* <p className="play">🔊</p>
            <input type="range" step="0.05" min="0"  max="1" onChange={volHandler} className="vol"/> */}

<p className="prev" onClick={prevHandler}>&#8249;&#8249;</p>
                <p className="play" onClick={playHandler}>{pbtn}</p>
                <p className="next" onClick={nextHandler}>&#8250;&#8250;</p>
            </div>
            
            

            <div className="row" >
            <h4>{play[0]==null ? "Song not Selected" : play[0][playCount].name}</h4>
               
                
            </div>
          </div>
       </div>
    </div>
  )

}