import express from 'express'
import { sendOrderEmail } from '../controller/order.js';

const orderRouter = express.Router();

orderRouter.post('/', sendOrderEmail);

export default orderRouter;