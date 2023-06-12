import {
  getNewestId,
  insertBillStatus,
  getBillsByUser,
  getBillsByBill,
  getAll,
  updateStatus,
  updatePaid,
  cancelStatus,
} from "../models/BillStatusModel.js";

// get the id of latest bill
export const showNewestStatusId = (req, res) => {
  getNewestId((err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

// insert new bill
export const createBillStatus = (req, res) => {
  const data = req.body;
  insertBillStatus(data, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(results);
    }
  });
};

// get all bills for a user by user_id
export const getAllBillsByUser = (req, res) => {
  getBillsByUser(req.params.user_id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

// get billStatus by bill_id
export const getAllBillsByBill = (req, res) => {
  getBillsByBill(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

// get all bills
export const getAllBills = (req, res) => {
  getAll((err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

// update the bill_status propertie of billStatus table by bill_id
export const updateBillStatus = (req, res) => {
  updateStatus(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

// update the bill_paid propertie of billStatus table by bill_id
export const updateBillPaid = (req, res) => {
  updatePaid(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

// cancel the bill_status and bill_paid properties by bill_id
export const cancelBillStatus = (req, res) => {
  cancelStatus(req.params.id, (err, results1, results2) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json({ bill_status: results1, bill_paid: results2 });
    }
  });
};
