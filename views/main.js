/* 시간 */
var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm ="AM";
    if(hours > 12){   
        var AmPm ="PM";
        hours %= 12;
    }

    Target.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    Target_apm.innerText = `${AmPm}`;

}
clock();
setInterval(clock, 1000); // 1초마다 실행


/*   날짜  
var elem=document.getElementById("date_2")
function date_f(){
    var today = new Date();   
    var year = today.getFullYear(); // 년도
    var month = today.getMonth() + 1;  // 월
    var date = today.getDate();  // 날짜
    var day = today.getDay();  // 요일
    if(day ==1){day="MON"}
    else if(day==2){day="TUE"}
    else if(day==3){day="WED"}
    else if(day==4){day="THU"}
    else if(day==5){day="FRI"}
    else if(day==6){day="SAT"}
    else{day="SUN"}

    document.write(year + '/' + month + '/' + date +'  '+day)
}
date_f(); */


new Swiper('.swiper-container');    