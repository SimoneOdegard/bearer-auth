'use strict';

const base64 = require('base-64');
const User = require('../models/user.js');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { return next('Invalid Login') }

  let basic = req.headers.authorization.split(' ').pop();
  let [user, pass] = base64.decode(basic).split(':');

  // User.authenticateBasic(user, pass)
  //   .then(validUser => {
  //     req.user = validUser;
  //     next();
  //   })
  //   .catch(e => res.status(403).send('Invalid Login'));

  try {
    req.user = await User.authenticateBasic(user, pass)
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }

}