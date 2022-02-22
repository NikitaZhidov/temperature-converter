const { BrowserWindow } = require('electron');
const path = require('path');

const openV1 = () => {
  const tcV1_Window = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '..', '..', '..', 'preload.js'),
    },
  });

  tcV1_Window.loadFile(path.join(__dirname, 'index.html'));
};

module.exports = { openV1 };
