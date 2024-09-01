import express from 'express';
import {
    signUp,
    verifyEmail,
    signIn,
    signOut,
    forgotPassword,
    resetPassword,
    updatePassword,
    updateEmail,
    checkAuth
} from '../controller/user.controller.js';

import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.route('/sign-up').post(signUp);

router.route('/verify-email').post(verifyEmail);

router.route('/sign-in').post(signIn);

router.route('/sign-out').get(signOut);

router.route('/verify-email').post(verifyEmail);

router.route('/forgot-password').post(forgotPassword);

router.route('/reset-password/:token').post(resetPassword);

router.route('/update-password').put(verifyToken, updatePassword);

router.route('/update-email').put(verifyToken, updateEmail);

router.route('/check-auth').get(verifyToken, checkAuth);

export default router;