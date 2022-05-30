const express = require("express")
const router = express.Router()
const fd = require('../middleware/fetchData')
const getUser = require('../middleware/getUser')

router.post("/users/playlists",getUser,(req,res)=>{
	fd.GET(`/users/${req.user.id}/playlists`,req,res)
})    

router.post("/playlists/:playlistid",(req,res)=>{
	fd.GET(`/playlists/${req.params.playlistid}`,req,res)
})   

router.post("/playlists/:playlistid/tracks",(req,res)=>{
	fd.GET(`/playlists/${req.params.playlistid}/tracks`,req,res)
})   

router.post("/playlists/:playlistid/tracks/add",(req,res)=>{
	fd.POST(`/playlists/${req.params.playlistid}/tracks`,req,res)
})

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
	fd.PUT(`/playlists/${req.params.playlistid}/tracks`,req,res)
})


module.exports = router