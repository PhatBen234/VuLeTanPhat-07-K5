function asyncParallel(funcArray, finalCallback) { //funcArray: mang chua cac ham bat dong bo; finalCallback la ham dc goi khi callback hoan thanh
    const result = []; // mang chua ket qua tung ham
    let completed = 0; // dem so mang hoan thanh

    funcArray.forEach((func, index) => { // duyet qua tung ham cua funcArray, func se la ham async hien tai, index la vi tri cua no trong mang
        func((value) =>{ //goi ham async, o day no se chay cac setTimeout, roi moi toi callback(value)
            result[index] = value;// gan ket qua value tra ve result[index] VD: aS3 tuy hoan thanh truoc nhung no van gan result[2] =3, aS2 xong tiep gan vo result[1]=2, cuoi cung la aS1 xong cuoi nhung no lai dc gan result[0]=1 => Ket qua van la [1,2,3]
            completed++; // tang so luong ham hoan thanh
            if( completed === funcArray.length){ //neu tat ca cac ham chay xong
                finalCallback(result) //tra ket qua khi toan bo ham chay xong het va truyen vao result
            }
        })
    })
}// doc tu tren xuong theo cmt la hieu 

function asyncFunc1(callback) {
  setTimeout(() => callback(1), 3000);
}
function asyncFunc2(callback) {
  setTimeout(() => callback(2), 2000);
}
function asyncFunc3(callback) {
  setTimeout(() => callback(3), 1000);
}

asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], (result) => {
  console.log(result);
});

// sau khi chay thi mat dung 3s de chay ra tat ca cac ham in ra ket qua [1,2,3] => cac ham chay song song khong doi ham nao xong roi moi chay


// bonus asci

// funcArray: [func1, func2, func3]

// index:      0       1       2
// func:     async1  async2  async3

//           ↓       ↓       ↓
//         (3s)    (2s)    (1s)
//           ↓       ↓       ↓
//  value:    1       2       3

// result: [1,     2,     3]
//          ↑      ↑      ↑
//        giữ đúng thứ tự dù thời gian chạy khác nhau
