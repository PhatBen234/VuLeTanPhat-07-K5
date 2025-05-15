function asyncFunc1() {
  return new Promise((resolve) => {
    console.log("Started asyncFunc1");
    setTimeout(() => {
      console.log("Completed asyncFunc1");
      resolve("Result 1");
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise((resolve) => {
    console.log("Started asyncFunc2");
    setTimeout(() => {
      console.log("Completed asyncFunc2");
      resolve("Result 2");
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise((resolve) => {
    console.log("Started asyncFunc3");
    setTimeout(() => {
      console.log("Completed asyncFunc3");
      resolve("Result 3");
    }, 1000);
  });
}

function runSequentialPromises(funcArray) { // ham nhan mang, mang do chua cac ham bat dong bo
  funcArray.reduce((prevPromise, currentFunc) => { // duyet qua tung mang, reduce de dam bao chay tuan tu, prevPromise la promise ham truoc, currentFunc chinh la ham dang xet
    // console.log('prevPromise',prevPromise,currentFunc) //log thu lan dau co ket qua undefined, pending, pending
    return prevPromise.then(() => currentFunc()); //prevPromise hoan thanh moi goi ham moi, va currentFunc tra ve 1 promise moi de tiep tuc chuoi
  }, Promise.resolve()); //tao 1 promise co gia tri ngay lap tuc, dong thoi resolve cung la thong bao trang thai thanh cong da co ket qua 200ms tra ve nhu ben web
}

runSequentialPromises([asyncFunc1, asyncFunc2, asyncFunc3]);

// khi su dung reduce thi no can cac gia tri de chay tuan tu, nhung cac ham bat dong bo nay moi vo khong co ket qua nao nen khong chay duoc, Promise.resolve dung de khac phuc van de nay
// vi du de nho ve reduce
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 0); // bắt đầu với 0

// console.log(sum); // 👉 15

// Lần	Accumulator	Current	Tổng
// 1	0	1	1
// 2	1	2	3
// 3	3	3	6
// 4	6	4	10
// 5	10	5	15

