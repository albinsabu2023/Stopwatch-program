let c = 0;
document.getElementById("inc").onclick = function () {
  c += 1;
  document.getElementById("label").innerHTML = c;
};
document.getElementById("dec").onclick = function () {
  c -= 1;
  document.getElementById("label").innerHTML = c;
};
