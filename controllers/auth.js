import { Credential } from "../models/login.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { Username, Password } = req.body;
  const user = await Credential.findOne({ Username });

  if (!user)
    return res
      .status(404)
      .json({ status: "error", message: "username/password errati" });

  if (await bcrypt.compare(Password, user.Password)) {
    const token = jwt.sign(
      { id: user._id, Username: user.Username },
      process.env.JWT_SECRET
    );

    // Set jwt token in cookie as 'access_token'
    res.cookie("jwt", token);

    return res.json({ status: "ok", token });
  } else {
    res
      .status(400)
      .json({ status: "error", message: "username/password non validi" });
  }
};
