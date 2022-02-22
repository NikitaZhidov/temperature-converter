const { BrowserWindow } = require('electron');
const path = require('path');

const openV4 = () => {
  const tcV4_Window = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '..', '..', '..', 'preload.js'),
    },
  });

  tcV4_Window.loadFile(path.join(__dirname, 'index.html'));
};

module.exports = { openV4 };
