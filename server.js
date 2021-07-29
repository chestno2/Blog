const  express = require('express')
const morgan = require('morgan')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")
// bring routes
const blogRoutes = require("./Routes/blog")

//app
const app = express()

//db

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false ,useUnifiedTopology: true 
}).then(()=>console.log("Database connected"))

//middlewares
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())

//cors
if(process.env.NODE_ENV===" development"){
app.use(cors({origin:`${process.env.CLIENT_URL}`}))
}


//routes middlewares
app.use( "/api", blogRoutes)

//port
const port = process.env.PORT||8000

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

