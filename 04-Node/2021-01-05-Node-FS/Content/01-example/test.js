const fs = require('fs'); //syntax for requiring and using the FS module
//import fs from ('fs');

//To write to a file
const content = 'Today is a very cold day.';
    
/* //replaces old content
    fs.writeFile('./test.txt', content, (err) => {
       if (err) {
           console.log(err)
           return
       } 
    }) */

     //appends to old content
    fs.writeFile('./test.txt', content, {flag: 'a+'}, (err) => {
        if (err) {
            console.log(err)
            return
        } 
     })


//To Read a file
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err){
        console.log(err)
        return
    }
    console.log(data)
})

// To see File stats

fs.stat('./test.txt', (err, stats)=>{
    if (err) {
        console.log(err)
        return
    } 
    console.log(stats)
})

// To Delete a File
fs.rm('./test2.txt', (err)=>{
    if (err) {
        console.log(err)
        return
    }
})