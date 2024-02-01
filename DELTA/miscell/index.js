const express=require("express");
const app=express();
const post=9089;
app.listen(post,()=>
{
    console.log("server is started")
;});
app.use(express.urlencoded({extended:true}));//decode res.body to json
app.use(express.json());  // if want to accept accept post request fornm user
app.get("/login",(req,res)=>
{
   let {username,pass}=req.query;
    console.log(username,pass);
 res.send(`this is get request welcome: ${username} Password: ${pass}`);

});

app.post("/login",(req,res)=>
{
    let {username,pass}=req.body;

    res.send(`this is post request welcome: ${username} Password: ${pass}`);
});