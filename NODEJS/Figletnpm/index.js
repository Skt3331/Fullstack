const figlet=require("figlet");

figlet("saurav",function(err,data)
{
    if(err)
    {
        console.log("something went Wrong");
        console.log(err);
        return;
    }
    console.log(data);
}


)
