async function asyncFunc1() { // ham async await
  console.log("Started asyncFunc1");
  await new Promise(resolve => setTimeout(resolve, 3000));
  return "Result from asyncFunc1"; //tra ket qua khi xong
}

async function asyncFunc2() { // ham async await
  console.log("Started asyncFunc2");
  await new Promise(resolve => setTimeout(resolve, 2000));
  return "Result from asyncFunc2"; //tra ket qua khi xong
}

async function asyncFunc3() { // ham async await
  console.log("Started asyncFunc3");
  await new Promise(resolve => setTimeout(resolve, 1000));
  return "Result from asyncFunc3";//tra ket qua khi xong
}
// 1 ham promise dac biet, k co resoleve, cho co reject,dung de gioi han thoi gian dc phep cho`
function timeoutFunc() { // ham tra ve promise bi reject sau 1.5s
  return new Promise((_, reject) => { // promise reject - tra qua ket qua loi~, bo qua resolve (_)
    setTimeout(() => {
      reject("⏰ Timeout after 1.5s"); 
    }, 1500);//sau 1.5s se bi loai
  });
}

const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3]; //mang chua cac ham async await, chua goi
const promiseArr = asyncArr.map(fn => fn());  // call tung ham, bien no thanh promise, cac promise chay song song
promiseArr.push(timeoutFunc());    // su dung ham timeout o tren, 
// noi thang ra la them ham promise timeout vao mang, gioi han thoi gian cho` 1.5s

Promise.race(promiseArr) // promise race lay ket qua dau tien tra ve (resolve or reject)
  .then(result => console.log("✅ First result:", result))
  .catch(error => console.error("❌ Error or Timeout:", error));

// in ra cac ham async/await ngay lap tuc
// phia promise hien ra ket qua nhanh nhat chinh la asyncFunc3

// Started asyncFunc1
// Started asyncFunc2
// Started asyncFunc3
// ✅ First result: Result from asyncFunc3
// vi async3 chay 1s la xong, gioi han la 1,5 s, async1,2 chua chay xong, async3 tra ket qua nhanh nhat,