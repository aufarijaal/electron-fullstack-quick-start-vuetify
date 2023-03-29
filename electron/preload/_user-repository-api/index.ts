import { ipcRenderer } from "electron";

const _userRepositoryApi = {
  get: () => ipcRenderer.invoke("db.users.get"),
  insert: (user: User) => ipcRenderer.invoke("db.users.insert", user),
  update: (user: User) => ipcRenderer.invoke("db.users.update", user),
  deleteById: (id: number) => ipcRenderer.invoke("db.users.deleteById", id),
};

export default _userRepositoryApi;
