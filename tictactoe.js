// Initialize the game board
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

// Winning combinations
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

// Function to handle a player's move
function makeMove(cellIndex) {
  if (board[cellIndex] === "" && gameActive) {
    board[cellIndex] = currentPlayer;
    updateCell(cellIndex);
    if (checkWin()) {
      gameActive = false;
      announceWinner();
    } else if (checkDraw()) {
      gameActive = false;
      announceDraw();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }

  var click_sound = document.getElementById("click-sound");
  click_sound.play();
}

// Function to update the cell in the UI
function updateCell(index) {
  document.getElementsByClassName("cell")[index].textContent = currentPlayer;
}

// Function to check for a win
function checkWin() {
  return winningCombos.some((combination) => {
    return combination.every((index) => {
      return board[index] === currentPlayer;
    });
  });
}

// Function to check for a draw
function checkDraw() {
  return board.every((cell) => cell !== "");
}

// Function to announce the winner
function announceWinner() {
  //   alert(`Player ${currentPlayer} wins!`);
  showCustomAlert(`Player ${currentPlayer} wins!`);

  var bg_sound = document.getElementById("bg-sound");
  if (bg_sound) {
    bg_sound.pause(); // Pause the background sound
    bg_sound.currentTime = 0; // Reset the sound to the beginning
  }
  var win_sound = document.getElementById("win-sound");
  win_sound.play();
  generateParticlesContinuously();
}

// Function to show custom alert
function showCustomAlert(message) {
  var alertBox = document.getElementById("custom-alert");
  var alertMessage = document.getElementById("alert-message");

  alertMessage.textContent = message;
  alertBox.style.display = "block";

  // Hide the alert after 3 seconds
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);
}

// Function to announce a draw
function announceDraw() {
  alert("It's a draw!");
}

// Function to reset the game
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  document.querySelectorAll(".cell").forEach((cell) => (cell.textContent = ""));

  var bg_sound = document.getElementById("bg-sound");
  bg_sound.play(); // Pause the background sound
  var win_sound = document.getElementById("win-sound");
  if (win_sound) {
    win_sound.pause(); // Pause the background sound
    win_sound.currentTime = 0; // Reset the sound to the beginning
  }
}
