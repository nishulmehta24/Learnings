const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const Port = 3000;

const users = [];
const jwt_secret = "Nishul";

app.use(express.json());

function auth(req , res , next){
    const token = req.headers.token;
    const UserDetail = jwt.verify(token , jwt_secret);
    if(UserDetail){
        req.UserDetail = UserDetail;
        next();
    }else{
        res.status(400).send({
            mssg : "not Valid ",
        })
        return;
    }
}

app.post("/signup" , (req , res ) =>{
    const username = req.body.username;
    const password = req.body.password;
    
    let user = users.find(u=> u.username === username && u.password === password);
    if(user){
        res.status(400).send("user All Readly Exist");
        return ;
    }
    else{
        user = {
            username : username,
            password : password,
        }
        users.push(user);
        res.send(user);
        return ;
    }
    
})

app.post("/login" , (req , res)=>{
    // creating token
    const username = req.body.username;
    const password = req.body.password;
    const user = users.find(u => u.username === username && u.password === password);
    if(user){
        const token = jwt.sign({
            username :username,
        }, jwt_secret);
        res.send({
            token : token,
        })
    }
    else{
        res.send({
            message: "User Not Found ",
        })
        return ;
    }
    return ;
})
app.use(auth);

app.get("/me" , (req , res )=>{
    const UserDetail = req.UserDetail;
    const user = users.find(u => u.username === UserDetail.username );
    if(user){
        res.send(user);
    }
    else{
        res.send("INVALID TOKEN ");
    }
})

app.listen(Port);