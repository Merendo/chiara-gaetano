import express from "express";
import { inserisciPresenza } from "../controllers/presenze.js";

const router = express.Router();

router.post("/", inserisciPresenza);

export default router;
