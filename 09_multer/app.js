const express = require("express");
const app = express();

const PORT = 3000;
const multer = require("multer");
const path = require("path");

// 미들웨어
// view 관련
app.set("view engine", "ejs");
app.set("views", "./views");

//static 폴더
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/public"));
// app.use('/이 이름으로 사용할 것',express.static(실제 폴더 경로) )
// static 폴더 여러개 등록 가능

// console.log("현재 위치한 폴더의 경로", __dirname);

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// multer
const upload = multer({
  dest: "uploads/",
  // 자동으로 만들어짐
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },

    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

/*
multer 디테일 설정
  storage  저장공간에 정보
    diskStorage파일을 저장하기 위한 모든 제어기능 제공
      destination 저장경로에 관련된 정보
      limits 파일 제한 관련 정보
fileSize 파일 사이즈를 바이트 단위로 제한
*/

// 라우팅
app.get("/", function (req, res) {
  res.render("index");
});

// app.post("/upload", upload.single("userfile"), function (req, res) {
app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);

  //   {
  //   fieldname: 'userfile', //폼에 정의한 name값
  //   originalname: 'ì\x8A¤í\x81¬ë¦°ì\x83· 2024-01-02 191038.png', //원본파일명
  //   encoding: '7bit', //파일 인코딩 타입
  //   mimetype: 'image/png', //파일 타입
  //   destination: 'uploads/', //파일 저장 경로
  //   filename: '6978a858541036ac4bd5197dd8df5d55', //저장된 파일 이름
  //   path: 'uploads\\6978a858541036ac4bd5197dd8df5d55', //경로 포함 파일이름
  //   size: 182067 //byte 기준 파일 크기
  // }
  // [Object: null prototype] { title: '이름' }

  res.send("파일 업로드 완료!");
});

app.post(
  "/uploads/array",
  uploadDetail.array("multifiles"),
  function (req, res) {
    console.log(req.files); //[{...},{}] 배열로 요청됨, 파일을 하나만 업로드 해도 배열로 옴
    console.log(req.body); //파일외의 정보

    res.send("파일 업로드 완료!");
  }
);

app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  function (req, res) {
    console.log(req.files.file1[0].originalname);
    /*{file1:[{},{}],file2:[{},{}],name 속성:[{},{},...]}*/
    console.log(req.body);
    res.send("업로드 완료");
  }
);

// 동적파일 업로드
app.post("/dynamicupload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
  // res.send({...req.file, ...req.body})
  res.send({ title: req.body, fileInfo: req.file });
});

/*
{title:'푸',
fileInfo:{
  ...
}}
*/

app.listen(PORT, () => {
  console.log(`${PORT} is open!!`);
  console.log(`http://localhost:${PORT}`);
});
