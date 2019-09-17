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
const baseNumber = 2;

for (i = 0; i <= 12; i++) {
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
let numbers = [3, 48, 29, 12, 18]

let currentLargestNumber = numbers.reduce(function (a, b) {
    return Math.max(a, b)
});

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
let userChoice = prompt("Which one do you choose, rock, paper, or scissors?")
let computerChoice = Math.random()
if (computerChoice < 0.34) {
    computerChoice = "rock"
} else if (computerChoice <= 0.67) {
    computerChoice = "paper"
} else {
    computerChoice = "scissors"
}

let compare = function (player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return "the result is a tie"
    }
    if (player1Choice === "rock") {
        if (player2Choice === "scissors") {
            return "rock wins"
        } else {
            return "paper wins"
        }
    }
    if (player1Choice === "paper") {
        if (player2Choice === "rock") {
            return "paper wins"
        } else {
            return "scissors wins"
        }
    }
    if (player1Choice === "scissors") {
        if (player2Choice === "rock") {
            return "rock wins"
        } else {
            return "scissors wins"
        }
    }
};

console.log(compare(userChoice, computerChoice));
// Add your code above this line

console.log('')
console.log('-----------------')