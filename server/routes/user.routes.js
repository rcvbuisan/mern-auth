import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
import * as UserController from '../controllers/user.controller';
import auth from '../util/auth';

const router = new Router();

// Get all Posts
router.route('/auth').post(AuthController.login);

router.route('/profile', auth).post(UserController.profile);

export default router;
