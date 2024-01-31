const express =require("express");
const app= express();  // expess auto require the ejs no require to require("ejs")
const port=8091;
const path=require("path"); //use for set views path

//Start the Server;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

//set engine as ejs
app.set("view engine","ejs");
// set path for views
app.set("views",path.join(__dirname,"/views"));

// render an Ejs 

app.get("/home",(req,res)=>
{
    res.render("home.ejs");
});

// Parse value in ejs

app.get("/dice",(req,res)=>{
 let  dicee= Math.floor(Math.random()*6)+1;
    res.render("rolldice",{dicevalue : dicee}); 
});
 //

//instagram demo ejs

app.get("/ig/:username",(req,res)=>
{
    // const follower=["saurav","gaurav","sargam","suraj"];
    // let {username}=req.params;
    const insd=require("./data.json");
    const {username}=req.params;
    let data=insd[username];
    // console.log(data);
    if(data)
    {
        res.render("instagram",{data});
    }
    else
    {
        res.render("notfound")
    }
    
});