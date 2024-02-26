///many to one relation in mongodb

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("db connnected "))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relation");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});
const post = mongoose.model("post", postSchema);
const user = mongoose.model("userr", userSchema);

const addData = async () => {
  let user1 = new user({
    username: "saurav",
    email: "sauravtemgire@gmail.com",
  });
  let post1 = new post({
    content: "hellow",
    likes: 5,
  });
  post1.user = user1;

  await user1.save();
  await post1.save();
};

addData();
