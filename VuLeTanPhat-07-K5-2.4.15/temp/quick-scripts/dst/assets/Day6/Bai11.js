
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai11.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab9cbTtGjFE1p3c3Vge7oiO', 'Bai11');
// Day6/Bai11.js

"use strict";

function asyncFunc1() {
  return new Promise(function (resolve, reject) {
    // co the hieu la resolve la trang thai thanh cong, reject la that bai
    console.log("Started asyncFunc1");
    setTimeout(function () {
      console.log("Completed asyncFunc1");
      resolve("Result 1");
    }, 1000);
  });
}

function asyncFunc2() {
  return new Promise(function (resolve, reject) {
    console.log("Started asyncFunc2");
    setTimeout(function () {
      console.log("Failed asyncFunc2");
      reject("Error in asyncFunc2");
    }, 1000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve, reject) {
    console.log("Started asyncFunc3");
    setTimeout(function () {
      console.log("Completed asyncFunc3");
      resolve("Result 3");
    }, 1000);
  });
}

asyncFunc1().then(function (res1) {
  // xu li trang thai thanh cong tuc la no la resolve
  console.log(res1);
  return asyncFunc2();
}, function (err1) {
  // that bai duong nhien no la reject 
  console.error("Error in asyncFunc1:", err1);
  return asyncFunc2();
}).then(function (res2) {
  // xu li trang thai thanh cong tuc la no la resolve
  console.log(res2);
  return asyncFunc3();
}, function (err2) {
  // that bai duong nhien no la reject 
  console.error("Error in asyncFunc2:", err2);
  return asyncFunc3();
}).then(function (res3) {
  // xu li trang thai thanh cong tuc la no la resolve
  console.log(res3);
}, function (err3) {
  // that bai duong nhien no la reject 
  console.error("Error in asyncFunc3:", err3);
}); //co test error bang reject o function 2... ket qua la
//Started asyncFunc1
// Completed asyncFunc1
// Result 1
// Started asyncFunc2
// Failed asyncFunc2
// Error in asyncFunc2: Error in asyncFunc2
// Started asyncFunc3
// Completed asyncFunc3
// Result 3
// v la chi function 2 bi fail nhung tat ca func khac deu chay dc

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTExLmpzIl0sIm5hbWVzIjpbImFzeW5jRnVuYzEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiYXN5bmNGdW5jMiIsImFzeW5jRnVuYzMiLCJ0aGVuIiwicmVzMSIsImVycjEiLCJlcnJvciIsInJlczIiLCJlcnIyIiwicmVzMyIsImVycjMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7SUFBRTtJQUN4Q0MsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUgsT0FBTyxDQUFDLFVBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTSyxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSU4sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtJQUN0Q0MsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7TUFDQUYsTUFBTSxDQUFDLHFCQUFELENBQU47SUFDRCxDQUhTLEVBR1AsSUFITyxDQUFWO0VBSUQsQ0FOTSxDQUFQO0FBT0Q7O0FBRUQsU0FBU0ssVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0lBQ0FDLFVBQVUsQ0FBQyxZQUFNO01BQ2ZGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO01BQ0FILE9BQU8sQ0FBQyxVQUFELENBQVA7SUFDRCxDQUhTLEVBR1AsSUFITyxDQUFWO0VBSUQsQ0FOTSxDQUFQO0FBT0Q7O0FBRURGLFVBQVUsR0FDUFMsSUFESCxDQUNRLFVBQUNDLElBQUQsRUFBVTtFQUFFO0VBQ2hCTixPQUFPLENBQUNDLEdBQVIsQ0FBWUssSUFBWjtFQUNBLE9BQU9ILFVBQVUsRUFBakI7QUFDRCxDQUpILEVBSUssVUFBQ0ksSUFBRCxFQUFVO0VBQUU7RUFDYlAsT0FBTyxDQUFDUSxLQUFSLENBQWMsc0JBQWQsRUFBc0NELElBQXRDO0VBQ0EsT0FBT0osVUFBVSxFQUFqQjtBQUNELENBUEgsRUFRR0UsSUFSSCxDQVFRLFVBQUNJLElBQUQsRUFBVTtFQUFDO0VBQ2ZULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxJQUFaO0VBQ0EsT0FBT0wsVUFBVSxFQUFqQjtBQUNELENBWEgsRUFXSyxVQUFDTSxJQUFELEVBQVU7RUFBQztFQUNaVixPQUFPLENBQUNRLEtBQVIsQ0FBYyxzQkFBZCxFQUFzQ0UsSUFBdEM7RUFDQSxPQUFPTixVQUFVLEVBQWpCO0FBQ0QsQ0FkSCxFQWVHQyxJQWZILENBZVEsVUFBQ00sSUFBRCxFQUFVO0VBQUM7RUFDZlgsT0FBTyxDQUFDQyxHQUFSLENBQVlVLElBQVo7QUFDRCxDQWpCSCxFQWlCSyxVQUFDQyxJQUFELEVBQVU7RUFBQztFQUNaWixPQUFPLENBQUNRLEtBQVIsQ0FBYyxzQkFBZCxFQUFzQ0ksSUFBdEM7QUFDRCxDQW5CSCxHQXFCRTtBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0Z1bmMxKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyAvLyBjbyB0aGUgaGlldSBsYSByZXNvbHZlIGxhIHRyYW5nIHRoYWkgdGhhbmggY29uZywgcmVqZWN0IGxhIHRoYXQgYmFpXG4gICAgY29uc29sZS5sb2coXCJTdGFydGVkIGFzeW5jRnVuYzFcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMxXCIpO1xuICAgICAgcmVzb2x2ZShcIlJlc3VsdCAxXCIpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNGdW5jMigpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jMlwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIGFzeW5jRnVuYzJcIik7XG4gICAgICByZWplY3QoXCJFcnJvciBpbiBhc3luY0Z1bmMyXCIpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNGdW5jMygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jM1wiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzNcIik7XG4gICAgICByZXNvbHZlKFwiUmVzdWx0IDNcIik7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xufVxuXG5hc3luY0Z1bmMxKClcbiAgLnRoZW4oKHJlczEpID0+IHsgLy8geHUgbGkgdHJhbmcgdGhhaSB0aGFuaCBjb25nIHR1YyBsYSBubyBsYSByZXNvbHZlXG4gICAgY29uc29sZS5sb2cocmVzMSk7XG4gICAgcmV0dXJuIGFzeW5jRnVuYzIoKTtcbiAgfSwgKGVycjEpID0+IHsgLy8gdGhhdCBiYWkgZHVvbmcgbmhpZW4gbm8gbGEgcmVqZWN0IFxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBhc3luY0Z1bmMxOlwiLCBlcnIxKTtcbiAgICByZXR1cm4gYXN5bmNGdW5jMigpOyBcbiAgfSlcbiAgLnRoZW4oKHJlczIpID0+IHsvLyB4dSBsaSB0cmFuZyB0aGFpIHRoYW5oIGNvbmcgdHVjIGxhIG5vIGxhIHJlc29sdmVcbiAgICBjb25zb2xlLmxvZyhyZXMyKTtcbiAgICByZXR1cm4gYXN5bmNGdW5jMygpO1xuICB9LCAoZXJyMikgPT4gey8vIHRoYXQgYmFpIGR1b25nIG5oaWVuIG5vIGxhIHJlamVjdCBcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gYXN5bmNGdW5jMjpcIiwgZXJyMik7XG4gICAgcmV0dXJuIGFzeW5jRnVuYzMoKTtcbiAgfSlcbiAgLnRoZW4oKHJlczMpID0+IHsvLyB4dSBsaSB0cmFuZyB0aGFpIHRoYW5oIGNvbmcgdHVjIGxhIG5vIGxhIHJlc29sdmVcbiAgICBjb25zb2xlLmxvZyhyZXMzKTtcbiAgfSwgKGVycjMpID0+IHsvLyB0aGF0IGJhaSBkdW9uZyBuaGllbiBubyBsYSByZWplY3QgXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGFzeW5jRnVuYzM6XCIsIGVycjMpO1xuICB9KTtcblxuICAvL2NvIHRlc3QgZXJyb3IgYmFuZyByZWplY3QgbyBmdW5jdGlvbiAyLi4uIGtldCBxdWEgbGFcbiAgLy9TdGFydGVkIGFzeW5jRnVuYzFcbi8vIENvbXBsZXRlZCBhc3luY0Z1bmMxXG4vLyBSZXN1bHQgMVxuLy8gU3RhcnRlZCBhc3luY0Z1bmMyXG4vLyBGYWlsZWQgYXN5bmNGdW5jMlxuLy8gRXJyb3IgaW4gYXN5bmNGdW5jMjogRXJyb3IgaW4gYXN5bmNGdW5jMlxuLy8gU3RhcnRlZCBhc3luY0Z1bmMzXG4vLyBDb21wbGV0ZWQgYXN5bmNGdW5jM1xuLy8gUmVzdWx0IDNcbi8vIHYgbGEgY2hpIGZ1bmN0aW9uIDIgYmkgZmFpbCBuaHVuZyB0YXQgY2EgZnVuYyBraGFjIGRldSBjaGF5IGRjIl19