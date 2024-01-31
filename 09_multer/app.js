const express = require("express");
const app = express();

const PORT = 3000;
const multer = require("multer");

// 미들웨어
app.set("view engine", "ejs");
app.set("views", "./views");

const upload = multer({
  dest: "uploads/",
  // 자동으로 만들어짐
});

// 라우팅
app.get("/", function (req, res) {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!!`);
  console.log(`http://localhost:${PORT}`);
});
