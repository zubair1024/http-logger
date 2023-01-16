import variables from "../variables.mjs";

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const isAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth === variables.TOKEN) {
    next();
  } else {
    return res.status(400).send("Forbidden Access");
  }
};
