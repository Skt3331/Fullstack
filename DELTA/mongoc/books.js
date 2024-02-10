const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/books");
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

// const schema = new Schema({
//     name: String,
//     binary: Buffer,
//     living: Boolean,
//     updated: { type: Date, default: Date.now },
//     age: { type: Number, min: 18, max: 65 },
//     mixed: Schema.Types.Mixed,
//     _someId: Schema.Types.ObjectId,
//     decimal: Schema.Types.Decimal128,
//     array: [],
//     ofString: [String],
//     ofNumber: [Number],
//     ofDates: [Date],
//     ofBuffer: [Buffer],
//     ofBoolean: [Boolean],
//     ofMixed: [Schema.Types.Mixed],
//     ofObjectId: [Schema.Types.ObjectId],
//     ofArrays: [[]],
//     ofArrayOfNumbers: [[Number]],
//     nested: {
//       stuff: { type: String, lowercase: true, trim: true }
//     },
//     map: Map,
//     mapOfString: {
//       type: Map,
//       of: String
//     }
//   });
  
//   // example use
  
//   const Thing = mongoose.model('Thing', schema);
  
//   const m = new Thing;
//   m.name = 'Statue of Liberty';
//   m.age = 125;
//   m.updated = new Date;
//   m.binary = Buffer.alloc(0);
//   m.living = false;
//   m.mixed = { any: { thing: 'i want' } };
//   m.markModified('mixed');
//   m._someId = new mongoose.Types.ObjectId;
//   m.array.push(1);
//   m.ofString.push('strings!');
//   m.ofNumber.unshift(1, 2, 3, 4);
//   m.ofDates.addToSet(new Date);
//   m.ofBuffer.pop();
//   m.ofMixed = [1, [], 'three', { four: 5 }];
//   m.nested.stuff = 'good';
//   m.map = new Map([['key', 'value']]);
//   m.save(callback);




///crating table format

// const bookschema = mongoose.Schema(
//     {
//         title:{
//             type:String,
//             required:true
//         },
//         author:{
//           type:String
//         },
//         price:{
//          type : Number
//         }
//     }
// );

// //create into database

// const book=mongoose.model("Book",bookschema);

// const book1=new book({title:"shamchi aai",author:"ram",price:2000});

// book1.save();

const book1schema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },author:{
            type:String,
        }
        ,price:{
            type :String,
            min:[1,"book value not be less than 1"],
        },
        discount:{
            type :Number,
            default:0,
        },
        genre:String,
        catagary:{
            type:String,
            enum:["abc","bcd","cde"]
        }
    }
);

const libbook=mongoose.model("labbook",book1schema);

// const book1=new libbook({title:"swam",author:"sfsf",price:345,discount:3,genre:"abccd",catagary:"abc"});

// book1.save();

// libbook.findByIdAndUpdate("5c7580f633cc8dbbbf95ba7",{
//     price :100},{runValidators:true}).catch((
//         err)=>
// {
//                 console.log(err);
//         }
//     )
  