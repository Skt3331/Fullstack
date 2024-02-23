const express =require("express");
const ExpressError = require("./ExpressError");
const app= express();
const ExpressError=require("./ExpressError");

app.get("/random",(req,res)=>
{
    //AS error
    asdfk==safsaf
    res.send("i an root");
});


const authtoken=((req,res,next)=>
{
let {token}=req.query;
console.log(token);
if(token==="giveacess")

{
    next();
}
else{
    res.send("acess denied");
}
});

// here was passed a middleware in a function
app.get("/root",authtoken,(req,res)=>
{
    res.send("data");
});






// handing error
// app.use((err,req,res,next)=>
// {
//     console.log("----error------");
//     // OR
//     // console.log(err);
//     next(err);//calling error handing middleware
//     // throw new err("custom error");
// });
// app.use((err,req,res,next)=>
// {
//     console.log("ERRROr:",err);
//     next();//it will stop next part of code 
//     next(err); // it will return the next part of code and return          
// });




app.listen("8080",()=>
{
    console.log("server is Started");
});