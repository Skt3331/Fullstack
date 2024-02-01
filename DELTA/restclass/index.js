const express = require("express");
const app = express();
const port = 9089;
const path = require("path");
app.use(express.urlencoded({ extended: true }));

const methodOverride=require("method-override");
app.use(methodOverride("_method"));

const { v4: uuidv4 } = require("uuid");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("listening");
});
const posts = [
  {
    id: uuidv4(),
    username: "amazon",
    content: "thst was ecommmerse company",
  },
  {
    id: uuidv4(),
    username: "medium",
    content: "that was content base website",
  },
  {
    id: uuidv4(),
    username: "github",
    content: "repository based services",
  },
  {
    id: uuidv4(),
    username: "fiverr",
    content: "work base services",
  },
];
app.post("/posts", (req, res) => {
  //console.log(req.body);
  let { username, content } = req.body;
  let id = uuidv4();
  // console.log(uid);
  posts.push({ id, username, content });
  // res.render("index")
  res.redirect("/posts");
});

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new");
});
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  // console.log(id);
  let post = posts.find((p) => id === p.id);
  //console.log(post);
  // res.send("request working");
  res.render("show", { post });
});

app.patch("/posts/:id",(req,res)=>
{
 let {id}=req.params;
 console.log(id);
 let newcontent=req.body.content;
//  console.log(content);
let post = posts.find((p) => id === p.id);
post.content=newcontent;
//  res.send("patch request");
res.redirect("/posts");
});


app.get("/posts/:id/edit",(req,res)=>
{
let {id}=req.params;
let post = posts.find((p) => id === p.id);

res.render("edit.ejs",{post});
});