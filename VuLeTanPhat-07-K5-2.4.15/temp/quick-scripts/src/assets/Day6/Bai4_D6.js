"use strict";
cc._RF.push(module, 'd7589Tqh6ZBtYOmHn42HSlU', 'Bai4_D6');
// Day6/Bai4_D6.js

"use strict";

var count = 1; //global scope voi let de cap nhat gia tri

var intervalId = setInterval(function () {
  // in ra moi giay nho interval
  console.log(count);
  count++;

  if (count > 10) {
    //dieu kien dung
    clearInterval(intervalId); //clearInterval de dung lai
  }
}, 1000); // setnterval co the lap lai lien tuc con setTimeout chi chay 1 lan
// setTimeout(() => {
//   console.log("1 lần sau 1 giây");
// }, 1000);
// const id = setInterval(() => {
//   console.log("Lặp mỗi 1 giây");
// }, 1000);
// clearInterval(id) // su dung cai nay neu muon dung Interval, tat nhien phai + dieu kien chu khong la k in ra gi het, cach su dung o bai chinh

cc._RF.pop();