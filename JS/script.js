/**
 * Fetches data from JSON file and updates the progress bar accordingly.
 */
fetch("json/data.json")
  .then((response) => response.json())
  .then((data) => {
    const percent = data.percent;
    const fillPercent = Math.min(percent, 100);

    // Update the progress bar width
    document.getElementById("fill").style.width = `${fillPercent}%`;

    // Update the progress bar UI
    updateProgressBar(percent);
  });

/**
 * Updates the progress bar UI based on the given percentage.
 * @param {number} percent The percentage to update the progress bar with.
 */
function updateProgressBar(percent) {
  const progressBar = document.getElementById("fill");
  const percentElement = document.getElementById("percent");
  const errorElement = document.getElementById("error");

  if (percent > 100) {
    // Display error state
    errorElement.style.display = "block";
    percentElement.style.display = "none";
    progressBar.style.backgroundColor = "darkred";
  } else {
    // Display normal state
    errorElement.style.display = "none";
    percentElement.style.display = "block";
    percentElement.innerHTML = `${percent}%`;
    progressBar.style.backgroundColor = "#00b98b";
  }
}
