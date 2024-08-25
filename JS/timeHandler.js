// Get a reference to the HTML element that will display the time
const timeElement = document.getElementById("time");

// Retrieve the start time from local storage, or set it to 0 if it doesn't exist
let startTime = localStorage.getItem("startTime");
if (!startTime) {
  // If start time doesn't exist, set it to 0 and store it in local storage
  startTime = 0;
  localStorage.setItem("startTime", startTime);
} else {
  // If start time exists, parse it as an integer from the stored string
  startTime = parseInt(startTime, 10);
}

// Define a function to update the displayed time
function updateTime() {
  // Get the current time in milliseconds since the Unix epoch
  const currentTime = new Date().getTime();
  
  // Calculate the time elapsed since the start time
  const timeElapsed = currentTime - startTime;
  
  // Convert the time elapsed to seconds
  const seconds = Math.floor(timeElapsed / 1000);

  // Initialize an empty string to build the time string
  let timeString = "";

  // Calculate the number of years, months, weeks, days, hours, and minutes
  const years = Math.floor(seconds / (60 * 60 * 24 * 365));
  const months = Math.floor((seconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
  const weeks = Math.floor((seconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24 * 7));
  const days = Math.floor((seconds % (60 * 60 * 24 * 7)) / (60 * 60 * 24));
  const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);

  // Build the time string based on the calculated values
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

  // Update the text content of the time element with the built time string
  timeElement.textContent = timeString.trim();
}

// Call the updateTime function initially to display the time
updateTime();

// Set an interval to update the time every second
setInterval(() => {
  // Increment the start time by 1 second
  startTime += 1000;

  // startTime = 0;
  
  // Store the updated start time in local storage
  localStorage.setItem("startTime", startTime);
  
  // Call the updateTime function to update the displayed time
  updateTime();
}, 1000);