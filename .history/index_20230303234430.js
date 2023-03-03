const timer = document.querySelector("#time");
const start = document.getElementById("#start");
const pause = document.getElementById("#pause");
const reset = document.getElementById("#reset");
//required variables eTime =elapsed time,sTime= startTime,cTime=currentTime
let eTime = 0;
let sTime = 0;
let cTime = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
let paused = 0;
let intervalId;

start.addEventListener("click", () => {
  if (paused) {
    paused = false;
    sTime = Date.now() - eTime;
    intervalId = setInterval(updateTime, 75);
  }
});
pause.addEventListener("click", () => {});
reset.addEventListener("click", () => {});

function updateTime() {
  eTime = Date.now() - sTime;
  secs = Math.floor(eTime / 100) % 60;
}
