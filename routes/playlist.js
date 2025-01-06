import express from "express";
import { getPlaylist, addSong, deleteSong } from "../controllers/playlist.js";

const router = express.Router();

// Rotta per ottenere tutte le canzoni della playlist
router.get("/dati", getPlaylist);

// Rotta per aggiungere una nuova canzone alla playlist
router.post("/add-song", addSong);

// Rotta per eliminare una canzone dalla playlist
router.delete("/delete-song/:id", deleteSong);

export default router;
