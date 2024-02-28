const express=require("express");
// const router=express.Router();
const router =express.Router({mergeParams:true}); // it will send the id to the next review routes
const mongoose = require("mongoose");
const { listingSchema , reviewSchema} = require("../Schema.js"); // import joi schema this schema will check

const Listing = require("../models/listing.js");
// const Review = require("./models/review.js");
const review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js"); //import wrap async function
//validate review
router.use(express.urlencoded({ extended: true }));



const validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    console.log(error);
    if(error)
    {
      let errMsg=error.details.map((el)=>el.message).join(",");
      throw new ExpressError(333,"joi review validation");
    }
    else{
      next();
    }
  
  }
  
  
  // Reviews
 router.post("/", validateReview,wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    console.log(listing);
    let newReview = new review(req.body.review);
    listing.review.push(newReview);
    await newReview.save();
    await listing.save();
    console.log("new review sent");
    // res.send("new review sent");
    res.redirect(`/listings/${listing._id}`)
  }));

  //delete review
  
 router.delete("/:reviewid",async(req,res)=>
  {
  let {id,reviewid}=req.params;
  let deletedrvo =await Listing.findByIdAndUpdate(id,{$pull:{review:reviewid}});  //detete review object from the listing 
  let deletedrw =await review.findByIdAndDelete(reviewid);
  // console.log(deletedrvo,deletedrw);
  
  res.redirect(`/listings/${id}`);
  
    
  })
  
  module.exports=router;