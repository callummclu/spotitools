import React, {useState,useEffect} from 'react'
import {spotifyFetchGet} from '../../spotifyFetch'

function TopTracks(props){
	const [topTracks,setTopTracks] = useState({})
	const [term,setTerm] = useState("short_term")
	const getTopCategory = (type,limit=50,offset=0,time_range='medium_term') => {
		spotifyFetchGet(`http://spotitools-uk-dev.herokuapp.com/topPlayed/user/top/${type}?limit=${limit}&offset=${offset}&time_range=${time_range}`)
		  .then(async res => {
		    let data = await res.data
		    setTopTracks(data)
		  })
	}

	useEffect(()=>{
		getTopCategory('tracks',50,0,term)
	},[term])

	const selectHandler = e => setTerm(e.target.value)

	return (
		<>
			<h1>Top Tracks</h1>
			<label htmlFor="term">time range </label>
			<select onChange={e=>selectHandler(e)} name="term" id="term">
				<option value="short_term">4 weeks</option>
				<option value="medium_term">6 months</option>
				<option value="long_term">All time</option>
			</select>
			<ol>
				{topTracks.items !== undefined ? topTracks?.items.map(e=><li key={e.id}>{e.name}-{e.artists[0].name}</li>) : "loading..."}
			</ol>
		</>
	)
}

export default TopTracks