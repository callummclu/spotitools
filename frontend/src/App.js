import React, {useState} from 'react'
import axios from 'axios'
import './topArtists.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {spotifyFetchGet} from './spotifyFetch'

function App() {
  const [topCategory,setTopCategory] = useState({})

  /*
    this login function will redirect the user to the spotify login and stores the users 
    spotify access token inside their browsers local storage
  */
  const loginFunction = () => {
    const getAccessToken = url => url.split('#')[1].replace('access_token=','').split('&')[0]
    const getSessionToken = url => url.split('#')[1].replace('session_token=','').split('&')[1]
    window.location.replace(`${window.location.origin}/OAuth/login`)
    localStorage.setItem(
      'spotify_access_token',
      getAccessToken(window.location.href.toString())
    )
  }

  /*
    **type**          is either artists or tracks
    **limit**         is number of shown results, min=1, max=50
    **offset**        is what number the results start at, used for pagination
    **time_range**    is the range for data, either "short_term" (4 weeks), "medium_term" (6 months), "long_term" (all time)

    This function calls a fetch request to the express backend, it sends the spotify access token from local storage
    this data is then stored inside "topCategory" state variable
  */
  const getTopCategory = (type,limit=20,offset=0,time_range='medium_term') => {
    spotifyFetchGet(`${window.location.origin}/topPlayed/user/top/${type}?limit=${limit}&offset=${offset}&time_range=${time_range}`)
      .then(async res => {
        let data = await res.data
        setTopCategory(data)
      })
  }

  const getPlaylists = () => {
    spotifyFetchGet(`${window.location.origin}/fixMyPlaylist/users/playlists`)
    .then(async res => {
        let data = await res.data
        console.log(data)
      })
  }

  const FixMyPlaylistRoute = () => {
    return (
      <>
        <Route path="/" element={<>fmp "/"</>} />
        <Route path="/my-playlists" element={<>fmp "/my-playlists"</>} />
        <Route path="/my-playlists/:id" element={<>fmp "/my-playlists/:id"</>} />
      </>
    )
  }

  return (
    <BrowserRouter>
  
        {window.location.hostname.split(".")[0]=="fixmyplaylist" &&
          <Routes>
            <Route path="/" element={<>fmp "/"</>} />
            <Route path="/my-playlists" element={<>fmp "/my-playlists"</>} />
            <Route path="/my-playlists/:id" element={<>fmp "/my-playlists/:id"</>} />
          </Routes>
        }
        {window.location.hostname.split(".")[0]=="topplayed" &&
          <Routes>
            <Route path="/" element={<>tpr "/"</>} />
            <Route path="/categories" element={<>tpr "/categories"</>} />
            <Route path="/categories/artists" element={<>tpr "/categories/artists"</>} />
            <Route path="/categories/tracks" element={<>tpr "/categories/tracks"</>} />
          </Routes>
        }
        {window.location.hostname=="localhost" &&
          <Routes>
          <Route path="/" element={<>home "/"</>}/>
          </Routes>
        }
    </BrowserRouter>
  )
}

export default App;
