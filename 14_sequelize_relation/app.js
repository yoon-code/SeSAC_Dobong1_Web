const PORT = 8080;
const express = require("express");
const app = express();
const router = require("./router");
const { sequelize } = require("./models");

// middleware
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
