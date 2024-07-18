"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

// creating functions
const displayMessage=(message)=>{
    document.querySelector(".message").textContent=message
}
const displayScore=(score)=>{
    document.querySelector(".score").textContent = score;
}

// click events
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  // when it is empty
  if (!guess) {
    displayMessage("🚫 Number not found.");

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("Success! you guessed right.")
      
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore += score;
      document.querySelector(".highscore").textContent = score;
    }
    
  } else if(guess !== secretNumber){
    displayMessage(guess>secretNumber?"Too high":"Too low")
    score--;
    displayScore(score)
  } else {
      displayMessage("You lost the game!");
      displayScore(0)
    }
});

// again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  highScore = score;

  displayMessage("Start guessing...");
  displayScore(score)
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  // document.querySelector(".number").style.width="15rem"
  document.querySelector(".highscore").textContent=highScore
});
