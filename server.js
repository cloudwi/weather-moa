const express = require('express')
const app = express()
const weatherData = require('./utils/weatherData')
const axios = require('axios')
const moment = require('moment')
const apiKeyData = require('./keys/apiKeyData')
const e = require('express')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

let koArr
let usArr

app.set('view enfine', 'ejs')

// const MongoClient = require('mongodb').MongoClient
//
// //데이터 베이스 정의
// var db
//
// MongoClient.connect(
//   'mongodb+srv://cloudwi:MN77868!!!@cluster0.gc6u716.mongodb.net/?retryWrites=true&w=majority',
//   (error, client) => {
//     if (error) {
//       return console.log('오류발생')
//     }
//
//     db = client.db('weather')
//
//     app.listen(8080, () => {
//       console.log('Server Start')
//     })
//   }
// )

// weatherData(app, 'Seoul')

// MongoClient.connect(
//   'mongodb+srv://cloudwi:MN77868!!!@cluster0.gc6u716.mongodb.net/?retryWrites=true&w=majority',
//   (error, client) => {
//     if (error) {
//       return console.log('오류발생')
//     }
//
//     db = client.db('weather')
//
//     app.listen(8080, () => {
//       console.log('Server Start')
//     })
//   }
// )

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/page/index.html')
})

app.get('/Busan', async (req, res) => {
  await axios(
    'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?' +
      'serviceKey=' +
      apiKeyData.krServiceKey +
      '&pageNo=1&numOfRows=60&dataType=JSON&base_date=' +
      moment().subtract(1, 'hour').format('YYYYMMDD') +
      '&base_time=' +
      moment().subtract(1, 'hour').format('HH00') +
      '&nx=' +
      apiKeyData.Busan.nx +
      '&ny=' +
      apiKeyData.Busan.ny
  )
    .then((response) => {
      koArr = response.data.response.body.items.item.filter(
        (element) =>
          element.category === 'SKY' ||
          element.category === 'T1H' ||
          element.category === 'RN1'
      )

      koArr.forEach((element) => {
        element.fcstTime = [
          element.fcstTime.slice(0, 2),
          ':',
          element.fcstTime.slice(2),
        ].join('')
      })
    })
    .catch((error) => {
      console.log(error)
    })

  await axios(
    'https://api.openweathermap.org/data/2.5/forecast?lat=' +
      apiKeyData.Busan.lat +
      '&lon=' +
      apiKeyData.Busan.lon +
      '&appid=' +
      apiKeyData.usServiceKey +
      '&units=metric&cnt=6'
  )
    .then((response) => {
      usArr = response.data.list
      usArr.forEach((element) => {
        element.dt_txt = element.dt_txt.slice(11, 16)
        element.main.temp = Math.floor(element.main.temp)
      })
    })
    .catch((error) => {
      console.log(error)
    })

  res.render('test.ejs', { koArr: koArr, usArr: usArr })
})

app.listen(process.env.PORT || 3000, () => {
      console.log('Server Start')
    })
