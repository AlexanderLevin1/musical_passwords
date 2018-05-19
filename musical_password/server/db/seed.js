const { conn } = require('./conn');
const { models } = require('./index');
const { User, Level } = models;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const seed = () => {
    return Promise.all([
        ...populateUsers(),
        User.create({
            userName: 'testUser1',
            password: bcrypt.hashSync('test1', bcrypt.genSaltSync(saltRounds))
        })
    ])
        .then(() => {
            return Promise.all([
                Level.create({ value: 0, password: a }),
                Level.create({ value: 1, password: ab }),
                Level.create({ value: 2, password: abc }),
                Level.create({ value: 3, password: abcd }),
            ])
        })
        .catch(err => console.error(err))
};

conn.sync({ force: true })
    .then(() => {
        console.log('* Seeding Database *');
        return seed();
    })
    .then(() => console.log('** Database Seeded!'))
    .then(() => {
        conn.close();
        console.log('*** Connection Closed ***');
        return null;
    })
    .catch(err => {
        console.log('###### ERROR SEEDING DB! #####');
        console.error(err);
    });