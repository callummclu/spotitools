import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './topArtists.css'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import {spotifyFetchGet} from './spotifyFetch'
import LandingPage from './pages/home/landingpage'
import FmpLanding from './pages/fixmyplaylist/fixmyplaylistlanding'
import MyPlaylists from './pages/fixmyplaylist/myplaylists'
import SinglePlaylist from './pages/fixmyplaylist/singlePlaylist'
import loginFunction from './login'
import ChooseCategory from './pages/topplayed/chooseCategory'
import TopArtists from './pages/topplayed/topArtists'
import TopPlayedLanding from './pages/topplayed/topPlayedLanding'
import TopTracks from './pages/topplayed/topTracks'

function App() {
  const [loggedIn,setLoggedIn] = useState(true)
  useEffect(()=>{
    spotifyFetchGet(`http://localhost:3001/OAuth/info`)
      .then(async res=>{
          setLoggedIn(true)
      })
      .catch(err=>{
        setLoggedIn(false)
      })
  },[])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage loggedIn={loggedIn}/>}/>
        <Route path="/c/topplayed" element={<TopPlayedLanding/>} />
        <Route path="/c/fixmyplaylist" element={<FmpLanding loggedIn={loggedIn}/>} />
        {loggedIn &&
          <>
            <Route path="/c/fixmyplaylist/my-playlists" element={<MyPlaylists/>} />
            <Route path="/c/fixmyplaylist/my-playlists/:id" element={<SinglePlaylist/>} />
            <Route path="/c/topplayed/categories" element={<ChooseCategory/>} />
            <Route path="/c/topplayed/categories/artists" element={<TopArtists/>} />
            <Route path="/c/topplayed/categories/tracks" element={<TopTracks/>} />
          </>
          
          
        }
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
