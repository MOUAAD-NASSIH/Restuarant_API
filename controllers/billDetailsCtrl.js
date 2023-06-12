import {
  getBillDetails,
  insertBillDetails,
} from "../models/BillDetailsModel.js";

// show bill details
export const getBillDetailsById = (req, res) => {
  getBillDetails(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(results);
    }
  });
};

// create bill details
export const createBillDetails = (req, res) => {
  const data = req.body;
  insertBillDetails(data, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(results);
    }
  });
};
