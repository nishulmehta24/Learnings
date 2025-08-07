const express = require('express');
const jwt = require("jsonwebtoken");
const app = express();
const Port = 3000;

const jwt_secret = "NishulIsHero";
app.use(express.json());

const users = []

app.get("/" , (req , res )=>{
    res.sendFile("/Users/nishulmehta/Learning_Stuff/[1]_Web Dev/Web Dev Cohort/week-6/6.2/cource_app/pubic/index.html")
})

app.post("/signup" , (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let user = users.find(u => u.username === username);
    if(!user){
        user = {
            username : username,
            password : password,
        }    
        users.push(user);
        res.status(200).send("New Account Created ");
        console.log(users);
    }
    else{
        res.send("user All Ready Exist");
    }
})

app.post("/login" , (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let user = users.find(u => u.username === username && u.password === password);
    if(user){
        const token = jwt.sign({
            username : username,
        } , jwt_secret);
        res.send({
            token : token,
        });
    }
    else{
        res.send.toString("Invalid Credentials ");
    }
})

app.listen(Port);