//? user sta per la presenza di un utente con tutti i suoi relativi dati

import { User } from "../models/user.js";

export const inserisciPresenza = async (req, res) => {
  const user = req.body;

  if (
    !user.Nome ||
    !user.Cognome ||
    !user.Telefono ||
    !user.Intolleranze ||
    !user.Navetta ||
    !user.Accompagnatore
  )
    return res
      .status(400)
      .json({ status: "error", message: "campi vuoti o non validi" });

  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
