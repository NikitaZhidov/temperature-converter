const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { openV1 } = require('./pages/temperature-converter/1/main');
const { openV2 } = require('./pages/temperature-converter/2/main');
const { openV3 } = require('./pages/temperature-converter/3/main');
const { openV4 } = require('./pages/temperature-converter/4/main');

function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  ipcMain.on('open-tc-v1', () => {
    openV1();
  });

  ipcMain.on('open-tc-v2', () => {
    openV2();
  });

  ipcMain.on('open-tc-v3', () => {
    openV3();
  });

  ipcMain.on('open-tc-v4', () => {
    openV4();
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
