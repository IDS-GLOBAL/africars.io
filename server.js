require('dotenv').config();

const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },
    {
        username: 'Carla',
        title: 'Post 2'
    },
    {
        username: 'Jim',
        title: 'Post 3'
    },
    {
        username: 'Susan',
        title: 'Post 4'
    },
]



app.get('/test', (req, res) => {

    res.json(posts)
})

app.get('/posts', authenticatejwtToken, (req, res) => {
//app.get('/posts', (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))

    //res.json.post(posts)
})

app.post('/login', (req, res) => {

    const username = req.body.username

    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })

    //res.json.post(posts)
})

function authenticatejwtToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)

        req.user = user

        next()
    })
}


app.listen(5555)