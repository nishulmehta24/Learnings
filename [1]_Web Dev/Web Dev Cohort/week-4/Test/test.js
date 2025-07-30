const express = require("express");
// == #include<iostream>

const app = express();
// creating app instance web app 

app.get("/" ,(req , res)=>{
    res.send("hello World")
})
// configure how server will behave

app.listen(3000);
// create and run http server 