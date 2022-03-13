const hamburgerLabel = document.querySelector('.hamburger__lines ');
const hamburgerCheckbox = document.querySelector('.hamburger__checkbox');
let checked = false;

hamburgerLabel.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    hamburgerCheckbox.checked = !checked;
    checked = !checked;
    console.log(!checked);
  }
});
