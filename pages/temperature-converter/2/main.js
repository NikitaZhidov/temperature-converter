const { BrowserWindow } = require('electron');
const path = require('path');

const openV2 = () => {
  const tcV2_Window = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '..', '..', '..', 'preload.js'),
    },
  });

  tcV2_Window.loadFile(path.join(__dirname, 'index.html'));
};

module.exports = { openV2 };
