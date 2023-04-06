import { Router } from 'express';
import validateJOI from '../middlewares/validateJOI.js';
import { createPost, deletePost, getAllPosts, getSinglePost, updatePost } from '../controllers/posts.js';
import { postSchema } from '../joi/schemas.js';
import { protect } from '../middlewares/auth.js';

const postsRouter = Router();

postsRouter.route('/').get(getAllPosts).post(validateJOI(postSchema), protect, createPost);

postsRouter.route('/:id').get(getSinglePost).put(protect, updatePost).delete(protect, deletePost);

export default postsRouter;
