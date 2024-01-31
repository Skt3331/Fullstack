const express=require("express");
const app=express();
const port=9090;
app.listen(port,()=>{
    console.log(`app was runing`)});

    // app.use((req,res)=>{
        // console.log("new incoming request");
  //  String    
  
  // res.send("hellow");
        
  //   JSON  // res.send({ 
             //     Name:"Saurav",
             //     Age :22
            // })

// Html

            // res.send("<h1>Hellow world</h1>");

     //   });

//get and post and remaing response

                //   app.get(("/home"),(req,res)=>{
                //      res.send("wlcome  homePage")
                //   ;});
                //   app.get(("/contact"),(req,res)=>{
                //      res.send("This is contact page");
                //   })
                //   app.get(("*"),(req,res)=>
                //   {
                //      res.send("this is get response");
                //   });
                //   app.post(("*"),(req,res)=>{
                //      res.send("this is post respoonse");
                //   });
//gitting root parameters and shoew it
 
                  // app.get(("/:username/:id"),(req,res)=>{
                      //       let a=req.params; 
                  //       console.log(a.id)
                      
                  //         res.send(`welcome ${a.username} id :${a.id}`);
                  
                  // });
                  
                   
                  // app.get(("/:username"),(req,res)=>{
                  //     let a=req.params; 
                    
                    
                  //       res.send(`welcome ${a.username} `);
                  
                  // });

//Query String
                //   app.get(("/search"),(req,res)=>
                //   {
                //    let {name}=req.query;
                 //  console.log(q);
                //    res.send(`this are search requirement ${name}`);
                //   })
                
