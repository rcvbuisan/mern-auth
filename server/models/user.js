import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: 'String', required: true },
  password: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  hash: { type: 'String', },
  salt: { type: 'String', },
  created: { type: 'Date', default: Date.now, required: true },
});

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

export default mongoose.model('User', userSchema);
