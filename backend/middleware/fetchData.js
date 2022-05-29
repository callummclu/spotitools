const axios = require('axios').default
const fetch = require('node-fetch')
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

/*
	POST and PUT may not work as data may not be the correct
	method of posting, it may be raw or multipart form.
*/

function POST(url,req,res){
	console.log(req.body.otherData)
	fetch(
	`${apiLink}${url}${getQueryString(req.query)}`,{
		method: 'POST',
        headers: {        
            "Authorization": `Bearer ${req.body.data.spotify_access_token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body.otherData)
    })
	.then(async (response) => {
		let data = await response.json()
		res.status(200).json(data)
	})
	.catch(err=>{
		console.error(err)
		res.status(400).json(err)

	})
}

function PUT(url,req,res){
	fetch(
	`${apiLink}${url}${getQueryString(req.query)}`,{
		method:"PUT",
        headers: {        
            "Authorization": `Bearer ${req.body.data.spotify_access_token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body.otherData)      
    })
	.then(async (response) => {
		let data = await response.json()
		res.status(200).json(data)
	})
	.catch(err=>{
		console.error(err)
		res.status(400).json(err)

	})
}

module.exports = {GET,POST}