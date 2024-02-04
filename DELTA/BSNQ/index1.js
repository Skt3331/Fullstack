const {faker} =require('@faker-js/faker');
const { error } = require('console');
const { getRandomValues } = require('crypto');
let createRandomUser=()=>
{ return{
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    // avatar: faker.image.avatar(),
    password: faker.internet.password()
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
};};

// it was for return array of user to insert 100 records
let createRandomUser1=()=>
{ return[
   faker.string.uuid(),
   faker.internet.userName(),
   faker.internet.email(),
    // avatar: faker.image.avatar(),
   faker.internet.password()
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
];};

console.log(createRandomUser());

// Get the client
const mysql = require("mysql2");

// Create the connection to database
try{
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:"root"

});

// show all table from database
// connection.query(
//   'SHOW TABLES',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
// connection.query(`select * from user`),function(err,results,fields)
// {
//     console.log(err);
//     console.log(results);
//     console.log(fields);
// }

// //withplaceholders

// let q="Insert into user(id,username,email,password) values(?,?,?,?)";
//  let cr=createRandomUser();
//  let user=[cr.id,cr.username,cr.email,cr.password];
  
//  connection.query(q,user,(err,results)=>
//  {
//  if(err) throw err;
//  console.log(results);
//  });
 



// using faker bulk insert


let data=[];

let q="Insert into user(id,username,email,password) values ?";
for(let i=0;i<100;i++)
{
    data.push(createRandomUser1());
}


// console.log(records);
connection.query(q,[data],(err,result)=>
{
    console.log(err);
    console.log(result);
});
}

catch(err){
console.log(err);
}
