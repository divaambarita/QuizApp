let timer;
let timeLeft = 20; 
function mulaiTimer() {

    document.getElementById("timer").innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft; 
        
        if (timeLeft <= 0) {
            soalBerikut();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 20; 
    mulaiTimer();
}

document.addEventListener("DOMContentLoaded", () => {
    mulaiTimer();
});
