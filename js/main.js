const lobby = document.getElementById('lobby-active');
const game = document.getElementById('game-active');

const effectBtnMenu = document.getElementById('effectBtn-menu');
const btnMenu = document.querySelectorAll('.btn');
const playBtn = document.getElementById('l-start');
const lobbyBtn = document.getElementById('goToLobby');

effectBtnMenu.volume = 0.3;

btnMenu.forEach(btn => {
    btn.addEventListener('click', () => {
        effectBtnMenu.currentTime = 0;
        effectBtnMenu.play().catch(err => console.log(err));
    });
});

playBtn.onclick = () => {
    lobby.hidden = true;
    game.hidden = false;

    gameStart();
}

lobbyBtn.onclick = () => {
    lobby.hidden = false;
    game.hidden = true;

    gameOverStatus = false;
    gameRestart();
}