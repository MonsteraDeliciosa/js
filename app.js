'use strict';

var app = {
    init: function() {
        this.letsPlay();
    },
    letsPlay: function() {
      var userChoice = prompt("Do you choose rock, paper or scissors?");
      var computerChoice = (Math.random()) * 3;
      if (computerChoice <= 1) {
          computerChoice = "rock";
      } else if (computerChoice <= 2) {
          computerChoice = "paper";
      } else {
          computerChoice = "scissors";
      }
      console.log("Computer: " + computerChoice);

      var letsPlay = function(choice1, choice2) {
          if (choice1 === choice2) {
              return "Computer chose " + computerChoice + ". You chose " + userChoice + ". The result is a tie!";
          } else if (choice1 === "paper") {
              if (choice2 === "rock") {
                  return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU WIN!";
              } else {
                  return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU LOSE!";
              }
          } else if (choice1 === "rock") {
              if (choice2 === "scissors") {
                  return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU WIN!";
              } else {
                  return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU LOSE!";
              }
          } else if (choice1 === "scissors") {
              if (choice2 === "paper") {
                  return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU WIN!";
              } else {
                  return "Computer chose " + computerChoice + ". You chose " + userChoice + ". YOU LOSE!";
              }
          }
      };
      letsPlay(userChoice, computerChoice);
    }
};

$(document).ready(function() {
    app.init();
});
