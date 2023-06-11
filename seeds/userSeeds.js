const { User } = require('../models');

const userData = [
  {
    username: "test",
    email: "test@example.com",
    password: "asdf"
  },
  {
    username: "test2",
    email: "test2@example.com",
    password: "asdf1"
  },
  {
    username: "test3",
    email: "test3@example.com",
    password: "asdf2"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
