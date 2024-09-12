import fs from 'fs'

let newdata=fs.readFile('example.txt','utf-8',(err,newdata)=>{
    console.log(newdata);
    
})