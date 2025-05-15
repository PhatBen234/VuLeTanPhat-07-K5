
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20a1fOkeOZMhqq9KGgDnyNY', 'Bai5');
// Day6/Bai5.js

"use strict";

var _loop = function _loop(i) {
  // lam nguoc lai vs bai 3, van la let trong block scope nhung o vong for thi bat dau tu 10, dung khi toi 1, va dieu kien la -
  setTimeout(function () {
    console.log(i);
  }, (10 - i) * 1000); //thay vi la i*1000 ta thay bang 10-i vi dem nguoc lai ( phai la 10-i chu ghi i*1000 la dem tu 1 toi 10 )
};

for (var i = 10; i >= 1; i--) {
  _loop(i);
} //test thu dao nguoc lai bi sao
// for (let i = 10; i >= 1; i--) { // lam nguoc lai vs bai 3, van la let trong block scope nhung o vong for thi bat dau tu 10, dung khi toi 1, va dieu kien la -
//   setTimeout(() => {
//     console.log(i);
//   }, (i) * 1000); //thay vi la i*1000 ta thay bang 10-i vi dem nguoc lai ( phai la 10-i chu ghi i*1000 la dem tu 1 toi 10 )
// }
// for (var i = 10; i >= 1; i--) { //var + IIFE
//   (function(j) {
//     setTimeout(() => {
//       console.log(j);
//     }, (10 - j) * 1000);
//   })(i); //truyen i ngay day de dung gia tri
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTUuanMiXSwibmFtZXMiOlsiaSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsyQkFBU0E7RUFBdUI7RUFDOUJDLFVBQVUsQ0FBQyxZQUFNO0lBQ2ZDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFaO0VBQ0QsQ0FGUyxFQUVQLENBQUMsS0FBR0EsQ0FBSixJQUFTLElBRkYsQ0FBVixFQUVtQjs7O0FBSHJCLEtBQUssSUFBSUEsQ0FBQyxHQUFHLEVBQWIsRUFBaUJBLENBQUMsSUFBSSxDQUF0QixFQUF5QkEsQ0FBQyxFQUExQixFQUE4QjtFQUFBLE1BQXJCQSxDQUFxQjtBQUk3QixFQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJmb3IgKGxldCBpID0gMTA7IGkgPj0gMTsgaS0tKSB7IC8vIGxhbSBuZ3VvYyBsYWkgdnMgYmFpIDMsIHZhbiBsYSBsZXQgdHJvbmcgYmxvY2sgc2NvcGUgbmh1bmcgbyB2b25nIGZvciB0aGkgYmF0IGRhdSB0dSAxMCwgZHVuZyBraGkgdG9pIDEsIHZhIGRpZXUga2llbiBsYSAtXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICB9LCAoMTAtaSkgKiAxMDAwKTsgLy90aGF5IHZpIGxhIGkqMTAwMCB0YSB0aGF5IGJhbmcgMTAtaSB2aSBkZW0gbmd1b2MgbGFpICggcGhhaSBsYSAxMC1pIGNodSBnaGkgaSoxMDAwIGxhIGRlbSB0dSAxIHRvaSAxMCApXG59XG5cbi8vdGVzdCB0aHUgZGFvIG5ndW9jIGxhaSBiaSBzYW9cbi8vIGZvciAobGV0IGkgPSAxMDsgaSA+PSAxOyBpLS0pIHsgLy8gbGFtIG5ndW9jIGxhaSB2cyBiYWkgMywgdmFuIGxhIGxldCB0cm9uZyBibG9jayBzY29wZSBuaHVuZyBvIHZvbmcgZm9yIHRoaSBiYXQgZGF1IHR1IDEwLCBkdW5nIGtoaSB0b2kgMSwgdmEgZGlldSBraWVuIGxhIC1cbi8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coaSk7XG4vLyAgIH0sIChpKSAqIDEwMDApOyAvL3RoYXkgdmkgbGEgaSoxMDAwIHRhIHRoYXkgYmFuZyAxMC1pIHZpIGRlbSBuZ3VvYyBsYWkgKCBwaGFpIGxhIDEwLWkgY2h1IGdoaSBpKjEwMDAgbGEgZGVtIHR1IDEgdG9pIDEwIClcbi8vIH1cblxuXG5cbi8vIGZvciAodmFyIGkgPSAxMDsgaSA+PSAxOyBpLS0pIHsgLy92YXIgKyBJSUZFXG4vLyAgIChmdW5jdGlvbihqKSB7XG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhqKTtcbi8vICAgICB9LCAoMTAgLSBqKSAqIDEwMDApO1xuLy8gICB9KShpKTsgLy90cnV5ZW4gaSBuZ2F5IGRheSBkZSBkdW5nIGdpYSB0cmlcbi8vIH1cbiJdfQ==