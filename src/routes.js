const express = require('express')
const routes = express()
const users = require('./controllers/usersController')

routes.get('/', (req, res) => res.send('Hello, World!'))

routes.get('/users', users.get)

module.exports = routes