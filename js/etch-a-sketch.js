// Etch a sketch game built for odin foundation course

//variables
const etchBoardContainer = document.querySelector('.etchBoardContainer');

//create initial grid
const initialGridSize = 16;
console.log("Initial size is " + initialGridSize * initialGridSize)
buildGrid(initialGridSize);

function buildGrid(halfGridSize){
    let gridSize = halfGridSize * halfGridSize;
    for(let i = 0; i < gridSize; i++){
        console.log('loop : ' + i);
        const etchGridPiece = document.createElement('div');
        etchGridPiece.classList.add('etchGridPiece', 'blank')
        etchGridPiece.style.minHeight = "calc(100% / " + halfGridSize  + ")";
        etchGridPiece.style.minWidth = "calc(100% / " + halfGridSize  + ")";
        etchBoardContainer.appendChild(etchGridPiece);
    }

}

