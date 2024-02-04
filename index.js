rollDice();

document.querySelector("button").addEventListener("click", rollDice);

function rollDice(){
  resetDice();
  var player1Score = Math.floor(Math.random() * 6 + 1);
  var player2Score = Math.floor(Math.random() * 6 + 1);

  console.log("Player 1 rolled: " + player1Score);
  console.log("Player 2 rolled: " + player2Score);

  if (player1Score > player2Score) {
    document.querySelector(".win-msg").innerHTML = "<h1>Player 1 Wins!</h1>";
  }
  else if (player2Score > player1Score) {
    document.querySelector(".win-msg").innerHTML = "<h1>Player 2 Wins!</h1>";
  }
  else {
    document.querySelector(".win-msg").innerHTML = "<h1>It's a Tie!</h1>";
  }

  setDice(".player-1", player1Score);
  setDice(".player-2", player2Score);
}

function setDice(player, score){
  if (score == 1){
    setConfig1(player);
    console.log("Setting to config1");
  }
  if (score == 2){
    setConfig2(player);
  }
  if (score == 3){
    setConfig3(player);
  }
  if (score == 4){
    setConfig4(player);
  }
  if (score == 5){
    setConfig5(player);
  }
  if (score == 6){
    setConfig6(player);
  }
}

function setConfig1(player){
  dots = document.querySelectorAll(player + " .dot");
  for (var i = 0; i < dots.length; i++){
    if (i != 6) { // set all dots but the center to invisible
      dots[i].classList.add("invisible");
    }
  }
}

function setConfig2(player){
  dots = document.querySelectorAll(player + " .dot");
  for (var i = 0; i < dots.length; i++){
    if (i != 0 && i != 5) { // set all dots but the top-left/right to invisible
      dots[i].classList.add("invisible");
    }
  }
}

function setConfig3(player){
  dots = document.querySelectorAll(player + " .dot");
  for (var i = 0; i < dots.length; i++){
    if (i != 0 && i != 5 && i != 6) { // set all dots but the top-left/right to invisible
      dots[i].classList.add("invisible");
    }
  }
}

function setConfig4(player){
  dots = document.querySelectorAll(player + " .dot");
  for (var i = 0; i < dots.length; i++){
    if (i == 1 || i == 4 || i == 6) {
      dots[i].classList.add("invisible");
    }
  }
}

function setConfig5(player){
  dots = document.querySelectorAll(player + " .dot");
  for (var i = 0; i < dots.length; i++){
    if (i == 1 || i == 4) {
      dots[i].classList.add("invisible");
    }
  }
}

function setConfig6(player){
  dots = document.querySelectorAll(player + " .dot");
  for (var i = 0; i < dots.length; i++){
    if (i == 6) {
      dots[i].classList.add("invisible");
    }
  }
}

function resetDice(){
  console.log("resetting dice");
  dots = document.querySelectorAll(".dot");
  for (var i = 0; i < dots.length; i++){
      dots[i].classList.remove("invisible");
  }
}
