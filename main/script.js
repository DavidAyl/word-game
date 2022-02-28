var gameWordElement = document.getElementById("gameWord");
var gameWord = "javascript";
var underScores = [];

function getUnderscores() {
  for (let i = 0; i < gameWord.length; i++) {
    underScores.push("_ ");
  }
}

function displayWord() {
  gameWordElement.innerHTML = underScores.join("");
}
function checkWin() {
  console.log("we r in the check win function!!!");
  if (gameWord === underScores.join("")) {
    alert("YOU WON!!!!!");
  }
}

getUnderscores();
displayWord();

document.addEventListener("keydown", function (event) {
  for (let i = 0; i < gameWord.length; i++) {
    if (gameWord[i] === event.key) {
      underScores[i] = event.key;
    }
  }
  checkWin();
  displayWord();
});
