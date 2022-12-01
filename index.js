var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "bablu",
    score: 3,
  },

  {
    name: "virat",
    score: 4,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "odisha"
}, {
  question: "My favorite superhero would be? ",
  answer: "ironman"
},
 {
   question: "what is my favourite sport?",
   answer:"football"
 },   
{
  question:"what is my hobby?",
  answer: "photography"
},
{
  question: "What i do as a profession? ",
  answer: "webdeveloper"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "  Do you know Soumya very Well?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();