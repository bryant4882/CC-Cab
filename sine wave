var dia = 10;
var ypoint = 0;
var amp = 70;
var timeperiod = 100;
var angV =6.28/timeperiod;
var time = 0;
var par;
var phaseDiffer = 0;

function setup() {
  createCanvas(640, 180);
  fill(255);
  stroke(2);
  par = width/dia;
  
}

function draw() {
  background(0);
  time +=1.3;
  for(i=0; i<par; i++){

  ypoint = sin(angV * (time-phaseDiffer)) * amp;
  ellipse(i*dia, height/2+ypoint, dia, dia)
    phaseDiffer +=1;
  }
}
if(time == timeperiod) time = 0;
