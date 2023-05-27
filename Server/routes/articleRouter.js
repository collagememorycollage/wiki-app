const Router = require('express');
const router = new Router();
const articleController = require('../controllers/articleController.js');


router.post('/', articleController.create);
router.get('/', articleController.getAll);
router.get('/:id', articleController.getOne);

module.exports = router;