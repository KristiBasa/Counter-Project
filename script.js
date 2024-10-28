const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const value = document.getElementById("value");
let count = 0;


function updateColor() {
  if (count > 0) {
    value.style.color = "green"; // Green for positive
  } else if (count < 0) {
    value.style.color = "red"; // Red for negative
  } else {
    value.style.color = "grey"; // Grey for zero
  }
}

increaseBtn.onclick = function () {
  count++;
  value.textContent = count;
  updateColor();
};

decreaseBtn.onclick = function () {
  count--;
  value.textContent = count;
  updateColor();
};

resetBtn.onclick = function () {
  count = 0;
  value.textContent = count;
  updateColor();
};
