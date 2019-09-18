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
console.log('')
// Add your code below this line
 let baseNumber = 2


 // loop to run 12 multiples of the baseNumber
 for (let i = 1; i < 13; i++){
  let num = baseNumber * i
  console.log(num)
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
console.log('')
// Add your code below this line

const numbers = [57, 13, 4, 38]
const numbers1 = [3, 48, 29, 12, 18]

//finds highest number in the array
let currentLargestNumber = numbers.reduce(function(a, b) {
    return Math.max(a, b);
});
let currentLargestNumber1 = numbers1.reduce(function(a, b) {
    return Math.max(a, b);
});



console.log(currentLargestNumber)
console.log(currentLargestNumber1)





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
console.log('')
let playerAChoice = Math.random()
let playerBChoice = Math.random()


console.log(playerAChoice)
//generates playerA's decsion
 if (playerAChoice <0.333){
     playerAChoice = "rock"
 }else if(playerAChoice <=0.666){
     playerAChoice = "paper"
 }
 else{
     playerAChoice = "scissors"
 }


//generates playerB's decsion
if (playerBChoice <0.333){
    playerBChoice = "rock"
}else if(playerBChoice <=0.666){
    playerBChoice = "paper"
}
else{
    playerBChoice = "scissors"
}


console.log(`Player One chooses ${playerAChoice} and Player Two chooses ${playerBChoice}.`)



//function for winning conditions
let compare = function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "Player One wins"
        }
        else{
            return "Player Two wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "Player One wins";
        }
        else{
            return "Player Two wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "Player Two wins";
        }
        else{
            return "Player One wins";
        }
    }
};
console.log('')
// calls compare function with the players choice
console.log(compare(playerAChoice,playerBChoice))




// Add your code above this line

console.log('')
console.log('-----------------')
