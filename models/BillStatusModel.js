import db from "../config/database.js";

// get newest Bill Status
export const getNewestId = (result) => {
  db.query(
    "SELECT bill_id FROM billstatus ORDER BY bill_id DESC LIMIT 0, 1",
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

// insert Bill Status
export const insertBillStatus = (data, result) => {
  db.query("INSERT INTO billstatus SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

// get all Bills Status
export const getBillsByUser = (id, result) => {
  db.query("SELECT * FROM billstatus WHERE user_id = ?", id, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get all Bills status by id
export const getBillsByBill = (id, result) => {
  db.query("SELECT * FROM billstatus WHERE bill_id = ?", id, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get all Bills Status
export const getAll = (result) => {
  db.query("SELECT * FROM billstatus", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// update bill status
export const updateStatus = (id, result) => {
  db.query(
    "UPDATE billstatus SET bill_status = bill_status + 1  WHERE bill_id = ?",
    id,
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

// update bill paid
export const updatePaid = (id, result) => {
  db.query(
    "UPDATE billstatus SET bill_paid = 'true' WHERE bill_id = ?",
    id,
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

// cancel the bill_status and bill_paid properties by bill_id
export const cancelStatus = (id, result1, result2) => {
  db.query(
    "UPDATE billstatus SET bill_status = 0  WHERE bill_id = ?",
    id,
    (err, results) => {
      if (err) {
        console.log(err);
        result1(err, null);
      } else {
        result1(null, results);
      }
    }
  );
  db.query(
    "UPDATE billstatus SET bill_paid = 'false' WHERE bill_id = ?",
    id,
    (err, results) => {
      if (err) {
        console.log(err);
        result2(err, null);
      }
    }
  );
};
