 module.exports.isLoggedIn=(req,res,next)=>
 {
   // console.log(req.user);
    if(!req.isAuthenticated())
    {
      //redict url
      req.session.redirectUrl=req.originalUrl;
// console.log("gfjhghkg",req.originalUrl);

    req.flash("error","you must login ");
    return res.redirect("/login");
 }
 next();
};

module.exports.saveRedirectUrl=(req,res,next)=>
{
if(req.session.redirectUrl){
   res.locals.redirectUrl=req.session.redirectUrl;
   // console.log(res.locals.redirectUrl);
}
next();
}