import db from "../config/database.js";
import { getAllUser, getUserByEmail, insertUser } from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// all users
export const allUsers = (req, res) => {
  getAllUser((err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

// get single user
export const showAUser = (req, res) => {
  getUserByEmail(req.params.email, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

// create an account
export const createAccount = async (req, res) => {
  const data = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.user_password, salt);
  data.user_password = hashedPassword;

  insertUser(data, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).json(results);
    }
  });
};

// login an account
export const loginUser = (req, res) => {
  const { email, password } = req.body;
  getUserByEmail(email, async (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!results) {
        res.status(404).json({ message: "Invalid Email or Password!" });
      } else {
        // The user exists, continue with password comparison and token generation
        if (!(await bcrypt.compare(password, results.user_password))) {
          res.status(400).json({ message: "Invalid Email or Password!" });
        } else {
          const accessToken = jwt.sign(
            { id: results.user_id },
            process.env.ACCESS_TOKEN_JWT_SECRET,
            { expiresIn: "1800s" }
          );
          res.cookie("token", accessToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
          });
          res.status(200).json({ AccessToken: accessToken });
        }
      }
    }
  });
};

// logout an account
export const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.clearCookie("access_token");
  res.sendStatus(200);
};
