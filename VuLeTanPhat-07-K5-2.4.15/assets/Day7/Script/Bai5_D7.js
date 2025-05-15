cc.Class({
  extends: cc.Component,

  properties: {
    latencyLabel: cc.Label,
  },

  onLoad() {
    this.measuraLatency();
  },

  async getServerTime() {
    try {
      const response = await fetch(window.location.href, {
        method: 'HEAD',
      });

      const serverDate = response.headers.get("Date");

      if (!serverDate) {
        throw new Error("Không lấy được thời gian từ header.");
      }

      return new Date(serverDate).getTime();
    } catch (err) {
      cc.error("❌ Lỗi khi lấy thời gian server:", err.message);
      // Trả về thời gian local nếu không lấy được thời gian server
      return new Date().getTime();
    }
  },

  async measuraLatency() {
    let startTime = await this.getServerTime();
    let resultText = "";
    
    for (let i = 0; i < 10; i++) {
      const currentTime = await this.getServerTime();
      const latency = currentTime - startTime;
      startTime = currentTime;
      
      cc.log('Độ trễ: ' + latency);
      
      // Thêm kết quả vào chuỗi hiển thị
      resultText += 'Độ trễ: ' + latency + 'ms\n';
      
      // Cập nhật label nếu có
      if (this.latencyLabel) {
        this.latencyLabel.string = resultText;
      }
    }
  }
});

//Bắt đầu logLatency()
// ↓
// Lấy startTime lần đầu
// ↓
// Bắt đầu vòng lặp 10 lần:
//   ├─ Lần 1:
//   │   ├─ Gọi getServerTime() → currentTime
//   │   ├─ latency = currentTime - startTime
//   │   ├─ In ra log & Label
//   │   └─ Cập nhật startTime = currentTime
//   ├─ Delay 1 giây
//   └─ Lặp lại
// ↓
// Kết thúc sau 10 lần

//flow de hieu