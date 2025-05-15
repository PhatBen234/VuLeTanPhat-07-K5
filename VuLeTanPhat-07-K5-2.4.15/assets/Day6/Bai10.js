function asyncFunc1() { 
  return new Promise((resolve) => {
    console.log("Started asyncFunc1");
    setTimeout(() => {
      console.log("Completed asyncFunc1");
      resolve(1);
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise((resolve) => {
    console.log("Started asyncFunc2");
    setTimeout(() => {
      console.log("Completed asyncFunc2");
      resolve(2);
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise((resolve) => {
    console.log("Started asyncFunc3");
    setTimeout(() => {
      console.log("Completed asyncFunc3");
      resolve(3);
    }, 1000);
  });
}

async function runSequentialAsync() { //async funtion thong bao rang day la 1 ham xu ly bat dong bo
  try {
    const result1 = await asyncFunc1(); // cho ket qua cua asyncFunc1()
    console.log("Result 1:", result1); //roi moi in ra 

    const result2 = await asyncFunc2();// cho ket qua cua asyncFunc2()
    console.log("Result 2:", result2);//roi moi in ra 

    const result3 = await asyncFunc3(); // cho ket qua cua asyncFunc3()
    console.log("Result 3:", result3);//roi moi in ra 
  } catch (error) {
    console.error("Error occurred:", error); //bat loi
  }
}

runSequentialAsync();//chay ham
