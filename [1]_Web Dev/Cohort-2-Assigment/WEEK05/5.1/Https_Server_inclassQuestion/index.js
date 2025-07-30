const express = require("express");
const app = express();
const port = 3000;

app.get("/" , (req , res)=>{
    const paths = {
        "multiply" : true,
        "add" : true,
        "divide" : true,
        "substract" : true,
    }
    res.json(paths);
})

app.get("/multiply" , function(req, res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const ans = a*b;
    const Sending = `${a}*${b} == ${ans}`;
    res.send(Sending);
})

app.get("/add" , function(req, res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const ans = a+b;
    const Sending = `${a}+${b} == ${ans}`;
    res.send(Sending);
})

app.get("/divide" , function(req, res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const ans = a/b;
    const Sending = `${a}/${b} == ${ans}`;
    res.send(Sending);
})

app.get("/subtract" , function(req, res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const ans = a-b;
    const Sending = `${a}-${b} == ${ans}`;
    res.send(Sending);
})

app.listen(3000);