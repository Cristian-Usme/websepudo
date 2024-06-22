const express = require('express');
const router = express.Router();

const applyEvent = require('./routes/join.routes');

router.use('/join', applyEvent);

module.exports = router;