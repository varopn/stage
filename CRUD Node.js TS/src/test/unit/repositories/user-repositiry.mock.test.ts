import { User } from "../../../models/user";
import { userRepository } from "../../../repositories";

test("should return empty array", async () => {
  const spy = jest.spyOn(userRepository, "findAllUsers").mockResolvedValue([]);
  const users = await userRepository.findAllUsers();
  expect(users).toEqual([]);
  expect(spy).toHaveBeenCalledWith();
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});

test("should return user list", async () => {
  const userList = [
    {
      name: "wfwf",
      age: 23,
    },
  ] as User[];
  const spy = jest
    .spyOn(userRepository, "findAllUsers")
    .mockResolvedValue(userList);
  const users = await userRepository.findAllUsers();
  expect(users).toEqual(userList);
  expect(spy).toHaveBeenCalledWith();
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});

test("should create user", async () => {
  const user = {
    name: "wfwf",
    age: 23,
  } as User;
  const spy = jest
    .spyOn(userRepository, "createNewUser")
    .mockResolvedValue(user);
  const userCrerated = await userRepository.createNewUser(user);
  expect(userCrerated).toEqual(user);
  expect(spy).toHaveBeenCalledWith(user);
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});

test("should update user", async () => {
  const user = [
    {
      name: "wfwf",
      age: 23,
    },
  ] as User[];
  const userId = 1;
  const spy = jest
    .spyOn(userRepository, "updateByUserId")
    .mockResolvedValue([userId, user]);
  const userCrerated = await userRepository.updateByUserId(user, `${userId}`);
  expect(userCrerated).toEqual([userId, user]);
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});

test("should delete user", async () => {
  const user = [
    {
      name: "wfwf",
      age: 23,
    },
  ] as User[];
  const userId = 1;
  const spy = jest
    .spyOn(userRepository, "deleteByUserId")
    .mockResolvedValue(userId);
  const userCrerated = await userRepository.deleteByUserId(`${userId}`);
  expect(userCrerated).toEqual(userId);
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});
