var player = new Player()

class Quiz {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      //var player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      question = new Question()
      question.display();
    }
  }
  

    play(){
      Question.hide;
  
      textSize(30)
      textAlign(CENTER)
      fill("grey")
      text("Results!",width/2,height/4)
  
      Player.getPlayerInfo();
  
      if(allPlayers!== undefined){
         var display_position = 150
        for(var plr in allPlayers){ 
          display_position+=50
  
          if(plr === "player" + player.index){
            fill("blue")
          } else {
            fill("black")
          }
  
          text (allPlayers[plr].name + ": ",120,display_position)
          }
        }
      }
    }
