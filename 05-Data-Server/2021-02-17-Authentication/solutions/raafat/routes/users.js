import express from "express";
import user from "../controllers/user.js";
import { userValidationRules, validate } from "../middleware/validator.js";
const router = express.Router();

router.post("/login", user.login);
router.get("/logout", user.logout);
router.post("/register", userValidationRules(), validate, user.create);

export default router;
