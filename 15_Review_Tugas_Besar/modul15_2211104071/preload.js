// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    registerUser: (username, password) => ipcRenderer.invoke('register-user', { username, password }),
    loginUser: (username, password) => ipcRenderer.invoke('login-user', { username, password })
});