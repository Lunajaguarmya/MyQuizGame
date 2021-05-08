class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();

    background("Blue")
    fill(0);
    textSize(30);
    text("Result of the Quiz",340,50);
    text("Ready?",320,65);
    contest.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fil("Green");
      textSize(20);
      text("you did well if you didn't you'll get them next time!",130,230)
      for(var plr in allContestands){
        debugger;
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
        fill("Green")
        else 
        fill("red");

        display_Answers+=30;
        textSize(20);
        text (allContestants[plr].name + ": "+ allContestants[plr].answers, 250,display_answers)  
      }
      

     }

  

    
    
  }

}
