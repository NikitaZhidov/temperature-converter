const confirmBtn$ = document.querySelector('.confirm');
const fahrenheitInput$ = document.querySelector('#fahrenheit');
const celsiusInput$ = document.querySelector('#celsius');
const errorArea$ = document.querySelector('.error-area');

const $celsiusValue = document.querySelector('.celsius-value');
const $fahrenheitValue = document.querySelector('.fahrenheit-value');
const $kelvinValue = document.querySelector('.kelvin-value');

const validateValue = (value, onError = () => {}) => {
  if (isNaN(value) || value.toString().trim() === '') {
    errorArea$.innerHTML = 'Некорретный формат числа';
    errorArea$.classList.add('visible');
    onError();
    return false;
  } else {
    errorArea$.innerHTML = 'Error';
    errorArea$.classList.remove('visible');
    return true;
  }
};

const numToLocaleString = (value) => {
  return new Intl.NumberFormat(myApi.locale, {
    maximumFractionDigits: 2,
  }).format(value);
};
