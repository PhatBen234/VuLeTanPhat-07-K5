cc.Class({
    extends: cc.Component,

    properties: {
    outputLabel: cc.Label,
    },

    start() {// ngay khi node vua chay
    this.testCircuitBreaker();// goi ngay CB
    },

    async getServerTime() {// ham lay thoi gian tu sv
    try {
        const response = await fetch(window.location.href.toString(), { method: 'HEAD' });
        const dateHeader = response.headers.get('Date');
        if (!dateHeader) throw new Error('No Date header');
        return new Date(dateHeader).getTime();
    } catch (e) {
        return Date.now(); 
    }
    },

    async circuitBreaker(fn, timeThreshold) {// nhan 1 (ham async nao do, gioi han thoi gian)
    let isOpen = true; // mo cong tac, cho phep nguoi ta call toi
    setTimeout(() => {
        isOpen = false;
    }, timeThreshold);// sau khi het thoi gian quy dinh, mach dong lai, k cho goi ham fn nua

    return async (...args) => {//tra ve 1 ham async moi, thay cho ham fn
        if (isOpen) {
        return await fn(...args);// neu con thoi gian cho goi toi fn
        } else {
        return "service closed";// het thoi gian thong bao service closed
        }
    };
    },

    async testCircuitBreaker() {
    const getTimeLimited = await this.circuitBreaker(this.getServerTime, 2000);// tao 1 CB gioi han trong 2s

    setTimeout(async () => {
        const result1 = await getTimeLimited();
        cc.log(result1);
        this.outputLabel.string = 'KQ 1: ' + result1;
    }, 300);// 300ms => ham nay chac chan thanh cong

    setTimeout(async () => {
        const result2 = await getTimeLimited();
        cc.log(result2);
        this.outputLabel.string += '\nKQ 2: ' + result2;
    }, 2100);// 2100ms => hon 2000ms roi, nen se bi service closed
    }

});
