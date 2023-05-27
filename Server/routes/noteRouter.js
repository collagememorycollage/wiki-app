const Router = require('express');
const router = new Router();
const NoteController = require('../controllers/noteController.js');

router.post('/', NoteController.create);
router.get('/', NoteController.getAll);

module.exports = router;