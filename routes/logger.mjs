import express from "express";
import basicAuth from "express-basic-auth";
import variables from "../variables.mjs";

const loggerRouter = express.Router();

loggerRouter.post(
  "/",
  basicAuth({
    users: { [variables.BASIC_USERNAME]: variables.BASIC_PASSWORD },
  }),
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  (req, res, next) => {
    try {
      const { body, params, query } = req;

      console.log(`req.body`);
      console.log(JSON.stringify(body, null, 2));

      console.log(`req.params`);
      console.log(JSON.stringify(params, null, 2));

      console.log(`req.query`);
      console.log(JSON.stringify(query, null, 2));

      return res.status(200).json({ message: "Message received" });
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  }
);

export default loggerRouter;
