// Promsified Version of ReadFileAsync

const fs = require("fs");

function ReadFileAsync(FileName) {
    return new Promise((resolve)=>{
        fs.readFile(FileName , 'utf-8' , (err,data) =>{
            if(err){
                resolve(err);
                return;
            }
            else{
                resolve(data);
            }
        } )
    });
}

let p = ReadFileAsync('b.txt');

function HaveRead(content){
    console.log(content);
}
p.then(HaveRead);

// now i have to revise the promise and callback as well
// setTimeout or fs.readFilsSync and fs.readFile (callback)
// then Promisfes all the callback versions 