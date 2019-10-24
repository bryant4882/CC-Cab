function setup() {
  createCanvas(400, 400);
  background(198, 245, 209);
  let p = random(-10, 10);               //random refresh
  for(let x=-70; x<400; x+=60+p){        //blue y offset and interval
  for (let i=-70; i<400; i+=68+p){      //     x
  rect(i, x, 60, 35, 30);
  noStroke();
  fill(36, 58, 255, 190);
  }
 }
  
  
  
  for(let x=-30; x<400; x+=60+p){        //green y
  for (let i=-90; i<400; i+=48+p){       //      x 
  rect(i, x, 75, 45, 30);
  noStroke();
  fill(10, 125, 37, 150);
  }
 }
  
}

function draw() {


  
}
