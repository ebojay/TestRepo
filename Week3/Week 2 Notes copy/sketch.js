var mouthX = 25;
var mouthY = 250;
var mouthW = 400;
var mouthH = 60
var eye1X = 70;
var eye1Y = 70;
var eye2offset = 300;
var pupiloffset = 20;
var backgroundColor = 'yellow';
var ranNum = 0;
var mapX = 0;

function setup () {
    createCanvas(500,400);
    background(0,0,0);
    background(255,255,0);
    background(125);
    
    console.log("width:" + width + " " + "height:" + height);
    
    noStroke();
    randNum = random(256);
    console.log(randNum);
    
}

function draw () {
  frameRate(10);
    background(backgroundColor);
    
    mapX = map(mouseX,0,width,-10,10);
    
    //eye1
    // x, y, width, height
    fill(255);
    ellipse(eye1X,eye1Y,100,100);
    
    fill(0,0,255)
    ellipse(eye1X + mapX,eye1Y + pupiloffset,50,50);
    
    //eye2
    fill(255)
    ellipse (eye1X + eye2offset,eye1Y,100,100);
    
    fill(0,0,255);
    ellipse (eye1X + eye2offset + mapX,eye1Y + pupiloffset,50,50);
    
    //nose
    fill(255);
    triangle(width/2,height/2,(width/2) + 20,height/2 + 20,(width/2) - 20,height/2 + 20);
    
    
    
    //mouth
    fill(255)
    stroke(255,255,0);
    strokeWeight(10);
    rect(mouthX,mouthY,mouthW,mouthH);
    
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
    noStroke();
    
     //fill('red');
    randNum = random(256);
    fill(randNum,0,0);
    arc(width/2 + 100,300,100,100,0,PI);
    
    ellipse(mouseX,mouseY,10,10);
   
    
}
function mousePressed(){
        //background('yellow');
        backgroundColor = "pink"
        
    }
function mouseReleased(){
    backgroundColor = 'blue'
    
}