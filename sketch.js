var gameState = 0;
var playerCount;
var allPlayers;
var answer;
var database;
var quiz;
var player1,player2;
var question, quiz;


function setup(){
  createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  player1 = new Player()
  player2 = new Player()
}


function draw(){
  background("cyan");

  console.log("x: " + mouseX + "        y:" + mouseY)

  if(playerCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  answer = Question.input2

  if(gameState === 1){

    for(var i = 164; i <= 266;i = i + 50){
      line(50,i,800,i)
    }
  /*if(player1.answer === 0){
   fill("green")
   text("Correct",700,200)

  }*/
  
  if(player1.answer !== 0){
    fill("red")
    text("Wrong",700,200)
  } else {
    fill("green")
    text("Correct",700,200)
  }

  /*if(player2.answer === 0){
    fill("green")
    text("Correct",700,250)

  }*/
  
  if(player2.answer !== 0){
    fill("red")
    text("Wrong",700,250)
  } else {
    fill("green")
    text("Correct",700,250)
  }
}
}
