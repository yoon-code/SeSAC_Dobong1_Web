const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 8001;

// tempDB 임시데이터 배열형태로 만들어서 화면에 띄워주는 작업

let tempDB = [
  {
    contentID: 1,
    title: "글제목1",
    content: "글내용1",
    img: null, //null or path(string)
  },
  {
    contentID: 2,
    title: "글제목2",
    content: "글내용2",
    img: null,
  },
  {
    contentID: 3,
    title: "글제목3",
    content: "글내용3",
    img: null,
  },
  {
    contentID: 4,
    title: "글제목4",
    content: "글내용4",
    img: null,
  },
];

const userID = "user1";

// 미들웨어 설정
// 미들웨어란 요청req과 응답res 사이에서 중간다리 역할하는 sw
/*
ex1) req의 body를 서버에서 읽을 수 있도록 도와주는 body-parser
ex2) req의 file에서 보내는 파일 정보를 확인할 수 있도록 도와주는 multer
ex3) static 파일설정을 도와주는 app.use(ecpress.static(~~))
*/

// 미들웨어 1. views 설정(set () 이용)
/*
view란 사람들 눈에 보이는 화면 프론트단 html 폴더 설정
view 설정
1. html 파일들을 어디서 모아둘건지 (views 폴더 설정)
2. html을 보여주기 위해서 어떻게 할건지 (view engine 설정)
- view engine (ejs)
서버에서 보낸 js 변수를 클라이언트에서 사용할수 있도록 돕는 것 
pug, ejs, nunjecks...등이 있지만 html과 유사한 것은 ejs
*/

app.set("view engine", "ejs");
app.set("views", "./views");

// 미들웨어 2. static 설정

/*
static폴더란 외부(브라우저등의 클라이언트)에서 접근할수있도록 설정한 폴더 
프론트 js, css, 이미지, 동영상
*/

app.use("/static", express.static(__dirname + "/public")); //가상경로
app.use("/uploads", express.static(__dirname + "/uploads")); //가상경로
// app.use(express.static("/uploads")); //이걸로 접근하겠다

//미들웨어 3. body-parser 설정 (express내장 모듈)
/*
-req.body 기본적으로 undefind 
body-parser가req.body를 서버측에서 사용할수있도록 파싱(바꿔준다)해줌
*/

//true queryString 모듈 사용 false qs 모듈(보안적으로 성능이 추가되어있다고 함) 사용
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //요청 body에서 필요한 객체 정보 json만 추출할수있도록 도와줌

//미들웨어 4.multer 설정 (npm i multer 설치 필요)
/*
req.body input type='file'의 정보는 string
실제 파일 업로드를 하고 파일 정보를 확인하기 위해서 사용
*/

const upload = multer({
  storage: multer.diskStorage({
    destination(req, fil, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      /*
        extname(파일명): 확장자를 추출해주는 함수
        basename(파일명, 확장자): 확장자를 제외한 파일명만 추출
        basename(경로명): (확장자포함된) 파일명 추출
        */
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { flsldSize: 5 * 1024 * 1024 }, //바이트제한
});

//[라우팅 설정]

/*
특정 url롤 특정 method에 대한 요청 처리
- url은 사용자가 정한 url
-method:get, post, put, patch, delete
CRUD를 위한것

익스프레스에서 제공하는 메소드
1.get : Read 데이터를 읽는 것, 브라우저의 url에 주소를 입력하는 것은 모두 get요청
.../sesac의 화면을 보기 위해서는 /sesac의 get요청에 대한 응답 res이 있어야 볼수있다
res.send(), res.end(), res.write() =응답이 끝나지 않음, res.render(),... 응답도 하고 끝내는 의미도 있음

2. post: Create 새로운 정보를 '입력','추가'할 때
3. put& patch: 수정 Update 수정관련 메소드 put 전체 수정, patch일부수정...post로도 수정 가능
4. delete : 삭제
*/

app.get("/", function (req, res) {
  res.render("index.ejs", {
    user: userID,
    contentData: tempDB, //[{},{}]
  });
});

/*
params vs query

params
    서버에서 url 표기 /:params
    클라이언트에서 요청시 /123
    req.params에서 정보 확인 가능 {params:'123'}
    네이버 블로그처럼 여러 계정의 글을 조회할때 == params

query
    서버에서 url 표기 /sesac 
    클라이언트에서 url 표기 /sesac?id=123&content=123 
    req.query에서 정보 확인 가능{id:"123", conrtent:"123"}
    검색 필터링 기능 ==query
*/

// content/1 content/2 content/3,,..
app.get("/content/:contentID", (req, res) => {
  //   console.log(req.params); //{ contentID: '1' }
  //   req.params.contentID
  const { contentID } = req.params;

  //   tempDB의 contentID와 params로 들어오는 contentID 비교
  const isContent = tempDB.filter(
    (obj) => obj.contentID === Number(contentID)
  )[0];
  console.log(isContent); // {}, undefined
  /* 
  {
    contentID: 1,
    title: "글제목1",
    content: "글 내용1",
    img: null, 
  },
  */
  if (isContent) {
    res.render("content", isContent);
  } else {
    res.render("404");
  }
  //   res.send("hi");
});

// 새글 작성하기 화면 랜더링
// content/write는
app.get("/write", function (req, res) {
  res.render("writeContent");
});

app.post("/blog/post", upload.single("img"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  tempDB.push({
    contentID:
      tempDB.length !== 0 ? tempDB[tempDB.length - 1].contentID + 1 : 1,
    title: req.body.title,
    content: req.body.content,
    img: req.file ? req.file.path : null,
    // null or path(string)
  });
  console.log(tempDB);
  res.redirect("/");
});

app.delete("/blog/delete", (req, res) => {
  console.log(req.query);

  const { contentID } = req.query;
  tempDB = tempDB.filter((obj) => obj.contentID !== Number(contentID));

  console.log(tempDB);
  res.end();
});

app.get("*", (req, res) => {
  res.render("404");
});

// [포트열기]
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
