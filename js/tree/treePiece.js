const crateTreePiece = branchData => {
    const branch = document.createElement('div');

    branch.className = 'trunk';
    branch.setAttribute('id', branchData.id);
    branch.setAttribute('time', branchData.time);
    branch.innerHTML = `
        <div class="branch branch-${branchData.type}"></div>
    `;
    
    return branch
}