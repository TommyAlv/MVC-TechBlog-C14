const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'userone',
        email: '1@email.com',
        password: 'password123'
    },
    {
        username: 'usertwo',
        email: '2@email.com',
        password: 'password123'
    },
    {
        username: 'userthree',
        email: '3@email.fm',
        password: 'password123'
    },
    {
        username: 'userfour',
        email: '4@email.com',
        password: 'password123'
    },
    {
        username: 'userfive',
        email: '5@email.com',
        password: 'password123'
    },
    {
        username: 'usersix',
        email: '6@email.com',
        password: 'password123'
    },
    {
        username: 'userseven',
        email: '7@email.com',
        password: 'password123'
    },
    {
        username: 'usereight',
        email: '8@email.com',
        password: 'password123'
    },
    {
        username: 'usernine',
        email: '9@email.com',
        password: 'password123'
    },
    {
        username: 'userten',
        email: '10@email.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;