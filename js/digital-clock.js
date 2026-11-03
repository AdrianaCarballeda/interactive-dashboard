// Display the user's current local time and date.
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM or PM before converting to a 12-hour clock.
    const session = hours >= 12 ? "PM" : "AM";

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros to single-digit values.
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Update the time and date on the dashboard.
    document.getElementById("clock-face").innerHTML =
        `${hours}:${minutes}:${seconds} ${session}`;

    document.getElementById("calendar-date").innerHTML =
        now.toLocaleDateString();
}

// Display immediately, then update every second.
updateClock();
setInterval(updateClock, 1000);