const timeBarElement = document.getElementById('g-timeBar-bg-time');

let time = 0;
let animationID;

const updateTimer = () => {
    timeBarElement.style.width = `${time}%`;
    
    if (time > 100 ) {
        gameOverStatus = true;
        gameOver();
        return;
    }

    time += 0.2;

    animationID = requestAnimationFrame(updateTimer);
}

const restartTime = () => {
    time = 0;
}

const addTime = () => {
    let step = 5;

    if (score > 150) {
        step = 2;
    } else if (score > 100) {
        step = 3;
    } else if (score > 50) {
        step = 4;
    }


    if ((time - step) < 0 ) {
        time = 0;
    } else {
        time -= step; 
    }
}