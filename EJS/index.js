const express =require("express");
const app= express();
const port=8090;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
app.set("view engine","ejs");
app.get("/",(req,res)=>
{
    res.render("home.js");
})