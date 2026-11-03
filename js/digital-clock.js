// Get references to the HTML elements
const clockFace = document.getElementById("clock-face");
const calendarDate = document.getElementById("calendar-date");
 
// Function to update the clock
function updateClock() {
 
    // Create a new Date object
    const currentDate = new Date();
 
    // Get time values
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
 
    // Determine AM or PM
    let session = "AM";
 
    if (hours >= 12) {
        session = "PM";
    }
 
    // Convert from 24-hour to 12-hour time
    if (hours > 12) {
        hours = hours - 12;
    }
 
    // Midnight should display as 12
    if (hours === 0) {
        hours = 12;
    }
 
    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
 
    // Create formatted time string
    const timeString = `${hours}:${minutes}:${seconds} ${session}`;
 
    // Get formatted date
    const dateString = currentDate.toLocaleDateString();
    // Update the webpage
    clockFace.innerHTML = timeString;
    calendarDate.innerHTML = dateString;
}
// Display the clock immediately when the page loads
updateClock();
// Update every second (1000 milliseconds)
setInterval(updateClock, 1000);