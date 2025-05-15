"use strict";
cc._RF.push(module, 'ab9cbTtGjFE1p3c3Vge7oiO', 'Bai11');
// Day6/Bai11.js

"use strict";

function asyncFunc1() {
  return new Promise(function (resolve, reject) {
    // co the hieu la resolve la trang thai thanh cong, reject la that bai
    console.log("Started asyncFunc1");
    setTimeout(function () {
      console.log("Completed asyncFunc1");
      resolve("Result 1");
    }, 1000);
  });
}

function asyncFunc2() {
  return new Promise(function (resolve, reject) {
    console.log("Started asyncFunc2");
    setTimeout(function () {
      console.log("Failed asyncFunc2");
      reject("Error in asyncFunc2");
    }, 1000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve, reject) {
    console.log("Started asyncFunc3");
    setTimeout(function () {
      console.log("Completed asyncFunc3");
      resolve("Result 3");
    }, 1000);
  });
}

asyncFunc1().then(function (res1) {
  // xu li trang thai thanh cong tuc la no la resolve
  console.log(res1);
  return asyncFunc2();
}, function (err1) {
  // that bai duong nhien no la reject 
  console.error("Error in asyncFunc1:", err1);
  return asyncFunc2();
}).then(function (res2) {
  // xu li trang thai thanh cong tuc la no la resolve
  console.log(res2);
  return asyncFunc3();
}, function (err2) {
  // that bai duong nhien no la reject 
  console.error("Error in asyncFunc2:", err2);
  return asyncFunc3();
}).then(function (res3) {
  // xu li trang thai thanh cong tuc la no la resolve
  console.log(res3);
}, function (err3) {
  // that bai duong nhien no la reject 
  console.error("Error in asyncFunc3:", err3);
}); //co test error bang reject o function 2... ket qua la
//Started asyncFunc1
// Completed asyncFunc1
// Result 1
// Started asyncFunc2
// Failed asyncFunc2
// Error in asyncFunc2: Error in asyncFunc2
// Started asyncFunc3
// Completed asyncFunc3
// Result 3
// v la chi function 2 bi fail nhung tat ca func khac deu chay dc

cc._RF.pop();