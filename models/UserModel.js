// import db
import db from "../config/database.js";

// // get all user
export const getAllUser = (result) => {
  db.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.error(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// // get single user
export const getUserByEmail = (data, result) => {
  db.query(
    "SELECT user_id, user_name, user_password FROM user WHERE user_email = ?",
    [data],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// // insert a user
export const insertUser = (data, result) => {
  db.query("INSERT INTO user SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};
