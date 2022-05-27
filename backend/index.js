const express = require("express")
const logger = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path")
const cookieParser = require('cookie-parser')
require("dotenv").config({path: __dirname + "/.env"})

// start application and configure port
const app = express()
const PORT = sanitizePort(process.env.PORT || 3000)

// initialise middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
	origin:"*",
	credentials:true,
	optionSuccessStatus:200,
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cookieParser())

// import routes
const fixMyPlaylistRoute = require('./routes/fixMyPlaylistRoute.js')
app.use('/fixMyPlaylist',fixMyPlaylistRoute)

const topPlayedRoute = require('./routes/topPlayedRoute.js')
app.use('/topPlayed',topPlayedRoute)

const OAuth = require('./routes/OAuth.js')
app.use('/OAuth',OAuth)

// listen on given port
try{
	app.listen(PORT)
} catch(err){
	console.error(`Error occurred: ${err}`)
}

// additional functions
function sanitizePort(port){
	try{
		return parseInt(port)
	} catch(err){
		return 3000
	}
}