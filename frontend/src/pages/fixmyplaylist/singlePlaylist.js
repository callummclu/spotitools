import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {spotifyFetchGet,spotifyFetchPost,spotifyFetchPut} from '../../spotifyFetch'

function SinglePlaylist(props){
	const [playlistData, setPlaylistData] = useState({})
	let {id} = useParams()
	useEffect(()=>{
		spotifyFetchGet(`${process.env.REACT_BACKEND_URL || "http://localhost:3001"}/fixMyPlaylist/playlists/${id}`)
			.then(async res=>{
				let data = res.data
				setPlaylistData(data)
			})
	},[])

	const newPlaylist = e => {
		e.preventDefault()
		spotifyFetchPost(`${process.env.REACT_BACKEND_URL || "http://localhost:3001"}/fixMyPlaylist/users/playlists/new`,
		{
			"name":e.target.name.value,
			"public":e.target.public.checked,
			"collaborative":e.target.collaborative.checked,
			"description":e.target.description.value
		})
			.then(async res=>{
				let data = res
				console.log(data)
			})
	}

	const addSongToPlaylist = (songs=[]) => {
		spotifyFetchPost(`${process.env.REACT_BACKEND_URL || "http://localhost:3001"}/fixMyPlaylist/playlists/${id}/tracks/add`,
		{
			"position": 0,
			"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]
		})
			.then(async res=>{
				let data = res
				console.log(data)
			})
	}

	return (
		<>
			<h1>{playlistData.name}</h1>
			<hr/>
			<form onSubmit={e=>newPlaylist(e)}>
				<label htmlFor="name">name</label>
				<input name="name" type="text"/>
<br/>
				<label htmlFor="public">public</label>
				<input name="public" type="checkbox"/>
<br/>
				<label htmlFor="collaborative">collaborative</label>
				<input name="collaborative" type="checkbox"/>
<br/>
				<label htmlFor="description">description</label>
				<input name="description" type="text"/>
			<br/>	
				<input type="submit" name="create"/>
			</form>
			<hr/>
			<button onClick={e=>addSongToPlaylist()}>add song to playlist</button>
			<hr/>

			<ol>
				{playlistData.tracks?.items.map(e=><li key={e.track.id}>{e.track.name}-{e.track.artists[0].name}</li>)}
			</ol>
			
		</>
	)
}

export default SinglePlaylist