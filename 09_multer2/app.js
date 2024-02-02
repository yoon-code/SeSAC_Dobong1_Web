const express = require("express");
const app = express();
const PORT = 8080;
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/public", express.static(__dirname + "/static"));

// multer
const upload = multer({
  storage: multer.diskStorage({
    destination(req, fil, done) {
      done(null, "uploads/");
      // 자동 생성 x
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { flsldSize: 5 * 1024 * 1024 },
  // dest: "uploads/",
  // 자동으로 만들어짐
});

app.use("/uploads", express.static("uploads"));

// app.post("/upload", upload.single("네임값"), function (req, res) {
app.post("/upload", upload.single("profile"), function (req, res) {
  console.log(req.body);
  console.log(req.file);
  res.render("result", {
    src: req.file.path,
    title: "POST",
    userInfo: {
      ...req.body,
      file: req.file,
    },
  });
});

//라우팅
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/result", function (req, res) {});

app.get(
  "/content/:contentId",
  (req,
  (res) => {
    console.log(req.params);
    res.setEncoding("hi");
  })
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
