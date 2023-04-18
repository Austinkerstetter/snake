let x = 100;
let y = 200;
let width = 50;
let fillColor = 'pink';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawGrid(canvasWidth, canvasHeight);
}
function setup() {
    const canvasWidth = window.innerWidth;

    const canvasHeight = window.innerHeight; 

    createCanvas(canvasWidth, canvasHeight);

    drawGrid(canvasWidth, canvasHeight)

    makeCreature(200, 200, 'pink', 'red');
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

    // redraw circle:
    if (ev.code==='ArrowUp') {
        y=y-10;
        console.log('the user just pressed the up arrow!')
    } else if (ev.code==='ArrowDown') {
        y=y+10;
        console.log('the user just pressed the down arrow!')
    } else if (ev.code==='ArrowLeft') {
        x=x-10
        console.log('the user just pressed the left arrow!')
    }else if (ev.code==='ArrowRight') {
        x=x+10
        console.log('the user just pressed the left arrow!')
    }else if (ev.code==='Space') {
        width=width+10;
    }else if (ev.code==="Minus") {
        width=width-10;
    }else if (ev.code==='KeyR') {
        fillColor = 'purple';
    }
   

    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
    circle(makeCreature)[x, y, fillColor, eyeColor];
}

// Add event listener on keydown
document.addEventListener('keydown', moveController);
