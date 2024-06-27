const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

updateScoreElement();

function playGame(playerMove){
    const ComputerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'scissors'){
        if(ComputerMove === 'rock'){
            result = 'You lose.';
        }else if(ComputerMove === 'paper')
            result = 'You win.';
        else{
            result = 'Tie.';
        }
    }else if(playerMove === 'paper'){
        if(ComputerMove === 'rock'){
        result = 'You win.';
        }else if(ComputerMove === 'paper'){
            result = 'Tie.';
        }else if(ComputerMove === 'scissors'){
            result = 'You lose.';
        }
    }else if(playerMove === 'rock'){
        if(ComputerMove === 'rock'){
        result = 'Tie.';
        }else if(ComputerMove === 'paper'){
            result = 'You lose.';
        }else if(ComputerMove === 'scissors'){
            result = 'You win.';
        }
    }

    if(result === 'You win.'){
        score.wins += 1;
    }else if(result === 'You lose.'){
        score.losses += 1;
    }else if(result === 'Tie.'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${ComputerMove}-emoji.png" class="move-icon"> Computer`;

//                 alert(`You choose ${playerMove}. Computer Choose ${ComputerMove}. ${result} 
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let ComputerMove = ''; 
    if(randomNumber >=0 && randomNumber <1/3){
        ComputerMove = 'rock';
    }else if(randomNumber >=1/3 && randomNumber < 2/3){
        ComputerMove = 'paper';
    }else if(randomNumber >= 2/3 &&     randomNumber < 1){
        ComputerMove = 'scissors';
    }
    return ComputerMove;
}