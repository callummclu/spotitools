import React,{useState,useEffect} from 'react'
import {spotifyFetchGet,spotifyFetchPost} from '../../spotifyFetch'
import Nav from '../../components/nav'
import {CgMusic} from 'react-icons/cg'

function MyPlaylists(props){
	const [playlistList,setPlaylistList] = useState([])
	const getPlaylists = () => {
		spotifyFetchGet(`${process.env.REACT_BACKEND_URL || "http://localhost:3001"}/fixMyPlaylist/users/playlists`)
			.then(async res => {
			    let data = await res.data
			    setPlaylistList(data.items)
			    console.log(data)
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

// <form onSubmit={e=>newPlaylist(e)}>
// 				<label htmlFor="name">name</label>
// 				<input name="name" type="text" required/>
// 				<br/>
// 				<label htmlFor="public">public</label>
// 				<input name="public" type="checkbox"/>
// 				<br/>
// 				<label htmlFor="collaborative">collaborative</label>
// 				<input name="collaborative" type="checkbox"/>
// 				<br/>
// 				<label htmlFor="description">description</label>
// 				<input name="description" type="text"/>
// 				<br/>	
// 				<input type="submit" name="create"/>
// 			</form>
// 			<hr/>

	const PlaylistIcon = ({image, name, size, link}) => {
		return(
			<div onClick={()=>window.location.href=link} class="playlistCard">
				{image?.length>0 ? <img src={image}/> : <CgMusic style={{width:"250px", height:"250px"}}/>}
				<h2>{name}</h2>
				<p>{size} songs</p>
			</div>
		)
	}

	return (
		<>
			<Nav loggedIn={props.loggedIn}/>
			
			<div className="container">
				<h1>Choose a Playlist</h1>
				<div className="playlistCard-container">
					{playlistList.map(e=><PlaylistIcon image={e.images[0]?.url} size={e.tracks.total} link={`my-playlists/${e.id}`} name={e.name} key={e.id}/>)}
				</div>
			</div>
		</>
	)
}

export default MyPlaylists