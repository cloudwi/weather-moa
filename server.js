const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

let key = "%2BTr3T2Oz8rE41Pb37Hj%2BdJIBtR7WSkr73xNNd%2FS9YCyBagavmwIlWFjV0ZgBWwTpHL0mp01fgJiHAn7PzbTU0Q%3D%3D";
// #define VARID = "c7c793d38c781c47682fd00e09f1a7da";
// let lat = 35.1028;
// let lon = 129.0403;
// let apiKey = "c7c793d38c781c47682fd00e09f1a7da";
// let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
// let url = "https://api.openweathermap.org/data/2.5/weather?lat=35.1333&lon=129.05&appid=c7c793d38c781c47682fd00e09f1a7da&units=metric";
let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey="+key+"&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20220813&base_time=2000&nx=35&ny=129"
// let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=%2BTr3T2Oz8rE41Pb37Hj%2BdJIBtR7WSkr73xNNd%2FS9YCyBagavmwIlWFjV0ZgBWwTpHL0mp01fgJiHAn7PzbTU0Q%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&base_date=20220813&base_time=2000&nx=35&ny=129";


app.listen(port, function() {
  console.log('Server Start. on port' + port);
});

const filter = require('./filter.js');
app.get('/', (req, res)=>{
  getData(url);
  res.send("200");
})

async function getData(url) {
  try {
    //응답 성공
    const response = await axios.get(url);
    let tmp = response.data.response.body.items;
    await filter.filter(tmp);
    // return response.data.response.body.items;
  } catch (error) {
    //응답 실패
    console.error(error);
  }
}
