const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const chat=require("./chat");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then(()=>
{
    console.log("connection sucessful");
}).catch((err)=>
{
    console.log(err)
});

async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}


app.get("/chats",async(req,res)=>
{
   let chats=await chat.find();
   console.log(chats);
   res.render("index.ejs",{chats});
})

app.get("/",(req,res)=>{
    res.send("working");
});











app.listen(8080,()=>{
    console.log("app is listening");
});