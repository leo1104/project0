const express = require('express');
const router = express.Router();
require('dotenv').config();
const eventController = require('../controller/event');

router.get('/getEvent', eventController.event_get);
router.post('/addEvent',eventController.addEvent);
router.put('/updateEvent',eventController.updateEvent);
router.delete('/deleteEvent',eventController.deleteEvent);


module.exports = router;