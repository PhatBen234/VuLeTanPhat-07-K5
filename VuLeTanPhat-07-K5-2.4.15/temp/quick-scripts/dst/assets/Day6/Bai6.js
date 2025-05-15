
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '792e4/lRLFCz5rpOuaCw4Ml', 'Bai6');
// Day6/Bai6.js

"use strict";

function timer(startValue, step) {
  //startValue:gia tri bat dau, step: gia tri muon tang
  var current = startValue; // gia tri hien tai

  var interValid = null; //su dung Id cua Interval

  function startTimer() {
    if (interValid === null) {
      // neu id la rong
      interValid = setInterval(function () {
        // ham interval nhan ve 1 ham callback
        console.log(current);
        current += step;
      }, 1000); // sau khaong 1s moi chay (lap lai) , tuc la sau 1s moi in ra so dau tien
    }
  }

  function stopTimer() {
    if (interValid !== null) {
      clearInterval(interValid); //su dung de dung interval

      interValid = null;
    }
  }

  return {
    startTimer: startTimer,
    stopTimer: stopTimer
  };
}

var timerInstance = timer(100, 10);
timerInstance.startTimer();
setTimeout(function () {
  timerInstance.stopTimer();
}, 5000); //=> ket luan: no se in ra 100, 110, 120, 130, no se lam ta thac mac tai sao k in ra 140
// co 1 bang sau de hinh dung
// So giay     In ra
// 1           100
// 2           110
// 3           120
// 4           130
// 5           clearInterval
// nhu da note o tren, chi khi sau 1s do, no moi in ra, va gia tri dau tien no in ra la 100.

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTYuanMiXSwibmFtZXMiOlsidGltZXIiLCJzdGFydFZhbHVlIiwic3RlcCIsImN1cnJlbnQiLCJpbnRlclZhbGlkIiwic3RhcnRUaW1lciIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsInN0b3BUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lckluc3RhbmNlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxLQUFULENBQWVDLFVBQWYsRUFBMkJDLElBQTNCLEVBQWdDO0VBQUU7RUFDOUIsSUFBSUMsT0FBTyxHQUFHRixVQUFkLENBRDRCLENBQ0Y7O0VBQzFCLElBQUlHLFVBQVUsR0FBRyxJQUFqQixDQUY0QixDQUVMOztFQUV2QixTQUFTQyxVQUFULEdBQXNCO0lBQ2xCLElBQUdELFVBQVUsS0FBSyxJQUFsQixFQUF1QjtNQUFFO01BQ3JCQSxVQUFVLEdBQUdFLFdBQVcsQ0FBQyxZQUFLO1FBQUU7UUFDNUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxPQUFaO1FBQ0FBLE9BQU8sSUFBR0QsSUFBVjtNQUNILENBSHVCLEVBR3JCLElBSHFCLENBQXhCLENBRG1CLENBSVY7SUFDWjtFQUNKOztFQUVELFNBQVNPLFNBQVQsR0FBcUI7SUFDckIsSUFBR0wsVUFBVSxLQUFLLElBQWxCLEVBQXVCO01BQ25CTSxhQUFhLENBQUNOLFVBQUQsQ0FBYixDQURtQixDQUNROztNQUMzQkEsVUFBVSxHQUFHLElBQWI7SUFDSDtFQUFDOztFQUVGLE9BQU87SUFDSEMsVUFBVSxFQUFWQSxVQURHO0lBRUhJLFNBQVMsRUFBVEE7RUFGRyxDQUFQO0FBSUg7O0FBQ0QsSUFBTUUsYUFBYSxHQUFHWCxLQUFLLENBQUMsR0FBRCxFQUFNLEVBQU4sQ0FBM0I7QUFDQVcsYUFBYSxDQUFDTixVQUFkO0FBQ0FPLFVBQVUsQ0FBQyxZQUFNO0VBQ2pCRCxhQUFhLENBQUNGLFNBQWQ7QUFDQyxDQUZTLEVBRVAsSUFGTyxDQUFWLEVBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0aW1lcihzdGFydFZhbHVlLCBzdGVwKXsgLy9zdGFydFZhbHVlOmdpYSB0cmkgYmF0IGRhdSwgc3RlcDogZ2lhIHRyaSBtdW9uIHRhbmdcbiAgICBsZXQgY3VycmVudCA9IHN0YXJ0VmFsdWU7IC8vIGdpYSB0cmkgaGllbiB0YWlcbiAgICBsZXQgaW50ZXJWYWxpZCA9IG51bGw7IC8vc3UgZHVuZyBJZCBjdWEgSW50ZXJ2YWxcblxuICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGlmKGludGVyVmFsaWQgPT09IG51bGwpeyAvLyBuZXUgaWQgbGEgcm9uZ1xuICAgICAgICAgICAgaW50ZXJWYWxpZCA9IHNldEludGVydmFsKCgpID0+eyAvLyBoYW0gaW50ZXJ2YWwgbmhhbiB2ZSAxIGhhbSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgKz1zdGVwO1xuICAgICAgICAgICAgfSwgMTAwMCkgLy8gc2F1IGtoYW9uZyAxcyBtb2kgY2hheSAobGFwIGxhaSkgLCB0dWMgbGEgc2F1IDFzIG1vaSBpbiByYSBzbyBkYXUgdGllblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xuICAgIGlmKGludGVyVmFsaWQgIT09IG51bGwpe1xuICAgICAgICBjbGVhckludGVydmFsKGludGVyVmFsaWQpOyAvL3N1IGR1bmcgZGUgZHVuZyBpbnRlcnZhbFxuICAgICAgICBpbnRlclZhbGlkID0gbnVsbDtcbiAgICB9fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnRUaW1lcixcbiAgICAgICAgc3RvcFRpbWVyXG4gICAgfTtcbn1cbmNvbnN0IHRpbWVySW5zdGFuY2UgPSB0aW1lcigxMDAsIDEwKTtcbnRpbWVySW5zdGFuY2Uuc3RhcnRUaW1lcigpO1xuc2V0VGltZW91dCgoKSA9PiB7XG50aW1lckluc3RhbmNlLnN0b3BUaW1lcigpO1xufSwgNTAwMCk7XG4vLz0+IGtldCBsdWFuOiBubyBzZSBpbiByYSAxMDAsIDExMCwgMTIwLCAxMzAsIG5vIHNlIGxhbSB0YSB0aGFjIG1hYyB0YWkgc2FvIGsgaW4gcmEgMTQwXG5cbi8vIGNvIDEgYmFuZyBzYXUgZGUgaGluaCBkdW5nXG5cbi8vIFNvIGdpYXkgICAgIEluIHJhXG4vLyAxICAgICAgICAgICAxMDBcbi8vIDIgICAgICAgICAgIDExMFxuLy8gMyAgICAgICAgICAgMTIwXG4vLyA0ICAgICAgICAgICAxMzBcbi8vIDUgICAgICAgICAgIGNsZWFySW50ZXJ2YWxcbi8vIG5odSBkYSBub3RlIG8gdHJlbiwgY2hpIGtoaSBzYXUgMXMgZG8sIG5vIG1vaSBpbiByYSwgdmEgZ2lhIHRyaSBkYXUgdGllbiBubyBpbiByYSBsYSAxMDAuIl19