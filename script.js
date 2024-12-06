// Get all elements
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset');
const colorX = document.getElementById('color-x');
const colorO = document.getElementById('color-o');

// Game variables
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Track the board state
let gameActive = true;
let xColor = colorX.value;
let oColor = colorO.value;

// Cell click event handler
function cellClick(e) {
  const index = e.target.dataset.index;

  if (gameBoard[index] !== '' || !gameActive) return;

  gameBoard[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.style.color = currentPlayer === 'X' ? xColor : oColor;

  checkGameStatus();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

// Check the game status (win or draw)
function checkGameStatus() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      statusText.textContent = `Player ${gameBoard[a]} wins!`;
      return;
    }
  }

  if (!gameBoard.includes('')) {
    gameActive = false;
    statusText.textContent = "It's a draw!";
  }
}

// Reset the game
function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  statusText.textContent = "Player X's turn";
  
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.color = 'black';
  });
}

// Event listeners
cells.forEach(cell => cell.addEventListener('click', cellClick));
resetButton.addEventListener('click', resetGame);

// Color change event listeners
colorX.addEventListener('input', () => {
  xColor = colorX.value;
});
colorO.addEventListener('input', () => {
  oColor = colorO.value;
});
