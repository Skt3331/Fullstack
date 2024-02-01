                                               //factory function
// function personmaker(name,age)
// {
//     const person={
//         name :name,
//         age:age,
//         sayhello()
//         {
//             console.log(`say hello to ${this.name}`);
//         } 
//     }
//     return person;

//     }

////////////////////////////////////////////////new 
// function Person(name,age)
// {
//     this.name=name;
//     this.age=age;

// }
//  Person.prototype.talk=function()
//  {
//     console.log(`hi,my name is ${this.name}`);
//  };

// let p1=new Person("saurav",54);

// /////////////////////////////////////////////class  
 
// class person{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;

//     }
//     talk(){
//         console.log(`hi  ${this.name} is here`);
//     };

// }

//////////////////////////////////////////inheritance
class person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hi ${this.name} `)
    }
}

class Teacher extends person{
constructor(name,age,subject)
{
   super(name,age);
    this.subject=subject;
}

}
class Student extends person{
    constructor(name,age,marks)
    {
        super(name,age);
        this.marks=marks;
    }
   
}

let s1=new Student("sauav",43,56);