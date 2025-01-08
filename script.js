const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");
const customTimeEl = document.getElementById("custom-time");
const setCustomEl = document.getElementById("set-custom");

let interval;
let timeLeft = 1500; // Default to 25 minutes

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      resetTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = parseInt(customTimeEl.value, 10) * 60 || 1500;
  updateTimer();
}

function setCustomTime() {
  const customMinutes = parseInt(customTimeEl.value, 10);
  if (customMinutes >= 1 && customMinutes <= 90) {
    timeLeft = customMinutes * 60;
    updateTimer();
  } else {
    alert("Please enter a valid time between 1 and 90 minutes.");
  }
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
setCustomEl.addEventListener("click", setCustomTime);

updateTimer();
