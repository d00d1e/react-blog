import bcrypt from "bcrypt";

import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(400).json({ message: "Wrong credentials" });

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json({ message: "Wrong credentials" });

    //omit password
    const { password, ...userProps } = user._doc;
    res.status(200).json(userProps);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
