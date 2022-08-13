const apiKeyData = require('../keys/apiKeyData')
const moment = require('moment')
const axios = require('axios')
const e = require('express')

module.exports = weatherData = (app, data) => {
  axios(
    'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?' +
      'serviceKey=' +
      apiKeyData.ServiceKey +
      '&pageNo=1&numOfRows=60&dataType=JSON&base_date=' +
      moment().format('YYYYMMDD') +
      '&base_time=' +
      moment().subtract(1, 'hour').format('HH00') +
      '&nx=' +
      apiKeyData[data].nx +
      '&ny=' +
      apiKeyData[data].ny
  )
    .then((res) => {
      const arr = res.data.response.body.items.item.filter(
        (element) =>
          element.category === 'SKY' ||
          element.category === 'T1H' ||
          element.category === 'PTY'
      )
      app.get('/weather', (req, res) => {
        res.render('test.ejs', { arr: arr })
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

//https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=5R9T1SG8PJ%2Bx2S1BbYxXnVQGHUOnIj4ij6DhEEU8LdEIjlN9XZKG7239DKE%2FyJgzfl5f%2B6a72txWs98IaJhOiA%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20220813&base_time=2100&nx=55&ny=127
