const path = require('path')
const { Tray, Menu } = require('electron')
exports.create = () => {
  const img = path.join(__dirname, 'icons/tray.png')
  this.tray = new Tray(img)
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item one', type: 'radio'},
    {label: 'Item two', type: 'radio'},
    {label: 'Item three', type: 'radio', checked: true},
    {label: 'Item four', type: 'radio'}
  ])
  this.tray.setToolTip('This is my application.')
  this.tray.setContextMenu(contextMenu)
}
exports.tray
