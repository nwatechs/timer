let countDownStarted = false;
let minutes = 0;
let seconds = 0;
let timeId = null;

// form
let form = document.querySelector('form')
let timeInput = document.querySelector('#time-input')
let displayTime = document.querySelector('h1')
let timeProgress = document.querySelector('p')

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    minutes = parseInt(timeInput.value)
    seconds = 60
    start()
    countDownStarted = true
    form.style.display = 'none'
    timeProgress.innerHTML = 'Count down in progress'
})

function start() {
    setTimeout(function () {
        stop();
        displayTime.innerHTML = '00:00'
    }, minutes * 1000 * 60)

    minutes -= 1;
    timeId = setInterval(function () {
        seconds--
        displayTime.innerHTML = `0${minutes}:${seconds}`
        if (seconds === 0) {
            minutes -= 1;
            seconds = 60
        }

    }, 1000)
}

function stop() {
    clearInterval(timeId)
}
