const router = require('express').Router();
const routerUsers = require('./users');
const routerMovies = require('./movies');
const routerAuth = require('./auth');
const auth = require('../middlewares/auth');
const { NotFoundError } = require('../errors/errors');

router.use(routerAuth);

router.use(auth);
router.use(routerUsers);
router.use(routerMovies);
router.use((req, res, next) => next(new NotFoundError('Такой страницы не существует')));

module.exports = router;
