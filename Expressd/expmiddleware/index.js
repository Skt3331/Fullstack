const express =require("express");
const app= express();

// simple middleware

// app.use(()=>
// {
//     console.log("i am middleware");
// });

// app.use((req,res)=>
// {
//     http://localhost:8080/?query=jfksjf
//     let {query}=req.query;
//     console.log(query);
//     console.log("hi an middleware");
//     res.send("middleware is runing");
// });
// 

// ########Next()


// app.use((req,res,next)=>
// {
//     console.log("calling next()")
//     next();
// });
// app.use((req,res,next)=>
// {
//     console.log("calling secound middleware");
//     next();
// });
// after the execution of this middleware
//all next processes run ass it is


//logger
//to log th the useful information display

app.use((req,res,next)=>{
    req.responseTime=new Date(Date.now()).toString();
    console.log(req.method,req.path,req.responseTime,req.hostname);
    next();
})

app.get("/",(req,res)=>
{
    res.send("/path");
});



app.get("/random",(req,res)=>
{
    res.send("i an root");
});








app.listen("8080",()=>
{
    console.log("server is Started");
});