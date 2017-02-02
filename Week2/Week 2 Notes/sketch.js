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

function setup () {
    createCanvas(600,400);
    background(255,255,0);
    
    console.log("width:" + width + " " + "height:" + height)
    
}

function draw () {
    // x, y, width, height
    ellipse(70,70,100,100);
    
    ellipse(width/2,height/2,50,50);
    
    rect(mouthX,mouthY,mouthW,mouthH);
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
    
}