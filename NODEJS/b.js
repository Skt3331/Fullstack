const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const g=9.8;
const pi=3.14;
// exporting 123
//module.exports=123;
// Exporting Object
let obj={
    name:"saurav",
    age:22,
    lastName:"S"
   , sum:sum,
   mul:mul,
   g:g,
   PI:pi
};
module.exports=obj;

