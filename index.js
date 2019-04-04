const http = require('http');
const url = require('url');
const hostname="127.0.0.1";
const port =8080;
const express=require('express');
const server=http.createServer(function(req,res){
    var q=url.parse(req.url,true).query;
    console.log("DATA",q);
    res.writeHead(200,{"Content-Type":"text/html"});
    if(q['username']!=''){
        console.log("enter IF");
        res.write("<html>");
        res.write("<!DOCTYPE html>");
        res.write("<head>");
        res.write("<title>");res.write("</title>");
        res.write("</head>");
        res.write("<body onload='myFunction()'>");
        res.write("<script>")
        res.write("function myFunction() {");
        res.write("alert('"+q['username']+"');}");
        res.write("</script>");

        res.write("</body>");
        res.write("</html>");
    }
    else{
        console.log("enter else");
        res.write("<!DOCTYPE html>");
        res.write("<head>");
        res.write("<title>");res.write("</title>");
        res.write("</head>");
        res.write("<body onload='myFunction()'>");
        res.write("<script>")
        res.write("function myFunction() {");
        res.write("alert('Please Provide Valid Username');}");
        res.write("</script>");
        res.write("</body>");
        res.write("</html>");
    }
    
    res.end();
});
server.listen(port,hostname,function(){
    console.log("server started on "+hostname+":"+port);
});
