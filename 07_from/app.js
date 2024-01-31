const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

//body-parser 미들웨어(중간다리) 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //json 형식으로 데이터를 주고 받음

app.get("/", function (req, res) {
  //요청, 응답
  res.render("index");
});

app.get("/getForm", function (req, res) {
  console.log(req.query);
  // res.send("데이터 잘 받았습니다");
  res.render("result", {
    title: "GET",
    uersInfo: req.query, //{id:"",email:"",}
  });
});

app.post("/postForm", function (req, res) {
  // post 요청은 req.body에 담겨져 옵니다
  console.log(req.body);
  // res.send("포스트 요청 성공");
  // res.send(`<ul>
  // <li>${req.body.id2}</li>
  // <li>${req.body.pw2}</li>
  // </ul>`);

  res.render("result.ejs", {
    title: "POST",
    uersInfo: req.body,
    addInfo: true, //{id2:"",email2:"",agree:[]}
  });
});
console.log("안녕하세요!");
app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});

app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("validation응답");
});
