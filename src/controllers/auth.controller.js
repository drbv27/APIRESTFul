import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, //24 horas
  });

  /* console.log(newUser); */

  res.status(200).json({ token });
  /* res.json("signup"); */
};
export const signin = async (req, res) => {
  res.json("signin");
};
