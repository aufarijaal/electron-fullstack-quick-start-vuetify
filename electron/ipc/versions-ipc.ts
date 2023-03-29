import { ipcMain } from "electron";

ipcMain.handle("app.versions.node", () => {
  return process.version;
});
ipcMain.handle("app.versions.chromium", () => {
  return process.versions.chrome;
});
ipcMain.handle("app.versions.electron", () => {
  return process.versions.electron;
});
