const fs = require("fs");


const http = require("http");
const { rawListeners } = require("process");

fs.writeFile("index2.html",`<h1>Hello World</h1>,<p>This is Raju</p>`,(err,data)=> {
    if(err) console.log(err);
    console.log(data.toString())
    rl.close()
})


fs.readFile("index2.html",(err,data)=> {
if(err) console.log(err)
console.log(data)
})

const server=http.createServer((req,res)=> {
if(req.url=="/"){
    res.writeHead(200,{
        "Content-type" : "index2.html",
    })
}
res.end("Hello world" )
})

fs.readFile('./index2.html', function (err, html) {
    if (err) {
        throw err; 
    }       
  http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(4000);
});

server.listen(6000,()=> {console.log("Server is up at 6000" )})

