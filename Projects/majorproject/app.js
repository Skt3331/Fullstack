const express=require("express");
const app=express();
const mongoose=require("mongoose");

app.get("/",(req,res)=>
{
 res.send("runing");
});


app.listen(8099,()=>{
    console.log("server is listing");
});