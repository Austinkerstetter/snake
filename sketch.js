const blockSize = 25;
const rows = 20;
const cols = 20;
let board;
let context; 
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
let velocityX = 0;
let velocityY = 0;
let snakeBody = [];
let foodX;
let foodY;
let gameOver = false;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");
    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10);
}

function update() {
    if (gameOver) return;
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }
    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) snakeBody[0] = [snakeX, snakeY];
    context.fillStyle = "darkgreen";
    for (let i = 0; i < snakeBody.length; i++) {
        context.beginPath();
        context.arc(snakeBody[i][0] + blockSize/2, snakeBody[i][1] + blockSize/2, blockSize/2, 0, 2*Math.PI);
        context.fill();
    }
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.beginPath();
    context.arc(snakeX + blockSize/2, snakeY + blockSize/2, blockSize/2, 0, 2*Math.PI);
    context.fillStyle = "lime";
    context.fill();
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert("Game Over");
        window.location.reload();
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
            window.location.reload();
        }
    }
}


function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}




