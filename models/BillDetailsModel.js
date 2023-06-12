import db from "../config/database.js";

// get Bill Details
export const getBillDetails = (id, result) => {
  db.query(
    "SELECT * FROM billdetails WHERE bill_id = ?",
    [id],
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

// insert Bill Details
export const insertBillDetails = (data, result) => {
  db.query("INSERT INTO billdetails SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};
