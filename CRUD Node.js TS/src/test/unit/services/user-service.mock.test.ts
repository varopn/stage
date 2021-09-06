import { User } from "../../../models/user";
import { userService } from "../../../services/index";

test("should return empty array", async () => {
  const spy = jest.spyOn(userService, "getUsers").mockResolvedValue([]);
  const users = await userService.getUsers();
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
  const spy = jest.spyOn(userService, "getUsers").mockResolvedValue(userList);
  const users = await userService.getUsers();
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
  const spy = jest.spyOn(userService, "createNewUser").mockResolvedValue(user);
  const userCrerated = await userService.createNewUser(user);
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
    .spyOn(userService, "updateByUserId")
    .mockResolvedValue([userId, user]);
  const userCrerated = await userService.updateByUserId(user, `${userId}`);
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
    .spyOn(userService, "deleteByUserId")
    .mockResolvedValue(userId);
  const userCrerated = await userService.deleteByUserId(`${userId}`);
  expect(userCrerated).toEqual(userId);
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});
