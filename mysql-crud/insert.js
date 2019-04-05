var mysqlserver = require('mysql')

var connection = mysqlserver.createConnection({

host:'localhost',
user:'root',
//password:''
database:'friendatabase'


})

connection.connect(function(error){

    if(error){

        throw error
    }else{

        console.log("connected to my sql server")
    }
    var sql= "insert into personaldata (name, location) values ('Nagendra','Hyderabad')"
    connection.query(sql,function(error,success){

        if(error){

            throw error
        }else{
            console.log("1 row inserted")
        }
    })
})