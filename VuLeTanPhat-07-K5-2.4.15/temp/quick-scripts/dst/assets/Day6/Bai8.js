
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9f37IIAMpOqJ5v2EwgWyYF', 'Bai8');
// Day6/Bai8.js

"use strict";

function asyncParallel(funcArray, finalCallback) {
  //funcArray: mang chua cac ham bat dong bo; finalCallback la ham dc goi khi callback hoan thanh
  var result = []; // mang chua ket qua tung ham

  var completed = 0; // dem so mang hoan thanh

  funcArray.forEach(function (func, index) {
    // duyet qua tung ham cua funcArray, func se la ham async hien tai, index la vi tri cua no trong mang
    func(function (value) {
      //goi ham async, o day no se chay cac setTimeout, roi moi toi callback(value)
      result[index] = value; // gan ket qua value tra ve result[index] VD: aS3 tuy hoan thanh truoc nhung no van gan result[2] =3, aS2 xong tiep gan vo result[1]=2, cuoi cung la aS1 xong cuoi nhung no lai dc gan result[0]=1 => Ket qua van la [1,2,3]

      completed++; // tang so luong ham hoan thanh

      if (completed === funcArray.length) {
        //neu tat ca cac ham chay xong
        finalCallback(result); //tra ket qua khi toan bo ham chay xong het va truyen vao result
      }
    });
  });
} // doc tu tren xuong theo cmt la hieu 


function asyncFunc1(callback) {
  setTimeout(function () {
    return callback(1);
  }, 3000);
}

function asyncFunc2(callback) {
  setTimeout(function () {
    return callback(2);
  }, 2000);
}

function asyncFunc3(callback) {
  setTimeout(function () {
    return callback(3);
  }, 1000);
}

asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], function (result) {
  console.log(result);
}); // sau khi chay thi mat dung 3s de chay ra tat ca cac ham in ra ket qua [1,2,3] => cac ham chay song song khong doi ham nao xong roi moi chay
// bonus asci
// funcArray: [func1, func2, func3]
// index:      0       1       2
// func:     async1  async2  async3
//           ↓       ↓       ↓
//         (3s)    (2s)    (1s)
//           ↓       ↓       ↓
//  value:    1       2       3
// result: [1,     2,     3]
//          ↑      ↑      ↑
//        giữ đúng thứ tự dù thời gian chạy khác nhau

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTguanMiXSwibmFtZXMiOlsiYXN5bmNQYXJhbGxlbCIsImZ1bmNBcnJheSIsImZpbmFsQ2FsbGJhY2siLCJyZXN1bHQiLCJjb21wbGV0ZWQiLCJmb3JFYWNoIiwiZnVuYyIsImluZGV4IiwidmFsdWUiLCJsZW5ndGgiLCJhc3luY0Z1bmMxIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiYXN5bmNGdW5jMiIsImFzeW5jRnVuYzMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLGFBQVQsQ0FBdUJDLFNBQXZCLEVBQWtDQyxhQUFsQyxFQUFpRDtFQUFFO0VBQy9DLElBQU1DLE1BQU0sR0FBRyxFQUFmLENBRDZDLENBQzFCOztFQUNuQixJQUFJQyxTQUFTLEdBQUcsQ0FBaEIsQ0FGNkMsQ0FFMUI7O0VBRW5CSCxTQUFTLENBQUNJLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0lBQUU7SUFDakNELElBQUksQ0FBQyxVQUFDRSxLQUFELEVBQVU7TUFBRTtNQUNiTCxNQUFNLENBQUNJLEtBQUQsQ0FBTixHQUFnQkMsS0FBaEIsQ0FEVyxDQUNXOztNQUN0QkosU0FBUyxHQUZFLENBRUU7O01BQ2IsSUFBSUEsU0FBUyxLQUFLSCxTQUFTLENBQUNRLE1BQTVCLEVBQW1DO1FBQUU7UUFDakNQLGFBQWEsQ0FBQ0MsTUFBRCxDQUFiLENBRCtCLENBQ1Q7TUFDekI7SUFDSixDQU5HLENBQUo7RUFPSCxDQVJEO0FBU0gsRUFBQTs7O0FBRUQsU0FBU08sVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEI7RUFDNUJDLFVBQVUsQ0FBQztJQUFBLE9BQU1ELFFBQVEsQ0FBQyxDQUFELENBQWQ7RUFBQSxDQUFELEVBQW9CLElBQXBCLENBQVY7QUFDRDs7QUFDRCxTQUFTRSxVQUFULENBQW9CRixRQUFwQixFQUE4QjtFQUM1QkMsVUFBVSxDQUFDO0lBQUEsT0FBTUQsUUFBUSxDQUFDLENBQUQsQ0FBZDtFQUFBLENBQUQsRUFBb0IsSUFBcEIsQ0FBVjtBQUNEOztBQUNELFNBQVNHLFVBQVQsQ0FBb0JILFFBQXBCLEVBQThCO0VBQzVCQyxVQUFVLENBQUM7SUFBQSxPQUFNRCxRQUFRLENBQUMsQ0FBRCxDQUFkO0VBQUEsQ0FBRCxFQUFvQixJQUFwQixDQUFWO0FBQ0Q7O0FBRURYLGFBQWEsQ0FBQyxDQUFDVSxVQUFELEVBQWFHLFVBQWIsRUFBeUJDLFVBQXpCLENBQUQsRUFBdUMsVUFBQ1gsTUFBRCxFQUFZO0VBQzlEWSxPQUFPLENBQUNDLEdBQVIsQ0FBWWIsTUFBWjtBQUNELENBRlksQ0FBYixFQUlBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNQYXJhbGxlbChmdW5jQXJyYXksIGZpbmFsQ2FsbGJhY2spIHsgLy9mdW5jQXJyYXk6IG1hbmcgY2h1YSBjYWMgaGFtIGJhdCBkb25nIGJvOyBmaW5hbENhbGxiYWNrIGxhIGhhbSBkYyBnb2kga2hpIGNhbGxiYWNrIGhvYW4gdGhhbmhcbiAgICBjb25zdCByZXN1bHQgPSBbXTsgLy8gbWFuZyBjaHVhIGtldCBxdWEgdHVuZyBoYW1cbiAgICBsZXQgY29tcGxldGVkID0gMDsgLy8gZGVtIHNvIG1hbmcgaG9hbiB0aGFuaFxuXG4gICAgZnVuY0FycmF5LmZvckVhY2goKGZ1bmMsIGluZGV4KSA9PiB7IC8vIGR1eWV0IHF1YSB0dW5nIGhhbSBjdWEgZnVuY0FycmF5LCBmdW5jIHNlIGxhIGhhbSBhc3luYyBoaWVuIHRhaSwgaW5kZXggbGEgdmkgdHJpIGN1YSBubyB0cm9uZyBtYW5nXG4gICAgICAgIGZ1bmMoKHZhbHVlKSA9PnsgLy9nb2kgaGFtIGFzeW5jLCBvIGRheSBubyBzZSBjaGF5IGNhYyBzZXRUaW1lb3V0LCByb2kgbW9pIHRvaSBjYWxsYmFjayh2YWx1ZSlcbiAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSB2YWx1ZTsvLyBnYW4ga2V0IHF1YSB2YWx1ZSB0cmEgdmUgcmVzdWx0W2luZGV4XSBWRDogYVMzIHR1eSBob2FuIHRoYW5oIHRydW9jIG5odW5nIG5vIHZhbiBnYW4gcmVzdWx0WzJdID0zLCBhUzIgeG9uZyB0aWVwIGdhbiB2byByZXN1bHRbMV09MiwgY3VvaSBjdW5nIGxhIGFTMSB4b25nIGN1b2kgbmh1bmcgbm8gbGFpIGRjIGdhbiByZXN1bHRbMF09MSA9PiBLZXQgcXVhIHZhbiBsYSBbMSwyLDNdXG4gICAgICAgICAgICBjb21wbGV0ZWQrKzsgLy8gdGFuZyBzbyBsdW9uZyBoYW0gaG9hbiB0aGFuaFxuICAgICAgICAgICAgaWYoIGNvbXBsZXRlZCA9PT0gZnVuY0FycmF5Lmxlbmd0aCl7IC8vbmV1IHRhdCBjYSBjYWMgaGFtIGNoYXkgeG9uZ1xuICAgICAgICAgICAgICAgIGZpbmFsQ2FsbGJhY2socmVzdWx0KSAvL3RyYSBrZXQgcXVhIGtoaSB0b2FuIGJvIGhhbSBjaGF5IHhvbmcgaGV0IHZhIHRydXllbiB2YW8gcmVzdWx0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0vLyBkb2MgdHUgdHJlbiB4dW9uZyB0aGVvIGNtdCBsYSBoaWV1IFxuXG5mdW5jdGlvbiBhc3luY0Z1bmMxKGNhbGxiYWNrKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soMSksIDMwMDApO1xufVxuZnVuY3Rpb24gYXN5bmNGdW5jMihjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKDIpLCAyMDAwKTtcbn1cbmZ1bmN0aW9uIGFzeW5jRnVuYzMoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjaygzKSwgMTAwMCk7XG59XG5cbmFzeW5jUGFyYWxsZWwoW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzNdLCAocmVzdWx0KSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlc3VsdCk7XG59KTtcblxuLy8gc2F1IGtoaSBjaGF5IHRoaSBtYXQgZHVuZyAzcyBkZSBjaGF5IHJhIHRhdCBjYSBjYWMgaGFtIGluIHJhIGtldCBxdWEgWzEsMiwzXSA9PiBjYWMgaGFtIGNoYXkgc29uZyBzb25nIGtob25nIGRvaSBoYW0gbmFvIHhvbmcgcm9pIG1vaSBjaGF5XG5cblxuLy8gYm9udXMgYXNjaVxuXG4vLyBmdW5jQXJyYXk6IFtmdW5jMSwgZnVuYzIsIGZ1bmMzXVxuXG4vLyBpbmRleDogICAgICAwICAgICAgIDEgICAgICAgMlxuLy8gZnVuYzogICAgIGFzeW5jMSAgYXN5bmMyICBhc3luYzNcblxuLy8gICAgICAgICAgIOKGkyAgICAgICDihpMgICAgICAg4oaTXG4vLyAgICAgICAgICgzcykgICAgKDJzKSAgICAoMXMpXG4vLyAgICAgICAgICAg4oaTICAgICAgIOKGkyAgICAgICDihpNcbi8vICB2YWx1ZTogICAgMSAgICAgICAyICAgICAgIDNcblxuLy8gcmVzdWx0OiBbMSwgICAgIDIsICAgICAzXVxuLy8gICAgICAgICAg4oaRICAgICAg4oaRICAgICAg4oaRXG4vLyAgICAgICAgZ2nhu68gxJHDum5nIHRo4bupIHThu7EgZMO5IHRo4budaSBnaWFuIGNo4bqheSBraMOhYyBuaGF1XG4iXX0=