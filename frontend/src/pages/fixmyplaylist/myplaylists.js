import React,{useState,useEffect} from 'react'
import {spotifyFetchGet,spotifyFetchPost} from '../../spotifyFetch'


function MyPlaylists(props){
	const [playlistList,setPlaylistList] = useState([])
	const getPlaylists = () => {
		spotifyFetchGet(`${process.env.REACT_BACKEND_URL || "http://localhost:3001"}/fixMyPlaylist/users/playlists`)
			.then(async res => {
			    let data = await res.data
			    setPlaylistList(data.items)
			})
	}
	useEffect(()=>{
		getPlaylists()
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

	return (
		<>
						<hr/>
			<form onSubmit={e=>newPlaylist(e)}>
				<label htmlFor="name">name</label>
				<input name="name" type="text" required/>
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
			{playlistList.map(e=><p key={e.id}><a href={`my-playlists/${e.id}`}>{e.name}</a></p>)}
		</>
	)
}

export default MyPlaylists