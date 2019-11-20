const http = require('http');

const data = {
    name: 'tony',
    age: 32
}

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('happy hacking');
        res.end();
    }
    if (req.url === '/api'){
        res.write(JSON.stringify(data));
        res.end();
    }
});

server.listen(3000);
console.log("server is starting ..")