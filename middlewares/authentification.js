import db from "../config/database.js";
import jwt from "jsonwebtoken";

// export const authentication = async (req, res, next) => {
//   const authHeader = req.headers.authorization || req.headers.Authorization;
//   try {
//     if (authHeader?.startsWith("Bearer")) {
//       const token = authHeader.split(" ")[1];
//       try {
//         const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_JWT_SECRET);
//         db.query(
//           "SELECT user_id, user_name, user_phone, user_birth, user_gender FROM user WHERE user_id = ?",
//           [decoded.id],
//           (err, results) => {
//             if (err) {
//               req.user = {};
//               return next(err);
//             }
//             req.user = results[0] || {};
//             return next();
//           }
//         );
//       } catch (err) {
//         // console.log(err);
//         return res.status(400).json({ error: err.message });
//       }
//     }
//     req.user = {};
//     return next();
//   } catch (err) {
//     console.log(err);
//     return next(err);
//   }
// };

// export const authentication = async (req, res, next) => {
//   const cookie = req.cookie["token"];
//   try {
//     const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_JWT_SECRET);
//     if (!claims) {
//       res.status(401).json({ error: "UnAuthenticated !" });
//       return next();
//     }
//     db.query("SELECT * user WHERE user_id = ?", [claims.id], (err, results) => {
//       if (err) {
//         res.status(401).json({ error: "UnAuthenticated !" });
//         return next(err);
//       } else {
//         req.user = results[0] || {};
//         return next();
//       }
//     });
//   } catch (err) {
//     // console.log(err);
//     res.status(401).json({ error: "UnAuthenticated !" });
//     return next(err);
//   }
// };

// export const authentication = async (req, res, next) => {
//   const authHeader = req.headers.authorization || req.headers.Authorization;
//   try {
//     if (authHeader?.startsWith("Bearer")) {
//       const token = authHeader.split(" ")[1];
//       try {
//         const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_JWT_SECRET);
//         db.query(
//           "SELECT * user WHERE user_id = ?",
//           [decoded.id],
//           (err, results) => {
//             if (err) {
//               req.user = {};
//               return next(err);
//             } else {
//               // const { user_password, ...data } = results;
//               req.user = results || {};
//               return next();
//             }
//           }
//         );
//       } catch (err) {
//         // console.log(err);
//         // res.status(400).json({ error: err.message });
//         next(err);
//       }
//     }
//     req.user = {};
//     return next();
//   } catch (err) {
//     console.log(err);
//     return next(err);
//   }
// };

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
                const { user_password, ...data } = results[0];
                // const { user_password, ...data } = results;
                req.user = data || {};
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
