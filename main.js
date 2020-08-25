const { app, BrowserWindow } = require('electron')

let win;
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready',()=>{
   // Create the browser window.
   win = new BrowserWindow({
    width: 726,
    height: 350,
    webPreferences: {
      nodeIntegration: true
    },
    resizable:false,
    show:false,
    center:true
  })
win.setMenu(null);
win.loadURL(`${__dirname}/build/index.html`);
win.once('ready-to-show',()=>{
// and load the index.html of the app.
win.show();
})
  
  // Open the DevTools.
//   win.webContents.openDevTools()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
