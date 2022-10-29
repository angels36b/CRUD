import express from 'express';
import * as itemController from '../controllers/ItemController.js';

const router = express.Router();

router.route('/items')
    .post(itemController.create) 
    .get(itemController.read);

export default router;