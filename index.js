
// таймер 1
let countdownElement = document.querySelector(".countdown");
let countdownDate = new Date(2023, 11, 31, 0, 0, 0).getTime();

function getCountTime() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;

// дни
if(((days % 100) >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 100 == 0 || days % 10 == 0){
    document.querySelector('.d').innerHTML = 'дней';
    }
    else if(days % 10 == 1 || days % 100 == 1){
    document.querySelector('.d').innerHTML = 'день';
    }
    else{
    document.querySelector('.d').innerHTML = 'дня';
    }
    
// часы
    if(((hours % 100) >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 100 == 0 || hours % 10 == 0){
        document.querySelector('.ch').innerHTML = 'часов';
        }
        else if(hours % 10 == 1 || hours % 100 == 1){
        document.querySelector('.ch').innerHTML = 'час';
        }
        else{
        document.querySelector('.ch').innerHTML = 'часа';
        }

// минуты
if(((minutes % 100) >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 100 == 0 || minutes % 10 == 0){
    document.querySelector('.min').innerHTML = 'минут';
    }
    else if(minutes % 10 == 1 || minutes % 100 == 1){
    document.querySelector('.min').innerHTML = 'минута';
    }
    else{
    document.querySelector('.min').innerHTML = 'минуты';
    }

    // секунды
    if(((seconds % 100) >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0){
        document.querySelector('.sec').innerHTML = 'секунд';
        }
        else if(seconds % 10 == 1 || seconds % 100 == 1){
        document.querySelector('.sec').innerHTML = 'секунда';
        }
        else{
        document.querySelector('.sec').innerHTML = 'секунды';
        }

        // если время истекло
        if (distance < 0){
            clearInterval(countdown);
            countdownElement.innerHTML = "<h4 class='expired'> С Новым годом!</h4>";
        }


}

let countdown = setInterval(getCountTime, 1000);
getCountTime();

// таймер 2
let countdownElement_2 = document.querySelector(".countdown_2");
let countdownDate_2 = new Date(2024, 1, 23, 0, 0, 0).getTime();

function getCountTime_2() {
  const now = new Date().getTime();
  const distance_2 = countdownDate_2 - now;

  const oneDay_2 = 24 * 60 * 60 * 1000;
  const oneHour_2 = 60 * 60 * 1000;
  const oneMinute_2 = 60 * 1000;

  let days_2 = Math.floor(distance_2 / oneDay_2);
  let hours_2 = Math.floor((distance_2 % oneDay_2) / oneHour_2);
  let minutes_2 = Math.floor((distance_2 % oneHour_2) / oneMinute_2);
  let seconds_2 = Math.floor((distance_2 % oneMinute_2) / 1000);

  document.querySelector('.days_2').innerHTML = days_2;
  document.querySelector('.hours_2').innerHTML = hours_2;
  document.querySelector('.minutes_2').innerHTML = minutes_2;
  document.querySelector('.seconds_2').innerHTML = seconds_2;

// дни
if(((days_2 % 100) >= 5 && days_2 % 100 <= 20) || days_2 % 10 >= 5 || days_2 % 100 == 0 || days_2 % 10 == 0){
    document.querySelector('.d_2').innerHTML = 'дней';
    }
    else if(days_2 % 10 == 1 || days_2 % 100 == 1){
    document.querySelector('.d_2').innerHTML = 'день';
    }
    else{
    document.querySelector('.d_2').innerHTML = 'дня';
    }
    
// часы
    if(((hours_2 % 100) >= 5 && hours_2 % 100 <= 20) || hours_2 % 10 >= 5 || hours_2 % 100 == 0 || hours_2 % 10 == 0){
        document.querySelector('.ch_2').innerHTML = 'часов';
        }
        else if(hours_2 % 10 == 1 || hours_2 % 100 == 1){
        document.querySelector('.ch_2').innerHTML = 'час';
        }
        else{
        document.querySelector('.ch_2').innerHTML = 'часа';
        }

// минуты
if(((minutes_2 % 100) >= 5 && minutes_2 % 100 <= 20) || minutes_2 % 10 >= 5 || minutes_2 % 100 == 0 || minutes_2 % 10 == 0){
    document.querySelector('.min_2').innerHTML = 'минут';
    }
    else if(minutes_2 % 10 == 1 || minutes_2 % 100 == 1){
    document.querySelector('.min_2').innerHTML = 'минута';
    }
    else{
    document.querySelector('.min_2').innerHTML = 'минуты';
    }

    // секунды
    if(((seconds_2 % 100) >= 5 && seconds_2 % 100 <= 20) || seconds_2 % 10 >= 5 || seconds_2 % 100 == 0 || seconds_2 % 10 == 0){
        document.querySelector('.sec_2').innerHTML = 'секунд';
        }
        else if(seconds_2 % 10 == 1 || seconds_2 % 100 == 1){
        document.querySelector('.sec_2').innerHTML = 'секунда';
        }
        else{
        document.querySelector('.sec_2').innerHTML = 'секунды';
        }
        // если время истекло
        if (distance_2 < 0){
            clearInterval(countdown_2);
            countdownElement_2.innerHTML = "<h4 class='expired_2'> С 23 февраля!</h4>";
        }

  if (distance_2 < 0) {
    clearInterval(countdown_2);
    countdownElement_2.innerHTML = "<h4 class='expired_2'> С 23 февраля!</h4>";
  }
}

let countdown_2 = setInterval(getCountTime_2, 1000);
getCountTime_2();

// -------------------таймер3
let countdownElement_3 = document.querySelector(".countdown_3");
let countdownDate_3 = new Date(2024, 2, 8, 0, 0, 0).getTime();

function getCountTime_3() {
  const now = new Date().getTime();
  const distance_3 = countdownDate_3 - now;

  const oneDay_3 = 24 * 60 * 60 * 1000;
  const oneHour_3 = 60 * 60 * 1000;
  const oneMinute_3 = 60 * 1000;

  let days_3 = Math.floor(distance_3 / oneDay_3);
  let hours_3 = Math.floor((distance_3 % oneDay_3) / oneHour_3);
  let minutes_3 = Math.floor((distance_3 % oneHour_3) / oneMinute_3);
  let seconds_3 = Math.floor((distance_3 % oneMinute_3) / 1000);

  document.querySelector('.days_3').innerHTML = days_3;
  document.querySelector('.hours_3').innerHTML = hours_3;
  document.querySelector('.minutes_3').innerHTML = minutes_3;
  document.querySelector('.seconds_3').innerHTML = seconds_3;

// дни
if(((days_3 % 100) >= 5 && days_3 % 100 <= 20) || days_3 % 10 >= 5 || days_3 % 100 == 0 || days_3 % 10 == 0){
    document.querySelector('.d_3').innerHTML = 'дней';
    }
    else if(days_3 % 10 == 1 || days_3 % 100 == 1){
    document.querySelector('.d_3').innerHTML = 'день';
    }
    else{
    document.querySelector('.d_3').innerHTML = 'дня';
    }
    
// часы
    if(((hours_3 % 100) >= 5 && hours_3 % 100 <= 20) || hours_3 % 10 >= 5 || hours_3 % 100 == 0 || hours_3 % 10 == 0){
        document.querySelector('.ch_3').innerHTML = 'часов';
        }
        else if(hours_3 % 10 == 1 || hours_3 % 100 == 1){
        document.querySelector('.ch_3').innerHTML = 'час';
        }
        else{
        document.querySelector('.ch_3').innerHTML = 'часа';
        }

// минуты
if(((minutes_3 % 100) >= 5 && minutes_3 % 100 <= 20) || minutes_3 % 10 >= 5 || minutes_3 % 100 == 0 || minutes_3 % 10 == 0){
    document.querySelector('.min_3').innerHTML = 'минут';
    }
    else if(minutes_3 % 10 == 1 || minutes_3 % 100 == 1){
    document.querySelector('.min_3').innerHTML = 'минута';
    }
    else{
    document.querySelector('.min_3').innerHTML = 'минуты';
    }

    // секунды
    if(((seconds_3 % 100) >= 5 && seconds_3 % 100 <= 20) || seconds_3 % 10 >= 5 || seconds_3 % 100 == 0 || seconds_3 % 10 == 0){
        document.querySelector('.sec_3').innerHTML = 'секунд';
        }
        else if(seconds_3 % 10 == 1 || seconds_3 % 100 == 1){
        document.querySelector('.sec_3').innerHTML = 'секунда';
        }
        else{
        document.querySelector('.sec_3').innerHTML = 'секунды';
        }
        // если время истекло
        if (distance_3 < 0){
            clearInterval(countdown_3);
            countdownElement_3.innerHTML = "<h4 class='expired_3'> С 8 марта!</h4>";
        }

  if (distance_3 < 0) {
    clearInterval(countdown_3);
    countdownElement_3.innerHTML = "<h4 class='expired_3'> С 8 матра!</h4>";
  }
}

let countdown_3 = setInterval(getCountTime_3, 1000);
getCountTime_3();

// -------------------таймер4
let countdownElement_4 = document.querySelector(".countdown_4");
let countdownDate_4 = new Date(2024, 4, 1, 0, 0, 0).getTime();

function getCountTime_4() {
  const now = new Date().getTime();
  const distance_4 = countdownDate_4 - now;

  const oneDay_4 = 24 * 60 * 60 * 1000;
  const oneHour_4 = 60 * 60 * 1000;
  const oneMinute_4 = 60 * 1000;

  let days_4 = Math.floor(distance_4 / oneDay_4);
  let hours_4 = Math.floor((distance_4 % oneDay_4) / oneHour_4);
  let minutes_4 = Math.floor((distance_4 % oneHour_4) / oneMinute_4);
  let seconds_4 = Math.floor((distance_4 % oneMinute_4) / 1000);

  document.querySelector('.days_4').innerHTML = days_4;
  document.querySelector('.hours_4').innerHTML = hours_4;
  document.querySelector('.minutes_4').innerHTML = minutes_4;
  document.querySelector('.seconds_4').innerHTML = seconds_4;

// дни
if(((days_4 % 100) >= 5 && days_4 % 100 <= 20) || days_4 % 10 >= 5 || days_4 % 100 == 0 || days_4 % 10 == 0){
    document.querySelector('.d_4').innerHTML = 'дней';
    }
    else if(days_4 % 10 == 1 || days_4 % 100 == 1){
    document.querySelector('.d_4').innerHTML = 'день';
    }
    else{
    document.querySelector('.d_4').innerHTML = 'дня';
    }
    
// часы
    if(((hours_4 % 100) >= 5 && hours_4 % 100 <= 20) || hours_4 % 10 >= 5 || hours_4 % 100 == 0 || hours_4 % 10 == 0){
        document.querySelector('.ch_4').innerHTML = 'часов';
        }
        else if(hours_4 % 10 == 1 || hours_4 % 100 == 1){
        document.querySelector('.ch_4').innerHTML = 'час';
        }
        else{
        document.querySelector('.ch_4').innerHTML = 'часа';
        }

// минуты
if(((minutes_4 % 100) >= 5 && minutes_4 % 100 <= 20) || minutes_4 % 10 >= 5 || minutes_4 % 100 == 0 || minutes_4 % 10 == 0){
    document.querySelector('.min_4').innerHTML = 'минут';
    }
    else if(minutes_4 % 10 == 1 || minutes_4 % 100 == 1){
    document.querySelector('.min_4').innerHTML = 'минута';
    }
    else{
    document.querySelector('.min_4').innerHTML = 'минуты';
    }

    // секунды
    if(((seconds_4 % 100) >= 5 && seconds_4 % 100 <= 20) || seconds_4 % 10 >= 5 || seconds_4 % 100 == 0 || seconds_4 % 10 == 0){
        document.querySelector('.sec_4').innerHTML = 'секунд';
        }
        else if(seconds_4 % 10 == 1 || seconds_4 % 100 == 1){
        document.querySelector('.sec_4').innerHTML = 'секунда';
        }
        else{
        document.querySelector('.sec_4').innerHTML = 'секунды';
        }
        // если время истекло
        if (distance_4 < 0){
            clearInterval(countdown_4);
            countdownElement_4.innerHTML = "<h4 class='expired_4'> С 1 мая!</h4>";
        }

  if (distance_4 < 0) {
    clearInterval(countdown_4);
    countdownElement_4.innerHTML = "<h4 class='expired_4'> С 1 мая!</h4>";
  }
}

let countdown_4 = setInterval(getCountTime_4, 1000);
getCountTime_4();

// -------------------таймер5
let countdownElement_5 = document.querySelector(".countdown_5");
let countdownDate_5 = new Date(2024, 4, 9, 0, 0, 0).getTime();
function getCountTime_5() {
  const now = new Date().getTime();
  const distance_5 = countdownDate_5 - now;
  const oneDay_5 = 24 * 60 * 60 * 1000;
  const oneHour_5 = 60 * 60 * 1000;
  const oneMinute_5 = 60 * 1000;
  let days_5 = Math.floor(distance_5 / oneDay_5);
  let hours_5 = Math.floor((distance_5 % oneDay_5) / oneHour_5);
  let minutes_5 = Math.floor((distance_5 % oneHour_5) / oneMinute_5);
  let seconds_5 = Math.floor((distance_5 % oneMinute_5) / 1000);
  document.querySelector('.days_5').innerHTML = days_5;
  document.querySelector('.hours_5').innerHTML = hours_5;
  document.querySelector('.minutes_5').innerHTML = minutes_5;
  document.querySelector('.seconds_5').innerHTML = seconds_5;
if(((days_5 % 100) >= 5 && days_5 % 100 <= 20) || days_5 % 10 >= 5 || days_5 % 100 == 0 || days_5 % 10 == 0){
    document.querySelector('.d_5').innerHTML = 'дней';
    }
    else if(days_5 % 10 == 1 || days_5 % 100 == 1){
    document.querySelector('.d_5').innerHTML = 'день';
    }
    else{
    document.querySelector('.d_5').innerHTML = 'дня';
    }
    if(((hours_5 % 100) >= 5 && hours_5 % 100 <= 20) || hours_5 % 10 >= 5 || hours_5 % 100 == 0 || hours_5 % 10 == 0){
        document.querySelector('.ch_5').innerHTML = 'часов';
        }
        else if(hours_5 % 10 == 1 || hours_5 % 100 == 1){
        document.querySelector('.ch_5').innerHTML = 'час';
        }
        else{
        document.querySelector('.ch_5').innerHTML = 'часа';
        }
if(((minutes_5 % 100) >= 5 && minutes_5 % 100 <= 20) || minutes_5 % 10 >= 5 || minutes_5 % 100 == 0 || minutes_5 % 10 == 0){
    document.querySelector('.min_5').innerHTML = 'минут';
    }
    else if(minutes_5 % 10 == 1 || minutes_5 % 100 == 1){
    document.querySelector('.min_5').innerHTML = 'минута';
    }
    else{
    document.querySelector('.min_5').innerHTML = 'минуты';
    }
    if(((seconds_5 % 100) >= 5 && seconds_5 % 100 <= 20) || seconds_5 % 10 >= 5 || seconds_5 % 100 == 0 || seconds_5 % 10 == 0){
        document.querySelector('.sec_5').innerHTML = 'секунд';
        }
        else if(seconds_5 % 10 == 1 || seconds_5 % 100 == 1){
        document.querySelector('.sec_5').innerHTML = 'секунда';
        }
        else{
        document.querySelector('.sec_5').innerHTML = 'секунды';
        }
        if (distance_5 < 0){
            clearInterval(countdown_5);
            countdownElement_5.innerHTML = "<h4 class='expired_5'> С 9 мая!</h4>";
        }
  if (distance_5 < 0) {
    clearInterval(countdown_5);
    countdownElement_5.innerHTML = "<h4 class='expired_5'> С 9 мая!</h4>"; 
}
}
let countdown_5 = setInterval(getCountTime_5, 1000);
getCountTime_5();


// -------------------таймер6
let countdownElement_6 = document.querySelector(".countdown_6");
let countdownDate_6 = new Date(2024, 5, 12, 0, 0, 0).getTime();
function getCountTime_6() {
  const now = new Date().getTime();
  const distance_6 = countdownDate_6 - now;
  const oneDay_6 = 24 * 60 * 60 * 1000;
  const oneHour_6 = 60 * 60 * 1000;
  const oneMinute_6 = 60 * 1000;
  let days_6 = Math.floor(distance_6 / oneDay_6);
  let hours_6 = Math.floor((distance_6 % oneDay_6) / oneHour_6);
  let minutes_6 = Math.floor((distance_6 % oneHour_6) / oneMinute_6);
  let seconds_6 = Math.floor((distance_6 % oneMinute_6) / 1000);
  document.querySelector('.days_6').innerHTML = days_6;
  document.querySelector('.hours_6').innerHTML = hours_6;
  document.querySelector('.minutes_6').innerHTML = minutes_6;
  document.querySelector('.seconds_6').innerHTML = seconds_6;
if(((days_6 % 100) >= 5 && days_6 % 100 <= 20) || days_6 % 10 >= 5 || days_6 % 100 == 0 || days_6 % 10 == 0){
    document.querySelector('.d_6').innerHTML = 'дней';
    }
    else if(days_6 % 10 == 1 || days_6 % 100 == 1){
    document.querySelector('.d_6').innerHTML = 'день';
    }
    else{
    document.querySelector('.d_6').innerHTML = 'дня';
    }
    if(((hours_6 % 100) >= 5 && hours_6 % 100 <= 20) || hours_6 % 10 >= 5 || hours_6 % 100 == 0 || hours_6 % 10 == 0){
        document.querySelector('.ch_6').innerHTML = 'часов';
        }
        else if(hours_6 % 10 == 1 || hours_6 % 100 == 1){
        document.querySelector('.ch_6').innerHTML = 'час';
        }
        else{
        document.querySelector('.ch_6').innerHTML = 'часа';
        }
if(((minutes_6 % 100) >= 5 && minutes_6 % 100 <= 20) || minutes_6 % 10 >= 5 || minutes_6 % 100 == 0 || minutes_6 % 10 == 0){
    document.querySelector('.min_6').innerHTML = 'минут';
    }
    else if(minutes_6 % 10 == 1 || minutes_6 % 100 == 1){
    document.querySelector('.min_6').innerHTML = 'минута';
    }
    else{
    document.querySelector('.min_6').innerHTML = 'минуты';
    }
    if(((seconds_6 % 100) >= 5 && seconds_6 % 100 <= 20) || seconds_6 % 10 >= 5 || seconds_6 % 100 == 0 || seconds_6 % 10 == 0){
        document.querySelector('.sec_6').innerHTML = 'секунд';
        }
        else if(seconds_6 % 10 == 1 || seconds_6 % 100 == 1){
        document.querySelector('.sec_6').innerHTML = 'секунда';
        }
        else{
        document.querySelector('.sec_6').innerHTML = 'секунды';
        }
        if (distance_6 < 0){
            clearInterval(countdown_6);
            countdownElement_6.innerHTML = "<h4 class='expired_6'> С днём России!</h4>";
        }
  if (distance_6 < 0) {
    clearInterval(countdown_6);
    countdownElement_6.innerHTML = "<h4 class='expired_6'> С днём России!</h4>"; 
}
}
let countdown_6 = setInterval(getCountTime_6, 1000);
getCountTime_6();

// -------------------таймер7
let countdownElement_7 = document.querySelector(".countdown_7");
let countdownDate_7 = new Date(2024, 10, 4, 0, 0, 0).getTime();
function getCountTime_7() {
  const now = new Date().getTime();
  const distance_7 = countdownDate_7 - now;
  const oneDay_7 = 24 * 60 * 60 * 1000;
  const oneHour_7 = 60 * 60 * 1000;
  const oneMinute_7 = 60 * 1000;
  let days_7 = Math.floor(distance_7 / oneDay_7);
  let hours_7 = Math.floor((distance_7 % oneDay_7) / oneHour_7);
  let minutes_7 = Math.floor((distance_7 % oneHour_7) / oneMinute_7);
  let seconds_7 = Math.floor((distance_7 % oneMinute_7) / 1000);
  document.querySelector('.days_7').innerHTML = days_7;
  document.querySelector('.hours_7').innerHTML = hours_7;
  document.querySelector('.minutes_7').innerHTML = minutes_7;
  document.querySelector('.seconds_7').innerHTML = seconds_7;
if(((days_7 % 100) >= 5 && days_7 % 100 <= 20) || days_7 % 10 >= 5 || days_7 % 100 == 0 || days_7 % 10 == 0){
    document.querySelector('.d_7').innerHTML = 'дней';
    }
    else if(days_7 % 10 == 1 || days_7 % 100 == 1){
    document.querySelector('.d_7').innerHTML = 'день';
    }
    else{
    document.querySelector('.d_7').innerHTML = 'дня';
    }
    if(((hours_7 % 100) >= 5 && hours_7 % 100 <= 20) || hours_7 % 10 >= 5 || hours_7 % 100 == 0 || hours_7 % 10 == 0){
        document.querySelector('.ch_7').innerHTML = 'часов';
        }
        else if(hours_7 % 10 == 1 || hours_7 % 100 == 1){
        document.querySelector('.ch_7').innerHTML = 'час';
        }
        else{
        document.querySelector('.ch_7').innerHTML = 'часа';
        }
if(((minutes_7 % 100) >= 5 && minutes_7 % 100 <= 20) || minutes_7 % 10 >= 5 || minutes_7 % 100 == 0 || minutes_7 % 10 == 0){
    document.querySelector('.min_7').innerHTML = 'минут';
    }
    else if(minutes_7 % 10 == 1 || minutes_7 % 100 == 1){
    document.querySelector('.min_7').innerHTML = 'минута';
    }
    else{
    document.querySelector('.min_7').innerHTML = 'минуты';
    }
    if(((seconds_7 % 100) >= 5 && seconds_7 % 100 <= 20) || seconds_7 % 10 >= 5 || seconds_7 % 100 == 0 || seconds_7 % 10 == 0){
        document.querySelector('.sec_7').innerHTML = 'секунд';
        }
        else if(seconds_7 % 10 == 1 || seconds_7 % 100 == 1){
        document.querySelector('.sec_7').innerHTML = 'секунда';
        }
        else{
        document.querySelector('.sec_7').innerHTML = 'секунды';
        }
        if (distance_7 < 0){
            clearInterval(countdown_7);
            countdownElement_7.innerHTML = "<h4 class='expired_7'> С днём Народного Единства!</h4>";
        }
  if (distance_7 < 0) {
    clearInterval(countdown_7);
    countdownElement_7.innerHTML = "<h4 class='expired_7'> С днём Народного Единства!</h4>"; 
}
}
let countdown_7 = setInterval(getCountTime_7, 1000);
getCountTime_7();