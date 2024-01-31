// 서버는 변경사항있으면 껐다 다시켬 오류도 서버죽음
const http = require("http");
const fs = require("fs");
const { error } = require("console");

const PORT = 8080;
const server = http.createServer(function (request, response) {
  // console.log(request.url)
  const data = fs.readFileSync("./index.html");

  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  // response.writeHead(상태코드, 헤더정보)
  // text/html 응답의 콘텐츠 형식이 HTML임
  // 인코딩 방식이 utf-8
  // response.write('응답완료!');
  // response.end('<h3>진짜 완료</h3>');
  response.write(data);
  response.end();

  //   예외처리 try{~}~catch(arr){}문
  // try 스코프 내부 문장에서 오류가 났을 때 catch문을 err를 보냄

  try {
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    // response.writeHead(상태코드, 헤더정보)
    // text/html 응답의 콘텐츠 형식이 HTML임
    // 인코딩 방식이 utf-8
    // response.write('응답완료!');
    // response.end('<h3>진짜 완료</h3>');
    response.write(data);
    response.end();
  } catch (error) {
    console.log(error);
    const data = fs.readFileSync("./404.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.write(data);
    response.end();
  } finally {
    // 예외 발생과 상관없임 모두 실행 시키고 싶은 경우 작성
    console.log("성공과 실패 모두 실행됩니다");
  }
});

// 1. request이벤트: 클라이언트 요청, 새로고침
server.on("request", function () {
  console.log("request 이벤트 실행!");
});

// 2.connection이벤트: 클라이언트 접속했을때 발생

server.on("connection", (req, res) => {
  console.log("connection이벤트 발생");
});

server.listen(PORT, function () {
  console.log("server is open!!");
  console.log(`http://localhost:${PORT}`);
});
