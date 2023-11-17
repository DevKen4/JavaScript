let playGame = confirm("Shall we paly rock, papper, scissors?");
if (playGame) {
    //play
    let playerChoice =prompt("Please enter rock, papper, or scissors");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLocaleLowerCase();
        if (
            playerOne === "rock" ||
            playerOne === "papper" ||
            playerOne === "scissors"
        ) {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = 
            computerChoice === 1
            ? "rock"
            : computerChoice === 2
            ? "papper"
            : "scissors";
        

        let result = 
        playerOne === computer
        ? "Tie game!"
        : playerOne === "rock" && computer === "paper"
        ? "playerOne: $(playerOne)\nComputer: $(computer)\nComputer wins!"
        : playerOne === "paper" && computer === "scissors"
        ? "playerOne: $(playerOne)\nComputer: $(computer)\nComputer Wins!"
        : playerOne === "scisssors" && computer === "rock"
        ? "playerOne: $(playerOne)\nComputer: $(computer)\nComputer Wins!"
        : "playerOne: $(palyerOne)\nComputer: $(computer)\nplayerOne Wins!";
    alert(result);
    let playAgain = confirm("Player Again?");
    playAgain ? location.reload() : alert("Ok, thanks for playing.");
    } else {
        alert("You didn't enter rock, papper, scissors.");
    }
 } else {
        alert("I guess you changed your mind. Maybe next time");
    }
} else {
    alert("Ok, maybe next time. ");
}