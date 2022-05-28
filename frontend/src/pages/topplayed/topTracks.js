import React, {useState,useEffect} from 'react'
import {spotifyFetchGet} from '../../spotifyFetch'

function TopTracks(props){
	const [topTracks,setTopTracks] = useState({})
	const getTopCategory = (type,limit=50,offset=0,time_range='medium_term') => {
		spotifyFetchGet(`${window.location.origin}/topPlayed/user/top/${type}?limit=${limit}&offset=${offset}&time_range=${time_range}`)
		  .then(async res => {
		    let data = await res.data
		    setTopTracks(data)
		  })
	}

	useEffect(()=>{
		getTopCategory('tracks')
	},[])


	return (
		<>
			<h1>Top Tracks</h1>
			<p><i>preset parameters: time_range=medium_term, offset=0, limit=50</i></p>
			<ol>
				{topTracks.items !== undefined ? topTracks?.items.map(e=><li>{e.name}-{e.artists[0].name}</li>) : "loading..."}
			</ol>
		</>
	)
}

export default TopTracks