const express=require("express");
const router=express.Router();
const mongoose = require("mongoose");

const User =require("../models/user.js"); 
// router.use(express.urlencoded({ extended: true }));
router.get("/signup",(req,res)=>
{
    res.render("./users/signup.ejs");
});
router.post("/signup",async(req,res)=>
{
    let{username,email,password}=req.body;
    console.log(req.params[0]);
    let nuser=new User(
        {
          email:email,
          username:username
        }
      );
     let regnew= await User.register(nuser,password);
     req.flash("sucess","user signup sucess");
     res.redirect("/listings");
})

module.exports=router;