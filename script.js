function getComputerChoice(){
    //generate a random number
    const randomNumber = Math.random();
    // get a rock paper or scissors base on random number
    let result = "unknown"
    if (randomNumber <= 0.3 && randomNumber >= 0){
        result = "rock";
    }else if (randomNumber >= 0.4 && randomNumber <= 0.6){
        result = "scissors";
    }else{
        result = "paper";
    }
    // return the result
    return result;
}

let ComputerScore = 0;
let humanScore = 0;

function getHumanChoice() {
    let userChoice = prompt("choice : rock , paper , scissors ?");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function showWinner(winner, losser, winloss = 'win'){
    console.log(`You ${winloss}! ${winner} beats ${losser}`)
}
//scores

function playRound(humanChoice, computerChoice){
    // if tie stop no changes
    if(humanChoice == computerChoice){
        console.log(`Tie! your choice: ${humanChoice} and computer : ${computerChoice}`)
        humanScore++;
        ComputerScore++;
    }
    // if human = rock win if computer = scissor else loss
    else if (humanChoice == 'rock'){
        if (computerChoice == 'scissors'){
            showWinner(humanChoice, computerChoice)
            humanScore++;
        }else {showWinner(computerChoice, humanChoice, 'lose')
            ComputerScore++;
        }
    }
    // if human = paper win id comp = rock else loss
    else if (humanChoice == 'paper'){
        if (computerChoice == 'rock'){
            showWinner(humanChoice, computerChoice)
            humanScore++;
        }else{
            showWinner(computerChoice, humanChoice, 'lose')
            ComputerScore++;
        }
    }
    // if human = scissors win if comp = paper else loss
    else if (humanChoice == 'scissors'){
        if (computerChoice == 'paper'){
            showWinner(humanChoice, computerChoice)
            humanScore++;
        }else {(showWinner(humanChoice, computerChoice, 'lose'))
            ComputerScore++;
        }
    }
}

function playGame(){
    let round = 1;
    humanScore = 0;
    ComputerScore = 0;
    while(round <= 5){
        console.log(`round: ${round}`)
        playRound(getHumanChoice(),getComputerChoice());
        console.log(humanScore,ComputerScore)
        round++;
    }
}

playGame();