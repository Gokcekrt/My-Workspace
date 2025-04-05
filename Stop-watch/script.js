//variables for buttons

const stopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for set interval -timerStatus

let timerInterval = null;
let timerStatus = "stopped";

//Stop watch function

function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }
  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
} //ekrandaki kronometre görüntüsünü bu şekilde yaptık

//window.setInterval(stopWatch,1000);Gerçek zamanla senkronize olması için, 1000 milisaniyede bir (yani 1 saniyede bir) artması gerekir. Bu durumda, setInterval fonksiyonunun zaman aralığını 1000 milisaniyeye (1 saniye) ayarlamamız gerekiyor. ama 0ların 1 lerin nasıl çalıştığına bakmak hızlandırmak için 1000 i 1 yapabiliriz//

stopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn",
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn",
    ).innerHTML = `<i class="fa-solid fa-play id="play"></i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerHTML = "00:00:00";
});
