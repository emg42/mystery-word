const fs = require('fs')
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

let mysteryWord = words[Math.floor(Math.random() * words.length)];

console.log(mysteryWord)
function getWords() {
  return words;
}

function makeDashes() {
  let displayArr = [];
  for (let i = 0; i < mysterWord.length; i++) {
    displayArr.push("_");
  }
}
