const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: {
      value: true,
      message: 'Это поле обязательно к заполнению',
    },
    minlength: [2, 'Минимум 2 символа'],
    maxlength: [30, 'Максимум 30 символов'],
    default: 'Александр',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => isEmail(v),
      message: (props) => `${props.value} некорректное значение email`,
    },
  },
  password: {
    type: String,
    required: {
      value: true,
      message: 'Поле password обязательное для заполнения',
    },
    select: false,
  },
});

module.exports = mongoose.model('user', userSchema);
