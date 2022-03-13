// BG
const filterBg = document.querySelector('.filter__background');
const filterInner = document.querySelector('.filter__inner');
const filterInput = document.querySelector('.filter__open-input');

filterInner.addEventListener('click', (e) => e.stopPropagation());
filterInner.addEventListener('touchstart', (e) => e.stopPropagation(), {
  passive: true,
});
filterBg.addEventListener(
  'click',
  () => {
    filterInput.checked = false;
    document.body.style.overflowY = 'auto';
  },
  { passive: true }
);
filterBg.addEventListener(
  'touchstart',
  () => {
    filterInput.checked = false;
    document.body.style.overflowY = 'auto';
  },
  { passive: true }
);

filterInput.addEventListener('input', () => {
  console.log('edit');
  document.body.style.overflowY = 'hidden';
});

// SORT
const sortSelect = document.querySelector('#sortBoxes');
const items = document.querySelectorAll('.cards__item');
const itemsInner = document.querySelector('.cards__inner');

sortSelect.addEventListener('change', (el) => {
  const arr = Array.from(items);
  if (el.target.value == 'priceHigh') {
    arr.sort(
      (a, b) =>
        parseFloat(a.getAttribute('data-price')) -
        parseFloat(b.getAttribute('data-price'))
    );
  } else if (el.target.value == 'priceLow') {
    arr.sort(
      (a, b) =>
        parseFloat(b.getAttribute('data-price')) -
        parseFloat(a.getAttribute('data-price'))
    );
  }

  itemsInner.innerHTML = '';
  arr.forEach((el) => itemsInner.append(el));
});
