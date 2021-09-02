import { User } from "../../../models/user";

test("should return empty array", async () => {
  const spy = jest
    .spyOn(User, "findAll")
    .mockResolvedValue([]);
  let users = await User.findAll();
  expect(users).toEqual([]);
  expect(spy).toHaveBeenCalledWith();
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});

test("should return user list", async () => {
  const userList = [{
    name: "wfwf",
    age: 23
  },] as User[];
  const spy = jest
    .spyOn(User, "findAll")
    .mockResolvedValue(userList);
  const users = await User.findAll();
  expect(users).toEqual(userList);
  expect(spy).toHaveBeenCalledWith();
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});

test("should create user", async () => {
    const user = {
      name: "wfwf",
      age: 23
    } as User;
  const spy = jest
    .spyOn(User, "create")
    .mockResolvedValue(user);
  const userCrerated = await User.create(user);
  expect(userCrerated).toEqual(user);
  expect(spy).toHaveBeenCalledWith(user);
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});

test("should update user", async () => {
  const user = [{
    name: "wfwf",
    age: 23
  }] as User[];
  const userId = 1;
const spy = jest
  .spyOn(User, "update")
  .mockResolvedValue([userId, user]);
const userCrerated = await User.update(user[0], {where: {id: userId}});
expect(userCrerated).toEqual([userId, user]);
expect(spy).toHaveBeenCalledTimes(1);
spy.mockRestore();
});

test("should delete user", async () => {
    const user = [{
      name: "wfwf",
      age: 23
    }] as User[];
    const userId = 1;
  const spy = jest
    .spyOn(User, "destroy")
    .mockResolvedValue(userId);
  const userCrerated = await User.destroy({where: {id: userId}});
  expect(userCrerated).toEqual(userId);
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
  });