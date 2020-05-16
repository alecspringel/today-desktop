const electron = require('electron')
const url = require('url')
const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron');


let mainWindow;
function createWindow () {
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow = new BrowserWindow({
    backgroundColor: '#fff',
    width: 1800,
    height: 1600,
    webPreferences: {
      nodeIntegration: true,
    }
  });
  mainWindow.loadURL(startUrl);
  mainWindow.webContents.openDevTools()
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('minimize', () => {
  mainWindow.minimize(); 

})

ipcMain.on('maximize', () => {
  if (!mainWindow.isMaximized()) {
    mainWindow.maximize();          
  } else {
    mainWindow.unmaximize();
  }
})

ipcMain.on('close', () => {
  mainWindow.close();
})
