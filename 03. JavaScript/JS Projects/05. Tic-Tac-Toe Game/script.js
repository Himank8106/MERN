const gameInfo = document.querySelector('.gameInfo');
const boxes = document.querySelectorAll('.box');
const newGameBtn = document.querySelector('.btn');

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function initialize(){
    currentPlayer = 'X';
    gameInfo.textContent = `Current Player: ${currentPlayer}`;

    gameGrid = ["", "", "", "", "", "", "", "", ""];

    boxes.forEach((box,index) => {
        box.textContent = "";
        box.style.pointerEvents = 'all';
        box.classList = `box box${index+1}`;
    });

    newGameBtn.classList.remove("active");
}
initialize();

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].textContent = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = 'none';
        swapTurns();
        gameInfo.textContent = `Current Player: ${currentPlayer}`;
        checkGameOver();
    }
}

function swapTurns(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkGameOver(){
    let winner = "";
    winningPositions.forEach((position) => {
        if((gameGrid[position[0]] !== "" && gameGrid[position[1]] !== "" && gameGrid[position[2]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){
            boxes.forEach((box) => {
                box.style.pointerEvents = 'none';
            });
            winner = gameGrid[position[0]] === "X" ? "X" : "O";
            boxes[position[0]].classList.add('win');
            boxes[position[1]].classList.add('win');
            boxes[position[2]].classList.add('win');
        }
    });

    if(winner !== ""){
        gameInfo.textContent = `Winner is - ${winner}`;
        newGameBtn.classList.add("active");
        return;
    }

    let count = 0;
    gameGrid.forEach((box) => {
        if(box !== ""){
            count++;
        }
    });
    if(count===9){
        gameInfo.textContent = "Game Tied!";
        newGameBtn.classList.add("active");
    }
}

boxes.forEach((box,index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    });
});

newGameBtn.addEventListener('click', initialize);