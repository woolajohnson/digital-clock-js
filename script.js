// Selectors

const timeDisplay = document.querySelector('.time-display');

// Functions

function digitalClock() {
    const timeNow = new Date();
    
    // Get time values
    hours = timeNow.getHours();
    minutes = timeNow.getMinutes();
    seconds = timeNow.getSeconds();
    pmOrAm = ' AM';

    // Adjust diplay
    if (hours > 12) {
        pmOrAm = ' PM'; 
        hours = hours - 12;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    // Display time
    timeDisplay.textContent = hours + ':' + minutes + ':' + seconds + pmOrAm;
}

setInterval(digitalClock, 1000);

