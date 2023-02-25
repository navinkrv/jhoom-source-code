import React  from 'react'
import './app.scss';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { HashRouter,Routes,Route} from 'react-router-dom';
import { SearchResults } from './components/SearchResults';
import { Player } from './components/Player';
import { PlaylistDetails } from './components/pages/PlaylistDetails';

function App() {


   
   
 

  return (
    <HashRouter>
    <Navbar/>
    <Player/>
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/search/:query" element={<SearchResults/>}/>
      <Route path="/playlist-details/:listId" element={<PlaylistDetails/>}/>
    </Routes>
      
   
    </HashRouter>
  );
}

export default App;




// import React from 'react'
// import ReactPlayer from 'react-player'

// // Render a YouTube video player
// <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />