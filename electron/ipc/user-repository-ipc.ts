import { ipcMain } from "electron";
import UserRepository from "../repositories/user-repository";

ipcMain.handle("db.users.get", async function () {
  try {
    const userRepository = new UserRepository();
    const user = await userRepository.get();
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
});

ipcMain.handle("db.users.insert", async function (event, user) {
  try {
    const userRepository = new UserRepository();
    const insertedId = await userRepository.insert(user);
    return insertedId;
  } catch (error) {
    throw new Error(error.message);
  }
});
