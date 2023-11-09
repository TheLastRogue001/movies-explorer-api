/* eslint-disable max-len */

const Movies = require('../models/Movies');
const { HTTP_STATUS_OK } = require('../consts/consts');
const { BadRequestError, NotFoundError } = require('../errors/errors');

const getMovies = (req, res, next) => {
  Movies.find({})
    .then((moviess) => res.send(moviess))
    .catch((err) => next(err));
};

const createMovies = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const owner = req.user._id;
  Movies.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movies) => res.send(movies))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(
          new BadRequestError(
            `Переданы некорректные данные при создании фильма: ${err.message}`,
          ),
        );
      }
      return next(err);
    });
};

const deleteMovies = (req, res, next) => {
  const { movieId } = req.params;
  Movies.findById(movieId)
    .then((movies) => {
      if (!movies) {
        return next(new NotFoundError('Фильм по указанному _id не найдена'));
      }
      return Movies.findByIdAndDelete(movieId).then((deletedMovies) => res.status(HTTP_STATUS_OK).send(deletedMovies));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError('Передан некорректный _id фильма'));
      }
      return next(err);
    });
};

module.exports = {
  getMovies,
  createMovies,
  deleteMovies,
};
