import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { getNotifications, updateNotifications } from "../controllers/notification.controller";
import { getAllOrders } from "../controllers/order.controller";
import { updateAccessToken } from "../controllers/user.controller";
const notificationRouter = express.Router();


notificationRouter.get("/get-all-notifications", updateAccessToken, isAutheticated,authorizeRoles("admin"),getNotifications);
notificationRouter.put("/update-notification/:id", updateAccessToken, isAutheticated,authorizeRoles("admin"),updateNotifications);
notificationRouter.get("/get-orders", updateAccessToken, isAutheticated,authorizeRoles("admin"),getAllOrders);

export default notificationRouter;



// getNotifications