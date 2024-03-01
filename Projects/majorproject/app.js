const express = require("express"); //require express
const app = express(); // express function
const mongoose = require("mongoose"); // require mongodb use nvm node 18 +version

const Listing = require("./models/listing.js");
const path = require("path");

app.use(express.urlencoded({ extended: true })); //uncode req.body means post request content

app.set("view engine", "ejs"); // set view as express java script
app.set("views", path.join(__dirname, "views")); // benifits of join path the progrma can run from any path the view path in program remains constant

const methodOverride = require("method-override"); // to mangage post,path,delete request

const { read } = require("fs");
app.use(methodOverride("_method")); //it will spacift which name is use to set a method in action tag

const ejsmate = require("ejs-mate"); //ejs mate is to make an boilar plate in program thats include the navigation and

app.engine("ejs", ejsmate);

app.use(express.static(path.join(__dirname, "/public")));

const wrapAsync = require("./utils/wrapAsync.js"); //import wrap async function

const ExpressError = require("./utils/ExpressError.js"); //import Express constructor
const { Console, error } = require("console");

const { listingSchema , reviewSchema} = require("./Schema.js"); // import joi schema this schema will check

//flash
const flash=require("connect-flash");
app.use(flash());

//reqire session
const session=require("express-session");

// set session parameters
app.use(session({
  secret:"mycode",
  resave:false,
  saveUninitialized:true ,
  cookie:{
    expires:Date.now()+7*24*60*60*1000,  //this cookie will expire automatically and Date.now() return value in milisecounds
    maxage:7*24*60*60*1000,
    httpOnly:true,
  }
}));

app.get("/",(req,res)=>
{
  res.send("suuning");
})


// const Review = require("./models/review.js");
const review = require("./models/review.js");

//Express route                                                                       

const listing=require("./routes/listing.js");
const reviews=require("./routes/review.js");


// /this was created to flash the message and stoe inti locals
app.use((req,res,next)=>
{
  res.locals.sucess=req.flash("sucess");
  res.locals.error=req.flash("error");
  next();
});


app.use("/listings",listing);

// parent route 
app.use("/listings/:id/review",reviews);
// this id parameter not be sent ro review/
















async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
main()
  .then(() => {
    console.log("db");
  })
  .catch((err) => {
    console.log(err);
  });












// app.all("*", (req, res, next) => {
//   next(new ExpressError(305,"custom err")); // if path is out of servive the user degiend status and message will be passsed into a Expresserror class
// });

// All request will go throw this route if ant errr will occcure this response will send


app.use((err, req, res, next) => {
  let { statusCode = 400, message = "not found" } = err; //using == set deafult value to the variable
  // res.status(statusCode).send(message);               //it will show the error message only and statuscode in console
  // res.send("something went wrong");                    //new blank page res
  // res.render("./listings/error.ejs");
  res.status(504).render("./listings/error");
  console.log(message);
  //POST http://localhost:8099/listings 504 (Gateway Timeout)
  next();
});

app.listen(8099, () => {
  console.log("server is listing");
});
