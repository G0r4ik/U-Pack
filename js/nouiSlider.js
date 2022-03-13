// Цена
const sliderPrice = document.getElementById('slider-price');
const filterPriceStart = document.querySelector('#filter-price-start');
const filterPriceLast = document.querySelector('#filter-price-last');

noUiSlider.create(sliderPrice, {
  start: [0, 1000],
  connect: true,
  range: {
    'min': 0,
    'max': 1000,
  },
  margin: 10,
  connect: true,
  step: 10,
  format: {
    to: function (value) {
      return value + '₽';
    },
    from: function (value) {
      return Number(value.replace('₽', ''));
    },
  },
});

sliderPrice.noUiSlider.on('update', function (values) {
  filterPriceStart.value = values[0];
  filterPriceLast.value = values[1];
});

filterPriceStart.addEventListener('change', function () {
  sliderPrice.noUiSlider.set(this.value);
});
filterPriceLast.addEventListener('change', function () {
  sliderPrice.noUiSlider.set([null, this.value]);
});
// Длина
const sliderLength = document.getElementById('slider-length');
const filterLengthStart = document.querySelector('#filter-length-start');
const filterLengthLast = document.querySelector('#filter-length-last');
noUiSlider.create(sliderLength, {
  start: [0, 5000],
  connect: true,
  range: {
    'min': 0,
    'max': 3000,
  },
  margin: 100,
  connect: true,
  step: 10,
  format: {
    to: function (value) {
      return Math.trunc(value) + 'мм';
    },
    from: function (value) {
      return Number(value.replace('мм', ''));
    },
  },
});

sliderLength.noUiSlider.on('update', function (values) {
  filterLengthStart.value = values[0];
  filterLengthLast.value = values[1];
});

filterLengthStart.addEventListener('change', function () {
  sliderLength.noUiSlider.set(this.value);
});
filterLengthLast.addEventListener('change', function () {
  sliderLength.noUiSlider.set([null, this.value]);
});
// Ширина
const sliderWidth = document.getElementById('slider-width');
const filterWidthStart = document.querySelector('#filter-width-start');
const filterWidthLast = document.querySelector('#filter-width-last');
noUiSlider.create(sliderWidth, {
  start: [0, 5000],
  connect: true,
  range: {
    'min': 0,
    'max': 3000,
  },
  margin: 100,
  connect: true,
  step: 10,
  format: {
    to: function (value) {
      return Math.trunc(value) + 'мм';
    },
    from: function (value) {
      return Number(value.replace('мм', ''));
    },
  },
});

sliderWidth.noUiSlider.on('update', function (values) {
  filterWidthStart.value = values[0];
  filterWidthLast.value = values[1];
});

filterWidthStart.addEventListener('change', function () {
  sliderWidth.noUiSlider.set(this.value);
});
filterWidthLast.addEventListener('change', function () {
  sliderWidth.noUiSlider.set([null, this.value]);
});
// Высота
const sliderHeight = document.getElementById('slider-height');
const filterHeightStart = document.querySelector('#filter-height-start');
const filterHeightLast = document.querySelector('#filter-height-last');
noUiSlider.create(sliderHeight, {
  start: [0, 5000],
  connect: true,
  range: {
    'min': 0,
    'max': 3000,
  },
  margin: 100,
  connect: true,
  step: 10,
  format: {
    to: function (value) {
      return Math.trunc(value) + 'мм';
    },
    from: function (value) {
      return Number(value.replace('мм', ''));
    },
  },
});

sliderHeight.noUiSlider.on('update', function (values) {
  filterHeightStart.value = values[0];
  filterHeightLast.value = values[1];
});

filterHeightStart.addEventListener('change', function () {
  sliderHeight.noUiSlider.set(this.value);
});
filterHeightLast.addEventListener('change', function () {
  sliderHeight.noUiSlider.set([null, this.value]);
});
