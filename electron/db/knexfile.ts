import { knex, Knex } from "knex";
import fs from "fs";
import path from "path";
import appConfig from "../app-config";

export const dbFilePath = path.join(
  appConfig.appFolderpath,
  appConfig.dbFileName
);

// check if folder exists, create it if not
if (!fs.existsSync(appConfig.appFolderpath)) {
  fs.mkdirSync(appConfig.appFolderpath);
}

// check if database file exists, create it if not
if (!fs.existsSync(dbFilePath)) {
  fs.closeSync(fs.openSync(dbFilePath, "w"));
}

const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: dbFilePath,
  },
  useNullAsDefault: true,

  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: dbFilePath,
  //   },
  // },

  // staging: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: dbFilePath,
  //   },
  // },

  // production: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: dbFilePath,
  //   },
  // },
};

const db = knex(config);

export default db;
