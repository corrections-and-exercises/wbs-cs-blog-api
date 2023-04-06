import { Router } from 'express';
import { signUp, signIn, getUser } from '../controllers/users.js';
import validateJOI from '../middlewares/validateJOI.js';
import { sigupSchema, siginSchema } from '../joi/schemas.js';
import { protect } from '../middlewares/auth.js';

const authRouter = Router();

authRouter.post('/signup', validateJOI(sigupSchema), signUp);
authRouter.post('/signin', validateJOI(siginSchema), signIn);
authRouter.get('/me', protect, getUser);

export default authRouter;
