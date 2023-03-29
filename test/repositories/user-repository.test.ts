import { test, expect } from "vitest";
import UserRepository from "../../electron/repositories/user-repository";

test("Test there are must be 2 users data available by default", async () => {
  const userRepository = new UserRepository();
  const defaultUsers = await userRepository.get();

  expect(defaultUsers.length).toStrictEqual(2);
});

test("Test insert a user data", async () => {
  const newUser = {
    username: "employee3",
    password: "employee3",
    access_level: null,
  };
  const userRepository = new UserRepository();
  const id = await userRepository.insert(newUser);

  expect(id).toBeTypeOf("number");
});

test("Test there are must be 3 users data after newly inserted", async () => {
  const userRepository = new UserRepository();
  const usersData = await userRepository.get();

  expect(usersData.length).toStrictEqual(3);
});

test("Test update a user data", async () => {
  // Change username: employee1 to employee2, as well as the password
  const newUser = {
    id: 2,
    username: "employee2",
    password: "employee2",
    access_level: "basic",
  };
  const userRepository = new UserRepository();
  const id = await userRepository.update(newUser);

  expect(id).toBeTypeOf("number");
});

test("Test delete a user data", async () => {
  const userRepository = new UserRepository();
  const affectedRow = await userRepository.deleteById(3);

  expect(affectedRow).toStrictEqual(1);
});

test("Test truncate users table", async () => {
  const userRepository = new UserRepository();
  await userRepository.truncate();
});

test("Test insert back the default users", async () => {
  const userMaster = {
    username: "master",
    password: "master",
    access_level: "full",
  };

  const userEmployee1 = {
    username: "employee1",
    password: "employee1",
    access_level: null,
  };

  const userRepository = new UserRepository();

  const userMasterId = await userRepository.insert(userMaster);
  const userEmployee1Id = await userRepository.insert(userEmployee1);

  expect(userMasterId).toBeTypeOf("number");
  expect(userEmployee1Id).toBeTypeOf("number");
});
