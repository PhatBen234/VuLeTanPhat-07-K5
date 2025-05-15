
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fa97xw7QFCjoj+H0oeimj2', 'Bai7');
// Day6/Bai7.js

"use strict";

// Hàm chính: nhận vào 1 mảng các hàm async callback-style
function callbackManager(funcArray) {
  var currentFuncs = [].concat(funcArray); // Clone mảng để xử lý, tránh làm hỏng mảng gốc

  var retryCount = 0; // Đếm số lần chạy lại (để biết là lần mấy)
  // Hàm phụ để chạy loạt hàm hiện tại

  function run() {
    // In thông báo chạy lần đầu hay chạy lại
    console.log(retryCount === 0 ? "\n🔁 Bắt đầu chạy hàm lần đầu...\n" : "\n\uD83D\uDD01 B\u1EAFt \u0111\u1EA7u ch\u1EA1y l\u1EA1i l\u1EA7n " + retryCount + "...\n");
    var index = 0; // Biến đếm vị trí hàm đang chạy

    var newFuncs = []; // Mảng mới chứa các hàm thành công để chạy lại nếu cần

    var hasError = false; // Cờ báo nếu có lỗi xảy ra
    // Hàm đệ quy chạy từng hàm một theo thứ tự

    function execute() {
      // Khi đã chạy hết các hàm
      if (index >= currentFuncs.length) {
        if (hasError) {
          // Nếu có lỗi: thông báo và chuẩn bị chạy lại sau 5s
          console.log("\n❌ Có hàm bị lỗi, sẽ chạy lại toàn bộ sau 5s...\n");
          currentFuncs = newFuncs; // Chỉ giữ lại hàm thành công để chạy lại

          retryCount++; // Tăng số lần chạy lại

          setTimeout(run, 5000); // Chờ 5s rồi chạy lại
        } else {
          // Nếu tất cả đều thành công thì kết thúc
          console.log("\n✅ Tất cả hàm đã chạy thành công!\n");
        }

        return;
      } // Lấy hàm hiện tại theo index


      var func = currentFuncs[index]; // In trạng thái bắt đầu chạy hàm

      console.log("Started asyncFunc" + (func.originalIndex + 1));

      try {
        // Gọi hàm async với callback nhận lỗi (err)
        func.cb(function (err) {
          if (err) {
            // Nếu lỗi: thông báo lỗi
            console.log("\u274C H\xE0m " + func.originalIndex + " b\u1ECB l\u1ED7i: " + err.message);
            hasError = true; // Cắm cờ lỗi
            // Không push vào newFuncs → bỏ luôn khỏi lần chạy sau
          } else {
            // Nếu thành công: in log và đưa vào danh sách chạy tiếp
            console.log("Completed asyncFunc" + (func.originalIndex + 1));
            console.log("\u2705 H\xE0m " + func.originalIndex + " ch\u1EA1y th\xE0nh c\xF4ng!");
            newFuncs.push(func); // Chỉ giữ hàm đã thành công
          }

          index++; // Tăng chỉ số để xử lý tiếp

          execute(); // Gọi đệ quy cho hàm tiếp theo
        });
      } catch (e) {
        // Nếu có lỗi throw ngoài callback (hiếm): bắt ngoại lệ
        console.log("\u274C Exception t\u1EA1i h\xE0m " + func.originalIndex + ": " + e.message);
        hasError = true;
        index++;
        execute(); // Tiếp tục xử lý hàm sau
      }
    } // Bắt đầu chuỗi gọi đệ quy


    execute();
  } // Gắn thông tin chỉ số ban đầu vào từng hàm để in log chính xác


  var wrappedFuncs = funcArray.map(function (f, i) {
    return {
      cb: f,
      originalIndex: i
    };
  });
  currentFuncs = wrappedFuncs; // Cập nhật mảng đang chạy

  run(); // Bắt đầu thực thi chuỗi
}

function asyncFunc1(callback) {
  console.log("Started asyncFunc1");
  setTimeout(function () {
    console.log("Completed asyncFunc1");
    callback();
  }, 3000);
}

function asyncFunc2(callback) {
  console.log("Started asyncFunc2");
  setTimeout(function () {
    console.log("Completed asyncFunc2");
    callback();
  }, 2000);
}

var failOnce = true;

function asyncFunc4(callback) {
  console.log("Started asyncFunc4");
  setTimeout(function () {
    if (failOnce) {
      failOnce = false;
      callback(new Error("Error in asyncFunc4"));
    } else {
      console.log("Completed asyncFunc4");
      callback();
    }
  }, 1000);
}

function asyncFunc3(callback) {
  console.log("Started asyncFunc3");
  setTimeout(function () {
    console.log("Completed asyncFunc3");
    callback();
  }, 1000);
} // Driver code
// lan chay dau tien


callbackManager([asyncFunc1, asyncFunc2, asyncFunc4, asyncFunc3]); // sau khi chay nhan xet:
// ke tu khi lenh Started asyncFunc1 thi mat 3s de hien completed tuong tu asyncFunc2 mat 2s va cuoi cung mat 1s, moi thu in ra theo dung thu tu voi dung so giay.
// lan chay thu 2 (sau 7s)
// setTimeout(() =>{
//   console.log("_________________________")
//   console.log("CALLING AGAINNNNNNN")
//   callbackManager([asyncFunc1, asyncFunc2, asyncFunc4, asyncFunc3]);
// },7000)
//bonus ASCI tu chatGPT de hieu Flow
// funcArray = [asyncFunc1, asyncFunc2, asyncFunc3]
// Gọi callbackManager([asyncFunc1, asyncFunc2, asyncFunc3])
// ↓
// Gọi execute(0)
// ↓
// Gọi asyncFunc1(callback: () => execute(1))
//    ↓
//    Đợi 3 giây...
//    ↓
//    Gọi callback → execute(1)
//    ↓
//    Gọi asyncFunc2(callback: () => execute(2))
//        ↓
//        Đợi 2 giây...
//        ↓
//        Gọi callback → execute(2)
//        ↓
//        Gọi asyncFunc3(callback: () => execute(3))
//            ↓
//            Đợi 1 giây...
//            ↓
//            Gọi callback → execute(3)
//                ↓
//                Thoát vì index >= funcArray.length
// async4 throw new error, chen vao giua, khi ham loi go ra va chay lai cho du
// lan sau goi lai se chay het duoc

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTcuanMiXSwibmFtZXMiOlsiY2FsbGJhY2tNYW5hZ2VyIiwiZnVuY0FycmF5IiwiY3VycmVudEZ1bmNzIiwicmV0cnlDb3VudCIsInJ1biIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsIm5ld0Z1bmNzIiwiaGFzRXJyb3IiLCJleGVjdXRlIiwibGVuZ3RoIiwic2V0VGltZW91dCIsImZ1bmMiLCJvcmlnaW5hbEluZGV4IiwiY2IiLCJlcnIiLCJtZXNzYWdlIiwicHVzaCIsImUiLCJ3cmFwcGVkRnVuY3MiLCJtYXAiLCJmIiwiaSIsImFzeW5jRnVuYzEiLCJjYWxsYmFjayIsImFzeW5jRnVuYzIiLCJmYWlsT25jZSIsImFzeW5jRnVuYzQiLCJFcnJvciIsImFzeW5jRnVuYzMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxTQUFTQSxlQUFULENBQXlCQyxTQUF6QixFQUFvQztFQUNsQyxJQUFJQyxZQUFZLGFBQU9ELFNBQVAsQ0FBaEIsQ0FEa0MsQ0FDQzs7RUFDbkMsSUFBSUUsVUFBVSxHQUFHLENBQWpCLENBRmtDLENBRUM7RUFFbkM7O0VBQ0EsU0FBU0MsR0FBVCxHQUFlO0lBQ2I7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILFVBQVUsS0FBSyxDQUFmLEdBQW1CLG9DQUFuQiwwRUFBdUZBLFVBQXZGLFVBQVo7SUFFQSxJQUFJSSxLQUFLLEdBQUcsQ0FBWixDQUphLENBSWE7O0lBQzFCLElBQUlDLFFBQVEsR0FBRyxFQUFmLENBTGEsQ0FLYTs7SUFDMUIsSUFBSUMsUUFBUSxHQUFHLEtBQWYsQ0FOYSxDQU1hO0lBRTFCOztJQUNBLFNBQVNDLE9BQVQsR0FBbUI7TUFDakI7TUFDQSxJQUFJSCxLQUFLLElBQUlMLFlBQVksQ0FBQ1MsTUFBMUIsRUFBa0M7UUFDaEMsSUFBSUYsUUFBSixFQUFjO1VBQ1o7VUFDQUosT0FBTyxDQUFDQyxHQUFSLENBQVksb0RBQVo7VUFDQUosWUFBWSxHQUFHTSxRQUFm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QkwsUUFBcEIsRUFBOEI7RUFDNUJwQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtFQUNBTSxVQUFVLENBQUMsWUFBTTtJQUNmUCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtJQUNBbUIsUUFBUTtFQUNULENBSFMsRUFHUCxJQUhPLENBQVY7QUFJRCxFQUVEO0FBQ0E7OztBQUNBekIsZUFBZSxDQUFDLENBQUN3QixVQUFELEVBQWFFLFVBQWIsRUFBeUJFLFVBQXpCLEVBQXFDRSxVQUFyQyxDQUFELENBQWYsRUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIw6BtIGNow61uaDogbmjhuq1uIHbDoG8gMSBt4bqjbmcgY8OhYyBow6BtIGFzeW5jIGNhbGxiYWNrLXN0eWxlXG5mdW5jdGlvbiBjYWxsYmFja01hbmFnZXIoZnVuY0FycmF5KSB7XG4gIGxldCBjdXJyZW50RnVuY3MgPSBbLi4uZnVuY0FycmF5XTsgLy8gQ2xvbmUgbeG6o25nIMSR4buDIHjhu60gbMO9LCB0csOhbmggbMOgbSBo4buPbmcgbeG6o25nIGfhu5FjXG4gIGxldCByZXRyeUNvdW50ID0gMDsgICAgICAgICAgICAgICAgLy8gxJDhur9tIHPhu5EgbOG6p24gY2jhuqF5IGzhuqFpICjEkeG7gyBiaeG6v3QgbMOgIGzhuqduIG3huqV5KVxuXG4gIC8vIEjDoG0gcGjhu6UgxJHhu4MgY2jhuqF5IGxv4bqhdCBow6BtIGhp4buHbiB04bqhaVxuICBmdW5jdGlvbiBydW4oKSB7XG4gICAgLy8gSW4gdGjDtG5nIGLDoW8gY2jhuqF5IGzhuqduIMSR4bqndSBoYXkgY2jhuqF5IGzhuqFpXG4gICAgY29uc29sZS5sb2cocmV0cnlDb3VudCA9PT0gMCA/IFwiXFxu8J+UgSBC4bqvdCDEkeG6p3UgY2jhuqF5IGjDoG0gbOG6p24gxJHhuqd1Li4uXFxuXCIgOiBgXFxu8J+UgSBC4bqvdCDEkeG6p3UgY2jhuqF5IGzhuqFpIGzhuqduICR7cmV0cnlDb3VudH0uLi5cXG5gKTtcbiAgICBcbiAgICBsZXQgaW5kZXggPSAwOyAgICAgICAgICAgIC8vIEJp4bq/biDEkeG6v20gduG7iyB0csOtIGjDoG0gxJFhbmcgY2jhuqF5XG4gICAgbGV0IG5ld0Z1bmNzID0gW107ICAgICAgICAvLyBN4bqjbmcgbeG7m2kgY2jhu6lhIGPDoWMgaMOgbSB0aMOgbmggY8O0bmcgxJHhu4MgY2jhuqF5IGzhuqFpIG7hur91IGPhuqduXG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7ICAgICAvLyBD4budIGLDoW8gbuG6v3UgY8OzIGzhu5dpIHjhuqN5IHJhXG5cbiAgICAvLyBIw6BtIMSR4buHIHF1eSBjaOG6oXkgdOG7q25nIGjDoG0gbeG7mXQgdGhlbyB0aOG7qSB04buxXG4gICAgZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICAgIC8vIEtoaSDEkcOjIGNo4bqheSBo4bq/dCBjw6FjIGjDoG1cbiAgICAgIGlmIChpbmRleCA+PSBjdXJyZW50RnVuY3MubGVuZ3RoKSB7XG4gICAgICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICAgIC8vIE7hur91IGPDsyBs4buXaTogdGjDtG5nIGLDoW8gdsOgIGNodeG6qW4gYuG7iyBjaOG6oXkgbOG6oWkgc2F1IDVzXG4gICAgICAgICAgY29uc29sZS5sb2coXCJcXG7inYwgQ8OzIGjDoG0gYuG7iyBs4buXaSwgc+G6vSBjaOG6oXkgbOG6oWkgdG/DoG4gYuG7mSBzYXUgNXMuLi5cXG5cIik7XG4gICAgICAgICAgY3VycmVudEZ1bmNzID0gbmV3RnVuY3M7IC8vIENo4buJIGdp4buvIGzhuqFpIGjDoG0gdGjDoG5oIGPDtG5nIMSR4buDIGNo4bqheSBs4bqhaVxuICAgICAgICAgIHJldHJ5Q291bnQrKzsgICAgICAgICAgICAvLyBUxINuZyBz4buRIGzhuqduIGNo4bqheSBs4bqhaVxuICAgICAgICAgIHNldFRpbWVvdXQocnVuLCA1MDAwKTsgICAvLyBDaOG7nSA1cyBy4buTaSBjaOG6oXkgbOG6oWlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBO4bq/dSB04bqldCBj4bqjIMSR4buBdSB0aMOgbmggY8O0bmcgdGjDrCBr4bq/dCB0aMO6Y1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiXFxu4pyFIFThuqV0IGPhuqMgaMOgbSDEkcOjIGNo4bqheSB0aMOgbmggY8O0bmchXFxuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTOG6pXkgaMOgbSBoaeG7h24gdOG6oWkgdGhlbyBpbmRleFxuICAgICAgY29uc3QgZnVuYyA9IGN1cnJlbnRGdW5jc1tpbmRleF07XG5cbiAgICAgIC8vIEluIHRy4bqhbmcgdGjDoWkgYuG6r3QgxJHhuqd1IGNo4bqheSBow6BtXG4gICAgICBjb25zb2xlLmxvZyhgU3RhcnRlZCBhc3luY0Z1bmMke2Z1bmMub3JpZ2luYWxJbmRleCArIDF9YCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEfhu41pIGjDoG0gYXN5bmMgduG7m2kgY2FsbGJhY2sgbmjhuq1uIGzhu5dpIChlcnIpXG4gICAgICAgIGZ1bmMuY2IoKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIC8vIE7hur91IGzhu5dpOiB0aMO0bmcgYsOhbyBs4buXaVxuICAgICAgICAgICAgY29uc29sZS5sb2coYOKdjCBIw6BtICR7ZnVuYy5vcmlnaW5hbEluZGV4fSBi4buLIGzhu5dpOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlOyAvLyBD4bqvbSBj4budIGzhu5dpXG4gICAgICAgICAgICAvLyBLaMO0bmcgcHVzaCB2w6BvIG5ld0Z1bmNzIOKGkiBi4buPIGx1w7RuIGto4buPaSBs4bqnbiBjaOG6oXkgc2F1XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE7hur91IHRow6BuaCBjw7RuZzogaW4gbG9nIHbDoCDEkcawYSB2w6BvIGRhbmggc8OhY2ggY2jhuqF5IHRp4bq/cFxuICAgICAgICAgICAgY29uc29sZS5sb2coYENvbXBsZXRlZCBhc3luY0Z1bmMke2Z1bmMub3JpZ2luYWxJbmRleCArIDF9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg4pyFIEjDoG0gJHtmdW5jLm9yaWdpbmFsSW5kZXh9IGNo4bqheSB0aMOgbmggY8O0bmchYCk7XG4gICAgICAgICAgICBuZXdGdW5jcy5wdXNoKGZ1bmMpOyAvLyBDaOG7iSBnaeG7ryBow6BtIMSRw6MgdGjDoG5oIGPDtG5nXG4gICAgICAgICAgfVxuICAgICAgICAgIGluZGV4Kys7ICAgICAgLy8gVMSDbmcgY2jhu4kgc+G7kSDEkeG7gyB44butIGzDvSB0aeG6v3BcbiAgICAgICAgICBleGVjdXRlKCk7ICAgIC8vIEfhu41pIMSR4buHIHF1eSBjaG8gaMOgbSB0aeG6v3AgdGhlb1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gTuG6v3UgY8OzIGzhu5dpIHRocm93IG5nb8OgaSBjYWxsYmFjayAoaGnhur9tKTogYuG6r3Qgbmdv4bqhaSBs4buHXG4gICAgICAgIGNvbnNvbGUubG9nKGDinYwgRXhjZXB0aW9uIHThuqFpIGjDoG0gJHtmdW5jLm9yaWdpbmFsSW5kZXh9OiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBleGVjdXRlKCk7IC8vIFRp4bq/cCB04bulYyB44butIGzDvSBow6BtIHNhdVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIELhuq90IMSR4bqndSBjaHXhu5dpIGfhu41pIMSR4buHIHF1eVxuICAgIGV4ZWN1dGUoKTtcbiAgfVxuXG4gIC8vIEfhuq9uIHRow7RuZyB0aW4gY2jhu4kgc+G7kSBiYW4gxJHhuqd1IHbDoG8gdOG7q25nIGjDoG0gxJHhu4MgaW4gbG9nIGNow61uaCB4w6FjXG4gIGNvbnN0IHdyYXBwZWRGdW5jcyA9IGZ1bmNBcnJheS5tYXAoKGYsIGkpID0+ICh7IGNiOiBmLCBvcmlnaW5hbEluZGV4OiBpIH0pKTtcbiAgY3VycmVudEZ1bmNzID0gd3JhcHBlZEZ1bmNzOyAvLyBD4bqtcCBuaOG6rXQgbeG6o25nIMSRYW5nIGNo4bqheVxuICBydW4oKTsgLy8gQuG6r3QgxJHhuqd1IHRo4buxYyB0aGkgY2h14buXaVxufVxuXG5mdW5jdGlvbiBhc3luY0Z1bmMxKGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMxXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMxXCIpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH0sIDMwMDApO1xufVxuXG5mdW5jdGlvbiBhc3luY0Z1bmMyKGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMyXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMyXCIpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH0sIDIwMDApO1xufVxuXG5sZXQgZmFpbE9uY2UgPSB0cnVlO1xuZnVuY3Rpb24gYXN5bmNGdW5jNChjYWxsYmFjaykge1xuICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jNFwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYoIGZhaWxPbmNlKSB7XG4gICAgICBmYWlsT25jZSA9IGZhbHNlO1xuICAgICAgY2FsbGJhY2sobmV3IEVycm9yKFwiRXJyb3IgaW4gYXN5bmNGdW5jNFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzRcIik7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfSwxMDAwKTtcbn1cblxuXG5mdW5jdGlvbiBhc3luY0Z1bmMzKGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMzXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMzXCIpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH0sIDEwMDApO1xufVxuXG4vLyBEcml2ZXIgY29kZVxuLy8gbGFuIGNoYXkgZGF1IHRpZW5cbmNhbGxiYWNrTWFuYWdlcihbYXN5bmNGdW5jMSwgYXN5bmNGdW5jMiwgYXN5bmNGdW5jNCwgYXN5bmNGdW5jM10pO1xuXG4vLyBzYXUga2hpIGNoYXkgbmhhbiB4ZXQ6XG4vLyBrZSB0dSBraGkgbGVuaCBTdGFydGVkIGFzeW5jRnVuYzEgdGhpIG1hdCAzcyBkZSBoaWVuIGNvbXBsZXRlZCB0dW9uZyB0dSBhc3luY0Z1bmMyIG1hdCAycyB2YSBjdW9pIGN1bmcgbWF0IDFzLCBtb2kgdGh1IGluIHJhIHRoZW8gZHVuZyB0aHUgdHUgdm9pIGR1bmcgc28gZ2lheS5cblxuLy8gbGFuIGNoYXkgdGh1IDIgKHNhdSA3cylcblxuLy8gc2V0VGltZW91dCgoKSA9Pntcbi8vICAgY29uc29sZS5sb2coXCJfX19fX19fX19fX19fX19fX19fX19fX19fXCIpXG4vLyAgIGNvbnNvbGUubG9nKFwiQ0FMTElORyBBR0FJTk5OTk5OTlwiKVxuLy8gICBjYWxsYmFja01hbmFnZXIoW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzQsIGFzeW5jRnVuYzNdKTtcbi8vIH0sNzAwMClcblxuXG5cblxuXG5cblxuXG4vL2JvbnVzIEFTQ0kgdHUgY2hhdEdQVCBkZSBoaWV1IEZsb3dcblxuLy8gZnVuY0FycmF5ID0gW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzNdXG5cbi8vIEfhu41pIGNhbGxiYWNrTWFuYWdlcihbYXN5bmNGdW5jMSwgYXN5bmNGdW5jMiwgYXN5bmNGdW5jM10pXG4vLyDihpNcbi8vIEfhu41pIGV4ZWN1dGUoMClcbi8vIOKGk1xuLy8gR+G7jWkgYXN5bmNGdW5jMShjYWxsYmFjazogKCkgPT4gZXhlY3V0ZSgxKSlcbi8vICAgIOKGk1xuLy8gICAgxJDhu6NpIDMgZ2nDonkuLi5cbi8vICAgIOKGk1xuLy8gICAgR+G7jWkgY2FsbGJhY2sg4oaSIGV4ZWN1dGUoMSlcbi8vICAgIOKGk1xuLy8gICAgR+G7jWkgYXN5bmNGdW5jMihjYWxsYmFjazogKCkgPT4gZXhlY3V0ZSgyKSlcbi8vICAgICAgICDihpNcbi8vICAgICAgICDEkOG7o2kgMiBnacOieS4uLlxuLy8gICAgICAgIOKGk1xuLy8gICAgICAgIEfhu41pIGNhbGxiYWNrIOKGkiBleGVjdXRlKDIpXG4vLyAgICAgICAg4oaTXG4vLyAgICAgICAgR+G7jWkgYXN5bmNGdW5jMyhjYWxsYmFjazogKCkgPT4gZXhlY3V0ZSgzKSlcbi8vICAgICAgICAgICAg4oaTXG4vLyAgICAgICAgICAgIMSQ4bujaSAxIGdpw6J5Li4uXG4vLyAgICAgICAgICAgIOKGk1xuLy8gICAgICAgICAgICBH4buNaSBjYWxsYmFjayDihpIgZXhlY3V0ZSgzKVxuLy8gICAgICAgICAgICAgICAg4oaTXG4vLyAgICAgICAgICAgICAgICBUaG/DoXQgdsOsIGluZGV4ID49IGZ1bmNBcnJheS5sZW5ndGhcblxuXG4vLyBhc3luYzQgdGhyb3cgbmV3IGVycm9yLCBjaGVuIHZhbyBnaXVhLCBraGkgaGFtIGxvaSBnbyByYSB2YSBjaGF5IGxhaSBjaG8gZHVcblxuLy8gbGFuIHNhdSBnb2kgbGFpIHNlIGNoYXkgaGV0IGR1b2MiXX0=