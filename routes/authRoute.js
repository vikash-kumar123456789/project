import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersControllers,
  getAllOrdersControllers,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//Router Object
const router = express.Router();

//routing
//resgister|| POST
router.post("/register", registerController);

//Login || PoST
router.post("/login", loginController);

//Forgot Password || Post
router.post("/forgot-password", forgotPasswordController);

// Test Routes
router.get("/test", requireSignIn, isAdmin, testController);

//procted user rout auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//procted Admin rout auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
// update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersControllers);

//All orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersControllers);

//order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
