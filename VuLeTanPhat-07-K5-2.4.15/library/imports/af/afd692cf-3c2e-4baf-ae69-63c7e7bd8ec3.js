"use strict";
cc._RF.push(module, 'afd69LPPC5Lr65pY8fnvY7D', 'Bai3_D6');
// Day6/Bai3_D6.js

"use strict";

var _loop = function _loop(i) {
  //lap tu 1 den 10
  setTimeout(function () {
    console.log(i); // in ra gia tri
  }, i * 1000); // moi 1s in ra gia tri cua i
};

//cach hay hon
for (var i = 1; i <= 10; i++) {
  _loop(i);
} // su dung let vi su dung tot trong block scope, cap nhat gia tri sau moi lan lap  
// const thi chi su dung luu gia tri cua bien, k cap nhat duoc gia tri
// var thi cu phap cu es5 5, ko khuyen khich xai, k co block scope, gay kho khan cho nguoi code lan doc
// cach callback hell =))))
// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//         setTimeout(() => {
//           console.log(5);
//           setTimeout(() => {
//             console.log(6);
//             setTimeout(() => {
//               console.log(7);
//               setTimeout(() => {
//                 console.log(8);
//                 setTimeout(() => {
//                   console.log(9);
//                   setTimeout(() => {
//                     console.log(10);
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

cc._RF.pop();