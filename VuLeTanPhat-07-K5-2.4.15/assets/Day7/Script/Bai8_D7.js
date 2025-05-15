cc.Class({
  extends: cc.Component,

  properties: {
    timeLabel: cc.Label,
  },

  start() {
    // Hàm thường
    function getLocalTime() {
      return new Date().getTime();
    }

    // Hàm async
    async function getServerTime() {
      try {
        const response = await fetch(window.location.href.toString(), {
          method: 'HEAD',
          headers: {
            'Content-Type': 'text/html'
          }
        });

        const dateHeader = response.headers.get("Date");
        if (!dateHeader) throw new Error("Không có Date header");
        return new Date(dateHeader).getTime();
      } catch (err) {
        cc.error("Lỗi getServerTime:", err);
        return Date.now(); // fallback
      }
    }

    // Hàm promisify
    function promisify(fn) { // dinh nghia no la 1 promisify
      return function (...args) { //tra ve ham moi, nhan tat ca doi so args truyen vao ham
        try {
          const result = fn(...args)// goi ham fn goc voi cac doi so;
          return result instanceof Promise ? result : Promise.resolve(result);// ep no thanh promise, neu la promise thi thoi, con k ep no thanh promise
        } catch (err) {
          return Promise.reject(err);// tra ve promise reject
        }
      };
    }

    // Chạy thử
    (async () => {// tao va goi ham async an danh, dung de await ben trong
      const localTime = await promisify(getLocalTime)();// gan promisify
      const serverTime = await promisify(getServerTime)();// gan promisify
      const latency = serverTime - localTime; //tinh do tre

      const result = `Local Time: ${localTime}\nServer Time: ${serverTime}\nĐộ trễ: ${latency}ms`;
      cc.log(result);
      this.timeLabel.string = result;
    })();
  }
});
