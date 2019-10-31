const p = 7;                       //interval 
const r = 35*p/2;                  


function setup() {
  

  
  createCanvas(100*p, 60*p);
  background(0);
  strokeWeight(0.5);
  stroke(255);
  noFill();
  
  const cx = width-(55/2)*p;            //circle center x
  const cy = height/2;                //circle center y
  const r = 35*p/2;
  
  
///////////////////////////////draw///////////////////////////
  
  for(i=0; i<700; i+=14/2){
    drawLine(i, 0, i, height);
  } 
  

  drawBox(10*p, 25*p/2, p*35, p*35);  
  
  drawCircle(width-(55/2)*p, height/2, 2*r);
  
  for(i=25*p/2; i<height-25*p/2; i+=14/2){
   drawLine(10*p, i, 45*p, i); 
  }
  

  //////////////////////line in circle///////////////
  
  stroke (255);
  
  for( i=1; i<=35/2; i++){
  line (cx+sqrt(sq(r)-sq(r-i*p)), cy+r-i*p,   cx-(sqrt(sq(r)-sq(r-i*p))), cy+ r-i*p);
  line (cx+sqrt(sq(r)-sq(r-i*p)), cy-(r-i*p), cx-(sqrt(sq(r)-sq(r-i*p))), cy-(r-i*p));
  }
 
  
  
  
  
  

}








function draw() {
  //background(220);
  const cx = width-(55/2)*p;            //circle center x
  const cy = height/2;                //circle center y
    
}

function drawCircle(x, y, r){
  ellipse(x, y, r, r);
}

function drawLine(a, b, c, d){
  line (a, b, c, d);
}

function drawBox(x, y, w, h){
  stroke(255);
  fill(20);
  rect(x, y, w, h);
}
  
function drawCirile(x, y, c){
  stroke(255);
  fill(20);
  circle(x, y, c);
  }
  
