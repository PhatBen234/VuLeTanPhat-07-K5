"use strict";
cc._RF.push(module, '2d6f1rehVpOZ4Hyg56dOawE', 'Bai9_D6');
// Day6/Bai9_D6.js

"use strict";

function asyncFunc1() {
  return new Promise(function (resolve) {
    // tao 1 promise, promise nay nhan 1 ham doi so, o day la resolve - ham nay dung de bao hieu cong viec da hoan thanh
    console.log("Started asyncFunc1");
    setTimeout(function () {
      console.log("Completed asyncFunc1");
      resolve(1); // in 1, hoan thanh va dua len promise
    }, 3000); // doi 3s
  });
}

function asyncFunc2() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc2");
    setTimeout(function () {
      console.log("Completed asyncFunc2");
      resolve(2);
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc3");
    setTimeout(function () {
      console.log("Completed asyncFunc3");
      resolve(3);
    }, 1000);
  });
}

asyncFunc1().then(function (result1) {
  // sau khi hoan thanh (sau 3s nhu tren), no goi ham dau tien trong chuoi bang then
  console.log("Result 1:", result1); //result1 nhan gia tri tu resolve(1)

  return asyncFunc2(); //goi ham async2 ( ham tiep theo)
}).then(function (result2) {
  console.log("Result 2:", result2);
  return asyncFunc3();
}).then(function (result3) {
  console.log("Result 3:", result3);
})["catch"](function (error) {
  // neu co loi thi in loi
  console.error("Error occurred:", error);
}); //sau khi chay nhan xet ket qua giong bai 7, no doi chay xong ket qua moi toi ham tiep theo

cc._RF.pop();