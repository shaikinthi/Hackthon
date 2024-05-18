
const canvas = document.getElementById('diceCanvas');
const ctx = canvas.getContext('2d');
canvas.height=200
canvas.width=200

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill()
}

function drawDice(number) {
    clearCanvas();
    

    if (number === 1) {
        drawDot(100, 100);
    } else if (number === 2) {
        drawDot(60, 60);
        drawDot(140, 140);
    } else if (number === 3) {
        drawDot(60, 60);
        drawDot(100, 100);
        drawDot(140, 140);
    } else if (number === 4) {
        drawDot(60, 60);
        drawDot(60, 140);
        drawDot(140, 60);
        drawDot(140, 140);
    } else if (number === 5) {
        drawDot(60, 60);
        drawDot(60, 140);
        drawDot(100, 100);
        drawDot(140, 60);
        drawDot(140, 140);
    } else if (number === 6) {
        drawDot(60, 60);
        drawDot(60, 100);
        drawDot(60, 140);
        drawDot(140, 60);
        drawDot(140, 100);
        drawDot(140, 140);
    } else if (number === 7) {
        drawDot(100, 50);
        drawDot(60, 140);
        drawDot(140, 140);
        drawDot(60, 60);
        drawDot(140, 60);
        drawDot(100, 100);
        drawDot(100, 150);
    }
}

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    drawDice(randomNumber);
}

function handleKeyPress(event) {
    if (event.code === 'Space') {
        generateRandomNumber();
    }
}

document.addEventListener('keydown', handleKeyPress);


generateRandomNumber();
