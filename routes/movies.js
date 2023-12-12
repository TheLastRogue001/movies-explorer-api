const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { urlRegex } = require('../consts/consts');
const {
  getMovies,
  createMovies,
  deleteMovies,
} = require('../controllers/movies');

router.get('/movies', getMovies);
router.post(
  '/movies',
  celebrate({
    body: Joi.object().keys({
      country: Joi.string().required().min(2).max(120),
      director: Joi.string().required().min(2).max(120),
      duration: Joi.number().required(),
      year: Joi.string().required().min(2).max(30),
      description: Joi.string().required().min(2),
      image: Joi.string()
        .required()
        .regex(urlRegex)
        .uri({ scheme: ['http', 'https'] }),
      trailerLink: Joi.string()
        .required()
        .regex(urlRegex)
        .uri({ scheme: ['http', 'https'] }),
      thumbnail: Joi.string()
        .required()
        .regex(urlRegex)
        .uri({ scheme: ['http', 'https'] }),
      movieId: Joi.number().required(),
      nameEN: Joi.string().required().min(2).max(120),
      nameRU: Joi.string().required().min(2).max(120),
    }),
  }),
  createMovies,
);
router.delete('/movies/:_id', deleteMovies);

module.exports = router;
