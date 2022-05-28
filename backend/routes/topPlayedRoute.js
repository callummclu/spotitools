const express = require("express")
const router = express.Router()
const fd = require('../middleware/fetchData')

// Endpoint to call to spotify API and return top items of a given category.
router.post("/user/top/:type", (req,res)=>{
	fd.GET(`/me/top/${req.params.type}`,req,res)
})

module.exports = router