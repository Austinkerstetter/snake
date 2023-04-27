// function setup() {
//   const canvasWidth = window.innerWidth;
//   const canvasHeight = window.innerHeight; 
//   createCanvas(canvasWidth, canvasHeight);
//   background("#DDD");


// drawCreature();

// }

// function drawCreature(){
   
//     fill("green")
//     circle(400, 200, 300); //x, y, diameter 


//     fill('hotpink')
//     rect(300, 150, 55, 55);

    
//     fill('hotpink')
//     rect(450, 150, 55, 55);
    
//   https://p5js.org/reference/#/p5/rect
//   fill('red')
//   rect(450, 150, 40, 40);

//   https://p5js.org/reference/#/p5/rect
//   fill('white')
//   rect(315, 150, 40, 40);
 
//   https://p5js.org/reference/#/p5/ellipse
//   fill('pink');
//   ellipse(400, 260, 200, 100);
//   https://p5js.org/reference/#/p5/ellipse
//   fill('black');
//   ellipse(400, 260, 180, 90);

// }

let x = 100;
let y = 200;
let width = 50;
let fillColor = 'pink';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill(fillColor);
    circle(x, y, width);

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
    // noFill();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
    makeCreature(x, y, fillColor, eyeColor)
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);



