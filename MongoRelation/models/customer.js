///one to few many relation in mongodb

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("db connnected "))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relation");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "order",
    },
  ],
});

const order = mongoose.model("order", orderSchema);
const customer = mongoose.model("customer", customerSchema);

const addOrder = async () => {
    let res = await order.insertMany([
      {
        item: "ball",
        price: 100,
      },
      {
        item: "chips",
        price: 10,
      },
      {
        item: "chocolate",
        price: 10,
      },
    ]);
    console.log(res);
    return res;
  };




const addcustomer = async () => {
  let cust1 = new customer({
    name: "saurav",
  });
  let order1 = await order.findOne({ item: "chips" });
  let order2 = await order.findOne({ item: "ball" });

  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let result = await cust1.save();
  console.log(result);
};



// addcustomer();



// console.log(addOrder());

const display=async()=>
{let records=await customer.find({});
console.log(records);};


const display1=async()=>
{let records=await customer.find({}).populate("orders");
console.log(records[0]);};


display();


display1();
