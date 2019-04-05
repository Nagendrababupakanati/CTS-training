var express = require('express')

var ejs = require('ejs')

var bp = require('body-parser')

var mysql = require('mysql')


var connection = mysql.createConnection({

host:'localhost',

user:'root',

password:'',

database:'todolist'

})

var app = express()

app.use(bp.json())
    
app.post("/add",function(req,res){

    console.log("Received JSON Object:" +JSON.stringify(req.body))
    
    var sql = "insert into todolist (taskname) values ('"
    
                +req.body.taskname+"')"
    
    connection.query(sql,function(err,success){
    
                if(err){
    
                        throw err
    
                        }else{
    
                console.log("Database insert successfull!!!!")
    
    }
    
    })
    
    })
     app.listen(4444)​
