const axios = require('axios').default
const getQueryString = require("./getQueryString.js")
const apiLink = `https://api.spotify.com/v1`

function GET(url,req,res){
	axios.get(
		`${apiLink}${url}${getQueryString(req.query)}`,{
            headers: {        
                "Authorization": `Bearer ${req.body.data.spotify_access_token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
		.then(async (response) => {
			let data = await response.data
			res.status(200).json(data)
		})
		.catch(err=>{
			console.error(err)
			res.status(400).json(err)

		})
}

function POST(url,req,res){
	console.log("POST")
}

function PUT(url,req,res){
	console.log("PUT")
}

module.exports = {GET,POST}