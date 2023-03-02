const fs = require('fs');
const http = require('http');
const url = require('url');

//synchronusly way
// const textIn = fs.readFileSync('./txt/start.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about avocado: ${textIn}.\n Created on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log("file written!")

// // Callback Hell
// fs.readFile('./txt/start.txt', 'utf-8',(err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt','utf-8',(err,data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt', `${data2}${data3}`, 'utf-8', err => {
//                 console.log('File written!');
//             })
//         })
//     })
// })


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html'
    })
    res.end('<h1>Hello from the server!</h1>');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
