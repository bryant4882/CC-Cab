
var dia ;
var par;


//////////////////////////////////////////////////////////

let weather;
function preload() {

  
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=21f07cb175b77212c856628c19f8c1f3';
  weather = loadJSON(url);

}

function setup() {
  //sine

 fill(255);
 stroke(2);
 par = width/dia;




 
  createCanvas(400, 400);

}

function draw() {


  background(93);
  let windAng = weather.wind.deg;
  let color = weather.wind.speed;
  let humi = weather.main.humidity;
  let dia = map(color, 0, 20, 0, 100);
  let pos = map(windAng, 0, 360, 0, 450)

  fill(255, 255, 255, 0);
  stroke(255);
  strokeWeight(1);

  ellipse(pos/3, pos, dia, dia);
  push();
  translate(60,0);
  ellipse(pos/3, pos, dia, dia);
  pop();
  ellipse(pos, pos, humi, humi);




}
