import { User } from "../models/user";
import {userService} from "./index";

describe("UserController", () => {
    describe("getUsers", () => {
      test("should return empty array", async () => {
        const spy = jest
          .spyOn(userService, "getUsers")
          .mockResolvedValueOnce([]);
        const users = await userService.getUsers();
        expect(users).toEqual([]);
        expect(spy).toHaveBeenCalledWith();
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockRestore();
      });
    });
  });

  test("should return user list", async () => {
      const userList = [{
        name: "wfwf",
        age: 23,
        additional_info: "wef"
      },] as User[];
    const spy = jest
      .spyOn(userService, "getUsers")
      .mockResolvedValue(userList);
    const users = await userService.getUsers();
    expect(users).toEqual(userList);
    expect(spy).toHaveBeenCalledWith();
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });