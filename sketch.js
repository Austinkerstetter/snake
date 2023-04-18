function setup() {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight; 
  createCanvas(canvasWidth, canvasHeight);
  background("#DDD");


drawCreature();

}

function drawCreature(){
   
    fill("green")
    circle(400, 200, 300); //x, y, diameter 


    fill('hotpink')
    rect(300, 150, 55, 55);

    
    fill('hotpink')
    rect(450, 150, 55, 55);
    
  https://p5js.org/reference/#/p5/rect
  fill('red')
  rect(450, 150, 40, 40);

  https://p5js.org/reference/#/p5/rect
  fill('white')
  rect(315, 150, 40, 40);
 
  https://p5js.org/reference/#/p5/ellipse
  fill('pink');
  ellipse(400, 260, 200, 100);
  https://p5js.org/reference/#/p5/ellipse
  fill('black');
  ellipse(400, 260, 180, 90);

}




function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // fill('red');
  fill(fillColor);
  circle(x, y, width);

  drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
  console.log(ev.code);
  // left arrow moves circle left
  // right arrow moves circle right
  // up arrow moves circle up
  // down arrow moves circle down

  if (ev.code === 'ArrowUp') {
      y = y - 10;
      console.log('The user just pressed the up arrow!');
  } else if (ev.code === 'ArrowDown') {
      y = y + 10;
      console.log('The user just pressed the down arrow!');
  } 
  if (ev.code === 'ArrowRight') {
      x = x + 10;
      console.log('The user just pressed the right arrow!');
  } else if (ev.code === 'ArrowLeft') {
      x = x - 10;
      console.log('The user just pressed the left arrow!');
  } else if (ev.code === 'Minus') {
      width -= 10;
  } else if (ev.code === 'KeyR') {
      fillColor = 'red';
  }