//ma oi bai nay khong hieu gi het

cc.Class({
  extends: cc.Component,

  properties: {
    logLabel: cc.Label, 
  },

  start() {
    class Store {
      constructor(name) {
        this.name = name; 
        this.dependencies = [];
      }

      // them store phu thuoc vao
      wait(store) {
        this.dependencies.push(store);
      }

      // Giai quyet theo thu tu phu thuoc
      async resolve(stepTime, visited = new Set(), results = [], logFunc) {
        if (visited.has(this)) return; // neu da xu ly bo qua, tranh lap vo han, DONG NAY KEY, neu da kiem tra roi thi kiem tra store ke tiep

        visited.add(this); // Danh dau da xu ly ( neu chua danh dau da xu ly)

        // Giai quyet cac phu thuoc
        for (const dep of this.dependencies) {
          await dep.resolve(stepTime, visited, results, logFunc);// goi DEQUY de giai quyet cac store co chua cac phu thuoc(Neu k co phu thuoc thi for se bo qua, xu ly ngay thang store hien tai)
        }

        // Đợi stepTime s truoc khi giai quyet
        await new Promise(resolve => setTimeout(resolve, stepTime * 1000));

        cc.log(this.name); // In tên store ra console
        logFunc(this.name); // Ghi log vào Label UI
        results.push(this.name); // luu ten vao store
      }
    }

    // ─── FUNCTION CONTRIBUTE ──────────────
    // Hàm chính thực thi toàn bộ các store truyền vào theo đúng thứ tự phụ thuộc
    async function contribute(stepTime, logFunc, ...stores) {
      const visited = new Set(); // Danh dau store da thuc hien
      const results = []; // Luu ket qua store theo thu tu

      for (const store of stores) {
        await store.resolve(stepTime, visited, results, logFunc); // giai quyet tung store
      }

      // Sau khi tất cả store xong, log kết quả cuối cùng
      const finalLog = 'Hoàn tất: ' + results.join(' → ');
      cc.log(finalLog);
      logFunc(finalLog);
    }

    // ─── LOG HELPER ───────────────────────
    // Ghi một dòng log vào Label UI
    const logToLabel = (msg) => {
      this.logLabel.string += msg + '\n';
    };

    // ─── TẠO CÁC STORE & PHỤ THUỘC ───────
    const store1 = new Store('store_1');
    const store2 = new Store('store_2');
    const store3 = new Store('store_3');
    const store4 = new Store('store_4');
    const store5 = new Store('store_5');

    // Thiết lập quan hệ phụ thuộc:
    // store1 -> store3 -> store2 -> store5 -> store4
    store1.wait(store3);
    store3.wait(store2);
    store2.wait(store5);
    store5.wait(store4);

    // ─── THỰC THI CHÍNH ───────────────────
    this.logLabel.string = ''; // Xóa nội dung label trước khi chạy
    contribute(3, logToLabel, store1, store2, store3, store4, store5);
    // Gọi contribute() với delay 3 giây giữa mỗi bước
  }
});
