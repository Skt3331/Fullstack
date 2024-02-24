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

// app.use((req,res,next)=>{
//     req.responseTime=new Date(Date.now()).toString();
//     console.log(req.method,req.path,req.responseTime,req.hostname);
// //     GET /random/sadfkasd Fri Feb 23 2024 12:59:47 GMT+0530 (India Standard Time) localhost
// // POST /posts/ba149d07-fb95-4b36-a164-bb7d3b2d9fdf/edit Fri Feb 23 2024 13:00:35 GMT+0530 (India Standard Time) localhost
// // PATCH /posts/ba149d07-fb95-4b36-a164-bb7d3b2d9fdf/edit Fri Feb 23 2024 13:00:42 GMT+0530 (India Standard Time) localhost
// // PATCH /posts/ba149d07-fb95-4b36-a164-bb7d3b2d9fdf/edit Fri Feb 23 2024 13:00:43 GMT+0530 (India Standard Time) localhost
// // DELETE /posts/ba149d07-fb95-4b36-a164-bb7d3b2d9fdf/edit Fri Feb 23 2024 13:00:47 GMT+0530 (India Standard Time) localhost
//     next();
// })

//token authontication using middleware

// app.use("/root",(req,res,next)=>
// {
// let {token}=req.query;
// if(token==="giveacess")
// {
//     // http://localhost:8080/root?token=giveacess
//     next();
// }
// else{
//     res.send("acess denied");
//     // http://localhost:8080/root
//throw custom exception
      //throw new Error("Acess Denied!");
// }
// });


// app.get("/root",(req,res)=>
// {
//     res.send("data");
// });

///// passing multiple middleware 

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








app.get("/random",(req,res)=>
{
    res.send("i an root");
});








app.listen("8080",()=>
{
    console.log("server is Started");
});