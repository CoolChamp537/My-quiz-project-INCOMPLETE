class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Name")
    this.input2 = createInput("Selected Option No");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option0 = createElement('h4');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){

    if(gameState === 0){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter?" );
    this.question.position(150, 80);
    this.option0.html("0: Envelope" );
    this.option0.position(150, 100);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 120);
    this.option2.html("2: Estimate " );
    this.option2.position(150, 140);
    this.option3.html("3: Example" );
    this.option3.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    
  }

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      player.name = this.input1.value();
      player.answer = this.input2.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    });
  }

  hide(){
    this.input1.hide()
    this.input2.hide()
    this.button.hide()
  }

  play(){
    Player.getPlayerInfo();

    if(allPlayers!== undefined){
       var display_position = 130
      for(var plr in allPlayers){ 
        display_position+=50

        if(plr === "player" + player.index){
          fill("blue")
        } else {
          fill("black")
        }

        text (allPlayers[plr].name + ":" +allPlayers[plr].distance,120,display_position)
      }
    }
  }

}
