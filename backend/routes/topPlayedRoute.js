const express = require("express")
const router = express.Router()
const axios = require('axios').default
const request = require('request')
const fetch = require('node-fetch')

const getQueryString = require("../middleware/getQueryString.js")
const apiLink = `https://api.spotify.com/v1`

router.get("/albums/:id", (req,res)=>{
	axios.get(
		`${apiLink}/albums/${req.params.id}${getQueryString(req.query)}`,{
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + req.params.data.spotify_access_token.split('&')[0],
                'Content-Type': 'application/json',
            }
		})
		.then(async (res) => {
			let data = await res.data
			res.status(200).json(data)
		})
		.catch(function (error) {

		    res.status(400).json(error)
	  	})
})

router.post("/user/top/:type", (req,res)=>{
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
			console.log(data)
			res.status(200).json(data)
		})
		.catch(err=>{
			console.error(err)
			res.status(400).json(err)

		})
})

module.exports = router