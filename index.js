let playerScore = 0;
let computerScore = 0;

// player choices
document.getElementById('btn rock').onclick = rock;
document.getElementById('btn scissors').onclick = scissors;
document.getElementById('btn paper').onclick = paper;

 // computerChoices
const computerChoices = ["ComputerRock", "computerPaper", "computerScissors"]

function computerPlay() {
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
 }


function rock () {
    const computerSelection = computerPlay()
    if (computerSelection == "computerScissors") {
        alert ("You win!")
        ++playerScore;
        document.getElementById('player score').innerHTML = playerScore
        document.getElementById('computer score').innerHTML = computerScore
    }
    else if (computerSelection == "computerPaper") {
        alert ("You lose!")
        ++computerScore;
        document.getElementById('player score').innerHTML = playerScore
        document.getElementById('computer score').innerHTML = computerScore
        }
    else if (computerSelection == "computerRock") {
        alert ("Tie!")
        document.getElementById('player score').innerHTML = playerScore
        document.getElementById('computer score').innerHTML = computerScore
        }
        finalResult()
    }

function scissors () {
    const computerSelection = computerPlay()
    if (computerSelection == "computerPaper") {
        ++playerScore;
        alert ("You win!")
        document.getElementById('player score').innerHTML = playerScore
        document.getElementById('computer score').innerHTML = computerScore
    }
    else if (computerSelection == "computerRock") {
        ++computerScore;
        alert ("You lose!")
        document.getElementById('player score').innerHTML = playerScore
        document.getElementById('computer score').innerHTML = computerScore
        }
    else if (computerSelection == "computerScissors") {
        alert ("Tie!")
        document.getElementById('player score').innerHTML = playerScore
        document.getElementById('computer score').innerHTML = computerScore
        }
        finalResult()
    }


function paper () {
    const computerSelection = computerPlay()
    if (computerSelection == "computerScissors") {
        ++playerScore;
        alert ("You win!")
        document.getElementById('player score').innerHTML = playerScore
        document.getElementById('computer score').innerHTML = computerScore
    }
    else if (computerSelection == "computerRock") {
        ++computerScore;
        alert ("You lose!")
        document.getElementById('player score').innerHTML = playerScore
        document.getElementById('computer score').innerHTML = computerScore
        }
    else if (computerSelection == "computerPaper") {
        alert ("Tie!")
        document.getElementById('player score').innerHTML = playerScore
        document.getElementById('computer score').innerHTML = computerScore
        }
        finalResult()
    }

function finalResult () {
    if (playerScore === 5){
        alert("You won the Game!")
        document.getElementById('result').innerHTML = "Congratulations! You've won!"
    }
    if (computerScore === 5){
        alert("You lost the Game!")
        document.getElementById('result').innerHTML = "Sorry, you've lost!"
    }
}



