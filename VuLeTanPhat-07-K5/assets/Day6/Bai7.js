function callbackManager(funcArray) { //ham chinh nhan funcArray aka async
    function execute(index){  //ham nay duoc goi de chay tung ham trong mang
        if(index >= funcArray.length) return; //neu index vuot qua do dai mang, nghia la k con ham gi nua, THOAT
        const currentFunc = funcArray[index]; // lay ham hien tai theo index
        currentFunc(() => execute(index +1)) //goi ham hien tai, truyen vao callback ( khi hoan thanh se goi ham ke tiep trong mang)
    }
    execute(0); //bat dau de quy tu index=0
} // doc code tu duoi len theo cmt function nay, se hieu no lam gi

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

function asyncFunc3(callback) {
  console.log("Started asyncFunc3");
  setTimeout(() => {
    console.log("Completed asyncFunc3");
    callback();
  }, 1000);
}

// Driver code
callbackManager([asyncFunc1, asyncFunc2, asyncFunc3]);

// sau khi chay nhan xet:
// ke tu khi lenh Started asyncFunc1 thi mat 3s de hien completed tuong tu asyncFunc2 mat 2s va cuoi cung mat 1s, moi thu in ra theo dung thu tu voi dung so giay.

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
