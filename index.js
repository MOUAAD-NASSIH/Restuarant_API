// imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/database.js";

// routes imports
import userRoutes from "./routes/userRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import bookTableRoutes from "./routes/bookTableRoutes.js";
import billDetailsRoutes from "./routes/billDetailsRoutes.js";
import billStatusRoutes from "./routes/billStatusRoutes.js";

// environment variables && express init
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the application !");
});

// routes
app.use("/api/foods", foodRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cartItem", cartRoutes);
app.use("/api/booking", bookTableRoutes);
app.use("/api/billdetails", billDetailsRoutes);
app.use("/api/billstatus", billStatusRoutes);

// datababse connection && start listening to requests
db.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database !");
  app.listen(port, () => console.log(`app listening on port ${port}`));
});
