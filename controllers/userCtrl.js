import { getAllUser, getUserByEmail, insertUser } from "../models/UserModel.js";

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
export const createAccount = (req, res) => {
  const data = req.body;
  insertUser(data, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).json(results);
    }
  });
};
