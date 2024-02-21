const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.status(400).send("hello")
})
app.listen(8080,()=>{
    console.log("running on port 8080")
})