import React, {useState,useEffect} from 'react'
import Nav from '../../components/nav'
import {spotifyFetchGet} from '../../spotifyFetch'

function TopArtists(props){
	const [topArtists,setTopArtists] = useState({})
	const [term,setTerm] = useState("short_term")
	const getTopCategory = (type,limit=50,offset=0,time_range='medium_term') => {
		spotifyFetchGet(`${process.env.REACT_BACKEND_URL || "http://localhost:3001"}/topPlayed/user/top/${type}?limit=${limit}&offset=${offset}&time_range=${time_range}`)
		  .then(async res => {
		    let data = await res.data
		    setTopArtists(data)
		    console.log(data)

		  })
	}

	useEffect(()=>{
		getTopCategory('artists',50,0,term)
	},[term])

	const selectHandler = e => setTerm(e.target.value)

	const ArtistCard = props => {
		return (
			<div className="artist-card" onClick={()=>window.location.href = props.content.external_urls.spotify}>
				<div className="artist-image"></div>
				<div className="artist-name">
					<div className="image-container" style={{backgroundImage: `url(${props.content.images[0].url})`}}/>
					<h3>{props.count}. {props.content.name}</h3>
				</div>
			</div>
		)
	}

	return (
		<>
			<Nav loggedIn={props.loggedIn}/>
			<div className="container small-nav">
			<h1>Your Top Artists</h1>
			<p>Some sub text talking about this page</p>

			<div className="artists-container">
			<select onChange={e=>selectHandler(e)} name="term" id="term">
				<option value="short_term">4 weeks</option>
				<option value="medium_term">6 months</option>
				<option value="long_term">All time</option>
			</select>
			<div className="artists">

				{topArtists.items !== undefined ? topArtists?.items.map(e=><ArtistCard count={topArtists.items.indexOf(e) + 1} content={e} name={e.name} image={e.image} key={e.id}/>) : "loading..."}

			</div>
			</div>
			</div>
		</>
	)
}

export default TopArtists