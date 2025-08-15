const jwt = require('jsonwebtoken');
const {UserModel , TodoModel } = require('./db');
const express = require('express');
const mongoose = require("mongoose");

await mongoose.connect("mongodb+srv://admin:6lYEthZg71CdboGT@cluster0.qwnupbb.mongodb.net/todo-app-database");

const app = express();
const port = 3000 ;
const jwt_secret = "asfwer23";
app.use(express.json());


app.post("/signup" , async function (req , res ) {
    const email = req.body.email;
    const name  = req.body.name;
    const password = req.body.password;

    await UserModel.create({
        email : email,
        password : password,
        name : name,
    });
    res.send({
        message : "you are Signed up",
    })
});

app.post("/login" , async function (req , res ){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email : email,
        password : password,
    });
    // response is the origanal object with those two credentials and some other data and important data like Object id
    if(response){
        // creating a Token 
        const Token = jwt.sign({
            id : response._id.toString(),
        }, jwt_secret);
        res.json({
            token : Token,
        });
    }
    // user not exist 
    else{
        res.status(403).json({
            message : "Incorrect Credentials",
        });
    }
});

function auth (req , res , next){
    const token = req.headers.token;
    const response = jwt.verify(token , jwt_secret);

    if(response){
        req.body.id;
        next();
    }else{
        res.status(403).json({
            message : "Incorrect Creadentials",
        })
    }
}

// authanticaled routs
app.post("/todo" ,auth  ,function (req ,res) {

});

app.get("/todos" ,auth ,function (req ,res) {

});
module.exports = {
    auth,
    jwt_secret,
}

app.listen(port);
