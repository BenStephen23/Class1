const express = require('express');
const routes = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController');


routes.get('/', getGoals);
routes.post('/', setGoal);
routes.put('/:id', updateGoal);
routes.delete('/:id', deleteGoal);

module.exports = router