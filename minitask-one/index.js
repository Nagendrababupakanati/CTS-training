//all imports

var express = require('express')

var ejs = require('ejs')

var bp = require('body-parser')

var mysql = require('mysql')



var connection = mysql.createConnection({

host:'localhost',

user:'root',

password:'',

database:"friendmysqldb"

})





//intializing an express app

var app =
express()



//set the view engine for express app

app.set('view engine','ejs')



//set the folder where all views are present

app.set('views',__dirname+'/templates')



//set app to use body-parser to parser to json object comming via POST



app.use(bp.json())





app.post("/add",function(req,res){

console.log("Received JSON Object:" +JSON.stringify(req.body))

var keyword = req.body.keyword

var status = req.body.status

var sql = "insert into testschmea (keyword,status) values ('"            
            +keyword
            +"','"+status+"')"
connection.query(sql,function(err,success){
            if(err){

                    throw err

                    }else{

            console.log("Database insert successfull!!!!")

}

})

})





app.get("/getcontact/all",function(req,res){

var sqlone = "select * from personal"

connection.query(sqlone,function(err,success){

if(err){

throw err

}else{

var result = JSON.parse(JSON.stringify(success))

res.send(result)

console.log("Data retrived successfull for get all!!!!" +result)

res.end()

}

})

})



app.put("/update/:myid",function(req,res){

var id = req.param.myid

var newObject = req.body

var sqlQuery = "update personal set name ='"+newObject.name+"' where id="+id

connection.query(sqlQuery,function(err,success){

if(err){

throw err

}else{

var result = JSON.parse(JSON.stringify(success))

res.send(result)

console.log("Data updated!!!!" +result)

res.end()

}

})

})

var formidable = require('formidable');





app.listen(2211)​