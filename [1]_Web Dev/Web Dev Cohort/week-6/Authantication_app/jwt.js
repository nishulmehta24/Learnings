const express = require("express");
const app = express();
const Port = 3000 ;

const users =[];

const jwt = require("jsonwebtoken");
const jwt_secret = "Nishul";
app.use(express.json());

// creating new account 
app.post("/signup" , function (req , res ){
    const username = req.body.username;
    const password = req.body.password;
    const exist = users.find(u => u.username === username && u.password === password);
    if(exist){
        res.status(400).json({
            err : "User Already Exist ",
        });
        return ;
    }
    let newUser = {
        username : username,
        password : password,
    };
    users.push(newUser);
    res.send({
        username : newUser.username,
        password : newUser.password,
    })
    console.log(users);
    return ;
});
// log-in into account 
app.post("/login" , function (req , res ){
    const username = req.body.username;
    const password = req.body.password;
    const exist = users.find(u => u.username === username && u.password === password);
    if(exist){
        const token = jwt.sign({
            username : username,
        },jwt_secret);

        res.send({
            token : token,
        });
        console.log(users);
        return ;
    }
    res.status(400).json({
        err : "user Not Found ",
    })

});

app.get("/me" , function (req ,res ){
    const token = req.headers.token;
    const userDetail = jwt.verify(token,jwt_secret);
    const username = userDetail.username;

    const user = users.find(u => u.username === username);
    if(user){
        res.send(user);
        return ;
    }

    res.send("unotherized");
    return 

});

app.listen(Port);