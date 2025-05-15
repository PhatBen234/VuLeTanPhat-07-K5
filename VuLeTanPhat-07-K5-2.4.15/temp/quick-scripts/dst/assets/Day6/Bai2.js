
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTIuanMiXSwibmFtZXMiOlsidGVzdCIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsSUFBVCxDQUFjQyxRQUFkLEVBQXdCO0VBQUU7RUFDdEJDLFVBQVUsQ0FBQ0QsUUFBRCxFQUFXLElBQVgsQ0FBVixDQURvQixDQUNRO0FBQy9CLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUFELElBQUksQ0FBQyxZQUFVO0VBQUU7RUFDYkcsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNILENBRkcsQ0FBSiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdGVzdChjYWxsYmFjaykgeyAvL3Rlc3QgbGEgaGFtIGJvYyBuZ29haSwgdmEgbmhhbiBjYWxsYmFjayBsYW0gaGFtIGRvaSBzb1xuICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIDIwMDApOyAvLyB0aHVjIHRoaSBzYXUgMnNcbn1cblxuLy8gYW5vdGhlciB3YXkgKGNhY2ggbmF5IGxhbSBoaWV1IHJvIGhvbiB2ZSBuaGFuIGhhbSBsYW0gZG9pIHNvKVxuLy8gZnVuY3Rpb24gbXlGdW4oKXtcbi8vICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgYW5vdGhlciB0ZXN0XCIpO1xuLy8gfVxuXG4vLyB0ZXN0KG15RnVuKTsgLy8gbmV1IHN1IGR1bmcgY2FjaCBuYXkgdGhpIGsgdGhlbSBkYXUgKCkgdmkgbXlGdW4oKSwga2hpIHRydXllbiBoYW0gbGFtIGRvaSBzbyBrIGNhbiAoKVxuXG50ZXN0KGZ1bmN0aW9uKCl7IC8vdGVzdCB0aHVcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGVzdFwiKVxufSkiXX0=