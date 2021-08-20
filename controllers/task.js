const Task = require('../models/task');

const getAllTasks = async (req, res, next) => {
    const task = await Task.find();
    res.status(200).json(task);
};

const createTask = async (req, res, next) => {
    const newTask = new Task(req.body);
    try {
        const task = await newTask.save();
        res.status(201).json(task);
    } catch(error) {
        error.status(400);
        next(error);
    }
};

const getTaskByTitle = async(req, res, next) => {
    console.info('Titulo',req.params);
    const title = req.params.title
    try {
        await Task.findOne({title : title}, (err, docs) => {
            if(err) {
                return next(err)
            } else {
                res.status(200).json(docs);
            }
        });  
    } catch(error) {
        error.status = 400;
        next(error)
    }
}

const editTask = async(req, res, next) => {
    const taskId = req.params;
    const newTask = req.body;
    try {
        await Task.findByIdAndUpdate(taskId, newTask);
        res.status(200).json({ success: true });
    } catch(error) {
        error.status = 400;
        next(error);
    }
};

const deleteTask = async (req, res, next) => {
    const taskId = req.params;
    try {
        await Task.findByIdAndRemove(taskId);
        res.status(200).json(
            { 
              success: true,
              message: "deleted" 
            });
    }catch(error) {
        error.status = 400;
        next(error);
    }
};

module.exports = {
    getAllTasks,
    createTask,
    editTask,
    deleteTask,
    getTaskByTitle,
}