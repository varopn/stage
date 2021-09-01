import * as faker from 'faker';
import {userService} from '../services';
import {sequelize} from '../models/index';
let user: any;

beforeAll(async () => {
  await sequelize.sync({force: false});
})

afterAll(async () => {
  await sequelize.close();
})

beforeEach(async () => {
    const name = faker.name.firstName();
    const age = faker.datatype.number({
      'min': 0,
      'max': 100,
    });
    const additional_info = faker.internet.email();

    user = await userService.createNewUser({
        name: name,
        age: age,
        additional_info: additional_info
    });
});

afterEach(async () => {
    await user.destroy();
});

describe('Repository testing', () => {
  it(`should create user`, async () => {
    const fetched = await userService.getByUserId(user.id);

    expect(fetched).not.toBeNull();
    expect(fetched!.name).toBe(user.name);
    expect(fetched!.age).toBe(user.age);
    expect(fetched!.additional_info).toBe(user.additional_info);
  })

  it(`should find all users`, async () => {
    const fetched = await userService.getUsers();
    fetched.reverse();

    expect(fetched).not.toBeNull();
    expect(fetched!.length).toBeGreaterThanOrEqual(1);
    expect(fetched![0].name).toBe(user.name);
    expect(fetched![0].age).toBe(user.age);
    expect(fetched![0].additional_info).toBe(user.additional_info);
  })

  it(`should find user by users id's`, async () => {
    const fetched = await userService.getByUserId(user.id);

    expect(fetched).not.toBeNull();
    expect(fetched!.name).toBe(user.name);
    expect(fetched!.age).toBe(user.age);
    expect(fetched!.additional_info).toBe(user.additional_info);
  })

  it(`should update user by users's id`, async () => {
    const updatedName = faker.name.firstName();
    const updatedAge = faker.datatype.number({
        'min': 0,
        'max': 100,
      })
    const updatedAdditional_info = faker.name.firstName();
    const fetched = await userService.updateByUserId({
        name: updatedName,
        age: updatedAge,
        additional_info: updatedAdditional_info,
    }, user.id);

    const userFind = await userService.getByUserId(user.id);

    expect(fetched).not.toBeNull();
    expect(userFind).not.toEqual(user);
    expect(userFind!.name).toBe(updatedName);
    expect(userFind!.age).toBe(updatedAge);
    expect(userFind!.additional_info).toBe(updatedAdditional_info);
  })

  it(`should delete user by users's id`, async () => {
    const fetched = await userService.deleteByUserId(user.id);

    expect(fetched).not.toBeNull();
    expect(fetched).not.toEqual(user);

  })
})