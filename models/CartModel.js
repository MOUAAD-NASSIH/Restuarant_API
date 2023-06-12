import db from "../config/database.js";

// get a items by user id, food id
export const getAItem = (user, food, result) => {
  db.query(
    "SELECT * FROM cart WHERE user_id = ? AND food_id = ?",
    [user, food],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// get all items by user id
export const getAllItems = (id, result) => {
  db.query("SELECT * FROM cart WHERE user_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// insert new item to cart
export const insertToCart = (data, result) => {
  db.query("INSERT INTO cart SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

// update qty of a cart item
export const updateCartItemQty = (data, result) => {
  db.query(
    "UPDATE cart SET item_qty = ? WHERE user_id = ? AND food_id = ?",
    [data.item_qty, data.user_id, data.food_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// delete a cart item for a user
export const deleteItemInCart = (user, food, result) => {
  db.query(
    "DELETE FROM cart WHERE user_id = ? AND food_id = ?",
    [user, food],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// delete all Items for a user
export const deleteAllItemsByUser = (id, result) => {
  db.query("DELETE FROM cart WHERE user_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
