import React,{useState,useEffect} from 'react'
import {spotifyFetchGet} from '../../spotifyFetch'


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

	return (
		<>
			{playlistList.map(e=><p key={e.id}><a href={`my-playlists/${e.id}`}>{e.name}</a></p>)}
		</>
	)
}

export default MyPlaylists