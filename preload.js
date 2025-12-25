const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("grin", {
  loadFile: () => ipcRenderer.invoke("load-file"),
  play: (filePath) => ipcRenderer.send("play-file", filePath)
});


// const { contextBridge } = require("electron");

// contextBridge.exposeInMainWorld("grin", {
//   log: (msg) => console.log("[Grin]", msg)
// });

