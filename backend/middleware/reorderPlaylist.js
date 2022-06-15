const axios = require('axios')
const fd = require('../middleware/fetchData')
const math = require('mathjs')


async function reorder(req,res,orderMethod="default"){
	let trackIds = req.body.otherData
	let stringIds = trackIds.join(',')

	let trackDataArr = await axios.get(`https://api.spotify.com/v1/audio-features?ids=${stringIds}`,{
		headers: {        
            "Authorization": `Bearer ${req.body.data.spotify_access_token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
	})
		.then(async response=>{
			let data = response.data
			return data.audio_features
		})
		.catch(err=>console.error(err))
	
	let trackVectorArr = trackDataArr.map(e=>{
		return (
			{
				id:e.id,
				vector:[
					e?.danceability,
					e?.energy,
					e?.loudness,				
					e?.mode,
					e?.speechiness,
					e?.acousticness,
					e?.instrumentalness,
					e?.liveness,
					e?.valence,
					e?.tempo
				]
			}
		)
	})

	function getDistance(a,b){
		return Math.sqrt(
			(Object.values(a).reduce((p_sum,x)=>p_sum + x,0)),
			(Object.values(b).reduce((p_sum,x)=>p_sum + x,0))
		)
	}

	trackVectorArr.sort(function(a,b){
		return getDistance(a,b)
	})

	let new_trackIds = trackVectorArr.map(e=>e?.id)


	fetch(`https://api.spotify.com/v1/users/${req.user.id}/playlists`,{
		method: 'POST',
        headers: {        
            "Authorization": `Bearer ${req.body.data.spotify_access_token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
        	name:"sorted Playlist",
        	public:true,
        	collaborative:false,
        	description:"newly sorted playlist"
        })
	})
	.then(async response => {
		let res_json = res.json()
	})

	let playlistId = (await axios.get(`https://api.spotify.com/v1/me/playlists`,{
		headers: {        
            "Authorization": `Bearer ${req.body.data.spotify_access_token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
	}))

	

	fetch(`https://api.spotify.com/v1/playlists/${playlistId.data?.items[0].id}/tracks`,{
		method:"POST",		
		headers: {        
            "Authorization": `Bearer ${req.body.data.spotify_access_token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
		body:JSON.stringify({
			uris: new_trackIds.map(e=>`spotify:track:${e}`),
        	position: 0
        })
	})
	.then(async response => {
		let res_json = await response.json()
		console.log(res_json)
	})

	res.status(200).json({message:"success"})
}


module.exports = reorder