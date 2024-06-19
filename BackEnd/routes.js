const express = require('express');
const router = express.Router();

const applyEvent = require('./routes/applyEvent.routes');

router.use('/applyEvent', applyEvent);

module.exports = router;