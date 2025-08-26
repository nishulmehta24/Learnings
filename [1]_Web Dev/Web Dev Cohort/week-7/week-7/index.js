const express = require('express');
const {UserModel , TodoModel } = require('./db');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

async function mongooseConnect(){
    await mongoose.connect("mongodb+srv://admin:6lYEthZg71CdboGT@cluster0.qwnupbb.mongodb.net/todo-app-practise");
    console.log("connected to Database");
}
mongooseConnect();

const app = express();

const jwt_secret = "asg4nasf";
const port = 3000;

app.use(express.json());

app.post('/signup' , async function(req , res ) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // we have to awati this take time 
    await UserModel.create({
        name : name,
        email :email,
        password: password,
    });
    // a user account is created on database
    res.status(200).json({
        message : "you are Signed in ",
    });

});

app.post('/login' , async function(req , res ) {
    //
    const email = req.body.email;
    const password =  req.body.password;
    // do this user exist on database
    const response = await UserModel.findOne({
        email : email,
        password : password,
    });

    if(response){
        // we have to create a token 
        const token = jwt.sign({
            id : response._id.toString(),
        }, jwt_secret);
        res.json({
            token : token,
        });
    }else{
        res.status(403).send({
            message : "user Credentials are Wrong",
        });
    }

});

function auth(req ,res , next){
    const token = req.headers.token;

    const response = jwt.verify(token , jwt_secret);

    if(response){
        req.UserId = response.id;
        next();
    }else{
        res.send({
            err : "Incorrect Creds",
        })
    }
}

module.exports = {
    auth,
    jwt_secret,
}

// authanticated
app.post('/todo' ,auth ,  function(req , res ) {

});

app.get('/todos' , auth , function(req , res ) {

});


app.listen(port);