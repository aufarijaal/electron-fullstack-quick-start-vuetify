import { ipcRenderer } from "electron";

const _versionsIpcApi = {
  getNodeVersion: () => ipcRenderer.invoke("app.versions.node"),
  getChromiumVersion: () => ipcRenderer.invoke("app.versions.chromium"),
  getElectronVersion: () => ipcRenderer.invoke("app.versions.electron"),
};

export default _versionsIpcApi;
