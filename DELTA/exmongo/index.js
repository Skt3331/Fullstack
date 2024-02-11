const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const chat=require("./chat");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public"))) ;
app.use(express.urlencoded({extended:true}));
const methodOverride=require("method-override");
app.use(methodOverride("_method"));

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
 //  console.log(chats);
   res.render("index.ejs",{chats});
});
app.get("/chats/new",(req,res)=>
{
    res.render("new");
});

app.get("/",(req,res)=>{
    res.send("working");
});

app.post("/chats",(req,res)=>
{
   let {name,message,to}=req.body; 
   let chat1=new chat({from:name,to:to,msg:message,created_at:new Date()});
chat1.save().then((res)=>
{
    console.log(res);
})
    res.redirect("/chats")

})

app.get("/chats/:id/edit",async(req,res)=>
{
 let {id}=req.params;
//  console.log(id);
let chatw=await chat.findById(id);
// console.log(chate);
 res.render("edit.ejs",{chatw});
});

app.put("/chats/:id",async(req,res)=>
{
    let {id}=req.params;
    let {mesg}=req.body;
    let upadatedchat=await chat.findByIdAndUpdate(id,{msg:mesg},{runValidators:true,new:true});
    console.log(upadatedchat);
    res.redirect("/chats");

})
app.delete("/chats/:id",async(req,res)=>
{
    let {id}=req.params;
    let {mesg}=req.body;
    let deletededchat=await chat.findByIdAndDelete(id);
    console.log(deletededchat);
    res.redirect("/chats");

})







app.listen(8080,()=>{
    console.log("app is listening");
});