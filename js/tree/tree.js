const treeElement = document.getElementById('tree');

let trunckNumID = 0;

const initialize = () => {
    for(let i = 0; i < 4; i++) {
        let trunk = crateTreePiece(branchData(i));
        
        trunckNumID = i;

        addPiece(trunk);
    }
}

const addPiece = piece => {
    treeElement.prepend(piece);
}

const removePiece = piece => {
    piece.remove();
}

const createPieceAfterChop = () => {
    addPiece(crateTreePiece(branchData(trunckNumID)));
} 

const controlTotalPiece = () => {
    let total = document.querySelectorAll('.trunk').length;
    let oldPiece = treeElement.firstElementChild;

    if(total >= 5) removePiece(oldPiece);
}

const getPositionBrunch = () => {
    let position = '';

    if (treeElement.lastElementChild.lastElementChild.classList.contains('branch-left')) {position = 'left';}
    else if (treeElement.lastElementChild.lastElementChild.classList.contains('branch-right')) {position = 'right';}
    else {position = 'none';}
    
    return position
}