//To run use $ node server.js
// sudo firebase serve

const express = require('express');
const app = express();
const port = 3008;

app.use(express.static(__dirname + '/src'));

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html');
});

app.listen(port, ()=>{
    console.log("Server express ready");
});