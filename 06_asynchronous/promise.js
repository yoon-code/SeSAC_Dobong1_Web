let price, product;

function goMart() {
  console.log("마트에 들어가서 어떤 음료를 살지 고민...");
}

function pickDrink() {
  return new Promise((resolve, reject) => {
    //3초동안 고민
    setTimeout(() => {
      console.log("고민끝!");
      product = "콜라";
      price = 2000;
      //   resolve("구매완료!");
      reject("실패");
    }, 3000);
  });
}
function pay(product, price) {
  console.log(`상품명:${product},가격:${price}`);
}

goMart();
pickDrink()
  .then(() => {
    pay(product, price);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("마트에서 나왔어요");
  });
