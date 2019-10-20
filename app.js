// const http = require('http')
// // const time = require('./time')
// const url = require('url')
// const fs = require('fs')

// // http.createServer(function (req, res) {
// //     res.writeHead(200, { 'Content-type': 'text/html'})
// //     res.write("hello world\n")
// //     //res.write("The date is:" + time.myDateTIme())
// //     //var q = url.parse(req.url, true) .query
// //     //var txt = q.year + " " + q.month;

// //     res.end()
// // }).listen(8000)



// http.createServer(function (req, res) {
    
// })

const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => res.send("Hello World"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))