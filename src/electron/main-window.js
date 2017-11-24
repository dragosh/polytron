const { format } = require('url')
const path = require('path')
const electron = require('electron')

const {
  BrowserWindow,
} = electron

const windowStateKeeper = require('electron-window-state')
const touchBar = require('./touch-bar')

exports.win // export the browser window

exports.create = () => {
  const { size } = electron.screen.getPrimaryDisplay()
  const winState = windowStateKeeper({
    defaultWidth: size.width,
    defaultHeight: size.height,
    maximize: true,
  })
  const options = {
    width: winState.width,
    height: winState.height,
    x: winState.x,
    y: winState.y,
    minWidth: 600,
    minHeight: 300,
    backgroundColor: '#eeeeee',
    frame: true,
  }

  this.win = new BrowserWindow(options)
  winState.manage(this.win)

  let appUrl = format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true
  })
  // Renderer
  this.win.loadURL(appUrl)
  const bar = touchBar.create(this.win);
  this.win.setTouchBar(bar)

  // Events
  this.win.on('closed', () => this.win = null)

  return this.win;
}

