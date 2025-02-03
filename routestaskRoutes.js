const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
});

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

module.exports = router;
