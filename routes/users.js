const express = require('express');
const router = express.Router();
require('dotenv').config();
const userController = require('../controller/user');

router.get('/getMember', userController.user_get);
router.post('/addMember',userController.addMember)
router.put('/updateMember',userController.updateMember)
router.delete('/deleteMember',userController.deleteMember)
module.exports = router;