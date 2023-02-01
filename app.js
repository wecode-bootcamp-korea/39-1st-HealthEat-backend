require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { sqlDataSource } = require("./src/models/data-source");
const { router } = require("./src/routes");
const { globalErrorHandler } = require("./src/util/errors");

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));

  app.use(router);
  app.use(globalErrorHandler);

  return app;
};

const PORT = 3000;

module.exports = { createApp };
