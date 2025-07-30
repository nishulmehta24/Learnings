const fs = require('fs');

function readFilefn(files){
    fs.readFile(files , 'utf-8' , (err , data)=>{
        console.log(data);
    })
}
path
console.log(process.argv);