const express = require("express");
const app = express();

//config

if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dot.env").config({
        path:"Backend/config/.env"
    })
}

module.exports = app;
