// log Method , timestamp , url using Middleware

const express = require("express");
const app = express();

function Middleware(req , res , next){
    console.log("Method is " + req.method);
    console.log("Timestamp = " + (new Date()));
    console.log('Full URL:', req.protocol + '://' + req.get('host') + req.originalUrl);
    next();
};
app.use(Middleware);
app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);