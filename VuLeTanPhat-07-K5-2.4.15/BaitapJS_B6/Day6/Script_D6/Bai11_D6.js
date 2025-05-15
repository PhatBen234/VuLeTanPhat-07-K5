function asyncFunc1() {
  return new Promise((resolve, reject) => { // co the hieu la resolve la trang thai thanh cong, reject la that bai
    console.log("Started asyncFunc1");
    setTimeout(() => {
      console.log("Completed asyncFunc1");
      resolve("Result 1");//ham thanh cong
    }, 1000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    console.log("Started asyncFunc2");
    setTimeout(() => {
      console.log("Failed asyncFunc2");
      reject("Error in asyncFunc2");// ham that bai
    }, 1000);
  });
}

function asyncFunc3() {
  return new Promise((resolve, reject) => {
    console.log("Started asyncFunc3");
    setTimeout(() => {
      console.log("Completed asyncFunc3");
      resolve("Result 3");// ham thanh cong
    }, 1000);
  });
}

asyncFunc1()
  .then((res1) => { // xu li trang thai thanh cong tuc la no la resolve
    console.log(res1);
    return asyncFunc2();
  }, (err1) => { // that bai duong nhien no la reject 
    console.error("Error in asyncFunc1:", err1);
    return asyncFunc2(); 
  })
  .then((res2) => {// xu li trang thai thanh cong tuc la no la resolve
    console.log(res2);
    return asyncFunc3();
  }, (err2) => {// that bai duong nhien no la reject 
    console.error("Error in asyncFunc2:", err2);
    return asyncFunc3();
  })
  .then((res3) => {// xu li trang thai thanh cong tuc la no la resolve
    console.log(res3);
  }, (err3) => {// that bai duong nhien no la reject 
    console.error("Error in asyncFunc3:", err3);
  });

  //co test error bang reject o function 2... ket qua la
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