const express = require("express")
const router = express.Router()
const axios = require('axios').default
const request = require('request')
const fetch = require('node-fetch')
const getQueryString = require("../middleware/getQueryString.js")
const apiLink = `https://api.spotify.com/v1`

// Endpoint to call to spotify API and return top items of a given category.
router.post("/user/top/:type", (req,res)=>{

	// axios.get creates an http GET request to the given link, with the desired headers.
	// the following .then and .catch functions gather either the data or errors from the 
	// request.
	axios.get(
		`${apiLink}/me/top/${req.params.type}${getQueryString(req.query)}`,{
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
})

module.exports = router