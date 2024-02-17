const express=require("express");
const app=express();
const mongoose=require("mongoose");

app.get("/",(req,res)=>
{
 res.send("runing");
});

async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
main().then(()=>{
    console.log("db");
}).catch((err)=>
{
    console.log(err);
})


app.listen(8099,()=>{
    console.log("server is listing");
});