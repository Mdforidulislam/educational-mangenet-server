const students = require('../api/students');

const router = require('express').Router();

router.get('/students',students)

module.exports = router;