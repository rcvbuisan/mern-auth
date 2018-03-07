import jwt from 'express-jwt';

const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

export default auth;
