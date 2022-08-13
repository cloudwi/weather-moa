const apiKeyData = require('../key/apiKeyData')

module.exports = weatherData = (app, data) => {
  
  app.get('weather', (req, res) => {
    res.render('test.ejs', { koArr: koArr, usArr: usArr })
  })

  
}

//https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=5R9T1SG8PJ%2Bx2S1BbYxXnVQGHUOnIj4ij6DhEEU8LdEIjlN9XZKG7239DKE%2FyJgzfl5f%2B6a72txWs98IaJhOiA%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20220813&base_time=2100&nx=55&ny=127
