function setup() {
  createCanvas(400, 400);
  frameRate(300);
  background(30);
  
}

function draw() {
  let p = random(-10, 10)
  let l = 20;
  //let ellipseColor = 255;
  let ellipseColor = 255;
  if(mouseIsPressed){
  ellipse(mouseX, mouseY, p, p);
    
  fill(ellipseColor);
  
  noStroke();
  }
}
    



function keyPressed(){
  ellipseColor = random(255);
  
}
