const fs = require("fs");
const express = require("express");
const path = require("path");

const FolderPath = path.join(__dirname , "Files");

const port = 3000;
const app = express();
app.get("/files" , function (req , res ){
    fs.readdir(FolderPath , (err , files) =>{
        if(err ){
            res.send(err);
        }
        res.status(200).json({
            "files" : files,
        });
    });
});

app.get("/files/:FileName", function (req , res) {
    const FileName = req.params.FileName;
    const FileAddress = path.join(FolderPath , FileName) ;
    fs.readFile(FileAddress , "utf-8" , (err , data )=>{
    
        res.status(200).json({
            data : data,
        })
        
    });

});

app.listen(port);
