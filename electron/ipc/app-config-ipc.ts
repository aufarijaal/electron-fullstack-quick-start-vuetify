import { ipcMain } from "electron";
import { join } from "path";
import appConfig from "../app-config";

ipcMain.handle("app.config.dbFilePath", (event, ...args) => {
  try {
    return join(appConfig.appFolderpath, appConfig.dbFileName);
  } catch (error) {
    throw new Error(error.message);
  }
});
