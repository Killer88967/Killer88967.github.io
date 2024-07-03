const timeElement = document.getElementById("time");
const startTime = new Date().getTime();

function updateTime() {
  const currentTime = new Date().getTime();
  const timeElapsed = currentTime - startTime;
  const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / 60000);
  const seconds = Math.floor((timeElapsed % 60000) / 1000);

  let timeString = "";

  if (days > 0) {
    timeString += `${days} days, `;
  }
  if (hours > 0) {
    timeString += `${hours} hours, `;
  }
  if (minutes > 0) {
    timeString += `${minutes} minutes and `;
  }
  timeString += `${seconds} seconds`;

  timeElement.textContent = timeString.trim();
}

updateTime();
setInterval(updateTime, 1000);