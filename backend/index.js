const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000

app.use('/',(req,res)=>{
	res.status(200).json({"status":"403","message":"Backend under construction"})
})

app.listen(PORT,()=>{
	console.log(`Listening on port ${PORT}`)
})