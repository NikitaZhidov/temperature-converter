const { BrowserWindow } = require('electron');
const path = require('path');

const openV3 = () => {
  const tcV3_Window = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '..', '..', '..', 'preload.js'),
    },
  });

  tcV3_Window.loadFile(path.join(__dirname, 'index.html'));
};

module.exports = { openV3 };
