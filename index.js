// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter1 uses closure, while counter2 does not. It contains a function within a function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Closure revolves around access to variables between functions within functions. Only counter1 has a function in a function, so it uses closure.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter1 would be better for something that was  cumulative. It will track the score over multiple iterations of counterMaker(), even with multiple versions. COunter2 can not keep track of scores between two players. If you tried to create multiple iterations, they would overwrite the same variable, as it is global scope. Maybe it could be used for a project/game that merely tracks binary success.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

let runs = Math.floor(Math.random() * 3);
return runs;
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numIn) { 
  let score = 0;

  for (i = 1; i <= numIn; i++) {
    score += inning();
  } 
  return score;
}

let homeTeam = (finalScore(inning, 9));
let awayTeam = (finalScore(inning, 9));

console.log(` Home Team: ${homeTeam}`,'\n',`Away Team: ${awayTeam}` )


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, numIn) {
  let score = 0;
  const inningScores = [];

  for (i = 1; i<= numIn; i++) {
    inningScores.push(score += inning())
  }
  return inningScores;
}

 let homeScores = (scoreboard(inning, 9));
 let awayScores = (scoreboard(inning, 9));

//  console.log(homeScores);
//  console.log(awayScores);
//  console.log(homeScores[0]);

 function scoreByInning(inning, numIn, homeScores, awayScores){
   let result = '';
  for (i = 1; i<= numIn; i++) {
    result += `Inning ${i}: ${homeScores[i]} - ${awayScores[i]} 
`
  }
  return result;
 }
   console.log(scoreByInning(inning, 8, homeScores, awayScores))

  //  why doesn't 9 work??


