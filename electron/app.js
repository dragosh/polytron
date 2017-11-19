
const { format } = require('url')
const path = require('path')

const { BrowserWindow, app } = require('electron')

// Keep a global reference of the window object, so the window will
// not be closed automatically when the JavaScript object is garbage collected.
let mainWindow

const createWindow = () => {
  // and load the index.html of the app.
  let appUrl = format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true
  })

  let size = { width: 1024, height: 800 }
  mainWindow = new BrowserWindow(size)
  if(process.env.NODE_ENV === 'development') {
    mainWindow.setSize(1048, 1000)
    mainWindow.webContents.openDevTools()
  }
  mainWindow.loadURL(appUrl)
  mainWindow.on('closed', () => mainWindow = null)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)
