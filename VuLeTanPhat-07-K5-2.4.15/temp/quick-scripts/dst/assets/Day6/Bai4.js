
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b43dDy3wJFeJ7YspJ13oO+', 'Bai4');
// Day6/Bai4.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTQuanMiXSwibmFtZXMiOlsiY291bnQiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlOztBQUVmLElBQU1DLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQUs7RUFBRTtFQUNsQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7RUFDQUEsS0FBSzs7RUFFTCxJQUFJQSxLQUFLLEdBQUcsRUFBWixFQUFnQjtJQUFFO0lBQ2RLLGFBQWEsQ0FBQ0osVUFBRCxDQUFiLENBRFksQ0FDZTtFQUM5QjtBQUNKLENBUDZCLEVBTzVCLElBUDRCLENBQTlCLEVBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvdW50ID0gMTsgLy9nbG9iYWwgc2NvcGUgdm9pIGxldCBkZSBjYXAgbmhhdCBnaWEgdHJpXG5cbmNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PnsgLy8gaW4gcmEgbW9pIGdpYXkgbmhvIGludGVydmFsXG4gICAgY29uc29sZS5sb2coY291bnQpO1xuICAgIGNvdW50Kys7XG5cbiAgICBpZiAoY291bnQgPiAxMCkgeyAvL2RpZXUga2llbiBkdW5nXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7IC8vY2xlYXJJbnRlcnZhbCBkZSBkdW5nIGxhaVxuICAgIH1cbn0sMTAwMClcblxuLy8gc2V0bnRlcnZhbCBjbyB0aGUgbGFwIGxhaSBsaWVuIHR1YyBjb24gc2V0VGltZW91dCBjaGkgY2hheSAxIGxhblxuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgY29uc29sZS5sb2coXCIxIGzhuqduIHNhdSAxIGdpw6J5XCIpO1xuLy8gfSwgMTAwMCk7XG5cbi8vIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcIkzhurdwIG3hu5dpIDEgZ2nDonlcIik7XG4vLyB9LCAxMDAwKTtcblxuLy8gY2xlYXJJbnRlcnZhbChpZCkgLy8gc3UgZHVuZyBjYWkgbmF5IG5ldSBtdW9uIGR1bmcgSW50ZXJ2YWwsIHRhdCBuaGllbiBwaGFpICsgZGlldSBraWVuIGNodSBraG9uZyBsYSBrIGluIHJhIGdpIGhldCwgY2FjaCBzdSBkdW5nIG8gYmFpIGNoaW5oXG4iXX0=