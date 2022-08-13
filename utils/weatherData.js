const apiKeyData = require('../keys/apiKeyData')
module.exports = weatherData = async (data) => {
  const axios = require('axios')

  const response = await axios
    .get(
      'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=5R9T1SG8PJ%2Bx2S1BbYxXnVQGHUOnIj4ij6DhEEU8LdEIjlN9XZKG7239DKE%2FyJgzfl5f%2B6a72txWs98IaJhOiA%3D%3D&pageNo=1&numOfRows=60&dataType=JSON&base_date=20220813&base_time=2000&nx=55&ny=127'
    )
    .then((res) => {
      console.log(res.data.response.body.items.item[0])
    })
    .catch((e) => {
      console.log('e : ' + e)
    })
}

// https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=5R9T1SG8PJ%2Bx2S1BbYxXnVQGHUOnIj4ij6DhEEU8LdEIjlN9XZKG7239DKE%2FyJgzfl5f%2B6a72txWs98IaJhOiA%3D%3D&pageNo=1&numOfRows=60&dataType=JSON&base_date=20220813&base_time=2000&nx=55&ny=127}
