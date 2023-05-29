const Router = require('express');
const router = new Router();
const FavoriteController = require('../controllers/favoriteController.js');

router.post('/', FavoriteController.create);
router.get('/', FavoriteController.getAll);
router.get('/:id', FavoriteController.getOne);

module.exports = router;