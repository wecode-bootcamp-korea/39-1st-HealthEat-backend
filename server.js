const { sqlDataSource } = require("./src/models/data-source");
const createApp = require("./app");

const start = async () => {
  const app = createApp();
  const PORT = process.env.PORT;

  sqlDataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!!!");
    })
    .catch((err) => {
      console.log("Error during Data Source initialization", err);
    });
  app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
};
app.get("/ping", (req, res) => {
  return res.status(200).json({ message: "pong" });
});

start();
