const keys = ["ArrowRight", "ArrowLeft", "d", "a"];

window.onkeydown = e => {
    let lastTrunk = treeElement.lastElementChild;
    
    if(keys.includes(e.key)){
        if(gameOverStatus) return;
        
        if(lastTrunk) {
            removePiece(lastTrunk);
            setBestScore();
            gameOver();
            trunckNumID++;
            createPieceAfterChop();
            pointRating();
            setPoint();
            tokenRating();
            addTime();
        }
    }
}