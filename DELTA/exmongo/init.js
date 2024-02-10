const mongoose=require("mongoose");

main().then(()=>
{
    console.log("connection sucessful");
}).catch((err)=>
{
    console.log(err)
});

async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}
// let chat1=new chat({from:"suarav",to:"swayam",msg:"send notes",created_at:new Date()});
// chat1.save().then((res)=>
// {
//     console.log(res);
// })

let messages = [
    { from: "Suvar", to: "Swayam", msg: "send notes", created_at: new Date() },
    { from: "Rajesh", to: "Kumar", msg: "meeting at 3 PM", created_at: new Date() },
    { from: "Amit", to: "Rahul", msg: "bring the files", created_at: new Date() },
    { from: "Priya", to: "Aman", msg: "prepare for the presentation", created_at: new Date() },
    { from: "Neha", to: "Deepak", msg: "confirm the venue", created_at: new Date() },
    { from: "Vikram", to: "Preeti", msg: "discuss project details", created_at: new Date() },
    { from: "Ananya", to: "Rohan", msg: "send updated report", created_at: new Date() },
    { from: "Siddharth", to: "Nisha", msg: "review the document", created_at: new Date() },
    { from: "Raj", to: "Sneha", msg: "finalize budget plan", created_at: new Date() },
    { from: "Anjali", to: "Vivek", msg: "schedule team meeting", created_at: new Date() }
];

chat.insertMany(messages);
