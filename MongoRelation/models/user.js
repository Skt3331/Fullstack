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
