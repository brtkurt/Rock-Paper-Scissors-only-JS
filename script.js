function computerPlay() {   // Computer makes selection//
    let key = Math.floor(Math.random() * 3);
    switch (key) {
          case 0:
               return "ROCK";
          case 1 :
               return "PAPER";
          case 2:
              return "SCISSORS";
          default:
              alert("Error");
                  break;
    }
}
function playerPlay() {     //Player makes selection//
   let playerMove= prompt("Please choose one. / Rock,Paper or Scissors");
   playerMove=playerMove.toUpperCase();
   if (playerMove=="ROCK") {
      return playerMove;
   } else if (playerMove=="PAPER") {
      return playerMove;
   } else if (playerMove=="SCISSORS") {
      return playerMove;
   }else{
     return 1;
   }
}
function playRound(playerSelection,computerSelection) {  // Computer and Player comparison//
    if (playerSelection==computerSelection) {
        return "DRAW";
   }
    else if (playerSelection=="ROCK") {
         if (computerSelection=="SCISSORS") return true;
         else return false;
    }
   else if (playerSelection=="PAPER") {
         if (computerSelection=="ROCK") return true;
         else return false;
    }
   else if (playerSelection=="SCISSORS"){
         if (computerSelection=="PAPER") return true;
         else return false;
   }
   else if (playerSelection==computerSelection) {
         return "DRAW";
   }
}
let computerSelection= "nothing"
let playerSelection= "nothing"

function game(playerSelection,computerSelection) { // MAIN GAME//
let computerScore=0;
let playerScore=0;
for (let i = 0; i < 5; i++) {
    console.log("----------ROUND "+ (i+1) + "--------------")
    let playerSelection = playerPlay();
    while (playerSelection==1) {
        playerSelection=playerPlay();
    }
    console.log("PlayerSelection is " +playerSelection);
    let computerSelection = computerPlay();
    console.log("ComputerSelection is " +computerSelection);

    if (playRound(playerSelection,computerSelection) === true) {
        playerScore++;
        console.log(`Player won!      Player : ${playerScore} Computer : ${computerScore}`);
    } else if(playRound(playerSelection,computerSelection) === false){
        computerScore++
        console.log(`Computer won!     Player : ${playerScore} Computer : ${computerScore}`);
    }else if(playRound(playerSelection,computerSelection) === "DRAW"){
        console.log("DRAW!       Player : " + playerScore + " Computer : " + computerScore);
    }
}
   console.log("---------WINNER------------")
   if (playerScore>computerScore) {
       console.log("Player WON!!!")
    } else if(playerScore<computerScore ){
        console.log("Computer WON!!!")
    } else{
        console.log("DRAW!!!")
    }
}

game(playerSelection,computerSelection);

