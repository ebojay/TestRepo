var questions = ["There are 47 states in the Continental US",
  "What is the capitol of Wyoming",
  "What is the capitol of New York?",
  "What is the capitol of Utah?",
  "What is the capitol of Lousiana?"
];

var choices = [
  ["False", "True"],
  ["Atlanta", "Madison", "Cheyenne", "Portland"],
  ["Albany", "Buffalo", "New York City", "Syracuse"],
  ["Hartford", "Provo", "Salt Lake City"],
  ["Baton Rouge", "New Orleans", "Lafayette"]
];

var answers = ["False", "Cheyenne", "Albany", "Salt Lake City", "Baton Rouge"];

var qCounter = 0;

var currentAnswer = 0;

var textArea = 100;

function setup() {
    createCanvas(400, 400);

}

function draw() {
  background(255);
  fill("black");
  textAlign(CENTER);
  text(questions[qCounter], 0, 100, width, 100);

   for (var choice = 0; choice < choices[qCounter].length; choice++) {
      //console.log(choices[0][choice]);
      fill("black");
      textAlign(CENTER);
      text(choices[qCounter][choice], choice * textArea, height/2, textArea, textArea);
      text(choice+1, choice * textArea, height/2 + 20, textArea, textArea);


   }
}

function keyPressed() {
  console.log(keyCode);

  //49 == 1, 50 == 2, 51 == 3, 52 == 4
  if(keyCode == 49){
    currentAnswer = 0;
  }else if(keyCode == 50){
    currentAnswer = 1;
  }else if(keyCode == 51){
    currentAnswer = 2;
  }else if(keyCode == 52){
    currentAnswer = 3;
  }

  if(answers[qCounter] == choices[qCounter][currentAnswer]){
    console.log("Correct Answer");
  }else{
    console.log("Wrong answer");
  }

  qCounter++
  if (qCounter >= questions.length) {
    qCounter = 0;
  }
}