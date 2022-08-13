const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

// #define VARID = "c7c793d38c781c47682fd00e09f1a7da";
let lat = 35.1028;
let lon = 129.0403;
let apiKey = "c7c793d38c781c47682fd00e09f1a7da";
// let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
let url = "https://api.openweathermap.org/data/2.5/weather?lat=35.1333&lon=129.05&appid=c7c793d38c781c47682fd00e09f1a7da&units=metric";

app.listen(port, function() {
  console.log('Server Start. on port' + port);
});


app.get('/', (req, res)=>{
  res.send(getData(url));
})

async function getData(url) {
  try {
    //응답 성공
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    //응답 실패
    console.error(error);
  }
}
