import React, {useState,useEffect} from 'react'
import {spotifyFetchGet} from '../../spotifyFetch'

function TopArtists(props){
	const [topArtists,setTopArtists] = useState({})
	const getTopCategory = (type,limit=50,offset=0,time_range='medium_term') => {
		spotifyFetchGet(`${window.location.origin}/topPlayed/user/top/${type}?limit=${limit}&offset=${offset}&time_range=${time_range}`)
		  .then(async res => {
		    let data = await res.data
		    setTopArtists(data)

		  })
	}

	useEffect(()=>{
		getTopCategory('artists')
	},[])


	return (
		<>
			<h1>Top Artists</h1>
			<p><i>preset parameters: time_range=medium_term, offset=0, limit=50</i></p>
			<ol>
				{topArtists.items !== undefined ? topArtists?.items.map(e=><li>{e.name}</li>) : "loading..."}
			</ol>
		</>
	)
}

export default TopArtists