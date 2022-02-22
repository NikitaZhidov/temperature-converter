const $inputArea = document.querySelector('#inputArea');

const $celsiusFarenheit = document.querySelector('.celsius-farenheit');
const $celsiusKelvin = document.querySelector('.celsius-kelvin');

const $fahrenheitCelsius = document.querySelector('.fahrenheit-celsius');
const $fahrenheitKelvin = document.querySelector('.fahrenheit-kelvin');

const $kelvinCelsius = document.querySelector('.kelvin-celsius');
const $kelvinFahrenheit = document.querySelector('.kelvin-fahrenheit');

$inputArea.addEventListener('input', () => {
  const inputValue = $inputArea.value;
  if (validateValue(inputValue, handleError)) {
    updateCelsius(Number(inputValue));
    updateFarenheit(Number(inputValue));
    updateKelvin(Number(inputValue));
  }
});

const updateCelsius = (value) => {
  $celsiusValue.innerHTML = numToLocaleString(value);
  $celsiusFarenheit.innerHTML = numToLocaleString(myApi.fromCtoF(value));
  $celsiusKelvin.innerHTML = numToLocaleString(myApi.fromCtoK(value));
};

const updateFarenheit = (value) => {
  $fahrenheitValue.innerHTML = numToLocaleString(value);
  const celsius = myApi.fromFtoC(value);
  $fahrenheitCelsius.innerHTML = numToLocaleString(celsius);
  $fahrenheitKelvin.innerHTML = numToLocaleString(myApi.fromCtoK(celsius));
};

const updateKelvin = (value) => {
  $kelvinValue.innerHTML = numToLocaleString(value);
  const celsius = myApi.fromKtoC(value);
  $kelvinCelsius.innerHTML = numToLocaleString(celsius);
  $kelvinFahrenheit.innerHTML = numToLocaleString(myApi.fromCtoF(celsius));
};

const handleError = () => {
  const UNKNOWN_VAL_SYMBOL = '-';

  $celsiusValue.innerHTML = UNKNOWN_VAL_SYMBOL;
  $celsiusFarenheit.innerHTML = UNKNOWN_VAL_SYMBOL;
  $celsiusKelvin.innerHTML = UNKNOWN_VAL_SYMBOL;

  $fahrenheitValue.innerHTML = UNKNOWN_VAL_SYMBOL;
  $fahrenheitCelsius.innerHTML = UNKNOWN_VAL_SYMBOL;
  $fahrenheitKelvin.innerHTML = UNKNOWN_VAL_SYMBOL;

  $kelvinValue.innerHTML = UNKNOWN_VAL_SYMBOL;
  $kelvinCelsius.innerHTML = UNKNOWN_VAL_SYMBOL;
  $kelvinFahrenheit.innerHTML = UNKNOWN_VAL_SYMBOL;
};
