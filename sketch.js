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
    fill('white')
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