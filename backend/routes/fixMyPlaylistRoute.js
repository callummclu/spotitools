const express = require("express")
const router = express.Router()
const axios = require("axios")

const getQueryString = require("../middleware/getQueryString.js")

const apiLink = `https://api.spotify.com/v1`

// GET user's playlists
	// users/{user_id}/playlists

// GET playlist
	// playlists/{playlist_id}

// GET playlist items
	// playlists/{playlist_id}/tracks

// POST add to playlist
	// playlists/{playlist_id}/tracks

// POST new playlist
	// users/{user_id}/playlists

// PUT update playlist
	// playlists/{playlist_id}/tracks

module.exports = router