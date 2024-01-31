const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  //   response.send("hello express!! 안녕하세요 익스프레스");

  //render의 두번째 인자에서 index.ejs에서 사용할 정보 전달
  response.render("index.ejs", {
    btns: ["apple", "banana"],
    isLogin: false,
    userInfo: {
      name: "alie",
      msg: "식사는 맛있게 하셨나요?",
    },
  });
});

// 라우팅
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// 404는 라우팅중 가장 마지막에 설정
// page not found
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});
