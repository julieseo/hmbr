# HMBR Set-up Guide
This guide will step you through the process of setting up the HMBR app. This set-up heavily refers to the [Electron Quick Start Tutorial](https://www.electronjs.org/docs/latest/tutorial/quick-start)

## Prerequisites
To use Electron, you need to install [Node.js](https://nodejs.org/en/download). We rcommend that you use the latest ```LTS``` version available. 
>Please install Node.js using pre-built installers for your platform. You may encounter incompatibility issues with different development tools otherwise.

To check that Node.js was installed correctly, type the following commands in your terminal client:
```
node -v
npm -v
```
The commands should print the versions of Node.js and npm accordingly.

## Starting the app in Development Mode
Install the ```electron``` package into your app's ```devDependencies```.
```
npm install --save-dev electron
```
Now, start the application in development mode.
```
npm start
```
You will see an app pop up in a new window.

## Packaging the application as a distributable app
Add Electron Forge as a development dependency of your app, and use its ```import``` command to set up Forge's scaffolding:
```
npm install --save-dev @electron-forge/cli
npx electron-forge import
```
Create a distributable using Forge's ```make``` command:
```
npm run make
```
Electron Forge creates the ```out``` folder where your package will be located:
```
out/
├── out/make/zip/darwin/arm64/hmbr-mac-darwin-x64-1.0.0.zip
├── ...
└── out/hmbr-mac-darwin-arm64/hmbr-mac.app/Contents/MacOS/hmbr-mac
```
Now go to Finder and go to the ```out/hmbr-mac-darwin-arm64``` folder to find the ```hmbr-mac``` app. Double click to open.

**Note:** Running ```make``` again will overwrite the app.

## Troubleshooting HMBR characters being replaced by squares
You need to install the [NanumMyeongjo YetHangul](https://github.com/ujuc/nanum-font/blob/master/ttf/NanumMyeongjo-YetHangul.ttf) font. After installation, remake the app using the previous section.
