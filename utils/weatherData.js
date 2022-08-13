// const apiKeyData = require('../keys/apiKeyData')
// const moment = require('moment')
// const axios = require('axios')
// const e = require('express')
//
// module.exports = weatherData (app, data) => {
//
//   getUS(data);
//   // app.get('/', (req, res) => {
//   //   getUS(data);
//   //   getKR(data);
//   // })
//
//   // app.get('/seoul', (req, res) => {
//   //   getUS(data);
//   //   getKR(data);
//   // })
//
// // function getKR(data) {
// //   axios(
// //     'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?' +
// //       'serviceKey=' +
// //       apiKeyData.krServiceKey +
// //       '&pageNo=1&numOfRows=60&dataType=JSON&base_date=' +
// //       moment().format('YYYYMMDD') +
// //       '&base_time=' +
// //       moment().subtract(1, 'hour').format('HH00') +
// //       '&nx=' +
// //       apiKeyData[data].nx +
// //       '&ny=' +
// //       apiKeyData[data].ny
// //   )
// //     .then((res) => {
// //       const arr = res.data.response.body.items.item.filter(
// //         (element) =>
// //           element.category === 'SKY' ||
// //           element.category === 'T1H' ||
// //           element.category === 'PTY'
// //       )
// //       app.get('/weather', (req, res) => {
// //         res.render('test.ejs', { arr: arr })
// //       })
// //     })
// //     .catch((err) => {
// //       console.log(err)
// //     })
// //   }
//
// function getUS(data) {
//     axios(
//       'https://api.openweathermap.org/data/2.5/forecast?' +
//         'lat=' +
//         apiKeyData[data].lat +
//         '&lon=' +
//         apiKeyData[data].lon +
//         '&appid=' +
//         apiKeyData.opnWeterServiceKey + '&units=metric'
//     ).then((res) => {
//       console.log(res.data)
//     })
//       .catch((err) => {
//         console.log(err)
//       })
//   }//us
// }
