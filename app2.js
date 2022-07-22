let time = 0;
let timeId = null;

// form
let form = document.querySelector('form')
let timeInput = document.querySelector('#time-input')
let displayTime = document.querySelector('h1')
let timeProgress = document.querySelector('p')

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    // Storing time value (parseInt converts values to integers)
    time = parseInt(timeInput.value) * 60;
    // Start the timer
    timeId = setInterval(updateTime, 1000);
    // Clear the time input
    timeInput.value = ''
    // Hide the form
    form.style.display = 'none';
    // Show progress
    timeProgress.innerHTML = 'Countdown in progress'
})

function updateTime () {
    // Deriving minutes from time
    let minutes = Math.floor(time / 60);
    // Deriving seconds from time
    let seconds = time % 60;

    if (time <= 0) {
        clearInterval(timeId)
        timeProgress.innerHTML = 'Countdown Complete'
        form.style.display = 'block'
    }

    displayTime.innerHTML = `${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`
    time--
}