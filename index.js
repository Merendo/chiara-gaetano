import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import db from "./models/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

//^ setting the template engine
app.set("view engine", "ejs"); //- no need to import
//^ setting the views folder
app.set("views", path.join(__dirname, "views"));

//middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//IMPORT ROUTER
import pagesRoutes from "./routes/pages.js";
import presenze from "./routes/presenze.js";
import auth from "./routes/auth.js";
import Risultati from "./routes/risultati.js";
import playlist from "./routes/playlist.js";
import Database from "./models/db.js";

app.use("/", pagesRoutes);
app.use("/InfoForUs", presenze);
app.use("/Login", auth);
app.use("/Risultati", Risultati);
app.use("/Playlist", playlist);

// Test connessione al database
db.getPlaylist()
  .then(() => console.log("Connessione al database riuscita!"))
  .catch((err) =>
    console.error("Errore nel connettersi al database:", err.message)
  );

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
