const electron = require('electron')
const url = require('url')
const path = require('path')
const { app, BrowserWindow, ipcMain, Tray, Menu, screen } = require('electron');
const Datastore = require('nedb');
const userDataPath = (electron.app || electron.remote.app).getPath('userData');

//DATABASE
let dbPath = path.join(userDataPath, 'user.db')
let USER_DB = new Datastore({
  filename: dbPath,
  autoload: true,
  onload: err => { 
      if (err) {
          console.log("Error loading the DB: " + err);
      }
  },
})

global.USER_DB = USER_DB;


const iconPath = path.join(__dirname, '/assets/imgs/taskbar_icon.ico')

let mainWindow;
function createWindow () {
  var trayIcon = new Tray(iconPath)
  // Create Menu
  var contextMenu = Menu.buildFromTemplate([
    { label: 'Show', click:  function(){
        mainWindow.show();
    } },
    { label: 'Quit', click:  function(){
        app.isQuiting = true;
        app.quit();
    } },
    { label: 'DevTools', click:  function(){
      mainWindow.webContents.openDevTools()
  } }
  ]);
  trayIcon.setContextMenu(contextMenu)

  // Tray click events
  trayIcon.on('click', function(e){
    if(mainWindow.isVisible()){
      mainWindow.webContents.send('animate-close')
      setTimeout(function(){mainWindow.hide()}, 300)
    } else {
      mainWindow.show()
      mainWindow.webContents.send('animate-open')
      mainWindow.focus()
    }
  })

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true,
  });

  var sidebar = {
    height: screen.getPrimaryDisplay().workAreaSize.height,
    width: 600
  }

  mainWindow = new BrowserWindow({
    width: sidebar.width,
    height: sidebar.height,
    x: 0,
    y: 0,
    backgroundColor: "#00000000",
    frame: false,
    show: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // Dont show in taskbar. We want users to launch the app from the tray

  mainWindow.loadURL(startUrl);
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    repositionPanel()
    mainWindow.webContents.send('animate-open')
  })

  function repositionPanel() {
    let displays = screen.getAllDisplays()
    let primaryDisplay = displays.find((display) => {
      return display.bounds.x == 0 && display.bounds.y == 0
    })
  
    if (mainWindow) {
      mainWindow.setBounds({
        width: sidebar.width,
        height: sidebar.height,
        x: primaryDisplay.workArea.width - sidebar.width,
        y: primaryDisplay.workArea.height - sidebar.height
      })
    }
  }
  
  //mainWindow.webContents.openDevTools()
}

// Prevents flashing when opening and closing


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
