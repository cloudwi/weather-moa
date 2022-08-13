const express = require('express')
const { Db } = require('mongodb')
const app = express()
app.set('view enfine', 'ejs')

const MongoClient = require('mongodb').MongoClient

//데이터 베이스 정의
var db

MongoClient.connect(
  'mongodb+srv://cloudwi:MN77868!!!@cluster0.gc6u716.mongodb.net/?retryWrites=true&w=majority',
  (error, client) => {
    if (error) {
      return console.log('오류발생')
    }

    db = client.db('weather')
    // db.collection('data').insertOne({ test: 'test' })

    app.listen(8080, () => {
      console.log('Server Start')
    })
  }
)

app.get('/pet', (req, res) => {
  res.send('안녕하세요')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/weather', (req, res) => {
  db.collection('data')
    .find()
    .toArray((error, result) => {
      console.log(result)
      res.render('test.ejs', { datas: result })
    })
})
