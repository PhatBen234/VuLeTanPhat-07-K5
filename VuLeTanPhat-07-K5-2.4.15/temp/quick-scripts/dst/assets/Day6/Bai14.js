
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai14.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69ae5QLyz1El5eiM/XXnIy2', 'Bai14');
// Day6/Bai14.js

"use strict";

function printInOrderConcurrently(funcArray) {
  // khoi tao ham nhan mang co chua cac ham async
  var results = new Array(funcArray.length); // mang result co do dai cua mang funcArray, muc dich de dung vi tri index khi tra ve

  var printed = new Array(funcArray.length).fill(false); // ban dau ket qua deu la false, printed danh dau mang nao da in ra roi

  var nextIndexToPrint = 0;
  funcArray.forEach(function (func, index) {
    //duyet qua tung mang cung index cua no
    func().then(function (value) {
      //se xu ly sau khi promise hoan tat
      results[index] = value; // luu gia tri value vao dung vi tri trong mang results

      while (nextIndexToPrint < results.length && // da het do dai mang
      results[nextIndexToPrint] !== undefined && //da co ket qua
      !printed[nextIndexToPrint] //chua in truoc do
      ) {
        console.log("Result " + (nextIndexToPrint + 1) + ":", results[nextIndexToPrint]); // index 0 => result 1

        printed[nextIndexToPrint] = true; //danh dau da duoc in

        nextIndexToPrint++; // goi vi tri tiep theo trong mang
      }
    });
  });
}

function asyncFunc1() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(1);
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(2);
    }, 1000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(3);
    }, 2000);
  });
}

printInOrderConcurrently([asyncFunc1, asyncFunc2, asyncFunc3]); // sau 3s co ket qua toan bo va theo thu tu
//asci for each
// forEach:
//  ┌──────────────────────────────────────────────────────┐
//  │ gọi từng hàm async() → chạy song song               │
//  │      └─> khi xong → lưu vào `results[index]`         │
//  │                 └─> nếu có thể in → in và tăng index │
//  └──────────────────────────────────────────────────────┘

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTE0LmpzIl0sIm5hbWVzIjpbInByaW50SW5PcmRlckNvbmN1cnJlbnRseSIsImZ1bmNBcnJheSIsInJlc3VsdHMiLCJBcnJheSIsImxlbmd0aCIsInByaW50ZWQiLCJmaWxsIiwibmV4dEluZGV4VG9QcmludCIsImZvckVhY2giLCJmdW5jIiwiaW5kZXgiLCJ0aGVuIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiYXN5bmNGdW5jMSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImFzeW5jRnVuYzIiLCJhc3luY0Z1bmMzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLHdCQUFULENBQWtDQyxTQUFsQyxFQUE2QztFQUFFO0VBQzdDLElBQU1DLE9BQU8sR0FBRyxJQUFJQyxLQUFKLENBQVVGLFNBQVMsQ0FBQ0csTUFBcEIsQ0FBaEIsQ0FEMkMsQ0FDRTs7RUFDN0MsSUFBTUMsT0FBTyxHQUFHLElBQUlGLEtBQUosQ0FBVUYsU0FBUyxDQUFDRyxNQUFwQixFQUE0QkUsSUFBNUIsQ0FBaUMsS0FBakMsQ0FBaEIsQ0FGMkMsQ0FFYzs7RUFFekQsSUFBSUMsZ0JBQWdCLEdBQUcsQ0FBdkI7RUFFQU4sU0FBUyxDQUFDTyxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtJQUFFO0lBQ25DRCxJQUFJLEdBQUdFLElBQVAsQ0FBWSxVQUFDQyxLQUFELEVBQVc7TUFBRTtNQUN2QlYsT0FBTyxDQUFDUSxLQUFELENBQVAsR0FBaUJFLEtBQWpCLENBRHFCLENBQ0c7O01BRXhCLE9BQ0VMLGdCQUFnQixHQUFHTCxPQUFPLENBQUNFLE1BQTNCLElBQXFDO01BQ3JDRixPQUFPLENBQUNLLGdCQUFELENBQVAsS0FBOEJNLFNBRDlCLElBQzJDO01BQzNDLENBQUNSLE9BQU8sQ0FBQ0UsZ0JBQUQsQ0FIVixDQUc2QjtNQUg3QixFQUtFO1FBQ0FPLE9BQU8sQ0FBQ0MsR0FBUixjQUFzQlIsZ0JBQWdCLEdBQUcsQ0FBekMsU0FBK0NMLE9BQU8sQ0FBQ0ssZ0JBQUQsQ0FBdEQsRUFEQSxDQUMyRTs7UUFDM0VGLE9BQU8sQ0FBQ0UsZ0JBQUQsQ0FBUCxHQUE0QixJQUE1QixDQUZBLENBRWtDOztRQUNsQ0EsZ0JBQWdCLEdBSGhCLENBR29CO01BQ3JCO0lBQ0YsQ0FiRDtFQWNELENBZkQ7QUFnQkQ7O0FBRUQsU0FBU1MsVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0lBQUEsT0FBSUMsVUFBVSxDQUFDO01BQUEsT0FBTUQsT0FBTyxDQUFDLENBQUQsQ0FBYjtJQUFBLENBQUQsRUFBbUIsSUFBbkIsQ0FBZDtFQUFBLENBQW5CLENBQVA7QUFDRDs7QUFDRCxTQUFTRSxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSUgsT0FBSixDQUFZLFVBQUFDLE9BQU87SUFBQSxPQUFJQyxVQUFVLENBQUM7TUFBQSxPQUFNRCxPQUFPLENBQUMsQ0FBRCxDQUFiO0lBQUEsQ0FBRCxFQUFtQixJQUFuQixDQUFkO0VBQUEsQ0FBbkIsQ0FBUDtBQUNEOztBQUNELFNBQVNHLFVBQVQsR0FBc0I7RUFDcEIsT0FBTyxJQUFJSixPQUFKLENBQVksVUFBQUMsT0FBTztJQUFBLE9BQUlDLFVBQVUsQ0FBQztNQUFBLE9BQU1ELE9BQU8sQ0FBQyxDQUFELENBQWI7SUFBQSxDQUFELEVBQW1CLElBQW5CLENBQWQ7RUFBQSxDQUFuQixDQUFQO0FBQ0Q7O0FBR0RsQix3QkFBd0IsQ0FBQyxDQUFDZ0IsVUFBRCxFQUFhSSxVQUFiLEVBQXlCQyxVQUF6QixDQUFELENBQXhCLEVBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHJpbnRJbk9yZGVyQ29uY3VycmVudGx5KGZ1bmNBcnJheSkgeyAvLyBraG9pIHRhbyBoYW0gbmhhbiBtYW5nIGNvIGNodWEgY2FjIGhhbSBhc3luY1xuICBjb25zdCByZXN1bHRzID0gbmV3IEFycmF5KGZ1bmNBcnJheS5sZW5ndGgpOyAvLyBtYW5nIHJlc3VsdCBjbyBkbyBkYWkgY3VhIG1hbmcgZnVuY0FycmF5LCBtdWMgZGljaCBkZSBkdW5nIHZpIHRyaSBpbmRleCBraGkgdHJhIHZlXG4gIGNvbnN0IHByaW50ZWQgPSBuZXcgQXJyYXkoZnVuY0FycmF5Lmxlbmd0aCkuZmlsbChmYWxzZSk7IC8vIGJhbiBkYXUga2V0IHF1YSBkZXUgbGEgZmFsc2UsIHByaW50ZWQgZGFuaCBkYXUgbWFuZyBuYW8gZGEgaW4gcmEgcm9pXG5cbiAgbGV0IG5leHRJbmRleFRvUHJpbnQgPSAwO1xuXG4gIGZ1bmNBcnJheS5mb3JFYWNoKChmdW5jLCBpbmRleCkgPT4geyAvL2R1eWV0IHF1YSB0dW5nIG1hbmcgY3VuZyBpbmRleCBjdWEgbm9cbiAgICBmdW5jKCkudGhlbigodmFsdWUpID0+IHsgLy9zZSB4dSBseSBzYXUga2hpIHByb21pc2UgaG9hbiB0YXRcbiAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7IC8vIGx1dSBnaWEgdHJpIHZhbHVlIHZhbyBkdW5nIHZpIHRyaSB0cm9uZyBtYW5nIHJlc3VsdHNcblxuICAgICAgd2hpbGUgKFxuICAgICAgICBuZXh0SW5kZXhUb1ByaW50IDwgcmVzdWx0cy5sZW5ndGggJiYgLy8gZGEgaGV0IGRvIGRhaSBtYW5nXG4gICAgICAgIHJlc3VsdHNbbmV4dEluZGV4VG9QcmludF0gIT09IHVuZGVmaW5lZCAmJiAvL2RhIGNvIGtldCBxdWFcbiAgICAgICAgIXByaW50ZWRbbmV4dEluZGV4VG9QcmludF0gLy9jaHVhIGluIHRydW9jIGRvXG4gICAgICAgIFxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZXN1bHQgJHtuZXh0SW5kZXhUb1ByaW50ICsgMX06YCwgcmVzdWx0c1tuZXh0SW5kZXhUb1ByaW50XSk7IC8vIGluZGV4IDAgPT4gcmVzdWx0IDFcbiAgICAgICAgcHJpbnRlZFtuZXh0SW5kZXhUb1ByaW50XSA9IHRydWU7IC8vZGFuaCBkYXUgZGEgZHVvYyBpblxuICAgICAgICBuZXh0SW5kZXhUb1ByaW50Kys7IC8vIGdvaSB2aSB0cmkgdGllcCB0aGVvIHRyb25nIG1hbmdcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFzeW5jRnVuYzEoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgxKSwgMzAwMCkpO1xufVxuZnVuY3Rpb24gYXN5bmNGdW5jMigpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKDIpLCAxMDAwKSk7XG59XG5mdW5jdGlvbiBhc3luY0Z1bmMzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoMyksIDIwMDApKTtcbn1cblxuXG5wcmludEluT3JkZXJDb25jdXJyZW50bHkoW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzNdKTtcblxuLy8gc2F1IDNzIGNvIGtldCBxdWEgdG9hbiBibyB2YSB0aGVvIHRodSB0dVxuXG4vL2FzY2kgZm9yIGVhY2hcbi8vIGZvckVhY2g6XG4vLyAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4vLyAg4pSCIGfhu41pIHThu6tuZyBow6BtIGFzeW5jKCkg4oaSIGNo4bqheSBzb25nIHNvbmcgICAgICAgICAgICAgICDilIJcbi8vICDilIIgICAgICDilJTilIA+IGtoaSB4b25nIOKGkiBsxrB1IHbDoG8gYHJlc3VsdHNbaW5kZXhdYCAgICAgICAgIOKUglxuLy8gIOKUgiAgICAgICAgICAgICAgICAg4pSU4pSAPiBu4bq/dSBjw7MgdGjhu4MgaW4g4oaSIGluIHbDoCB0xINuZyBpbmRleCDilIJcbi8vICDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJhcblxuIl19