const express = require('express');
const router = express.Router();

// Import controller
const taskController = require('../controllers/task');

router.route('/')
    .get(taskController.getAllTasks)
    .post(taskController.createTask)

router.route('/:_id')
    .put(taskController.editTask)
    .delete(taskController.deleteTask)

router.route('/taskByTitle/:title')
    .get(taskController.getTaskByTitle)


module.exports = router;