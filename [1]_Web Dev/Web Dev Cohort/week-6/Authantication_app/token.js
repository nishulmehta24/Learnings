const express = require("express");
const app = express();
const Port = 3000;

const users = [];
function GenerateToken(length = 32) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}



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
        const token = GenerateToken();
        exist.token = token;
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
    const user = users.find(u => u.token === token);
    if(user){
        res.send(user);
        return ;
    }

    res.send("unotherized");
    return 

});

app.listen(Port);