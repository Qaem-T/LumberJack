const scoreElement = document.getElementById('g-score');
const scoreFlyElement = document.getElementById('g-scoreFloating');
const bestScoreElement = document.getElementById('g-bestScoreValue');
const scoreEndGameElement = document.getElementById('endGameScore');
const bestScoreEndGameElement = document.getElementById('endGameBestScore');

let bestScore = Number(localStorage.getItem('bestScore')) || 0;
let score = 0;

const setPoint = () => {
    if(gameOverStatus) return;

    scoreElement.textContent = `Score : ${score}`;
    scoreFlyElement.textContent = score;

    pop(scoreFlyElement);
}

const pointRating = () => {
    if(gameOverStatus) return;

    score++;
}

const pop = (el) => {
    el.classList.remove('active');
    void el.offsetWidth;
    el.classList.add('active');
};

const setBestScore = () => {
    if(score > bestScore) {
        bestScore = score;
        localStorage.setItem('bestScore', bestScore);
    }
    bestScoreElement.textContent = bestScore;
}