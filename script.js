function computerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);
    if(randomChoice == 0){
        return 'rock';
    }else if( randomChoice == 1){
        return 'paper';
    }
    return 'scissors';
}

function yourChoice(){
    let yourChoice;
    while(true){
        yourChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
        if(yourChoice === 'rock' || yourChoice === 'paper' || yourChoice === 'scissors'){
            return yourChoice;
        }
        alert('Invalid choice. Please try again');
    }
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
    let rounds;

    while(true){
        let input = prompt('How many rounds do you want to play? (1-10)');
        rounds = parseInt(input, 10);

        if(Number.isInteger(rounds) && rounds >= 1 && rounds <= 10){
            break;
        }
        alert('Invalid input. Please enter a valid number (1-10)');
    }

    for(let i = 0; i < rounds; i++){
        console.log('------- Round ' + (i + 1) + ' -------');
        let yourSelection = yourChoice();
        let computerSelection = computerChoice();
        const roundResult = oneRound(yourSelection, computerSelection);

        if(roundResult === 1){
            yourScore++;
        }else if(roundResult === -1){
            computerScore++;
        }
        console.log('You: ' + yourScore + ' | Computer: ' + computerScore);
    }

    console.log('------- Final result -------');
    if(yourScore > computerScore){
        console.log('You won');
    }else if(yourScore < computerScore){
        console.log('You lost');
    }else{
        console.log('It\'s a tie');
    }
    

}



