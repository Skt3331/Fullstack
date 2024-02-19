const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
app.get("/",(req,res)=>
{
 res.send("runing");
});


app.get("/test",async (req,res)=>{
    let samplelisting=new Listing({
        title :"my test",
        description:"test desc0",
        price:3200,
        location:"test goa",
        country:"india"
    });
    await samplelisting.save().then((res)=>
    
{
console.log(res);
}).catch((er)=>{
    console.log(er);
});
    console.log("sample was sasved");
    res.send("sucess");

})







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