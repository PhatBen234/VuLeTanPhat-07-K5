function asyncFunc1() {
  return new Promise((resolve, reject) => {
    console.log("Started asyncFunc1");
    setTimeout(() => {
    //   reject("Error in asyncFunc1"); 
      console.log("Completed asyncFunc1");
      resolve("Result 1");
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    console.log("Started asyncFunc2");
    setTimeout(() => {
    //   reject("Error in asyncFunc2");
      console.log("Completed asyncFunc2");
      resolve("Result 2");
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise((resolve, reject) => {
    console.log("Started asyncFunc3");
    setTimeout(() => {
    //   reject("Error in asyncFunc3");
      console.log("Completed asyncFunc3");
      resolve("Result 3");
    }, 1000);
  });
}

async function runSafeAsyncSequence() { // ve phan xu ly cua async await thi ta tach tung try-catch cho tung function, thi no se van chay bth mac du function truoc do bi loi thoi
  try {
    const result1 = await asyncFunc1();
    console.log("Result 1:", result1);
  } catch (err1) {
    console.error("Error in asyncFunc1:", err1);
  }

  try {
    const result2 = await asyncFunc2();
    console.log("Result 2:", result2);
  } catch (err2) {
    console.error("Error in asyncFunc2:", err2);
  }

  try {
    const result3 = await asyncFunc3();
    console.log("Result 3:", result3);
  } catch (err3) {
    console.error("Error in asyncFunc3:", err3);
  }
}

runSafeAsyncSequence();
// khi chay ket qua , bat dong cmt reject de test loi thi ket qua nhu sau

// Started asyncFunc1
// Completed asyncFunc1
// Error in asyncFunc1: Error in asyncFunc1
// Started asyncFunc2
// Completed asyncFunc2
// Error in asyncFunc2: Error in asyncFunc2
// Started asyncFunc3
// Completed asyncFunc3
// Error in asyncFunc3: Error in asyncFunc3

// nhu da thay no van chay dc mac du bi error