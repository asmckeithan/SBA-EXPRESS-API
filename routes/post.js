// post.js

const express = require('express');
const router = express.Router();


const post = []// how the data will be displayed 

//All post can be displayed using the code below 
router.get('/', (request, response) => {
    response.json(posts)
})

//Finding post by a specific id
router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const post = posts.find(post => id === id ) //as long as the ID matches the request will be found 
    response.json(post)
})

router.post('/', (req, res) => {
    const { id, title, content } = req.body;
    if (!id || !Name || !email) {
        return res.status(400).send('ID, Name, and email are required');
    }

    const newPost = { id, Name, email };
    posts.push(newPost);
    res.status(201).json(newPost);
});
module.exports = router;