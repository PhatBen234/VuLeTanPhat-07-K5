function timer(startValue, step){ //startValue:gia tri bat dau, step: gia tri muon tang
    let current = startValue; // gia tri hien tai
    let interValid = null; //su dung Id cua Interval

    function startTimer() {
        if(interValid === null){ // neu id la rong
            interValid = setInterval(() =>{ // ham interval nhan ve 1 ham callback
                console.log(current);
                current +=step;
            }, 1000) // sau khaong 1s moi chay (lap lai) , tuc la sau 1s moi in ra so dau tien
        }
    }

    function stopTimer() {
    if(interValid !== null){
        clearInterval(interValid); //su dung de dung interval
        interValid = null;
    }}

    return {
        startTimer,
        stopTimer
    };
}
const timerInstance = timer(100, 10);
timerInstance.startTimer();
setTimeout(() => {
timerInstance.stopTimer();
}, 5000);
//=> ket luan: no se in ra 100, 110, 120, 130, no se lam ta thac mac tai sao k in ra 140

// co 1 bang sau de hinh dung

// So giay     In ra
// 1           100
// 2           110
// 3           120
// 4           130
// 5           clearInterval
// nhu da note o tren, chi khi sau 1s do, no moi in ra, va gia tri dau tien no in ra la 100.