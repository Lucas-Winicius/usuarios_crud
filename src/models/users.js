const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

const HomeModel = mongoose.model('Home', homeSchema)