const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController.js')
const authMiddleware = require('../midleware/authMiddleware.js')

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', authMiddleware, UserController.check);

module.exports = router;