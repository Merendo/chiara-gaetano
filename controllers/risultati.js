// import { User } from "../models/user.js";

export const getAllUser = async (req, res) => {
  try {
    const presenze = await User.find();

    res.status(200).json(presenze);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
