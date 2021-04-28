'use strict';

const users = require('../models/user.js')

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { next('Invalid Login') }

  try {
    let token = req.headers.authorization.split(' ').pop();
    const validUser = await users.authenticateWithToken(token);

    req.user = validUser;
    req.token = validUser.token;
    next();
  }  catch (e) {
    res.status(403).send('Invalid Login');;
  }
 
}