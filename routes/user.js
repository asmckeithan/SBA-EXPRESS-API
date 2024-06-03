const express = require('express');

const router = express.Router();//initialize our router 



//Importing data from user file in data folder
const {getUsers} = require('../Data/user')


const users = require('../Data/user')
// all routes start with '/users'
// Define a GET route to fetch all users
router.get('/', (req, res) => {
    // Logic to fetch all users
 
    const users = getUsers()
    res.json(users)
});

// Define a POST route to create a new user
router.post('/', (req, res) => {
    // Logic to create a new user
    res.send('User created successfully');
});

// Define a GET route to fetch a specific user by ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to fetch user by ID
    res.send(`User with ID ${userId}`);
});
module.exports = router;