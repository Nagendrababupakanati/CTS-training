var date = require('./datelibrary')

var http = require('http')

var server = http.createServer(function(req,res){


    res.writeHead(200,{'Content-Type':'text/html'})

    res.write("<h1>Present date and time</h1>")

    res.write("<br>")

    var currentdate = 
})