const mongoose = require('mongoose');
const User = require('./User');
const { urlRegex } = require('../consts/consts');

const moviesSchema = new mongoose.Schema({
  country: {
    type: String,
    required: {
      value: true,
      message: 'Это поле обязательно к заполнению',
    },
    minlength: [2, 'Минимум 2 символа'],
    maxlength: [30, 'Максимум 30 символов'],
  },
  director: {
    type: String,
    required: {
      value: true,
      message: 'Это поле обязательно к заполнению',
    },
    minlength: [2, 'Минимум 2 символа'],
    maxlength: [30, 'Максимум 30 символов'],
  },
  duration: {
    type: Number,
    required: {
      value: true,
      message: 'Это поле обязательно к заполнению',
    },
  },
  year: {
    type: String,
    required: {
      value: true,
      message: 'Это поле обязательно к заполнению',
    },
    minlength: [2, 'Минимум 2 символа'],
    maxlength: [30, 'Максимум 30 символов'],
  },
  description: {
    type: String,
    required: {
      value: true,
      message: 'Это поле обязательно к заполнению',
    },
    minlength: [2, 'Минимум 2 символа'],
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (url) => urlRegex.test(url),
      message: 'Введи URL с картинкой',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (url) => urlRegex.test(url),
      message: 'Введи URL с картинкой',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (url) => urlRegex.test(url),
      message: 'Введи URL с картинкой',
    },
  },
  owner: {
    ref: User,
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: {
      value: true,
      message: 'Это поле обязательно к заполнению',
    },
    minlength: [2, 'Минимум 2 символа'],
    maxlength: [120, 'Максимум 30 символов'],
  },
  nameEN: {
    type: String,
    required: {
      value: true,
      message: 'Это поле обязательно к заполнению',
    },
    minlength: [2, 'Минимум 2 символа'],
    maxlength: [120, 'Максимум 30 символов'],
  },
});

module.exports = mongoose.model('movies', moviesSchema);
