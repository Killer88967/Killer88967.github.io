const timeElement = document.getElementById("time");

let startTime = localStorage.getItem("startTime");
if (!startTime) {
  startTime = new Date().getTime();
  localStorage.setItem("startTime", startTime);
} else {
  startTime = parseInt(startTime, 10);
}

function updateTime() {
  const currentTime = new Date().getTime();
  const timeElapsed = currentTime - startTime;
  const years = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((timeElapsed % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const weeks = Math.floor((timeElapsed % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((timeElapsed % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / 60000);
  const seconds = Math.floor((timeElapsed % 60000) / 1000);

  let timeString = "";

  if (years > 0) {
    timeString += `${years} year${years === 1 ? "" : "s"}`;
    if (months > 0) {
      timeString += ` ${months} month${months === 1 ? "" : "s"}`;
    }
  } else if (months > 0) {
    timeString += `${months} month${months === 1 ? "" : "s"}`;
    if (weeks > 0) {
      timeString += ` ${weeks} week${weeks === 1 ? "" : "s"}`;
    }
  } else if (weeks > 0) {
    timeString += `${weeks} week${weeks === 1 ? "" : "s"}`;
    if (days > 0) {
      timeString += ` ${days} day${days === 1 ? "" : "s"}`;
    }
  } else if (days > 0) {
    timeString += `${days} day${days === 1 ? "" : "s"}`;
    if (hours > 0) {
      timeString += ` ${hours} hour${hours === 1 ? "" : "s"}`;
    }
  } else if (hours > 0) {
    timeString += `${hours} hour${hours === 1 ? "" : "s"}`;
    if (minutes > 0) {
      timeString += ` ${minutes} minute${minutes === 1 ? "" : "s"}`;
    }
  } else if (minutes > 0) {
    if (timeElapsed > 604800000) {
      timeString += `${minutes} minute${minutes === 1 ? "" : "s"}`;
    } else {
      timeString += `${minutes} minute${minutes === 1 ? "" : "s"}, ${seconds} second${seconds === 1 ? "" : "s"}`;
    }
  } else {
    timeString += `${seconds} second${seconds === 1 ? "" : "s"}`;
  }

  timeElement.textContent = timeString.trim();
}

updateTime();
setInterval(updateTime, 1000);