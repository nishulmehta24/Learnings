const { rejects } = require("assert");
const fs  = require ("fs");

function ReadfileAsync(FileName){
    return new Promise((resolve , reject) =>{
        fs.readFile(FileName , 'utf-8' ,(err , data )=>{
            if(err) {
                reject(FileName + " File Not Found !!!");
            }
            else resolve(data);
            
        })
    });
}

async function solve() {
    try{
        let data = await ReadfileAsync("a.txt");
        console.log(data);
        data = await ReadfileAsync("b.txt");
        console.log(data);
        data = await ReadfileAsync("c.txt");
        console.log(data);
    }
    catch(err){
        console.error(err)
    }
}

solve();