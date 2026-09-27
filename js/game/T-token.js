const tokenTElement = document.getElementById('g-tokenT').lastElementChild;
const gameOverBoxTokenTElement = document.getElementById('endGame-collectedT');

let tokenT = Number(localStorage.getItem('T')) ||  0;
let mst = 60;
let collectedTokenInGame = 0;

const tokenRating = () => {
    if((score % mst) === 0) {
        tokenT++;
        collectedTokenInGame++;
        mst += 60;

        localStorage.setItem('T', tokenT);

        tokenTElement.textContent = tokenT;
    }

    gameOverBoxTokenTElement.textContent = collectedTokenInGame;
}

const setTokenT = () => {
    let t = Number(localStorage.getItem('T'));
    
    tokenTElement.textContent = t;
}