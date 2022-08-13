exports.filter = function(data) {
  let arr = new Array();
  let weather = {
    time: "", // 예측시간
    tmpVal: 0,   //온도
    skyVla: "",  // 맑음(1), 구름많음(3), 흐림(4)
    ptyVal: ""  // 강수형태 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7)
  }

  let size = Object.keys(data.item).length;
  let item = "";

  for(i=0; i < 5; i++) {

    item = data.item[i];
    console.log(i + " " + data.item[i]);

    weather.time = item.fcstTime;
    switch(item.category) {
      case 1: "T1H";
      weather.tmpVal = item.fcstValue;
      break;

      case 2: "SKY";
      weather.skyVla = item.fcstValue;
      break;

      case 3: "PTY";
      weather.ptyVal = item.fcstValue;
      break;
    }

    arr.push(weather);

  } //for


  // console.log(arr);

}
