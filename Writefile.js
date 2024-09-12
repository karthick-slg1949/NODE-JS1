import fs from 'fs'

let newdata=fs.readFile('example.txt','utf-8',(err,data)=>{
    fs.writeFile('ex.txt',data,(err)=>{
        if (err)throw err
        console.log('writted successfully');
    })
})