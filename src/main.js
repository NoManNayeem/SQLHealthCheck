const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
let flaskApp;




function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('public/index.html');
}





function startFlaskApp() {
    // Path to your Python executable
    const pythonExecutable = "python";
  
    // Start Flask app
    flaskApp = spawn(pythonExecutable, ['flask_app/app.py']);
  
    flaskApp.stdout.on('data', (data) => {
      console.log(`Flask: ${data}`);
    });
  
    flaskApp.stderr.on('data', (data) => {
      console.error(`Flask Error: ${data}`);
    });
  
    flaskApp.on('close', (code) => {
      console.log(`Flask subprocess exited with code ${code}`);
    });
  }

  




app.whenReady().then(() => {
  startFlaskApp();
  createWindow();
});






app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
      if (flaskApp != null) {
        flaskApp.kill(); // Ensure Flask process is killed when Electron app closes
      }
    }
  });