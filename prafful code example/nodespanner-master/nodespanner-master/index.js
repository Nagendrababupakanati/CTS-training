//import google cloud spanner client library
var {Spanner} = require('@google-cloud/spanner')
var express = require('express')
var bp = require('body-parser')


const myProjectId = 'nodespanner-236509'
const myInstanceId = 'nodespannerinstance'
const myDatabaseId = 'databasefriends'

const spanner = new Spanner({projectId:myProjectId})
const instance = spanner.instance(myInstanceId)
const database = instance.database(myDatabaseId)
const personaldetailTable = database.table('reviews')

const myquery = {
    sql:'select * from reviews'
}

const myqueryinsert = {
    sql:"insert reviews (name, location, id) values ('Adi', 'Chennai', 3)"
}

const myquerydelete = {

    sql:'delete from reviews where id = 777'
}

var app = express()
app.use(bp.json())



app.get("/spanner/all", async function(req, res){
    try {
            await database.run(myquery).then((results)=>{
                  console.log("Results Object:")
                  console.log(results[0])
                  const rows = results[0]
                  res.send(rows)
                  res.end()
                }).catch(error =>{
                    console.error("Error Then: ", error)
                })
    } catch (error) {
        console.error("Error Try/Catch:", error)
    }

})


app.post("/spanner/add", async (req, res)=>{
    try {
        await personaldetailTable.insert([
            {id:'777', reviewTitle:'Good', reviewDescription:'Good condition working fine',  username:'chennai', likes:'10'}
        ])
        res.send("insert success")
        console.log("insert success")

    } catch (error) {
        console.error("Error try/catch: ", error)
    }
    res.end()
   
})

app.post("/spanner/update", async (req, res)=>{
    try {
        await personaldetailTable.update([
            {id:'777', reviewTitle:'Very Good', reviewDescription:'Excellent Good condition working fine',  username:'Rajani', likes:'100'}
        ])
        res.send("update success")
        console.log("update success")

    } catch (error) {
        console.error("Error try/catch: ", error)
    }
    res.end()
   
})



app.get("/spanner/update:id",function(req,res){

    console.log("Received JSON Object:" +JSON.stringify(req.body))
    
    var myId = req.body.id;
    
    var sql = "select * from reviews where id = 2"
    
    connection.query(sql,function(err,success){
    
    if(err){
    
    throw err
    
    }else{
    
    var result = JSON.parse(JSON.stringify(success))
    
    res.send(result)
    
    console.log("Data retrived successfull!!!!" +result)
    
    res.end()
    
    }
    
    })
    
    })
    

    

app.delete("/spanner/delete", async function(req, res){
    try {
            await database.run(myquerydelete).then((results)=>{
                  console.log("Results Object:")
                  console.log(results[0])
                  const rows = results[0]
                  res.send(rows)
                  res.end()
                }).catch(error =>{
                    console.error("Error Then: ", error)
                })
    } catch (error) {
        console.error("Error Try/Catch:", error)
    }

})

app.listen(1111)