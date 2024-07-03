const timeElement = document.getElementById("time");

let startTime = localStorage.getItem("startTime");
if (!startTime) {
  startTime = 0;
  localStorage.setItem("startTime", startTime);
} else {
  startTime = parseInt(startTime, 10);
}

function updateTime() {
  const currentTime = new Date().getTime();
  const timeElapsed = currentTime - startTime;
  const seconds = Math.floor(timeElapsed / 1000);

  let timeString = "";

  const years = Math.floor(seconds / (60 * 60 * 24 * 365));
  const months = Math.floor((seconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
  const weeks = Math.floor((seconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24 * 7));
  const days = Math.floor((seconds % (60 * 60 * 24 * 7)) / (60 * 60 * 24));
  const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);

  if (years > 0) {
    timeString += `${years} year${years === 1? "" : "s"}`;
    if (months > 0) {
      timeString += ` ${months} month${months === 1? "" : "s"}`;
    }
  } else if (months > 0) {
    timeString += `${months} month${months === 1? "" : "s"}`;
    if (weeks > 0) {
      timeString += ` ${weeks} week${weeks === 1? "" : "s"}`;
    }
  } else if (weeks > 0) {
    timeString += `${weeks} week${weeks === 1? "" : "s"}`;
    if (days > 0) {
      timeString += ` ${days} day${days === 1? "" : "s"}`;
    }
  } else if (days > 0) {
    timeString += `${days} day${days === 1? "" : "s"}`;
    if (hours > 0) {
      timeString += ` ${hours} hour${hours === 1? "" : "s"}`;
    }
  } else if (hours > 0) {
    timeString += `${hours} hour${hours === 1? "" : "s"}`;
    if (minutes > 0) {
      timeString += ` ${minutes} minute${minutes === 1? "" : "s"}`;
    }
  } else if (minutes > 0) {
    timeString += `${minutes} minute${minutes === 1? "" : "s"}`;
  } else {
    timeString += `${seconds} second${seconds === 1? "" : "s"}`;
  }

  timeElement.textContent = timeString.trim();
}

updateTime();
setInterval(() => {
  startTime += 1000;
  localStorage.setItem("startTime", startTime);
  updateTime();
}, 1000);