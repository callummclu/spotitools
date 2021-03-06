import React, {useState,useEffect} from 'react'
import {spotifyFetchGet} from '../../spotifyFetch'

function TopArtists(props){
	const [topArtists,setTopArtists] = useState({})
	const [term,setTerm] = useState("short_term")
	const getTopCategory = (type,limit=50,offset=0,time_range='medium_term') => {
		spotifyFetchGet(`${process.env.REACT_BACKEND_URL || "http://localhost:3001"}/topPlayed/user/top/${type}?limit=${limit}&offset=${offset}&time_range=${time_range}`)
		  .then(async res => {
		    let data = await res.data
		    setTopArtists(data)

		  })
	}

	useEffect(()=>{
		getTopCategory('artists',50,0,term)
	},[term])

	const selectHandler = e => setTerm(e.target.value)

	return (
		<>
			<h1>Top Artists</h1>
			<label htmlFor="term">time range </label>
			<select onChange={e=>selectHandler(e)} name="term" id="term">
				<option value="short_term">4 weeks</option>
				<option value="medium_term">6 months</option>
				<option value="long_term">All time</option>
			</select>
			<ol>
				{topArtists.items !== undefined ? topArtists?.items.map(e=><li key={e.id}>{e.name}</li>) : "loading..."}
			</ol>
		</>
	)
}

export default TopArtists