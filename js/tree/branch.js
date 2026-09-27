let allBranch = [];

const branchData = id => {
    const randomType = Math.floor(Math.random() * 3);
    let type;

    if(randomType === 0) {
        type = 'left';

    } else if(randomType === 1) {
        type = 'right';

    } else if(randomType === 2) {
        type = 'none'

    } else {
        return;
    }
    
    let branchData = {id, type};

    allBranch.push(branchData);

    return branchData
}