const hourElement = document.getElementById("hour");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const meridianElement = document.getElementById("meridian");


// Calling getTime Function every Second
setInterval(getTime, 1000)

// Function Statement
function getTime() {

    let time = new Date(); // Assigning date object to time
    let hour = time.getHours(); // extracting hours from time object
    let minutes = time.getMinutes(); // extracting minutes from time object
    let seconds = time.getSeconds(); // extracting seconds from time object
    let meridian = ""; // Declaring meridian

    // Applying 12 Hours Format with Assigning Meridiem Accordingly
    if (hour >= 12) {
        if (hour > 12) {
            hour -= 12;
            meridian = "PM";
        }
    } else if (hour == 0) {
        hour = 12;
        meridian = "AM";
    };

    // Formatting Time
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hourElement.innerText = hour;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
    meridianElement.innerHTML = meridian;
};
