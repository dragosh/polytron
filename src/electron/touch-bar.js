const path = require('path')
const { app, TouchBar } = require('electron')
const {
  TouchBarLabel,
  TouchBarButton,
  TouchBarSpacer,
  TouchBarColorPicker,
  TouchBarSlider,
  TouchBarPopover
} = TouchBar

// Create TouchBar
exports.create = (win) => {
  // Touch Bar Spacer
  const tbSpacer = new TouchBarSpacer({
    size: 'flexible'
  })

  // Touch Bar Button
  const tbButton = new TouchBarButton({
    label: 'Update',
    icon: path.join(__dirname, 'icons/reload@2x.png'),
    iconPosition: 'left',
    click: () => {
      app.relaunch()
      app.exit(0)
    }
  })

  // Touch Bar Color Picker
  const tbPicker = new TouchBarColorPicker({
    change: (color) => {
      win.webContents.insertCSS(`html{background:${color}}`)
    }
  })

  // Touch Bar Slider
  const tbSlider = new TouchBarSlider({
    label: 'Size',
    minValue: 500,
    maxValue: 1000
  })

  // Touch Bar Label
  const tbLabel = new TouchBarLabel({
    label:'Theme:'
  })

  // Large Touch Bar Spacer
  const tbLargeSpacer = new TouchBarSpacer({
    size: 'large'
  })

  // Touch Bar Popover
  const tbPopover = new TouchBarPopover({
    items: new TouchBar([tbSlider]),
    label: 'Size'
  })

  return new TouchBar([
    tbLabel,
    tbPicker,
    tbLargeSpacer,
    tbPopover,
    tbSpacer,
    tbButton,
  ])
}

