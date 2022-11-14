require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const { DataSource } = require("typeorm");
const sqlDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});

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
