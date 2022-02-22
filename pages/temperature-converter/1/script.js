confirmBtn$.addEventListener('click', () => {
  const fahrenheit = fahrenheitInput$.value;

  if (validateValue(fahrenheit)) {
    const celsiusValue = Number(myApi.fromFtoC(fahrenheit));
    celsiusInput$.value = numToLocaleString(celsiusValue);
  } else {
    celsiusInput$.value = '-';
  }
});

fahrenheitInput$.addEventListener('input', () => {
  const fahrenheit = fahrenheitInput$.value;

  validateValue(fahrenheit);
});
