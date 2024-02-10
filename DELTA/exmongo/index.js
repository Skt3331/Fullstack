const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const chat=require("./chat");

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
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.send("working");
});

let chat1=new chat({from:"suarav",to:"swayam",msg:"send notes",created_at:new Date()});

chat1.save().then((res)=>
{
    console.log(res);
})


app.listen(8080,()=>{
    console.log("app is listening");
});