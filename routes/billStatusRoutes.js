import express from "express";
import {
  showNewestStatusId,
  createBillStatus,
  getAllBills,
  getAllBillsByBill,
  getAllBillsByUser,
  updateBillStatus,
  updateBillPaid,
  cancelBillStatus,
} from "../controllers/billStatusCtrl.js";
const router = express.Router();

/* ************************************* */
router.get("/", getAllBills);
router.get("/new", showNewestStatusId);
router.get("/user/:user_id", getAllBillsByUser);
router.get("/bill/:id", getAllBillsByBill);
/* ************************************* */
router.post("/", createBillStatus);
router.post("/cancel/:id", cancelBillStatus);
/* ************************************* */
router.put("/:id", updateBillStatus);
router.put("/paid/:id", updateBillPaid);
/* ************************************* */

export default router;
