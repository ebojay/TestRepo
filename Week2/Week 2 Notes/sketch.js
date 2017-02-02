/*
var num = 100;
var num2 = 50;
var trex = 1000;
var zeven = 7;
var message ="hello";
var anotherMessage = "goodbye";
var booleanVar = true;
var booleanVar2 = false;

function setup() {
console.log(num);
console.log("num + num2=" + (num + num2));
console.log(num * num2);
console.log(num/num2);
console.log(message + anotherMessage);
console.log(message + " " + anotherMessage)
console.log(booleanVar);
console.log(message + trex);
    //This is not going to work
console.log(message * trex);
    
If you want to do more stuff
this is a multi line comment


var message2 = "This only works in the setup";
console.log(message2);
    
    
}

function draw() {
  console.log(num);
    var message3 ="This only works in the draw";
}
*/
var mouthX = 25;
var mouthY = 250;
var mouthW = 400;
var mouthH = 60
var eye1X = 70;
var eye1Y = 70;
var eye2offset = 300;
var pupiloffset =20;


function setup () {
    createCanvas(500,400);
    background(255,255,0);
    
    console.log("width:" + width + " " + "height:" + height)
    
}

function draw () {
   noStroke();
    //eye1
    // x, y, width, height
    fill(255);
    ellipse(eye1X,eye1Y,100,100);
    
    fill(0,0,255)
    ellipse(eye1X,eye1Y + pupiloffset,50,50);
    
    //eye2
    fill(255)
    ellipse (eye1X + eye2offset,eye1Y,100,100);
    
    fill(0,0,255);
    ellipse (eye1X + eye2offset,eye1Y + pupiloffset,50,50);
    
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
    
     fill('red');
    arc(width/2 + 100,300,100,100,0,PI);
   

    
}
function mousePressed(){
        background('blue');
        
    }