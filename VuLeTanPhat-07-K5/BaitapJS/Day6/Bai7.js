// Hàm chính: nhận vào 1 mảng các hàm async callback-style
function callbackManager(funcArray) {
  let currentFuncs = [...funcArray]; // Clone mảng để xử lý, tránh làm hỏng mảng gốc
  let retryCount = 0;                // Đếm số lần chạy lại (để biết là lần mấy)

  // Hàm phụ để chạy loạt hàm hiện tại
  function run() {
    // In thông báo chạy lần đầu hay chạy lại
    console.log(retryCount === 0 ? "\n🔁 Bắt đầu chạy hàm lần đầu...\n" : `\n🔁 Bắt đầu chạy lại lần ${retryCount}...\n`);
    
    let index = 0;            // Biến đếm vị trí hàm đang chạy
    let newFuncs = [];        // Mảng mới chứa các hàm thành công để chạy lại nếu cần
    let hasError = false;     // Cờ báo nếu có lỗi xảy ra

    // Hàm đệ quy chạy từng hàm một theo thứ tự
    function execute() {
      // Khi đã chạy hết các hàm
      if (index >= currentFuncs.length) {
        if (hasError) {
          // Nếu có lỗi: thông báo và chuẩn bị chạy lại sau 5s
          console.log("\n❌ Có hàm bị lỗi, sẽ chạy lại toàn bộ sau 5s...\n");
          currentFuncs = newFuncs; // Chỉ giữ lại hàm thành công để chạy lại
          retryCount++;            // Tăng số lần chạy lại
          setTimeout(run, 5000);   // Chờ 5s rồi chạy lại
        } else {
          // Nếu tất cả đều thành công thì kết thúc
          console.log("\n✅ Tất cả hàm đã chạy thành công!\n");
        }
        return;
      }

      // Lấy hàm hiện tại theo index
      const func = currentFuncs[index];

      // In trạng thái bắt đầu chạy hàm
      console.log(`Started asyncFunc${func.originalIndex + 1}`);

      try {
        // Gọi hàm async với callback nhận lỗi (err)
        func.cb((err) => {
          if (err) {
            // Nếu lỗi: thông báo lỗi
            console.log(`❌ Hàm ${func.originalIndex} bị lỗi: ${err.message}`);
            hasError = true; // Cắm cờ lỗi
            // Không push vào newFuncs → bỏ luôn khỏi lần chạy sau
          } else {
            // Nếu thành công: in log và đưa vào danh sách chạy tiếp
            console.log(`Completed asyncFunc${func.originalIndex + 1}`);
            console.log(`✅ Hàm ${func.originalIndex} chạy thành công!`);
            newFuncs.push(func); // Chỉ giữ hàm đã thành công
          }
          index++;      // Tăng chỉ số để xử lý tiếp
          execute();    // Gọi đệ quy cho hàm tiếp theo
        });
      } catch (e) {
        // Nếu có lỗi throw ngoài callback (hiếm): bắt ngoại lệ
        console.log(`❌ Exception tại hàm ${func.originalIndex}: ${e.message}`);
        hasError = true;
        index++;
        execute(); // Tiếp tục xử lý hàm sau
      }
    }

    // Bắt đầu chuỗi gọi đệ quy
    execute();
  }

  // Gắn thông tin chỉ số ban đầu vào từng hàm để in log chính xác
  const wrappedFuncs = funcArray.map((f, i) => ({ cb: f, originalIndex: i }));
  currentFuncs = wrappedFuncs; // Cập nhật mảng đang chạy
  run(); // Bắt đầu thực thi chuỗi
}

function asyncFunc1(callback) {
  console.log("Started asyncFunc1");
  setTimeout(() => {
    console.log("Completed asyncFunc1");
    callback();
  }, 3000);
}

function asyncFunc2(callback) {
  console.log("Started asyncFunc2");
  setTimeout(() => {
    console.log("Completed asyncFunc2");
    callback();
  }, 2000);
}

let failOnce = true;
function asyncFunc4(callback) {
  console.log("Started asyncFunc4");
  setTimeout(() => {
    if( failOnce) {
      failOnce = false;
      callback(new Error("Error in asyncFunc4"));
    } else {
      console.log("Completed asyncFunc4");
      callback();
    }
  },1000);
}


function asyncFunc3(callback) {
  console.log("Started asyncFunc3");
  setTimeout(() => {
    console.log("Completed asyncFunc3");
    callback();
  }, 1000);
}

// Driver code
// lan chay dau tien
callbackManager([asyncFunc1, asyncFunc2, asyncFunc4, asyncFunc3]);

// sau khi chay nhan xet:
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