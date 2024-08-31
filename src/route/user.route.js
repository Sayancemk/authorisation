import express from 'express';
import {
    signUp,
    verifyEmail,
    signIn,
    signOut,
    forgotPassword,
    resetPassword,
    checkAuth
} from '../controller/user.controller';

import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.route('/sign-up').post(signUp);

router.route('/verify-email').post(verifyEmail);

router.route('/sign-in').post(signIn);

router.route('/sign-out').get(verifyToken, signOut);

router.route('/verify-email').post(verifyEmail);

router.route('/forgot-password').post(forgotPassword);

router.route('/reset-password/:token').post(resetPassword);

router.route('/check-auth').get(verifyToken, checkAuth);

export default router;