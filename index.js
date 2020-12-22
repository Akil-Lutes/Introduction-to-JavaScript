/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/
let votingAge = 18;
if (votingAge >= 18 ) {
  console.log(true);
}


/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/

let num1 = 10;
let num2 = 15;

if (num1 < num2) {
  num1 = 5;
  console.log(num1);
}



/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

let numStr = parseInt("1999");
console.log(numStr);



/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b){
  console.log(a *b)
  return a * b;
  }

multiply(3, 4);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

const doggieYears = 7;
let humanYears;

function dogYears(humanYears){
    return humanYears * doggieYears;
}

console.log(dogYears(2));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(dogAge, weight){
  let doggieAge = dogAge / 12;
    if (doggieAge >= .16 && doggieAge < .33 && weight >= 1) {
      return (weight * .10);
    } else if (doggieAge >= .33 && doggieAge < .58 && weight >= 1) {
      return weight * .05;
    } else if (doggieAge >= .58 && doggieAge <= .99 && weight >= 1) {
      return weight * .04;
    } else if (doggieAge >= 1 && weight <= 5) {
      return weight * .05;
    } else if (doggieAge >= 1 && weight >= 6 && weight <=10) {
      return weight * .04;
    } else if (doggieAge >= 1 && weight > 10 && weight <= 15) {
      return weight * .03;
    } else if (doggieAge >= 1 && weight > 15) {
      return weight * .02;
    } else {
      console.log('Please enter dog age in months and weight in whole numbers for pounds');
    }      
}





/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/


/* I am using the Math.random function to randomly generate a floating point number between 0 & 1 for the getComputerChoice function. Since there three choices of rock, paper, scissors, I multiply the random number by 3. And I use the Math.floor function to round down for my 3 choices. */


/* userChoice has to be defined, so that is why I made a function. To define userChoice so it can be compared in the if statements within the game function that has two parameters */

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  }else {
    console.log('Error, not a valid answer');
  }
}

/* I am creating a function for computerChoice called getComputerChoice */


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  } 
}


/* I am creating this GAME function so I can tie the userChoice function and computerChoice function together. So I am going to create a function for the the parameters, userChoice and computerChoice */


function game(userChoice, computerChoice){
  if (userChoice === computerChoice) {
    return "it's a tie";
  } if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'you lose!';
      } else {
        return 'you win!';
      }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'you lose!';
    } else {
      return 'you win!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'you lose!';
    } else {
      return 'you win!'
    }
  }
}

/* I created functions for parameters that I wanted to use for userChoice and computerChoice. In the future, I can create functions for parameters that I would like to use. Helper functions */

function playGame() {
  const userChoice = getUserChoice('rock')
  const computerChoice = getComputerChoice()
  console.log(game('rock', computerChoice));
}

playGame();

  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

/* The formula for kilometers to miles is, kilometers * .6214. */

function miles(kilometers){
  return kilometers * .6214;
}

console.log(miles(5));



//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(centimeters){
    return centimeters * 30.48;
  }
 
  console.log(feet(5));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

/* I used the numberOfBottles parameter and assigned it to the counter variable so it can be initialized. I also set counter = counter - 1 so I could subtract by one every time the loop ran through. */

function annoyingSong(numberOfBottles){
  let bottles;
  for (counter = numberOfBottles; counter >= 1; counter = counter - 1) 
  {
      if (counter == 1) {
          bottles = 'bottle';
      } else {
          bottles = 'bottles';
      }
      console.log(`${counter} ${bottles} of soda on the wall.`);
      if (counter < 99) {
          console.log("");
          console.log(`${counter} ${bottles} of soda on the wall.`);
      }
      console.log(`${counter} ${bottles} of soda on the wall.`);
      console.log("Take one down.");
      console.log("Pass it around.");
      if (counter == 1) {
          console.log("No bottles of soda on the wall.");
      }
  }   
  }

annoyingSong(20);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/

/* I used switch and true to figure out the grade(num) number for this grades function */
  
function grade(num){
  switch (true) {
    case num >= 90:
        console.log("A");
        break;
    case num >= 80:
        console.log("B");
        break;
    case num >= 70:
        console.log("C");
        break;
    case num >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
}
  }
  
grade(100);
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    //console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
