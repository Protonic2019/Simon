var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];



function nextSequence(buttonSound) {
  var randomNumber = Math.floor(Math.random() * buttonColours.length);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(randomNumber);
  console.log(randomChosenColour);
  console.log(gamePattern);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(randomChosenColour) {
  var redSound = new Audio('sounds/red.mp3');
  var blueSound = new Audio('sounds/blue.mp3');
  var greenSound = new Audio('sounds/green.mp3');
  var yellowSound = new Audio('sounds/yellow.mp3');

  if (randomChosenColour == "red") {
    redSound.play();
  }
  if (randomChosenColour == "blue") {
    blueSound.play();
  }
  if (randomChosenColour == "green") {
    greenSound.play();
  }
  if (randomChosenColour == "yellow") {
    yellowSound.play();
  }
}
