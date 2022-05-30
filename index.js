const fs=require('fs')
const http=require('http');
const url=require('url');

const server=http.createServer((req,res)=>{
  console.log(req.url);
  const pathName=req.url;
  if(pathName==='/'|| pathName==='/overview'){
    res.end("im overview")
  }else if(pathName==='/products'){
    res.end("im products")
  }else{
    res.writeHead(404,{
      'Content-type':'text/html'
    })
    res.end("<h1>im not found</h1>")

  }
 
})
server.listen(8000,'127.0.0.1',()=>{
  console.log('listening on port 8000')
})
