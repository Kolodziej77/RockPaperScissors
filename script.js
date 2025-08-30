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
    userHeader.textContent = 'You chose: ' + `${yourChoice}`;
    computerHeader.textContent = 'Computer chose: ' + `${computerChoice}`;

    if(yourChoice === computerChoice){
        console.log('It\'s a tie');
        changeResult.textContent = 'It\'s a tie';
        changeResult.style.color = 'black';
        return 0;
    }

    switch(yourChoice){
        case 'rock':
            if(computerChoice === 'paper'){
                console.log('You lost this round');
                loseStyle('You lost this round');
                return -1;
            }
            console.log('You win this round');
            winStyle('You win this round');
            return 1;
        
        case 'paper':
            if(computerChoice === 'scissors'){
                console.log('You lost this round');
                loseStyle('You lost this round');
                return -1;
            }
            console.log('You win this round');
            winStyle('You win this round');
            return 1;

        case 'scissors':
            if(computerChoice === 'rock'){
                console.log('You lost this round');
                loseStyle('You lost this round');
                return -1;
            }
            console.log('You win this round');
            winStyle('You win this round');
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

        roundHeader.textContent = 'Round ' + `${currentRound + 1}`;
        console.log('------- Round ' + (currentRound + 1) + ' -------');
        let computerSelection = computerChoice();
        const roundResult = oneRound(yourChoice, computerSelection);
        if(roundResult === 1){
            yourScore++;
            userPoints.textContent = yourScore;
        }else if(roundResult === -1){
            computerScore++;
            computerPoints.textContent = computerScore;
        }
        console.log('You: ' + yourScore + ' | Computer: ' + computerScore);
        currentRound++;

        if(currentRound >= rounds){
            console.log('------- Final result -------');
            if(yourScore > computerScore){
                console.log('You won');
                winStyle('You won');
            }else if(yourScore < computerScore){
                console.log('You lost');
                winStyle('You lost');
            }else{
                console.log('It\'s a tie');
                winStyle('It\'s a tie');
            }

            buttons.forEach(button => {
                button.disabled = true;
            })
            return;
        }        
    }   
}

function winStyle(str){
    changeResult.textContent = `${str}`;
    changeResult.style.color = 'green';
}

function loseStyle(){
    changeResult.textContent = 'You lost this round';
    changeResult.style.color = 'red';  
}

const buttons = document.querySelectorAll('#rock, #paper, #scissors');
const newGameBtn = document.querySelector('#newGameBtn');
const infoHeader = document.querySelector('#infoHeader');
const changeResult = document.querySelector('#changeResult');
const userPoints = document.querySelector('#userPoints');
const computerPoints = document.querySelector('#computerPoints');
const userHeader = document.querySelector('#userChoice');
const computerHeader = document.querySelector('#computerChoice');
const roundHeader = document.querySelector('#rounds');
let playRound;

newGameBtn.addEventListener('click', () => {
    infoHeader.textContent = 'Choose Rock, Paper, or Scissors';
    userPoints.textContent = 0;
    computerPoints.textContent = 0;
    changeResult.textContent = '';

    buttons.forEach(button => {
        button.disabled = false;
    })    
    playRound = playGame();
});

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id);
    });   
});

