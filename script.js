const $openTemperatureConverter_1V_btn = document.querySelector('.tc-v1-btn');
const $openTemperatureConverter_2V_btn = document.querySelector('.tc-v2-btn');
const $openTemperatureConverter_3V_btn = document.querySelector('.tc-v3-btn');
const $openTemperatureConverter_4V_btn = document.querySelector('.tc-v4-btn');

$openTemperatureConverter_1V_btn.addEventListener('click', () => {
  myApi.ipcR.send('open-tc-v1');
});

$openTemperatureConverter_2V_btn.addEventListener('click', () => {
  myApi.ipcR.send('open-tc-v2');
});

$openTemperatureConverter_3V_btn.addEventListener('click', () => {
  myApi.ipcR.send('open-tc-v3');
});

$openTemperatureConverter_4V_btn.addEventListener('click', () => {
  myApi.ipcR.send('open-tc-v4');
});
