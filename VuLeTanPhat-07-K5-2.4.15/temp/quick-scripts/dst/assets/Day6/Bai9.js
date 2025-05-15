
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai9.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ecff1nyUBJ44NrxRa9Avdh', 'Bai9');
// Day6/Bai9.js

"use strict";

function asyncFunc1() {
  return new Promise(function (resolve) {
    // tao 1 promise, promise nay nhan 1 ham doi so, o day la resolve - ham nay dung de bao hieu cong viec da hoan thanh
    console.log("Started asyncFunc1");
    setTimeout(function () {
      console.log("Completed asyncFunc1");
      resolve(1); // in 1, hoan thanh va dua len promise
    }, 3000); // doi 3s
  });
}

function asyncFunc2() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc2");
    setTimeout(function () {
      console.log("Completed asyncFunc2");
      resolve(2);
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc3");
    setTimeout(function () {
      console.log("Completed asyncFunc3");
      resolve(3);
    }, 1000);
  });
}

asyncFunc1().then(function (result1) {
  // sau khi hoan thanh (sau 3s nhu tren), no goi ham dau tien trong chuoi bang then
  console.log("Result 1:", result1); //result1 nhan gia tri tu resolve(1)

  return asyncFunc2(); //goi ham async2 ( ham tiep theo)
}).then(function (result2) {
  console.log("Result 2:", result2);
  return asyncFunc3();
}).then(function (result3) {
  console.log("Result 3:", result3);
})["catch"](function (error) {
  // neu co loi thi in loi
  console.error("Error occurred:", error);
}); //sau khi chay nhan xet ket qua giong bai 7, no doi chay xong ket qua moi toi ham tiep theo

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTkuanMiXSwibmFtZXMiOlsiYXN5bmNGdW5jMSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJhc3luY0Z1bmMyIiwiYXN5bmNGdW5jMyIsInRoZW4iLCJyZXN1bHQxIiwicmVzdWx0MiIsInJlc3VsdDMiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUFFO0lBQ2hDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtJQUNBQyxVQUFVLENBQUMsWUFBTTtNQUNmRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtNQUNBRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBRmUsQ0FFSjtJQUNaLENBSFMsRUFHUCxJQUhPLENBQVYsQ0FGOEIsQ0FLckI7RUFDVixDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTSSxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSUwsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUM5QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUYsT0FBTyxDQUFDLENBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTSyxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSU4sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUM5QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUYsT0FBTyxDQUFDLENBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFREYsVUFBVSxHQUNQUSxJQURILENBQ1EsVUFBQ0MsT0FBRCxFQUFhO0VBQUU7RUFDbkJOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJLLE9BQXpCLEVBRGlCLENBQ2tCOztFQUNuQyxPQUFPSCxVQUFVLEVBQWpCLENBRmlCLENBRUk7QUFDdEIsQ0FKSCxFQUtHRSxJQUxILENBS1EsVUFBQ0UsT0FBRCxFQUFhO0VBQ2pCUCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCTSxPQUF6QjtFQUNBLE9BQU9ILFVBQVUsRUFBakI7QUFDRCxDQVJILEVBU0dDLElBVEgsQ0FTUSxVQUFDRyxPQUFELEVBQWE7RUFDakJSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJPLE9BQXpCO0FBQ0QsQ0FYSCxXQVlTLFVBQUNDLEtBQUQsRUFBVztFQUFDO0VBQ2pCVCxPQUFPLENBQUNTLEtBQVIsQ0FBYyxpQkFBZCxFQUFpQ0EsS0FBakM7QUFDRCxDQWRILEdBZUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jRnVuYzEoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyAvLyB0YW8gMSBwcm9taXNlLCBwcm9taXNlIG5heSBuaGFuIDEgaGFtIGRvaSBzbywgbyBkYXkgbGEgcmVzb2x2ZSAtIGhhbSBuYXkgZHVuZyBkZSBiYW8gaGlldSBjb25nIHZpZWMgZGEgaG9hbiB0aGFuaFxuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMxXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJDb21wbGV0ZWQgYXN5bmNGdW5jMVwiKTtcbiAgICAgIHJlc29sdmUoMSk7Ly8gaW4gMSwgaG9hbiB0aGFuaCB2YSBkdWEgbGVuIHByb21pc2VcbiAgICB9LCAzMDAwKTsvLyBkb2kgM3NcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFzeW5jRnVuYzIoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMyXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJDb21wbGV0ZWQgYXN5bmNGdW5jMlwiKTtcbiAgICAgIHJlc29sdmUoMik7XG4gICAgfSwgMjAwMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY0Z1bmMzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jM1wiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzNcIik7XG4gICAgICByZXNvbHZlKDMpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cblxuYXN5bmNGdW5jMSgpXG4gIC50aGVuKChyZXN1bHQxKSA9PiB7IC8vIHNhdSBraGkgaG9hbiB0aGFuaCAoc2F1IDNzIG5odSB0cmVuKSwgbm8gZ29pIGhhbSBkYXUgdGllbiB0cm9uZyBjaHVvaSBiYW5nIHRoZW5cbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCAxOlwiLCByZXN1bHQxKTsgLy9yZXN1bHQxIG5oYW4gZ2lhIHRyaSB0dSByZXNvbHZlKDEpXG4gICAgcmV0dXJuIGFzeW5jRnVuYzIoKTsgLy9nb2kgaGFtIGFzeW5jMiAoIGhhbSB0aWVwIHRoZW8pXG4gIH0pXG4gIC50aGVuKChyZXN1bHQyKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSZXN1bHQgMjpcIiwgcmVzdWx0Mik7XG4gICAgcmV0dXJuIGFzeW5jRnVuYzMoKTtcbiAgfSlcbiAgLnRoZW4oKHJlc3VsdDMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCAzOlwiLCByZXN1bHQzKTtcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4gey8vIG5ldSBjbyBsb2kgdGhpIGluIGxvaVxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBvY2N1cnJlZDpcIiwgZXJyb3IpO1xuICB9KTtcbi8vc2F1IGtoaSBjaGF5IG5oYW4geGV0IGtldCBxdWEgZ2lvbmcgYmFpIDcsIG5vIGRvaSBjaGF5IHhvbmcga2V0IHF1YSBtb2kgdG9pIGhhbSB0aWVwIHRoZW8iXX0=