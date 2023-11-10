/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors/errors');
const { JWT_SECRET, NODE_ENV } = require('../consts/consts');

module.exports = (req, res, next) => {
  let payload;
  const { authorization } = req.headers;
  const token = authorization.split('Bearer ')[1];

  if (!authorization && !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Необходима авторизация!'));
  }

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'secret-key',
    );
  } catch (error) {
    next(new UnauthorizedError('Необходима авторизация!'));
  }
  req.user = payload;
  next(new UnauthorizedError('Необходима авторизация!'));
};
