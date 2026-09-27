let statusPositionjack;

const setPositionJack = (position) => {
    const jackPosition = document.getElementById('jack');
    
    if(position === 'left'){
        jackPosition.classList.remove('right');
        jackPosition.classList.add('left');

    } else if(position === 'right') {
        jackPosition.classList.remove('left');
        jackPosition.classList.add('right');

    } else return;

    statusPositionjack = position;
}

window.addEventListener('keydown', e1 => {
    if(gameOverStatus) return;

    if(
        (e1.key === "ArrowRight")
        ||
        (e1.key === "d")
    ) {
        setPositionJack('right');

    } else if(
        (e1.key === "ArrowLeft")
        ||
        (e1.key === "a")
    ) {
        setPositionJack('left');

    } else return;
});