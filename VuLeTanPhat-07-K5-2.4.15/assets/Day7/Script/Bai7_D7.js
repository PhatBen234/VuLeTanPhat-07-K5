cc.Class({
  extends: cc.Component,

  properties: {
    logLabel: cc.Label, // kéo node Label vào đây
  },

  start() { //dc goi khi node được tạo
    // Truyền label xuống LazyMan để in ra
    const lazyMan = new LazyMan('jack', this.logLabel);//method chaining
    lazyMan
      .eat('apple')
      .sleep(5000)
      .eat('hamburger')
      .sleep(3000)
      .eat('pear');
  },
});

class LazyMan {
  constructor(name, label) {
    this.queue = []; // hang doi cac ham
    this.label = label; // giữ tham chiếu label
    this.sayName(name);// hanh dong dau tien them vao queue
    this._run(); // bắt đầu thực thi hàng đợi
  }

  _log(message) {
    cc.log(message);// in ra console
    if (this.label) {
      this.label.string += message + '\n'; // them vao label
    }
  }

  sayName(name) { // them 1 ham vao queue
    this.queue.push(() => { // 
      this._log(`My name is ${name}`); //lgo name
      return Promise.resolve();//tra ve promise hoan thanh
    });
  }

  eat(food) {
    this.queue.push(() => {
      this._log(`I am eating ${food}`);
      return Promise.resolve();
    });
    return this;// de chaining lien ket .sleep().eat() lien tuc
  }

  sleep(ms) {
    this.queue.push(() => { // them vao queue, them setTimeout()
      this._log(`I am sleeping...`);
      return new Promise(resolve => {
        setTimeout(() => {
          this._log(`After ${ms / 1000} seconds`);
          resolve();
        }, ms);// sleep xong goi resolve
      });
    });
    return this;// de chaining lien ket .sleep().eat() lien tuc
  }

  async _run() { // chay lan luot action
    for (const action of this.queue) {
      await action(); //await de chay lan luot
    }
  }
}
