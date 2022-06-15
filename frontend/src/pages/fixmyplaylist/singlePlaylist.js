import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {spotifyFetchGet,spotifyFetchPost} from '../../spotifyFetch'
import {TailSpin} from 'react-loading-icons'
import Nav from '../../components/nav'

function SinglePlaylist(props){
	const [playlistData, setPlaylistData] = useState({})
	let {id} = useParams()
	useEffect(()=>{
		spotifyFetchGet(`${process.env.REACT_BACKEND_URL || "http://localhost:3001"}/fixMyPlaylist/playlists/${id}`)
			.then(async res=>{
				let data = await res.data
				console.log(data)
				setPlaylistData(data)
			})
	},[])

	const PlaylistHeader = ({image, name, size}) => {
		return (
			<div class="playlist-header">
				<img src={image}/>
				<div>
					<h1>{name}</h1>
					<p>{size} songs</p>
				</div>
			</div>
		)
	}


// track-image
// track-card

	const PlaylistTrack = props => {
		return (
			<div className="track-card" onClick={_=>window.location.href = props.content.external_urls.spotify}>
				<h3>{props.count}</h3>
				<div className="track-image" style={{backgroundImage:`url(${props.content.album.images[1].url})`}}/>
				<div className="track-info">
					<h2>{props.content.name}</h2>
					<p>{props.content.album.artists[0].name}</p>
				</div>
			</div>
		)
	}

	return (
		<>
			<Nav loggedIn={props.loggedIn}/>
			<div class="container">
					<>
						{playlistData.tracks?.items !== undefined && (playlistData.tracks?.items).length > 0 ?
						<>
							<PlaylistHeader name={playlistData.name} image={playlistData?.images[0]?.url || ""} size={playlistData?.tracks?.total || ""}/>
							<div className="track-container">
				 				{playlistData.tracks?.items.map(e=><PlaylistTrack key={e.track.id} count={playlistData.tracks.items.indexOf(e) + 1} content={e.track}/>)}
				 			</div>
				 		</>
				 		:
				 		<>
				 			<TailSpin style={{marginTop:"150px",marginBottom:"200px"}} height={'4em'} fill={'black'} stroke={'black'} />
				 		</>
				 		}
			 		</>
				

			</div>
			
			
		</>
	)
}

export default SinglePlaylist