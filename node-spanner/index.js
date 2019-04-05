// import google cloud spanner client libary

var{Spanner} = require('@google-cloud/spanner')
var express = require('express')
var bp = require('body-parser')

const myProjectId = 'nodespanner-236509'
const myInstanceId= 'nodespannerinstance'
const myDatabaseId = 'databasefriends'

const spanner = new spanner(projectId.myProjectId)
const instance = spanner.instance(myInstanceId)
const database = instance.database(myDatabaseId)

const myquery = {

    sql:'select * from personaldetails'
}
var app = express()
app.use(bp.json())

        app.get("/spanner/all",(req,res)=>{
        database.run(sql).then(results) => {
        console.log("result object")
        console.log(results[0])

        const rows = results[0]
        console.log(row)
        res.send(rows)
        res.end(row)

    })

 })
        app.listen(1111)