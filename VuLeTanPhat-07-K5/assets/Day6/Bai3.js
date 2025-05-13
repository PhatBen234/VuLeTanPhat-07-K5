//cach hay hon
for (let i = 1; i<=10; i++){ //lap tu 1 den 10
    setTimeout(() => {
        console.log(i); // in ra gia tri
    }, i*1000); // moi 1s in ra gia tri cua i
}
// su dung let vi su dung tot trong block scope, cap nhat gia tri sau moi lan lap  
// const thi chi su dung luu gia tri cua bien, k cap nhat duoc gia tri
// var thi cu phap cu es5 5, ko khuyen khich xai, k co block scope, gay kho khan cho nguoi code lan doc

// cach callback hell =))))

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//         setTimeout(() => {
//           console.log(5);
//           setTimeout(() => {
//             console.log(6);
//             setTimeout(() => {
//               console.log(7);
//               setTimeout(() => {
//                 console.log(8);
//                 setTimeout(() => {
//                   console.log(9);
//                   setTimeout(() => {
//                     console.log(10);
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

