var rightwingY = 200;
var rightwingX = 405;
var leftwingY = 200;
var leftwingX= 195;

var offsetX = 0;
var offsetY = 0;


function setup() {
createCanvas (600,600);
background (244,188,222);

console.log("width:" + width + " " + "height" + height)
}

function draw() {
    
offsetX = map(mouseX, 0, width, -10,10);
offsetY = map(mouseY, 0, height, -10,10);
    
    //head
    ellipse(300,100,50,50)
    
  
    //body
    ellipse(300,275,100,300)
    
    //rightwing
  ellipse(rightwingX + offsetX, rightwingY + offsetY,125,100)
  ellipse(440 + offsetX, 325 + offsetY,200,150)
  
    //leftwing
    ellipse(leftwingX + offsetX, leftwingY +offsetY,125,100)
  ellipse(160 + offsetX, 325 + offsetY, 200, 150)
  }

function mousePressed() {
background (255,237,84);

}

function mouseReleased(){
background (244,188,222);

}
