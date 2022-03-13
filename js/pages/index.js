const individualInputs = document.querySelectorAll('.individual__input');

individualInputs.forEach((input) => {
  const label = input.nextSibling;

  input.addEventListener('input', () => {
    if (input.value) label.style.display = 'none';
  });
});
