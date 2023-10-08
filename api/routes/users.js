import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import { deleteUser, updateUser, getUser, getUsers } from "../controllers/user.js";

const router = express.Router();

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", verifyUser, getUsers);

export default router;