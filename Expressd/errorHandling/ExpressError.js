class ExpressError extends Error{
    constructor(status,message){
        super();
        this.status=status;
        this.message=message;
    }
}
module.exports=ExpressError;


////on server console

// Error: ACESS DENIDE
//     at authtoken (/home/skt/Documents/Fullstack/Expressd/errorHandling/index.js:25:7)
//     at Layer.handle [as handle_request] (/home/skt/Documents/Fullstack/Expressd/node_modules/express/lib/router/layer.js:95:5)
//     at next (/home/skt/Documents/Fullstack/Expressd/node_modules/express/lib/router/route.js:144:13)
//     at Route.dispatch (/home/skt/Documents/Fullstack/Expressd/node_modules/express/lib/router/route.js:114:3)
//     at Layer.handle [as handle_request] (/home/skt/Documents/Fullstack/Expressd/node_modules/express/lib/router/layer.js:95:5)
//     at /home/skt/Documents/Fullstack/Expressd/node_modules/express/lib/router/index.js:284:15
//     at Function.process_params (/home/skt/Documents/Fullstack/Expressd/node_modules/express/lib/router/index.js:346:12)
//     at next (/home/skt/Documents/Fullstack/Expressd/node_modules/express/lib/router/index.js:280:10)
//     at expressInit (/home/skt/Documents/Fullstack/Expressd/node_modules/express/lib/middleware/init.js:40:5)
//     at Layer.handle [as handle_request] (/home/skt/Documents/Fullstack/Expressd/node_modules/express/lib/router/layer.js:95:5)


// browser console
        
        
    //    GET http://localhost:8080/root 401 (Unauthorized)