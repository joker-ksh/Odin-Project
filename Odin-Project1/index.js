const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
  const url = req.url;
  let filepath = '';
  switch(url){
    case '/':
       filepath = path.join(__dirname,'index.html');
      break;
    case '/about':  
       filepath = path.join(__dirname,'about.html');
      break;
    case '/contact-me':
       filepath = path.join(__dirname,'contact-me.html');
      break;
    default:
       filepath = path.join(__dirname,'404.html');
  }

  fs.readFile(filepath,(err,data)=>{
    if(!err){
      res.end(data);
    }else{
      res.end('404 Not Found');
    }
  });
});

server.listen(3000);