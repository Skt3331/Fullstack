const express = require("express");

const app = express();
const ExpressError = require("./ExpressError"); //requring class for custom exception



const authtoken = (req, res, next) => {
  let { token } = req.query;
  console.log(token);
  if (token === "giveacess") {
    next();
  } else {
    // res.send("acess denied");
    throw new ExpressError(401, "ACESS DENIDE");
  }
};

// here was passed a middleware in a function
app.get("/root", authtoken, (req, res) => {
  res.send("data");
});

// app.use((err, req, res, next) => {
//  let {status,message}=err;//undefiend status
// res.status(status).send(message);///
// });

app.use((err,req,res,next)=>
{
    let{status=500,message="Internal Server Error"}=err;
    res.status(status).send(message);
    next(err);
})

// handing error
// app.use((err,req,res,next)=>
// {
//     console.log("----error------");
//     // OR
//     // console.log(err);
//     next(err);//calling error handing middleware
//     // throw new err("custom error");
// });
// app.use((err,req,res,next)=>
// {
//     console.log("ERRROr:",err);
//     next();//it will stop next part of code
//     next(err); // it will return the next part of code and return
// });

app.listen("8080", () => {
  console.log("server is Started");
});
