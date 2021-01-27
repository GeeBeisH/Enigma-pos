
const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    hasShadow: true,
    movable: true,
    closable: true,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    fullscreen: false,
    backgroundColor: "#98c4c4",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notification', body: message}).show();
})

app.whenReady().then(createWindow)
