import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

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

//IMPORT ROUTER
import pagesRoutes from "./routes/pages.js";
import presenze from "./routes/presenze.js";
import auth from "./routes/auth.js";
import Risultati from "./routes/risultati.js";

app.use("/", pagesRoutes);
app.use("/InfoForUs", presenze);
app.use("/Login", auth);
app.use("/Risultati", Risultati);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
