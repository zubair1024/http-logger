import compression from "compression";
import cors from "cors";
import express from "express";
import loggerRouter from "./routes/logger.mjs";
import variables from "./variables.mjs";

const app = express();

const run = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(compression());
  app.use(cors());
  app.use("/logger", loggerRouter);
  app.listen(variables.PORT, () => {
    console.log(`Listening on ${variables.PORT}`);
  });
};

run().catch((err) => {
  console.error(err);
});
