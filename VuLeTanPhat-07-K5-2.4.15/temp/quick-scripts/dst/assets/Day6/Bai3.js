
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df8c6hiOZ9JQ4jbxYFTqZNm', 'Bai3');
// Day6/Bai3.js

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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTMuanMiXSwibmFtZXMiOlsiaSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsyQkFDU0E7RUFBb0I7RUFDekJDLFVBQVUsQ0FBQyxZQUFNO0lBQ2JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFaLEVBRGEsQ0FDRztFQUNuQixDQUZTLEVBRVBBLENBQUMsR0FBQyxJQUZLLENBQVYsRUFFWTs7O0FBSmhCO0FBQ0EsS0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFFLEVBQW5CLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTJCO0VBQUEsTUFBbEJBLENBQWtCO0FBSTFCLEVBQ0Q7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vY2FjaCBoYXkgaG9uXG5mb3IgKGxldCBpID0gMTsgaTw9MTA7IGkrKyl7IC8vbGFwIHR1IDEgZGVuIDEwXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpOyAvLyBpbiByYSBnaWEgdHJpXG4gICAgfSwgaSoxMDAwKTsgLy8gbW9pIDFzIGluIHJhIGdpYSB0cmkgY3VhIGlcbn1cbi8vIHN1IGR1bmcgbGV0IHZpIHN1IGR1bmcgdG90IHRyb25nIGJsb2NrIHNjb3BlLCBjYXAgbmhhdCBnaWEgdHJpIHNhdSBtb2kgbGFuIGxhcCAgXG4vLyBjb25zdCB0aGkgY2hpIHN1IGR1bmcgbHV1IGdpYSB0cmkgY3VhIGJpZW4sIGsgY2FwIG5oYXQgZHVvYyBnaWEgdHJpXG4vLyB2YXIgdGhpIGN1IHBoYXAgY3UgZXM1IDUsIGtvIGtodXllbiBraGljaCB4YWksIGsgY28gYmxvY2sgc2NvcGUsIGdheSBraG8ga2hhbiBjaG8gbmd1b2kgY29kZSBsYW4gZG9jXG5cbi8vIGNhY2ggY2FsbGJhY2sgaGVsbCA9KSkpKVxuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgY29uc29sZS5sb2coMSk7XG4vLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKDIpO1xuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2coMyk7XG4vLyAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coNCk7XG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKDUpO1xuLy8gICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coNik7XG4vLyAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgICAgY29uc29sZS5sb2coNyk7XG4vLyAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDgpO1xuLy8gICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coOSk7XG4vLyAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMTApO1xuLy8gICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4vLyAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4vLyAgICAgICAgICAgICAgIH0sIDEwMDApO1xuLy8gICAgICAgICAgICAgfSwgMTAwMCk7XG4vLyAgICAgICAgICAgfSwgMTAwMCk7XG4vLyAgICAgICAgIH0sIDEwMDApO1xuLy8gICAgICAgfSwgMTAwMCk7XG4vLyAgICAgfSwgMTAwMCk7XG4vLyAgIH0sIDEwMDApO1xuLy8gfSwgMTAwMCk7XG5cbiJdfQ==