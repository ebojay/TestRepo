var centerX = 0;
var centerY = 0;
var i = 0;

function setup() {
createCanvas(500,500);
  centerX = width/2;
  centerY = height/2;

background (255,237,84);
}

frameRate (60);

function draw() {
    
    
    if(mouseY > centerY){
    console.log("right");
    background (255,0,0);
  }
  if(mouseY < centerY){
    console.log("left");
    background (0,255,0);
  }
  if(mouseY == centerY){
    background(0,0,255);
  }
    
    
  
    ellipse(width/2, i, 50,50);
    fill(255);
    
    if (mouseY < centerY) {
    i = i + 1;
  }

    if (mouseY > centerY) {
    i = i - 1;
  }
  
}
