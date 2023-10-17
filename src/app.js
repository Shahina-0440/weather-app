const express=require('express')
const dotenv=require('dotenv')
const path=require('path')
const app=express()
dotenv.config({path:"./config.env"})
let port=process.env.PORT

//static path for working with display static web pages
const staticpath=path.join(__dirname,"../public")
app.use(express.static(staticpath))

app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

app.get("/about",(req,res)=>{
    res.send("welcome to about us page")
})

app.get("/weather",(req,res)=>{
    res.send("welcome to weather page")
})

app.get("*",(req,res)=>{
    res.send("404 error page")
})

app.listen(port,()=>{
    console.log(`listening to the port at ${port}`)
})