
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai13.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab92dF/HRpHKYl9I19aNi5B', 'Bai13');
// Day6/Bai13.js

"use strict";

function asyncFunc1() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc1");
    setTimeout(function () {
      console.log("Completed asyncFunc1");
      resolve("Result 1");
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc2");
    setTimeout(function () {
      console.log("Completed asyncFunc2");
      resolve("Result 2");
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc3");
    setTimeout(function () {
      console.log("Completed asyncFunc3");
      resolve("Result 3");
    }, 1000);
  });
}

function runSequentialPromises(funcArray) {
  // ham nhan mang, mang do chua cac ham bat dong bo
  funcArray.reduce(function (prevPromise, currentFunc) {
    // duyet qua tung mang, reduce de dam bao chay tuan tu, prevPromise la promise ham truoc, currentFunc chinh la ham dang xet
    // console.log('prevPromise',prevPromise,currentFunc) //log thu lan dau co ket qua undefined, pending, pending
    return prevPromise.then(function () {
      return currentFunc();
    }); //prevPromise hoan thanh moi goi ham moi, va currentFunc tra ve 1 promise moi de tiep tuc chuoi
  }, Promise.resolve()); //tao 1 promise co gia tri ngay lap tuc, dong thoi resolve cung la thong bao trang thai thanh cong da co ket qua 200ms tra ve nhu ben web
}

runSequentialPromises([asyncFunc1, asyncFunc2, asyncFunc3]); // khi su dung reduce thi no can cac gia tri de chay tuan tu, nhung cac ham bat dong bo nay moi vo khong co ket qua nao nen khong chay duoc, Promise.resolve dung de khac phuc van de nay
// vi du de nho ve reduce
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 0); // bắt đầu với 0
// console.log(sum); // 👉 15
// Lần	Accumulator	Current	Tổng
// 1	0	1	1
// 2	1	2	3
// 3	3	3	6
// 4	6	4	10
// 5	10	5	15

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTEzLmpzIl0sIm5hbWVzIjpbImFzeW5jRnVuYzEiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiYXN5bmNGdW5jMiIsImFzeW5jRnVuYzMiLCJydW5TZXF1ZW50aWFsUHJvbWlzZXMiLCJmdW5jQXJyYXkiLCJyZWR1Y2UiLCJwcmV2UHJvbWlzZSIsImN1cnJlbnRGdW5jIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUM5QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUYsT0FBTyxDQUFDLFVBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTSSxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSUwsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUM5QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUYsT0FBTyxDQUFDLFVBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTSyxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSU4sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUM5QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUYsT0FBTyxDQUFDLFVBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTTSxxQkFBVCxDQUErQkMsU0FBL0IsRUFBMEM7RUFBRTtFQUMxQ0EsU0FBUyxDQUFDQyxNQUFWLENBQWlCLFVBQUNDLFdBQUQsRUFBY0MsV0FBZCxFQUE4QjtJQUFFO0lBQy9DO0lBQ0EsT0FBT0QsV0FBVyxDQUFDRSxJQUFaLENBQWlCO01BQUEsT0FBTUQsV0FBVyxFQUFqQjtJQUFBLENBQWpCLENBQVAsQ0FGNkMsQ0FFQztFQUMvQyxDQUhELEVBR0dYLE9BQU8sQ0FBQ0MsT0FBUixFQUhILEVBRHdDLENBSWpCO0FBQ3hCOztBQUVETSxxQkFBcUIsQ0FBQyxDQUFDUixVQUFELEVBQWFNLFVBQWIsRUFBeUJDLFVBQXpCLENBQUQsQ0FBckIsRUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNGdW5jMSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGVkIGFzeW5jRnVuYzFcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMxXCIpO1xuICAgICAgcmVzb2x2ZShcIlJlc3VsdCAxXCIpO1xuICAgIH0sIDMwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNGdW5jMigpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGVkIGFzeW5jRnVuYzJcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMyXCIpO1xuICAgICAgcmVzb2x2ZShcIlJlc3VsdCAyXCIpO1xuICAgIH0sIDIwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNGdW5jMygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGVkIGFzeW5jRnVuYzNcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMzXCIpO1xuICAgICAgcmVzb2x2ZShcIlJlc3VsdCAzXCIpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcnVuU2VxdWVudGlhbFByb21pc2VzKGZ1bmNBcnJheSkgeyAvLyBoYW0gbmhhbiBtYW5nLCBtYW5nIGRvIGNodWEgY2FjIGhhbSBiYXQgZG9uZyBib1xuICBmdW5jQXJyYXkucmVkdWNlKChwcmV2UHJvbWlzZSwgY3VycmVudEZ1bmMpID0+IHsgLy8gZHV5ZXQgcXVhIHR1bmcgbWFuZywgcmVkdWNlIGRlIGRhbSBiYW8gY2hheSB0dWFuIHR1LCBwcmV2UHJvbWlzZSBsYSBwcm9taXNlIGhhbSB0cnVvYywgY3VycmVudEZ1bmMgY2hpbmggbGEgaGFtIGRhbmcgeGV0XG4gICAgLy8gY29uc29sZS5sb2coJ3ByZXZQcm9taXNlJyxwcmV2UHJvbWlzZSxjdXJyZW50RnVuYykgLy9sb2cgdGh1IGxhbiBkYXUgY28ga2V0IHF1YSB1bmRlZmluZWQsIHBlbmRpbmcsIHBlbmRpbmdcbiAgICByZXR1cm4gcHJldlByb21pc2UudGhlbigoKSA9PiBjdXJyZW50RnVuYygpKTsgLy9wcmV2UHJvbWlzZSBob2FuIHRoYW5oIG1vaSBnb2kgaGFtIG1vaSwgdmEgY3VycmVudEZ1bmMgdHJhIHZlIDEgcHJvbWlzZSBtb2kgZGUgdGllcCB0dWMgY2h1b2lcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpOyAvL3RhbyAxIHByb21pc2UgY28gZ2lhIHRyaSBuZ2F5IGxhcCB0dWMsIGRvbmcgdGhvaSByZXNvbHZlIGN1bmcgbGEgdGhvbmcgYmFvIHRyYW5nIHRoYWkgdGhhbmggY29uZyBkYSBjbyBrZXQgcXVhIDIwMG1zIHRyYSB2ZSBuaHUgYmVuIHdlYlxufVxuXG5ydW5TZXF1ZW50aWFsUHJvbWlzZXMoW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzNdKTtcblxuLy8ga2hpIHN1IGR1bmcgcmVkdWNlIHRoaSBubyBjYW4gY2FjIGdpYSB0cmkgZGUgY2hheSB0dWFuIHR1LCBuaHVuZyBjYWMgaGFtIGJhdCBkb25nIGJvIG5heSBtb2kgdm8ga2hvbmcgY28ga2V0IHF1YSBuYW8gbmVuIGtob25nIGNoYXkgZHVvYywgUHJvbWlzZS5yZXNvbHZlIGR1bmcgZGUga2hhYyBwaHVjIHZhbiBkZSBuYXlcbi8vIHZpIGR1IGRlIG5obyB2ZSByZWR1Y2Vcbi8vIGNvbnN0IG51bWJlcnMgPSBbMSwgMiwgMywgNCwgNV07XG5cbi8vIGNvbnN0IHN1bSA9IG51bWJlcnMucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudCkgPT4ge1xuLy8gICByZXR1cm4gYWNjdW11bGF0b3IgKyBjdXJyZW50O1xuLy8gfSwgMCk7IC8vIGLhuq90IMSR4bqndSB24bubaSAwXG5cbi8vIGNvbnNvbGUubG9nKHN1bSk7IC8vIPCfkYkgMTVcblxuLy8gTOG6p25cdEFjY3VtdWxhdG9yXHRDdXJyZW50XHRU4buVbmdcbi8vIDFcdDBcdDFcdDFcbi8vIDJcdDFcdDJcdDNcbi8vIDNcdDNcdDNcdDZcbi8vIDRcdDZcdDRcdDEwXG4vLyA1XHQxMFx0NVx0MTVcblxuIl19