const mongoose=require("mongoose");
const {Schema}=mongoose;

main().then(()=>console.log("db connnected ")).catch(err=>console.log(err));
async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/relation');

}

const userSchema =new Schema(
    {
        username:String,
        addresses:[
            {
             location:String,City:String
            },

        ]
    }
);

const user=mongoose.model("User",userSchema);
console.log(user);

const adduser=async() =>
{
    let user1=new user(
        {
            username: "Saurav",
            addresses:
            [
                {
                    location:"Shikrapur",
                    City:"pune",
                },
            ],
        }
    )

user1.addresses.push({location:"shirur",City:"pune"});

let result =await user1.save();
return result;
};
console.log(adduser());



// realation> show dbs
// admin       40.00 KiB
// books       80.00 KiB
// config      72.00 KiB
// local       80.00 KiB
// relation    72.00 KiB
// saurav      72.00 KiB
// test        72.00 KiB
// wanderlust  80.00 KiB
// whatsapp    72.00 KiB
// realation> use relation
// switched to db relation
// relation> show collections
// users
// relation> db.users.find()
// [
//   {
//     _id: ObjectId('65db14a788f6cba59048da52'),
//     username: 'Saurav',
//     addresses: [
//       {
//         location: 'Shikrapur',
//         City: 'pune',
//         _id: ObjectId('65db14a788f6cba59048da53')
//       },
//       {
//         location: 'shirur',
//         City: 'pune',
//         _id: ObjectId('65db14a788f6cba59048da54')
//       }
//     ],
//     __v: 0
//   },
//   {
//     _id: ObjectId('65db15516d8efbe41cb25088'),
//     username: 'Saurav',
//     addresses: [
//       {
//         location: 'Shikrapur',
//         City: 'pune',
//         _id: ObjectId('65db15516d8efbe41cb25089')
//       },
//       {
//         location: 'shirur',
//         City: 'pune',
//         _id: ObjectId('65db15516d8efbe41cb2508a')
//       }
//     ],
//     __v: 0
//   }
// ]
// relation> 
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// relation> 
