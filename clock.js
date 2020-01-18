const clock_container = document.querySelector(".status-bar__clock");

function loadClock() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();

  clock_container.innerHTML =
    `${hour < 10 ? `0${hour}` : hour} ` + `${min < 10 ? `0${min}` : min} `;
}

function init() {
  setInterval(loadClock(), 60000);
}

init();
