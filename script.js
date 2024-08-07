//Rock Paper Scissors!

//Pseudocode for Computer's Choice
//There should be a function that returns one of three answers; rock, paper, or
//scissors. The way it does that is randomly since it should be playing.
//Notes:
    //Math.random() generates a random number between 0 and 1
    //This function should activate on some sort of event,like a button click.
    //For now, all it needs to do is return one of the three answers randomly

function getComputerChoice(){
    let random = Math.random()
    let computerChoice = ['rock', 'paper', 'scissors']
    if (random<=0.33){
        //this accounts for the range 0 to 0.33
        console.log(computerChoice[0])
        return computerChoice[0]
    }
    else if (random<=0.66 && random>=0.33){
        //this accounts for the range 0.33 to 0.66
        console.log(computerChoice[1])
        return computerChoice[1]
    }
    else {
        //this accounts for the remaining values
        console.log(computerChoice[2])
        return computerChoice[2]
    }
}

//Pseudocode for Human's Choice
//This will be a function that asks for the user's choice. We will be using
//the prompt method so the function will need to be able to accept one of the
//one of the three answers then store it, so it can be used in the future.
//Notes:
    //the prompt method can be used with a default value and a message to create
    //a better user experience; prompt(message, defaultValue)
function getHumanChoice(){
    let humanChoice = prompt("Rock? Paper? Scissors? Choose wisely...")
    console.log(humanChoice)
    return humanChoice
}

//Pseudocode for playing a game out of 5 rounds
//This function needs to keep track of the score and print a winner at the end
//Notes
    //Loops will be important here to make sure all 5 rounds are played
let compScore = 0
let humanScore = 0
function playGame(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice===computerChoice){
        console.log('It\'s a tie!')
    }
    else if (humanChoice==='rock'){
        if (computerChoice==='scissors'){
            console.log('You win! Rock beats scissors.')
            humanScore++
        }
        else //if(computerChoice==='paper')
        {
            console.log('You lose! Paper beats rock.')
            compScore++
        }
    }
    else if (humanChoice==='paper'){
        if (computerChoice==='scissors'){
            console.log('You lose! Scissors beats paper.')
            compScore++
        }
        else //if(computerChoice==='rock'){
        {
            console.log('You win! Paper beats rock.')
            humanScore++
        }
    }
    else if(humanChoice==='scissors'){
        if (computerChoice==='paper'){
            console.log('You win! Scissors beats paper.')
            humanScore++
        }
        else //if (computerChoice==='rock'){
        {
            console.log('You lose! Rock beats scissors.')
            compScore++
        }
    }
}

//Play 5 Rounds
for (let i=0; i<=5; i++) {
    playGame(getHumanChoice(),getComputerChoice() );
}

//Print Score and Winner
console.log('Your Score:' + humanScore)
console.log('Computer\'s Score:' + compScore)
if (humanScore>compScore){
    console.log('You beat the computer! Good job!')
}
else{
    console.log('The computer beat you:( Try again.')
}