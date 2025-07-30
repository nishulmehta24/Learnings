const express = require("express"); 

const app = express();
const port = 3000;

app.use(express.json());

var users = [{
    "name" : "John",
    Kidney : [{
        Health : true,
    }]

},]


function Healty_Kidney(arr){
    let cnt = 0;
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i].Health === true) cnt++;
    }
    return cnt ;
}

app.get("/" , function (req , res ){
    
    const usr = users[0];
    const hk = Healty_Kidney(usr.Kidney);
    const uhk = usr.Kidney.length - hk;

    res.send({
        "name" : users[0].name,
        "Kidney" : users[0].Kidney.length,
        "Healty_Kidney" : hk ,
        "UnHealty_Kidney" : uhk,
    });

});

app.put("/" , function (req , res ){
    
})

app.post("/" , function (req , res ){
    const Health = req.body; // what is this ??
    if(Health === undefined) return;

    console.log(req.body);
    users[0].Kidney.push(Health);
    res.send({
        "msg" : "Done!!",
    })

})
// Delete UnHealtyKidney
app.delete("/" , function (req , res ){
    const NewHealtyKidney = [];
    for(let i = 0; i< users[0].Kidney.length ; i++ ){
        if(users[0].Kidney[i].Health === true ) NewHealtyKidney.push(users[0].Kidney[i]);
    }
    users[0].Kidney = NewHealtyKidney;
    res.send({});
})
app.listen(port)