function computerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);
    if(randomChoice == 0){
        return 'rock';
    }else if( randomChoice == 1){
        return 'paper';
    }
    return 'scissors';
}

function oneRound(yourChoice, computerChoice){
    console.log('You chose: ' + yourChoice);
    console.log('Computer chose: ' + computerChoice);

    if(yourChoice === computerChoice){
        console.log('It\'s a tie');
        return 0;
    }

    switch(yourChoice){
        case 'rock':
            if(computerChoice === 'paper'){
                console.log('You lost this round');
                return -1;
            }
            console.log('You win this round');
            return 1;
        
        case 'paper':
            if(computerChoice === 'scissors'){
                console.log('You lost this round');
                return -1;
            }
            console.log('You win this round');
            return 1;

        case 'scissors':
            if(computerChoice === 'rock'){
                console.log('You lost this round');
                return -1;
            }
            console.log('You win this round');
            return 1;
    }
}

function playGame(){
    let yourScore = 0;
    let computerScore = 0;
    let currentRound = 0;
    let rounds;

    while(true){
        let input = prompt('How many rounds do you want to play? (1-10)');
        rounds = parseInt(input, 10);

        if(Number.isInteger(rounds) && rounds >= 1 && rounds <= 10){
            break;
        }
        alert('Invalid input. Please enter a valid number (1-10)');
    }

    return function(yourChoice){
        if(currentRound >= rounds){
            console.log('------- Final result -------');
            if(yourScore > computerScore){
                console.log('You won');
            }else if(yourScore < computerScore){
                console.log('You lost');
            }
            console.log('It\'s a tie');
            return;
        }

        console.log('------- Round ' + (currentRound + 1) + ' -------');
        let computerSelection = computerChoice();
        const roundResult = oneRound(yourChoice, computerSelection);
        if(roundResult === 1){
            yourScore++;
        }else if(roundResult === -1){
            computerScore++;
        }
        console.log('You: ' + yourScore + ' | Computer: ' + computerScore);
        currentRound++;
    }   
}

const buttons = document.querySelectorAll('#rock, #paper, #scissors');
const newGameBtn = document.querySelector('#newGameBtn');
const infoHeader = document.querySelector('#infoHeader');
let playRound;

newGameBtn.addEventListener('click', () => {
    infoHeader.textContent = 'Choose Rock, Paper or Scissors';
    playRound = playGame();
});

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id);
    });   
});

