import User from '../models/user';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function login(req, res) {

  User.findOne({ username: req.body.user.username }).exec((err, user) => {
    if (err || !user || !user.username) {
      return res.status(500).send(err);
    }

    if (user.validPassword(req.body.user.password)) {
      return res.json({
        message: '',
        ok: true,
        token: user.generateJwt(),
        user: {
          username: user.username
        },
      });
    }

    return res.status(400).send({ msg: 'Not authorization' });
  });
}
