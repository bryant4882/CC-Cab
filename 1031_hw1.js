function setup() {
  
  createCanvas(400, 400);
  
}

function draw() {
  
  background(0);
  strokeWeight(0.5);
  stroke(255);
  noFill();
  
  drawBox(width*0.1, width*0.1, 0.8*height, 0.8*height);
  
  drawEllipse(width/2, height/2, 0.8*width, 0.8*height);
  
  drawLine(width*0.8/4+width*0.1, height*0.1, width*0.8/4+width*0.1, height*0.9);
  
  drawLine(width*0.8/4+width*0.1, height*0.1, width*0.1, height*0.9);
  
  drawLine(width/2, height*0.1, width*0.1, height*0.9);
  
  drawLine(width/2, height*0.1, width*0.9, height*0.9);
  
  drawLine(width*0.8*3/4+width*0.1, height*0.1, width*0.9, height*0.9);
  
  drawLine(width*0.8*3/4+width*0.1, height*0.1, width*0.8*3/4+width*0.1, height*0.9);
  
  drawLine(width*0.9, height*0.1, width*0.8*3/4+width*0.1, height*0.9);
  
  
  
}
    
    
function drawBox(x, y, w, h){
  stroke(255);
  noFill();
  rect(x, y, w, h);
  
}

function drawEllipse(x, y, w, h){
  stroke(255);
  noFill();
  ellipse(x, y, w, h);
}

function drawLine(a, b, c, d){
  line (a, b, c, d);
}
