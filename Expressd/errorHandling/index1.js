const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");  //require express class

// Create an admin route and send an error with 403 status code


app.get("/admin",(req,res)=>  //create admin route
{
    throw new ExpressError(403,"Access is Forbidden");
    // console output    
        
    //    Failed to load resource: the server responded with a status of 403 (Forbidden)
})

//Wrap asyncWrap
// function asyncWrap(fn){
//     return function (req,res,next)
//     {
//         fn(req,res,next).catch((err)=>{
    //             next(err);
//         })
//     }
// }
// //using above function reduce the code of try catch block it will only use asyncwrap function this function will catch the error and throw 
// app.get("/chats/:id",asyncWrap(async(req,res,next)=>
// {
//     let {id}=req.params;
//     res.send("id",id);

// })); 


app.listen("8080",()=>
{
    console.log("server is startted");
})
