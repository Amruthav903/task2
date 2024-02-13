let timer;
let timeLeft;
let isTimerRunning = false;

function startTimer() {
    if (!isTimerRunning) {
        const minutesInput = document.getElementById('minutes').value;
        if (minutesInput === '') return;

        timeLeft = parseInt(minutesInput) * 60;
        isTimerRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    document.getElementById('display').innerText = '00:00';
    document.getElementById('minutes').value = '';
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('display').innerText = `${minutes}:${seconds}`;

    if (timeLeft === 0) {
        clearInterval(timer);
        isTimerRunning = false;
    } else {
        timeLeft--;
    }
}

