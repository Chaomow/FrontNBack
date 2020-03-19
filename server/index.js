const express = require("express");
const bodyParser = require("body-parser");
// const pino = require("express-pino-logger")();

const app = express();
const apiRouter = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

apiRouter
  .get("/greeting", (req, res) => {
    const name = req.query.name || "World";
    res.json(`Hello ${name}!`);
  })
  .get("/goodbye", (req, res) => {
    const name = req.query.name || "World";
    res.json(`Bye Bye ${name}!`);
  });

app.use("/api/v1", apiRouter);

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
