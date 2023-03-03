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

start.addEventListener("click", () => {
  if (paused) {
    paused = false;
    sTime = Date.now() - eTime;
    intervalId = setInterval(updateTime, 75);
  }
});

pause.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    eTime = Date.now() - sTime;
    clearInterval(intervalId);
  }
});
reset.addEventListener("click", () => {
  clearInterval(intervalId);
  eTime = 0;
  sTime = 0;
  cTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  paused = true;
  timer.textContent = "00:00:00";
});

function updateTime() {
  eTime = Date.now() - sTime;
  secs = Math.floor((eTime / 1000) % 60);
  mins = Math.floor((eTime / (1000 * 60)) % 60);
  hrs = Math.floor((eTime / (1000 * 60 * 60)) % 60);

  secs = zerAdd(secs);
  mins = zerAdd(mins);
  hrs = zerAdd(hrs);
  timer.textContent = `${hrs}:${mins}:${secs}`;

  function zerAdd(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
