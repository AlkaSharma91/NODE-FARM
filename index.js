const fs=require('fs')
fs.readFile('./txt/start.txt','utf8',(err,data)=>{

  fs.readFile(`./txt/${data}.txt`,'utf-8',(err,data1)=>{
    fs.writeFile('./txt/output.txt',`${data}\n ${data1}`,(err)=>{
      console.log('file written successfully')
    })
  })

}
 

)

console.log('readinggg')
