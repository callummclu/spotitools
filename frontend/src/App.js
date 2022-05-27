import React, {useState} from 'react'
import axios from 'axios'
import './topArtists.css'

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
    axios.post(`${window.location.origin}/topPlayed/user/top/${type}?limit=${limit}&offset=${offset}&time_range=${time_range}`,{
      data:{"spotify_access_token":localStorage.getItem('spotify_access_token')}
    })
      .then(async res => {
        let data = await res.data
        setTopCategory(data)
      })
  }
  return (
    <>
      <button onClick={loginFunction}>login</button>
      <button onClick={e=>getTopCategory("artists",50,0,"short_term")}>Get top 50 artists over past 4 weeks</button>
      <ol>
        {topCategory.items !== undefined && topCategory.items.map(e=><p>{e.name}</p>)}
      </ol>
    </>
  );
}

export default App;
