const express = require('express')
const routes = express()
const users = require('./controllers/usersController')
const singleUser = require('./controllers/singleUser')

routes.get('/', (req, res) => res.send('Hello, World!'))

routes.get('/users', users.get)
routes.post('/users', users.post)

routes.get('/user/:username', singleUser.get)
routes.delete('/user/:username', singleUser.delete)
routes.patch('/user/:username', singleUser.patch)

module.exports = routes