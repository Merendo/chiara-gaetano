import express from "express";
import { authenticateToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", req.query);
});

router.get("/AboutUs", (req, res) => {
  res.render("AboutUs", req.query);
});

router.get("/TheWedding", (req, res) => {
  res.render("TheWedding", req.query);
});

router.get("/ListaNozze", (req, res) => {
  res.render("ListaNozze", req.query);
});

router.get("/InfoForUs", (req, res) => {
  res.render("InfoForUs", req.query);
});

router.get("/Risultati", authenticateToken, (req, res) => {
  res.render("Risultati", req.query);
});

router.get("/Login", (req, res) => {
  res.render("Login", req.query);
});

export default router;
