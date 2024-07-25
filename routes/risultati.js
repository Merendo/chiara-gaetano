import express from "express";
import { getAllUser } from "../controllers/risultati.js";

const router = express.Router();

router.get("/data", getAllUser);

export default router;
