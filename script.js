// Attach click event to each cell
document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', function () {
    if (cell.textContent === '') {
      cell.textContent = 'X';  // Place an X in the cell when clicked
    }
  });
});
