import { define } from 'typeorm-seeding';
import Faker from 'faker';
import { User } from '../entities/User';

define(User, (faker: typeof Faker) => {
  const user = new User();
  user.firstName = faker.name.findName();
  user.lastName = faker.name.lastName();
  user.age = faker.random.number(99);
  return user;
});