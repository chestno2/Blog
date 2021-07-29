const express = require("express")
const router =  express.Router()
const {time} = require("../Controllers/blog")
 router.get("/",time)
module.exports = router