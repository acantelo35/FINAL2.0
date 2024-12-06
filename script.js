document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', function () {
    if (cell.textContent === '') {
      cell.textContent = 'X';
    }
  });
});
