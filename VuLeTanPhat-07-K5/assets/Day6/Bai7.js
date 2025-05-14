function callbackManager(funcArray) {
  let currentFuncs = [...funcArray]; // Clone để xử lý
  let retryCount = 0;

  function run() {
    console.log(retryCount === 0 ? "\n🔁 Bắt đầu chạy hàm lần đầu...\n" : `\n🔁 Bắt đầu chạy lại lần ${retryCount}...\n`);
    let index = 0;
    let newFuncs = []; // Mảng mới cho lần chạy sau
    let hasError = false;

    function execute() {
      if (index >= currentFuncs.length) {
        if (hasError) {
          console.log("\n❌ Có hàm bị lỗi, sẽ chạy lại toàn bộ sau 5s...\n");
          currentFuncs = newFuncs; // Chỉ giữ lại các hàm thành công
          retryCount++;
          setTimeout(run, 5000);
        } else {
          console.log("\n✅ Tất cả hàm đã chạy thành công!\n");
        }
        return;
      }

      const func = currentFuncs[index];
      console.log(`Started asyncFunc${func.originalIndex + 1}`);
      try {
        func.cb((err) => {
          if (err) {
            console.log(`❌ Hàm ${func.originalIndex} bị lỗi: ${err.message}`);
            hasError = true;
            // KHÔNG đưa vào newFuncs → loại hẳn ra
          } else {
            console.log(`Completed asyncFunc${func.originalIndex + 1}`);
            console.log(`✅ Hàm ${func.originalIndex} chạy thành công!`);
            newFuncs.push(func); // Chỉ giữ hàm thành công
          }
          index++;
          execute();
        });
      } catch (e) {
        console.log(`❌ Exception tại hàm ${func.originalIndex}: ${e.message}`);
        hasError = true;
        index++;
        execute();
      }
    }

    execute();
  }

  // Gán chỉ số ban đầu để theo dõi cho đẹp
  const wrappedFuncs = funcArray.map((f, i) => ({ cb: f, originalIndex: i }));
  currentFuncs = wrappedFuncs;
  run();
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