const sequelize = require('../config/connection');
const seedUsers = require('./userSeeds')
const seedBlog = require('./blogSeeds')
const seedComments = require('./commentSeeds')

const seedAll = async() => {
    await sequelize.sync({force: true});

    await seedUsers()
    await seedBlog()
    await seedComments()

    process.exit(0);
}

seedAll();