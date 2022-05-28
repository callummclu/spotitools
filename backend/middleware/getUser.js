const axios = require('axios')

function getUser(req,res,next){
	axios.get("https://api.spotify.com/v1/me",{
        headers: {        
            "Authorization": `Bearer ${req.body.data.spotify_access_token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
	.then(async (response) => {
			let data = await response.data
			req.user = data
			next()
		})
	.catch(err=>{
			console.error(err)
			res.status(400).json(err)
		})
}

module.exports = getUser