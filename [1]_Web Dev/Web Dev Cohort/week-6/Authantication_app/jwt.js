const express = require("express");
const app = express();
const Port = 3000 ;

const users =[];

function auth(req , res , next){
    const token = req.headers.token;
    if(token){
        jwt.verify(token, jwt_secret , (err , decoded )=>{
            if(err){
                res.status(400).send({
                    message : "UnAutherised"
                })
            }
            else{
                req.user = decoded // object which is decode from token
                next();
            }
        })
    }
    else{
        res.status(400).send({
            message : "Invalid Token",
        })
    }
}

const jwt = require("jsonwebtoken");
const jwt_secret = "nishul";
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
app.use(auth);
app.get("/me" , auth ,function (req ,res ){
    res.send(req.user.username);
    console.log(users);
    return 

});

app.listen(Port);