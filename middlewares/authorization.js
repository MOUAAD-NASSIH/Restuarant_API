export function auth(req, res, next) {
  console.log(req.user);
  if (req.user?.user_id) return next();

  return res.sendStatus(401);
}
