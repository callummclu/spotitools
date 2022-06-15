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
import Error from './pages/error/error'

import Nav from './components/nav'
import BannerNav from './components/bannerNav'
import Footer from './components/footer'

const NeedToLoginInError = () => {
  <h1>you need to log in to access this page</h1>
}

function App() {
  const [loggedIn,setLoggedIn] = useState(true)
  useEffect(()=>{
    const getAccessToken = url => (url.split('#')[1] || "").toString().replace("access_token=","").split('&')[0]

    if(localStorage.getItem('spotify_access_token')==null || localStorage.getItem('spotify_access_token').length<1 || window.location.href.split('#')[0] == window.location.origin){
          localStorage.setItem('spotify_access_token',getAccessToken(window.location.href.toString()))
    }
    spotifyFetchGet(`${process.env.REACT_BACKEND_URL || "http://localhost:3001"}/OAuth/info`)
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
        <Route path="/c/topplayed" element={<TopPlayedLanding loggedIn={loggedIn}/>} />
        <Route path="/c/fixmyplaylist" element={<FmpLanding loggedIn={loggedIn}/>} />
        {loggedIn ?
          <>
            <Route path="/c/fixmyplaylist/my-playlists" element={<MyPlaylists loggedIn={loggedIn}/>} />
            <Route path="/c/fixmyplaylist/my-playlists/:id" element={<SinglePlaylist loggedIn={loggedIn}/>} />
            <Route path="/c/topplayed/categories" element={<ChooseCategory loggedIn={loggedIn}/>} />
            <Route path="/c/topplayed/categories/artists" element={<TopArtists loggedIn={loggedIn}/>} />
            <Route path="/c/topplayed/categories/tracks" element={<TopTracks loggedIn={loggedIn}/>} />
            <Route path="*" element={<Error loggedIn={loggedIn}/>}/>

          </>
          :
          <>
            <Route path="*" element={<Error loggedIn={loggedIn}/>}/>
          </>
        }
      </Routes>
    </BrowserRouter>
    <Footer/>

    </>
  )
}

export default App;
