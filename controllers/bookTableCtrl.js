import { insertBooking } from "../models/BookTableModel.js";

// create Booking
export const createBooking = (req, res) => {
  const data = req.body;
  insertBooking(data, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(results);
    }
  });
};
