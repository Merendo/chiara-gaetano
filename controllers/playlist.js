import db from "../models/db.js";

// Ottiene tutte le canzoni della playlist
export const getPlaylist = async (req, res) => {
  try {
    const playlist = await db.getPlaylist();
    res.json(playlist);
  } catch (error) {
    console.error("Errore nel recuperare la playlist:", error);
    res.status(500).json({ success: false, message: "Errore nel server" });
  }
};

// Aggiunge una nuova canzone alla playlist
export const addSong = async (req, res) => {
  const { song_name, author, username } = req.body;
  if (!song_name || !author || !username) {
    return res.status(400).json({ success: false, message: "Dati mancanti" });
  }

  try {
    const result = await db.addNewSongToPlaylist({
      song_name,
      author,
      username,
    });
    res.json({ success: true, id: result.id });
  } catch (error) {
    console.error("Errore nell'aggiungere la canzone:", error);
    res.status(500).json({ success: false, message: "Errore nel server" });
  }
};

// Elimina una canzone dalla playlist
export const deleteSong = async (req, res) => {
  const { id } = req.params;

  try {
    await db.deleteSongFromPlaylist(id);
    res.json({ success: true });
  } catch (error) {
    console.error("Errore nell'eliminare la canzone:", error);
    res.status(500).json({ success: false, message: "Errore nel server" });
  }
};
