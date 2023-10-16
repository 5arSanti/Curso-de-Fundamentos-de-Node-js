const { app, BrowserWindow } =  require("electron");

var mainWindow;

app.on('ready', createWindow);

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadFile("index.html");
}