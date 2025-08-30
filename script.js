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

