const { ipcRenderer, contextBridge } = require('electron');

const getUserLocale = () => {
  const env = process.env;

  const localeStr = env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE;
  return localeStr.split('.')[0].replace('_', '-');
};

contextBridge.exposeInMainWorld('myApi', {
  ipcR: ipcRenderer,
  fromFtoC: (F) => (F - 32) / 1.8,
  fromCtoF: (C) => 1.8 * C + 32,
  fromCtoK: (C) => C + 273.15,
  fromKtoC: (K) => K - 273.15,
  locale: getUserLocale(),
});
