import db from "../config/database.js";
import jwt from "jsonwebtoken";

export const authentication = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader !== undefined) {
    try {
      if (authHeader?.startsWith("Bearer")) {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_JWT_SECRET);
        db.query(
          "SELECT * FROM user WHERE user_id = ?",
          [decoded.id],
          (err, results) => {
            if (err) {
              req.user = {};
              // next(err);
            } else {
              if (results) {
                // const { user_password, ...data } = results[0];
                // req.user = data || {};
                req.user = results[0] || {};
              } else {
                req.user = {};
              }
              // next();
            }
          }
        );
      }
    } catch (err) {}
  }
  next();
};
