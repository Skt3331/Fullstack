const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const port = 7890;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const methodOverride =require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "root",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});

// Start the server
app.listen(port, () => {
  console.log("Server is listening on port", port);
});

// Home
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) AS count FROM user;`;
  connection.query(q, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    let counts = result[0]["count"];
    console.log(result[0]["count"]);
    res.render("home", { counts });
  });
});

// Show records
app.get("/user", (req, res) => {
  let q = 'SELECT id, username, email FROM user';
  connection.query(q, (err, users) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
      return;
      
    }
    // console.log(users);
    res.render("user", { users });
  });
});

app.get("/user/:id/edit",(req,res)=>
{
  let {id}=req.params;
  let q = `SELECT id ,username FROM user where id="${id}"`;
  connection.query(q, (err, users) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
      return;
      
    }console.log(users);
    res.render("edit", { users });
  

    // res.send("done");
  });

});
//update route

// app.patch("/user/:id",(req,res)=>
// {
//   let {id}=req.params;
//   let {username,password}=req.body;
//   // let q = `select (id) from user where password="${password}"`;
//   let q=`select * from user where id="${id}"`

//   connection.query(q, (err, result) => {
//     if (err) {
//       console.error("Error executing query:", err);
//       res.status(500).send("Internal Server Error");
//       return;
      
//     }
//     if(result.password==password)
//     {
//       let q=`update user SET username="${username} where id='${id}'`;

//   connection.query(q, (err, result) => {
//     if (err) {
//       console.error("Error executing query:", err);
//       res.status(500).send("Internal Server Error");
//       return;
      
//     }
//     res.send("updated");
//     });}
//   console.log(id,username,password,result);

//     res.send("done");
// });


// })


app.patch("/user/:id", (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  
  // Use parameterized query to prevent SQL injection
  const q = "SELECT * FROM user WHERE id = ?";
  
  connection.query(q, [id], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Check if a user with the provided id exists
    if (result.length === 0) {
      res.status(404).send("User not found");
      return;
    }

    // Compare the password from the database with the provided password
    console.log(result[0].password ,"------",password)
    if (result[0].password === password) {
  
      // Use parameterized query for the update to prevent SQL injection
      const updateQuery = "UPDATE user SET username = ? WHERE id = ?";
      
      connection.query(updateQuery, [username, id], (err, result) => {
        if (err) {
          console.error("Error executing update query:", err);
          res.status(500).send("Internal Server Error");
          return;
        }
       res.redirect("/user")
      });
    } else {
      res.status(401).send("Invalid password");
    }
  });
}); 















// Close the database connection when the server is shut down
process.on("SIGINT", () => {
  console.log("Closing database connection...");
  connection.end((err) => {
    if (err) {
      console.error("Error closing database connection:", err);
      return;
    }
    console.log("Database connection closed");
    process.exit();
  });
});
