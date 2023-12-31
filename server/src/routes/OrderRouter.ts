import { Router } from "express";
import { OrderController } from "../controllers";

const OrderRouter = Router();

OrderRouter.get("", OrderController.getAllOrders);
OrderRouter.post("", OrderController.createOrder);

export default OrderRouter;
