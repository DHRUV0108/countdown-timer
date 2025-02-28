const eventInput = document.getElementById("event");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const startButton = document.getElementById("start");
const eventDisplay = document.getElementById("event-display");
const countdownDiv = document.getElementById("countdown");
const messageDiv = document.getElementById("message");
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const beep = document.getElementById("beep");

let countdownInterval = null;

startButton.addEventListener("click", () => {
  const eventName = eventInput.value.trim();
  const date = dateInput.value;
  const time = timeInput.value;

  if (!eventName || !date || !time) {
    alert("Please enter the event name, date, and time.");
    return;
  }

  const targetDate = new Date(`${date}T${time}`);
  const now = new Date();

  if (targetDate <= now) {
    alert("Please select a future date and time.");
    return;
  }

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  eventDisplay.textContent = `Countdown to ${eventName}`;
  eventDisplay.style.opacity = 1;
  countdownDiv.style.display = "flex";
  setTimeout(() => {
    countdownDiv.style.opacity = 1;
  }, 10);
  messageDiv.style.display = "none";
  messageDiv.style.opacity = 0;

  countdownInterval = setInterval(() => {
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    if (difference <= 0) {
      clearInterval(countdownInterval);
      countdownDiv.style.opacity = 0;
      setTimeout(() => {
        countdownDiv.style.display = "none";
        messageDiv.textContent = `${eventName} is here!`;
        messageDiv.style.display = "block";
        setTimeout(() => {
          messageDiv.style.opacity = 1;
        }, 10);
        beep.play();
      }, 500);
    } else {
      const totalSeconds = Math.floor(difference / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      daysSpan.classList.add("animate");
      hoursSpan.classList.add("animate");
      minutesSpan.classList.add("animate");
      secondsSpan.classList.add("animate");

      setTimeout(() => {
        daysSpan.classList.remove("animate");
        hoursSpan.classList.remove("animate");
        minutesSpan.classList.remove("animate");
        secondsSpan.classList.remove("animate");
      }, 300);

      daysSpan.textContent = days;
      hoursSpan.textContent = String(hours).padStart(2, "0");
      minutesSpan.textContent = String(minutes).padStart(2, "0");
      secondsSpan.textContent = String(seconds).padStart(2, "0");
    }
  }, 1000);
});
