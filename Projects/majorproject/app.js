const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
const path=require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const methodOverride=require("method-override");
const { read } = require("fs");
app.use(methodOverride("_method"));


const ejsmate=require("ejs-mate");

app.engine("ejs",ejsmate); 



app.use(express.static(path.join(__dirname,"/public")));



app.get("/",(req,res)=>
{
 res.send("runing");
});











//update route
app.put("/listings/:id",async(req,res)=>
{
 let {id}=req.params;
 let done=await Listing.findByIdAndUpdate(id,{...req.body.listing});
//  console.log(done);
res.redirect("/listings")
});





//delete routing
app.delete("/listings/:id",async(req,res)=>
{
    let {id}=req.params;
    let deletedlisting =await Listing.findByIdAndDelete(id);
    console.log(deletedlisting);
    res.redirect("/listings");
   

});



///index route
app.get("/listings",(async(req,res)=>
{
const alllistings=await Listing.find({});
res.render("./listings/index.ejs",{alllistings})

})); 

//create route
app.post("/listings",async(req,res,next)=>
{
    // let {title,description,image,price,country}=req.body;
    // let listing=req.body.listing;
    // console.log(listing);\
try{
     const newlisting=new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");
}catch(err)  /// if any wrong format of data is occure the error of app.use(middleware will trigger)
{
    next(err);
}});


app.get("/listings/new",async(req,res)=>
{
    res.render("listings/new.ejs")
});

//show route
app.get("/listings/:id",async (req,res)=>
{
    let {id} =req.params;
    const listing= await Listing.findById(id);
    res.render("./listings/show.ejs",{listing});

});

app.get("/listings/:id/edit",async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("./listings/edit.ejs",{listing});
});


// app.get("/test",async (req,res)=>{
//     let samplelisting=new Listing({
//         title:"my test",
//         description:"test desc0",
//         price:3200,
//         location:"test goa",
//         country:"india"
//     });
//     await samplelisting.save().then((res)=>
    
// {
// console.log(res);
// }).catch((er)=>{
//     console.log(er);
// });
    // console.log("sample was sasved");
    // res.send("sucess");

// })







async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
main().then(()=>{
    console.log("db");
}).catch((err)=>
{
    console.log(err);
});



// All request will go throw this route if ant errr will occcure this response will send
app.use((err,req,res,next)=>{
    res.send("something went wrong");
});


app.listen(8099,()=>{
    console.log("server is listing");
});