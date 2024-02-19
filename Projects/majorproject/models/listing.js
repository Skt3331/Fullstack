const mongoose=require("mongoose");
// const { stringify } = require("querystring");
const Schema=mongoose.Schema;

const listingSchema=new Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:String,
        image:{
            default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vectors%2Fdefault-vectors&psig=AOvVaw273fULGieqYHAzVB6tGvz0&ust=1708422511005000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODR4PiPt4QDFQAAAAAdAAAAABAE",
            type:String,
            set:(v)=> v==="" ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vectors%2Fdefault-vectors&psig=AOvVaw273fULGieqYHAzVB6tGvz0&ust=1708422511005000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODR4PiPt4QDFQAAAAAdAAAAABAE" :v,
        },
        price :Number,
        location:String,
        country:String,
    }
);
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing; 