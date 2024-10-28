const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const value = document.getElementById("value");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  value.textContent = count;
  value.style.color = "green";
};

decreaseBtn.onclick = function () {
  count--;
  value.textContent = count;
  value.style.color = "red";
};

resetBtn.onclick = function () {
  count = 0;
  value.textContent = count;
  value.style.color = "grey";
};
