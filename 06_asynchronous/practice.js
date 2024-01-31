function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      // cb(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      // cb("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // cb("callback hell");
      resolve("callback hell");
    }, 1000);
  });
}

async function execute() {
  const name = await call("kim");
  console.log(name + "반가워");

  const txt = await back();
  console.log(txt + "을 실행했구나");

  const message = await hell();
  console.log("여기는 " + message);
}
execute();

// Promise
// call("kim")
//   .then((name) => {
//     console.log(name + "반가워");
//     return back();
//   })
//   .then((txt) => {
//     console.log(txt + "을 실행했구나");
//     return hell();
//   })
//   .then((message) => {
//     console.log("여기는 " + message);
//   });

// 콜백
// // call -> back -> hell 순서로 실행
// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "을 실행했구나");
//     hell(function (message) {
//       console.log("여기는 " + message);
//     });
//   });
// });
