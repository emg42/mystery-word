const fs = require('fs')
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");


// First need an array for the mystery word
// I need dashes for the mystery word Array

// I need to loop through the mystery word array to see if guessed letter is equal to each one of those letters
let mysteryWord = words[Math.floor(Math.random() * words.length)];
let incorrectArr= [];
let guesses = 8;
let word = makeDashes();

console.log(mysteryWord);

function makeDashes(){
let displayArr =[];
for (var chr in mysteryWord) {
  displayArr.push('_')
}
return displayArr;
}

function getWord () {
  return word
}

function getGuesses() {
  return guesses;
}



function addGuess (guess) {
  let isCorrect = false;
 for (let i = 0; i < mysteryWord.length; i++) {
   if (mysteryWord[i] === guess) {
     word[i] = guess;
     isCorrect = true;
   }
   if(incorrectArr[i] === guess) {
     isCorrect = true;
   }
 }
 if (isCorrect === false) {
   incorrectArr.push(guess)
   guesses -= 1;
 }
}




module.exports =

  {
    makeDashes,
    getWord,
    getGuesses,
    addGuess,
    incorrectArr,
    mysteryWord


  }
