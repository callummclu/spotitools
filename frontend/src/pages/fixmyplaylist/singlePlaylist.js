import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {spotifyFetchGet} from '../../spotifyFetch'

function SinglePlaylist(props){
	const [playlistData, setPlaylistData] = useState({})
	let {id} = useParams()
	useEffect(()=>{
		spotifyFetchGet(`http://spotitools-uk-dev.herokuapp.com/fixMyPlaylist/playlists/${id}`)
			.then(async res=>{
				let data = res.data
				setPlaylistData(data)
			})
	},[])
	return (
		<>
			<h1>{playlistData.name}</h1>
			<hr/>
			<ol>
				{playlistData.tracks?.items.map(e=><li key={e.track.id}>{e.track.name}-{e.track.artists[0].name}</li>)}
			</ol>
			
		</>
	)
}

export default SinglePlaylist