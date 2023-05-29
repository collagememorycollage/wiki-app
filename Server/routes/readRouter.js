const Router = require('express');
const router = new Router();
const ReadController = require('../controllers/readController.js');

router.post('/', ReadController.create);
router.get('/', ReadController.getAll);
router.get('/:id', ReadController.getOne);

module.exports = router;