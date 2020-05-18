const express = require('express');
const devController = require('../controller/dev');

const router = express.Router();

// in prod, you would probably sub routers and dependency injection here
// I just left it like this to not make the codebase too big
router.post('/dev', devController.createDev);

module.exports = router;
