const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const axios = require('axios')
const moment = require('moment')
const apiKeyData = require('./key/apiKeyData')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

let koArr
let usArr

app.set('view enfine', 'ejs')

app.use(express.static('views'))
app.use(express.static('page'))
app.get('/', (req, res) => {
  res.sendFile('./page/index.html')
})

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/page/main.html')
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

  res.render('mainpc.ejs', { koArr: koArr, usArr: usArr })
})

app.get('/Seoul', async (req, res) => {
  await axios(
    'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?' +
      'serviceKey=' +
      apiKeyData.krServiceKey +
      '&pageNo=1&numOfRows=60&dataType=JSON&base_date=' +
      moment().subtract(1, 'hour').format('YYYYMMDD') +
      '&base_time=' +
      moment().subtract(1, 'hour').format('HH00') +
      '&nx=' +
      apiKeyData.Seoul.nx +
      '&ny=' +
      apiKeyData.Seoul.ny
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
      apiKeyData.Seoul.lat +
      '&lon=' +
      apiKeyData.Seoul.lon +
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

  res.render('mainpc.ejs', { koArr: koArr, usArr: usArr })
})

app.listen(port, () => {
  console.log('listening on 8080')
})
