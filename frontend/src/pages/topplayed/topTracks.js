import React, {useState,useEffect} from 'react'
import {spotifyFetchGet} from '../../spotifyFetch'
import {TailSpin} from 'react-loading-icons'
import Nav from '../../components/nav'

const TrackCard = (props) => {
	console.log(props.content)
	/*
		props.count
		props.content.name
		props.content.album.artists[0]
		props.content.album.name
		props.content.album.images[1].url
		props.content.external_urls.spotify
	*/
	return (
		<>
			<div className="track-card" onClick={_=>window.location.href = props.content.external_urls.spotify}>
				<h3>{props.count}</h3>
				<div className="track-image" style={{backgroundImage:`url(${props.content.album.images[1].url})`}}/>
				<div className="track-info">
					<h2>{props.content.name}</h2>
					<p>{props.content.album.artists[0].name}</p>
				</div>
			</div>
		</>
	)
}

function TopTracks(props){
	const [topTracks,setTopTracks] = useState({})
	const [term,setTerm] = useState("short_term")
	const getTopCategory = (type,limit=50,offset=0,time_range='medium_term') => {
		spotifyFetchGet(`${process.env.REACT_BACKEND_URL || "http://localhost:3001"}/topPlayed/user/top/${type}?limit=${limit}&offset=${offset}&time_range=${time_range}`)
		  .then(async res => {
		    let data = await res.data
		    setTopTracks(data)
		  })
	}

	useEffect(()=>{
		getTopCategory('tracks',50,0,term)
	},[term])


	return (
		<>
			<Nav loggedIn={props.loggedIn}/>
			<div className="container small-nav">
			<h1>Top Tracks</h1>
			<p>Some sub text talking about this page</p>

			<div className="artists-container">
			<select onChange={e=>setTerm(e.target.value)} name="term" id="term">
				<option value="short_term">4 weeks</option>
				<option value="medium_term">6 months</option>
				<option value="long_term">All time</option>
			</select>
			<div className='track-container'>
				{topTracks.items !== undefined ? topTracks?.items.map(e=><TrackCard key={e.id} count={topTracks.items.indexOf(e) + 1} content={e}/>) : <TailSpin style={{marginTop:"150px",marginBottom:"200px"}} height={'4em'} fill={'black'} stroke={'black'} />}
			</div>
			</div>
			</div>
		</>
	)
}

export default TopTracks