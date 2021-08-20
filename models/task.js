const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    "title": { 
        type: String,
        required: true 
    },
    "description": {
        type: String,
        required: false,
        default: "Sin descripcion"
    }
})

module.exports = mongoose.model('task', taskSchema);