require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { sqlDataSource } = require("./src/models/data-source");
const { router } = require("./src/routes");
const { globalErrorHandler } = require("./src/util/errors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(router);
app.use(globalErrorHandler);

const PORT = 3000;

sqlDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!!!");
  })
  .catch((err) => {
    console.log("Error during Data Source initialization", err);
  });

const start = async () => {
  app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
};
app.get("/ping", (req, res) => {
  return res.status(200).json({ message: "pong" });
});

start();
