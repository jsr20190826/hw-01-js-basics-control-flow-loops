/***********

Problem 1:

Write a program that uses a loop to print out (using console.log()) the multiplication table (12 levels) of a provided number

Variables Required (feel free to add your own variables if needed):
baseNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    baseNumber = 2

   Result:
    0
    2
    4
    6
    8
    10
    12
    14
    16
    18
    20
    22
    24
************/
console.log('Problem 1:')

// Add your code below this line
const baseNumber = 2

//Used for loop to go through 12 levels
for(i = 0; i <= 12; i++) {
  //Each level multiplies by the base number and prints results to console
  console.log(baseNumber * i)
}
// Add your code above this line

console.log('')
console.log('-----------------')

/***********

Problem 2:

Write a program that prints (using console.log()) the largest number in a given array

Variables Required (feel free to add your own variables if needed):
numbers (array)
currentLargestNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    values = [57, 13, 4, 38]

   Result: 57

2. Given the following:
    values = [3, 48, 29, 12, 18]

   Result: 48

************/

console.log('Problem 2:')

// Add your code below this line

//Creating array and largest number variables
const numbers = [3, 48, 29, 12, 18]
let currentLargestNumber = 0


//Using for each loop and applying to numbers array
numbers.forEach(function(number) {

  //Us an if statement to check the currentLargestNumber variable
  if(currentLargestNumber < number ) {
    //If the variable is not the largest, it reassigns the variable to the new larger number
    currentLargestNumber = number
  }
})

console.log(currentLargestNumber)

// Add your code above this line

console.log('')
console.log('-----------------')

/***********

Problem 3:

Write a program that prints out (using console.log()) the winner of a rock paper scissors game between two players

- if the playerA chooses scissors and playerB chooses rock, playerB wins
- if the playerA chooses scissors and playerB chooses scissors, game is a tie
- if the playerA chooses paper and playerB chooses rock, playerA wins
- if the playerA chooses rock and playerB chooses paper, playerB wins
- etc (program should account for all available scenarios)

Variables Required (feel free to add your own variables if needed):
playerAChoice (string)
playerBChoice (string)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    playerAChoice = "rock"
    playerBChoice = "paper"

   Result: "playerB wins"

2. Given the following:
    playerAChoice = "scissors"
    playerBChoice = "scissors"

   Result: "tie"

3. Given the following:
    playerAChoice = "scissors"
    playerBChoice = "paper"

   Result: "playerA wins"
************/

console.log('Problem 3:')

// Add your code below this line

//Creating necessary variables
let playerAChoice = 'Rock'
let playerBChoice = 'Paper'

//Function for generating numbers 1-3
function randomNumberGenerator() {
  return Math.floor(Math.random() * 3) + 1
}

//Function for assigning a number to Rock, Paper or Scissors
function assignChoice() {
  //Assigns the randomNumberGenerator function to randomNumber variable
  let randomNumber = randomNumberGenerator()
  //If statement to assign number 1-3 to a game choice
  if(randomNumber === 1) {
    return 'Rock'
  } else if (randomNumber === 2) {
    return 'Paper'
  } else {
    return 'Scissors'
  }
}

//Function for the game
function theGame() {
  //Assigns the random choice to each player
  let playerAChoice = assignChoice()
  let playerBChoice = assignChoice()

  console.log('Players get ready! Make your choices.')

  //Prints out the results to verify winner
  console.log(`Player A chooses: ${playerAChoice}`)
  console.log(`Player B chooses: ${playerBChoice}`)

  //If statement to determine all choice options and results
  if (playerAChoice === playerBChoice) {
    console.log('This is a tie game.')
  } else if (playerAChoice === 'Rock' && playerBChoice === 'Paper') {
    console.log('Player B Wins!')
  } else if (playerAChoice === 'Rock' && playerBChoice === 'Scissors') {
    console.log('Player A Wins!')
  } else if (playerAChoice === 'Paper' && playerBChoice === 'Rock') {
    console.log('Player A Wins!')
  } else if (playerAChoice === 'Paper' && playerBChoice === 'Scissors') {
    console.log('Player B Wins!')
  } else if (playerAChoice === 'Scissors' && playerBChoice === 'Rock') {
    console.log('Player B Wins!')
  } else if (playerAChoice === 'Scissors' && playerBChoice === 'Paper') {
    console.log('Player A Wins!')
  }
}

//Starts the game
theGame()

// Add your code above this line

console.log('')
console.log('-----------------')
