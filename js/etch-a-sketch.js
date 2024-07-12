// Etch a sketch game built for odin foundation course

//variables
const etchBoardContainer = document.querySelector('.etchBoardContainer');
const etchGridPiece = document.createElement('div');
etchGridPiece.classList.add('etchGridPiece', 'blank')

const initialGridSize = 16 * 16;
console.log("Initial size is " + initialGridSize)
buildGrid(initialGridSize);

function buildGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        console.log('loop : ' + i);
        etchBoardContainer.appendChild(etchGridPiece);
    }

}

