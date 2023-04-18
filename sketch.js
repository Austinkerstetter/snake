let x = 100;
let y = 200;
let width = 50;
let fillColor = 'pink';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let xVelocity = 5;
let yVelocity = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawGrid(canvasWidth, canvasHeight);
}

function makeCreature(x, y, fillColor, eyeColor) {
    fill(fillColor);
    circle(x, y, 300);
    fill(eyeColor);
    ellipse(x-50, y-50, 30, 40);
    ellipse(x+50, y-50, 30, 40);
}

function moveController (ev) { 
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    // update velocity:
    if (ev.code==='ArrowUp' && yVelocity !== 10) {
        yVelocity = -10;
        xVelocity = 0;
        console.log('the user just pressed the up arrow!');
    } else if (ev.code==='ArrowDown' && yVelocity !== -10) {
        yVelocity = 10;
        xVelocity = 0;
        console.log('the user just pressed the down arrow!');
    } else if (ev.code==='ArrowLeft' && xVelocity !== 10) {
        xVelocity = -10;
        yVelocity = 0;
        console.log('the user just pressed the left arrow!');
    } else if (ev.code==='ArrowRight' && xVelocity !== -10) {
        xVelocity = 10;
        yVelocity = 0;
        console.log('the user just pressed the right arrow!');
    } else if (ev.code==='Space') {
        width=width+10;
    } else if (ev.code==="Minus") {
        width=width-10;
    } else if (ev.code==='KeyR') {
        fillColor = 'purple';
    }
   
    // update position:
    x += xVelocity;
    y += yVelocity;

    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
    makeCreature(x, y, fillColor, eyeColor);
}

// Add event listener on keydown
document.addEventListener('keydown', moveController);

// Automatically move the circle
setInterval(() => {
    x += xVelocity;
    y += yVelocity;

    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
    makeCreature(x, y, fillColor, eyeColor);
}, 100);
