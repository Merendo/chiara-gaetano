import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return res.sendStatus(403);

    req.user = user;
    next();
  });
};
