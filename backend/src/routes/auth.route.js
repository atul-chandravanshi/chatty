import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
  sendOTP,
  checkotp,
  sendForgotOTP,
  savePassword,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/send-otp", sendOTP);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/sendforgototp", sendForgotOTP);
router.post("/setpassword", savePassword);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;
