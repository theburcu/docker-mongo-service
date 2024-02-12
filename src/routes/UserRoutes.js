const express = require('express');
const router = express.Router();

const {
  CreateUser,
  DeleteUser,
  GetUser
} = require('../controllers/UserController');

router.post('/entry', CreateUser);
router.get('/entry/:id', GetUser);
router.delete('/entry/:id', DeleteUser);

module.exports = router;
