import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
const router = new Router();

// Get all Posts
router.route('/auth').post(AuthController.login);

export default router;
