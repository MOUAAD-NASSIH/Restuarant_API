import {
  getFoods,
  getFoodById,
  insertFood,
  updateFoodById,
  deleteFoodById,
} from "../models/FoodModel.js";

// get all Foods
export const showFoods = (req, res) => {
  getFoods((err, results) => {
    if (err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      res.status(200).json({ results: results, user: req.user });
    }
  });
};

// get Food by id
export const showFoodById = (req, res) => {
  const id = req.params.id;
  getFoodById(id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

// create food
export const createFood = (req, res) => {
  const data = req.body;
  insertFood(data, (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(201).json(results);
    }
  });
};

// update Food
export const updateFood = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateFoodById(data, id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

// delete Food
export const deleteFood = (req, res) => {
  const id = req.params.id;
  deleteFoodById(id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};
