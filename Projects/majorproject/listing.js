const mongoose=require("mongoose");
const { stringify } = require("querystring");
const schema=mongoose.Schema;

const listingSchema=new Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:String,
        image:String,
        price :Number,
        location:String,
        country:String,
    }
);
const listing=mongoose.model("Listing",listingSchema);
module.export=listing; 