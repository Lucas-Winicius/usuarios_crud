const express = require('express')
const routes = express()
const users = require('./controllers/usersController')

routes.get('/', (req, res) => res.send('Hello, World!'))

routes.get('/users', users.get)
routes.post('/users', users.post)

module.exports = routes