const Router = require('express');
const router = new Router();
const FavoriteController = require('../controllers/favoriteController.js');

router.post('/', FavoriteController.create);
router.get('/', FavoriteController.getAll);

module.exports = router;