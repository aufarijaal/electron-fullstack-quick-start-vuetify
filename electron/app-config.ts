import path from "path";
import { homedir } from "os";
import pkg from "../package.json";

const appConfig = {
  appFolderpath: path.join(
    homedir(),
    // Use the displayName form package.json for application folder name
    // if displayName is not specified, use "Electron Fullstack Quick Start Vuetify"
    pkg.displayName ?? "Electron Fullstack Quick Start Vuetify"
  ),
  dbFileName: "storage.sqlite3",
};

export default appConfig;
