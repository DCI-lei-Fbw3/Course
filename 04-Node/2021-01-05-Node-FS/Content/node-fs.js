//Welcome FbW3
//Title: Node JS File System Module
//Reading: https://www.sohamkamani.com/blog/nodejs-file-system-guide/
//Reference: https://flaviocopes.com/node-module-fs/

// File System Module 
//Docs: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
    
    /* 
    - Every computing machine running an Operating System (linux, windows, macs, or whatever 
    else) has a File System.
    - Like with any FS, the Node FS module gives us certain tools to create, manipulate, and
    delete files on your OS.
    - You can also get File Stats, which is metadata for individual files. 
    - I have shown (very briefly) an example with the Path module, which is kind of
    important to the FS module.
    - You can set permision for files/folders in with the FS module to allow others
    working your program certain levels of access.
    */

//Reading Files

const fs = require('fs'); //syntax for requiring and using the FS module

fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err){
        console.log(err)
        return
    }
    console.log(data)
})

    // Encoded data

    /* 
    - The Node FS will always encode data from files before reading it. 
    - You will have to decode (parse) data inorder to get it back in the shape
    you want it to be. 
    - Three main types of encodings:
        - UTF8/16/32,
        - Blobs,
        - Base64
    */

// Writing Files

    /*
    - The easiest way to wrtie files in Node is to use fs.writeFile() 
    - You can either Append a file or you can write it.
    - Whenever you write to a file, the new content will replace the previous content by default.
    */

    const content = 'This is new content from Taimur';
    
    fs.writeFile('./test.txt', content, {flag: 'a+'}, (err) => {
       if (err) {
           console.log(err)
           return
       } 
    })


// File Stats

/* 
- Each file has certain basic metadata that is available to us in Node FS module
- Your stats will be relevant to your OS 
*/

fs.stat('./test.txt', (err, stats)=>{
    if (err) {
        console.log(err)
        return
    } 
    console.log(stats)
})

// Delete a file

fs.rm('./test.txt', (err)=>{
    if (err) {
        console.log(err)
        return
    }
})



    