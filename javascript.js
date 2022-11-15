
// generate random number between 0-2 and return rock,paper or scissors 
function getComputerChoice() {

    let randomNum = Math.floor(Math.random()*3);
    let output = '';

        switch(randomNum) {
            case 0:
                output='rock';
                break;
            case 1:
                output='paper';
                break;
            case 2:
                output='scissors';
                break;            
        }

    return output;
}

//Plays a single round of rock-paper-scissors
function playRound(playerSelection, computerSelection) {

    console.log(`Player = ${playerSelection} || Computer = ${computerSelection}`);

    if(playerSelection===computerSelection){
        console.log(`It's a tie! ${playerSelection} is equal to ${computerSelection}`);
        return;
    } else {

    /*   
        if(playerSelection === 'rock' && computerSelection === 'scissors'){            
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return `You lose! ${computerSelection} beats ${playerSelection} `;
            }
        

        if(playerSelection === 'paper' && computerSelection === 'rock'){            
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return `You lose! ${computerSelection} beats ${playerSelection} `;
            }
        

        if(playerSelection === 'scissors' && computerSelection === 'paper'){            
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return `You lose! ${computerSelection} beats ${playerSelection} `;
            }
    }*/
       
        switch(playerSelection) {
            case 'rock':
                switch(computerSelection) {
                    case 'paper':
                        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                        return 0;
                    break;
                    case 'scissors':
                        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                        return 1;
                    break;
                }
            break;

            case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                        return 1;
                    break;                  
                    case 'scissors':
                        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                        return 0;
                    break;
                }
            break;
                
            case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                        return 0;
                    break;
                    case 'paper':
                        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                        return 1;
                    break;
                }
            break;
           
        } // end if playerSelection switch

    } // end of else

} // end of playRound function

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i=1; i<=5; i++){

        console.log(`ROUND ${i} !!`);

        const playerSelection = prompt('Choose rock,paper or scissors:').toLowerCase();
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection,computerSelection);
        
        if(result === 1){
            playerScore++;
        }else if(result ===0) {
            computerScore++;
        }

    }

    console.log(`FINAL SCORES: PLAYER = ${playerScore} || COMPUTER=${computerScore}`);

    if(playerScore > computerScore) {
        console.log(`THE PLAYER WINS!`)
    } else if (computerScore > playerScore) {
            console.log(`THE COMPUTER WINS!`)
        } else {
            console.log(`IT'S A TIE!`)
        }
   
}

game();


    





    




