for (let i = 10; i >= 1; i--) { // lam nguoc lai vs bai 3, van la let trong block scope nhung o vong for thi bat dau tu 10, dung khi toi 1, va dieu kien la -
  setTimeout(() => {
    console.log(i);
  }, (10-i) * 1000); //thay vi la i*1000 ta thay bang 10-i vi dem nguoc lai ( phai la 10-i chu ghi i*1000 la dem tu 1 toi 10 )
}

//test thu dao nguoc lai bi sao
// for (let i = 10; i >= 1; i--) { // lam nguoc lai vs bai 3, van la let trong block scope nhung o vong for thi bat dau tu 10, dung khi toi 1, va dieu kien la -
//   setTimeout(() => {
//     console.log(i);
//   }, (i) * 1000); //thay vi la i*1000 ta thay bang 10-i vi dem nguoc lai ( phai la 10-i chu ghi i*1000 la dem tu 1 toi 10 )
// }



// for (var i = 10; i >= 1; i--) { //var + IIFE
//   (function(j) {
//     setTimeout(() => {
//       console.log(j);
//     }, (10 - j) * 1000);
//   })(i); //truyen i ngay day de dung gia tri
// }
