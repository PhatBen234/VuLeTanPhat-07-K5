"use strict";
cc._RF.push(module, 'cf3361XkpBLAobi+e76VpB6', 'Bai2');
// Day6/Bai2.js

"use strict";

function test(callback) {
  //test la ham boc ngoai, va nhan callback lam ham doi so
  setTimeout(callback, 2000); // thuc thi sau 2s
} // another way (cach nay lam hieu ro hon ve nhan ham lam doi so)
// function myFun(){
//     console.log("This is another test");
// }
// test(myFun); // neu su dung cach nay thi k them dau () vi myFun(), khi truyen ham lam doi so k can ()


test(function () {
  //test thu
  console.log("This is test");
});

cc._RF.pop();