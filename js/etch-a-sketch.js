// Etch a sketch game built for odin foundation course

//variables
const etchBoardContainer = document.querySelector('.etchBoardContainer');
const clearGridBTN = document.querySelector('.clearGrid');

//create initial grid
const initialGridSize = 16;
console.log("Initial size is " + initialGridSize * initialGridSize)
buildGrid(initialGridSize);

function buildGrid(halfGridSize){
    //calculate grid size
    let gridSize = halfGridSize * halfGridSize;
    //build grid
    for(let i = 0; i < gridSize; i++){
        console.log('loop : ' + i);
        const etchGridPiece = document.createElement('div');
        etchGridPiece.classList.add('etchGridPiece', 'blank')
        etchGridPiece.style.minHeight = "calc(100% / " + halfGridSize  + ")";
        etchGridPiece.style.minWidth = "calc(100% / " + halfGridSize  + ")";
        etchBoardContainer.appendChild(etchGridPiece);
    
        //add listeners
        etchGridPiece.addEventListener('mouseover', () => {
            etchGridPiece.style.backgroundColor = "black";
        })
    }
}

clearGridBTN.addEventListener('click', () => {

    const gridToClear = document.querySelectorAll('.etchGridPiece');
    for(let i = 0; i < gridToClear.length; i++) {
        gridToClear[i].style.backgroundColor = 'white';
    }
})