const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test");
    } catch (err) {
        throw err; // Re-throwing the error to be caught by the promise chain
    }
}

main().then(() => {
    console.log("connection success");
}).catch(err => {
    console.error("Connection error:", err);
    // process.exit(1); // Exiting the process due to connection error
});

const usersschema=mongoose.Schema(
{
    name:String,
    email:String,
    age:Number,
})
const user=mongoose.model("user",usersschema);

const user1=new user({name:"saurav",email:"sauravatemgire@gmail.com",age:32});
const user2=new user({name:"vishal",email:"vaisshale@gmail.com",age:34});

// user1.save();
// user2.save().then((res)=>
// {
//     console.log(res);
// })
// .catch((err)=> {console.log(err)
// });

// user.insertMany([
// {name:"samarth",email:"samarth@gmail.com",age:34},
// {name:"shubham",email:"shubham@gmai.com",age:32}
// ]).then((res)=>
// {
//     console.log(res);
// }).catch((err)=>
// {
//     console.log(err);
// })
//show all records
user.find().then((res)=>
{
console.log(res);
});


//show filtered records
user.findOne({age:{$gt:32}}).then((res)=>
{
    console.log(res);
}).catch((err)=>
{
    console.log(err);
});


