const timer = document.querySelector("#time");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
//required variables eTime =elapsed time,sTime= startTime,cTime=currentTime
let eTime = 0;
let sTime = 0;
let cTime = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
let paused = true;
let intervalId;

start.addEventListener("click", startFun);
function startFun() {
  if (paused) {
    paused = false;
    sTime = Date.now() - eTime;
    intervalId = setInterval(updateTime, 75);
  }
}

pause.addEventListener("click", () => {
  paused = true;
});
reset.addEventListener("click", () => {});

function updateTime() {
  eTime = Date.now() - sTime;
  secs = Math.floor((eTime / 100) % 60);
  mins = Math.floor((eTime / (100 * 60)) % 60);
  hrs = Math.floor((eTime / (100 * 60 * 60)) % 60);
  timer.textContent = `${hrs}:${mins}:${secs}`;
}
