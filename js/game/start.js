const gameStart = () => {
    treeElement.innerHTML = '';

    initialize();
    controlTotalPiece();
    setFirstPositionJack();

    gameOverStatus = false;
    score = 0;
    bestScore = Number(localStorage.getItem('bestScore')) || 0;
    collectedTokenInGame = 0;

    scoreElement.textContent = `Score : ${score}`;
    scoreFlyElement.textContent = score;

    restartTime();
    updateTimer();
    setPoint();
    setBestScore();
    setTokenT();

    bestScoreElement.textContent = Number(localStorage.getItem('bestScore'));
}

const setFirstPositionJack = () => {
    let positionBrunch = getPositionBrunch();

    if(positionBrunch === 'left') {setPositionJack('right')}
    else if(positionBrunch === 'right') {setPositionJack('left')}
    else {setPositionJack('right')}
}

const gameRestart = () => {
    gameOverBox.classList.remove('active');
    gameStart();
}

const restartGameBtn = document.getElementById('restartGame');

restartGameBtn.onclick = () => {
    gameRestart();
}

// gameStart();