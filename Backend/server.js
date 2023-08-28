const app = require("./app");



// ERROR HANDLING

process.on("uncaughtException",(err)=>{
    console.log('Error: ${err.message}');
    console.log("shutting down the server for handling uncaught errors");
})

//config

if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dot.env").config({
        path:"Backend/config/.env"
    })
}

//server

const server = app.listen(process.env.PORT,()=>{
    console.log('Server is running on http://localhost:${process.eventNames.port}')
})

//unhandled promise rejection

process.on("unhandledRejection", (err)=>{
    console.log("shutting down the server for ${err.message}");
    console.log("shutting down the server for handling uncaught errors");

    server.close(() => {
        process.exit(1);
    })
})

