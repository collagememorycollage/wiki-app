const Router = require('express');
const router = new Router();

const articleRouter = require('./articleRouter.js');
const favoriteRouter = require('./favoriteRouter.js');
const noteRouter = require('./noteRouter.js');
const readRouter = require('./readRouter.js');
const userRouter = require('./userRouter.js');


router.use('/user', userRouter);
router.use('/article', articleRouter);
router.use('/favorite', favoriteRouter);
router.use('/note', noteRouter);
router.use('/read', readRouter);


module.exports = router;