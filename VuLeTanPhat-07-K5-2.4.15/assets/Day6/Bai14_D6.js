function printInOrderConcurrently(funcArray) { // khoi tao ham nhan mang co chua cac ham async
  const results = new Array(funcArray.length); // mang result co do dai cua mang funcArray, muc dich de dung vi tri index khi tra ve
  const printed = new Array(funcArray.length).fill(false); // ban dau ket qua deu la false, printed danh dau mang nao da in ra roi

  let nextIndexToPrint = 0;

  funcArray.forEach((func, index) => { //duyet qua tung mang cung index cua no
    func().then((value) => { //se xu ly sau khi promise hoan tat
      results[index] = value; // luu gia tri value vao dung vi tri trong mang results

      while (
        nextIndexToPrint < results.length && // da het do dai mang
        results[nextIndexToPrint] !== undefined && //da co ket qua
        !printed[nextIndexToPrint] //chua in truoc do
        
      ) {
        console.log(`Result ${nextIndexToPrint + 1}:`, results[nextIndexToPrint]); // index 0 => result 1
        printed[nextIndexToPrint] = true; //danh dau da duoc in
        nextIndexToPrint++; // goi vi tri tiep theo trong mang
      }
    });
  });
}

function asyncFunc1() {
  return new Promise(resolve => setTimeout(() => resolve(1), 3000));
}
function asyncFunc2() {
  return new Promise(resolve => setTimeout(() => resolve(2), 1000));
}
function asyncFunc3() {
  return new Promise(resolve => setTimeout(() => resolve(3), 2000));
}


printInOrderConcurrently([asyncFunc1, asyncFunc2, asyncFunc3]);

// sau 3s co ket qua toan bo va theo thu tu

//asci for each
// forEach:
//  ┌──────────────────────────────────────────────────────┐
//  │ gọi từng hàm async() → chạy song song               │
//  │      └─> khi xong → lưu vào `results[index]`         │
//  │                 └─> nếu có thể in → in và tăng index │
//  └──────────────────────────────────────────────────────┘

