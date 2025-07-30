const express = require("express");
const app = express();
const Port = 3000;

function middleWare(req , res , next){
    if(req.query.n >= 18 ) next();
    else {
        res.send({
            msg : "error "
        })
    }
}


app.get("/" , middleWare , (req , res)=>{
    res.send("Hello World");
})

app.post("/" , (req , res )=>{
    
})
app.use(middleWare);

app.delete("/" , (req , res )=>{
    
})

app.put("/" , (req , res )=>{
    
})

app.listen(Port);

