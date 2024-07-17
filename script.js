"use strict"


const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20

document.querySelector(".number").textContent=secretNumber

document.querySelector(".check").addEventListener("click", function(){
    let guess = Number(document.querySelector(".guess").value);

    if(!guess){
        document.querySelector(".message").textContent ="🚫 Number not found."
    }else if(guess === secretNumber ){
        document.querySelector(".message").textContent="Success! you guessed right.";
        document.body.style.backgroundColor="#60b347"

    }else if(guess > secretNumber){
        document.querySelector(".message").textContent="Too high";
        score--
        document.querySelector(".score").textContent=        score
    }else if(guess < secretNumber){
        if(score>1){
            document.querySelector(".message").textContent = "Too low.";
        score--
        document.querySelector(".score").textContent=score
        }else{
            document.querySelector(".message").textContent="You lost the game!";
            document.querySelector(".score").textContent=0
        }
    }
    
})