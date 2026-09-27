const gameOverBox = document.getElementById('gameOver-box');

let gameOverStatus = false;

const gameOver = () => {
    if (getPositionBrunch() === statusPositionjack
    ||
    gameOverStatus) {
        if(!gameOverStatus) gameOverStatus = true;

        scoreEndGameElement.textContent = score;

        gameOverBox.classList.add('active');

        scoreFlyElement.textContent = '';
        bestScoreEndGameElement.textContent = `Best Score : ${bestScore}`;

        cancelAnimationFrame(animationID);
    }
}