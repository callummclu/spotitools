const express = require("express")
const router = express.Router()
const fd = require('../middleware/fetchData')
const getUser = require('../middleware/getUser')

// gets users playlists by user id
router.post("/users/playlists",getUser,(req,res)=>{
	fd.GET(`/users/${req.user.id}/playlists`,req,res)
})    

// gets a single playlist by id
router.post("/playlists/:playlistid",(req,res)=>{
	fd.GET(`/playlists/${req.params.playlistid}`,req,res)
})   

// gets a single playlists track list by playlist id
router.post("/playlists/:playlistid/tracks",(req,res)=>{
	fd.GET(`/playlists/${req.params.playlistid}/tracks`,req,res)
})   

// adds songs to playlist
// post body requires 
	// uri: string (trackId's in a comma seperated list)
	// position: number (to show where to put the tracks, default as 0)
router.post("/playlists/:playlistid/tracks",(req,res)=>{
	fd.POST(`/playlists/${req.params.playlistid}/tracks`,req,res)
})

// creates a new playlist
// post body requires
	// name: string
	// public: boolean
	// collaborative: boolean
	// description: string
router.post("/users/playlists/new",getUser,(req,res)=>{
	fd.POST(`/users/${req.user.id}/playlists`,req,res)
})

// updates playlist ***THE SITE CAN BE MADE WITHOUT THIS, THIS IS AN EASE OF LIFE FEATURE***
// put body requires
	// uris: string[]
	// range_start: number
	// insert_before: integer
	// range_length: integer
	// snapshot_id: string
router.post("/playlists/:playlistid/tracks/update",getUser,(req,res)=>{
	fd.PUT(`/playlists/${req.user.id}/tracks`,req,res)
})


module.exports = router