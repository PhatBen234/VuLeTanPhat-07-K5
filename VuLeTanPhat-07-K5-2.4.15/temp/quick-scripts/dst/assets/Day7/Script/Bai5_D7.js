
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai5_D7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c15a0e+BtZFHastKnyJR07z', 'Bai5_D7');
// Day7/Script/Bai5_D7.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    latencyLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.measuraLatency();
  },
  getServerTime: function getServerTime() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, serverDate;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(window.location.href, {
                method: 'HEAD'
              });

            case 3:
              response = _context.sent;
              serverDate = response.headers.get("Date");

              if (serverDate) {
                _context.next = 7;
                break;
              }

              throw new Error("Không lấy được thời gian từ header.");

            case 7:
              return _context.abrupt("return", new Date(serverDate).getTime());

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              cc.error("❌ Lỗi khi lấy thời gian server:", _context.t0.message); // Trả về thời gian local nếu không lấy được thời gian server

              return _context.abrupt("return", new Date().getTime());

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }))();
  },
  measuraLatency: function measuraLatency() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var startTime, resultText, i, currentTime, latency;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.getServerTime();

            case 2:
              startTime = _context2.sent;
              resultText = "";
              i = 0;

            case 5:
              if (!(i < 10)) {
                _context2.next = 17;
                break;
              }

              _context2.next = 8;
              return _this.getServerTime();

            case 8:
              currentTime = _context2.sent;
              latency = currentTime - startTime;
              startTime = currentTime;
              cc.log('Độ trễ: ' + latency); // Thêm kết quả vào chuỗi hiển thị

              resultText += 'Độ trễ: ' + latency + 'ms\n'; // Cập nhật label nếu có

              if (_this.latencyLabel) {
                _this.latencyLabel.string = resultText;
              }

            case 14:
              i++;
              _context2.next = 5;
              break;

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
}); //Bắt đầu logLatency()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk1X0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGF0ZW5jeUxhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJtZWFzdXJhTGF0ZW5jeSIsImdldFNlcnZlclRpbWUiLCJmZXRjaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm1ldGhvZCIsInJlc3BvbnNlIiwic2VydmVyRGF0ZSIsImhlYWRlcnMiLCJnZXQiLCJFcnJvciIsIkRhdGUiLCJnZXRUaW1lIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhcnRUaW1lIiwicmVzdWx0VGV4dCIsImkiLCJjdXJyZW50VGltZSIsImxhdGVuY3kiLCJsb2ciLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFO0lBQ1ZDLFlBQVksRUFBRUosRUFBRSxDQUFDSztFQURQLENBSEw7RUFPUEMsTUFQTyxvQkFPRTtJQUNQLEtBQUtDLGNBQUw7RUFDRCxDQVRNO0VBV0RDLGFBWEMsMkJBV2U7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUEsT0FFS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWpCLEVBQXVCO2dCQUNqREMsTUFBTSxFQUFFO2NBRHlDLENBQXZCLENBRlY7O1lBQUE7Y0FFWkMsUUFGWTtjQU1aQyxVQU5ZLEdBTUNELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckIsQ0FORDs7Y0FBQSxJQVFiRixVQVJhO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUEsTUFTVixJQUFJRyxLQUFKLENBQVUscUNBQVYsQ0FUVTs7WUFBQTtjQUFBLGlDQVlYLElBQUlDLElBQUosQ0FBU0osVUFBVCxFQUFxQkssT0FBckIsRUFaVzs7WUFBQTtjQUFBO2NBQUE7Y0FjbEJwQixFQUFFLENBQUNxQixLQUFILENBQVMsaUNBQVQsRUFBNEMsWUFBSUMsT0FBaEQsRUFka0IsQ0FlbEI7O2NBZmtCLGlDQWdCWCxJQUFJSCxJQUFKLEdBQVdDLE9BQVgsRUFoQlc7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFrQnJCLENBN0JNO0VBK0JEYixjQS9CQyw0QkErQmdCO0lBQUE7O0lBQUE7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Y0FBQSxPQUNDLEtBQUksQ0FBQ0MsYUFBTCxFQUREOztZQUFBO2NBQ2pCZSxTQURpQjtjQUVqQkMsVUFGaUIsR0FFSixFQUZJO2NBSVpDLENBSlksR0FJUixDQUpROztZQUFBO2NBQUEsTUFJTEEsQ0FBQyxHQUFHLEVBSkM7Z0JBQUE7Z0JBQUE7Y0FBQTs7Y0FBQTtjQUFBLE9BS08sS0FBSSxDQUFDakIsYUFBTCxFQUxQOztZQUFBO2NBS2JrQixXQUxhO2NBTWJDLE9BTmEsR0FNSEQsV0FBVyxHQUFHSCxTQU5YO2NBT25CQSxTQUFTLEdBQUdHLFdBQVo7Y0FFQTFCLEVBQUUsQ0FBQzRCLEdBQUgsQ0FBTyxhQUFhRCxPQUFwQixFQVRtQixDQVduQjs7Y0FDQUgsVUFBVSxJQUFJLGFBQWFHLE9BQWIsR0FBdUIsTUFBckMsQ0FabUIsQ0FjbkI7O2NBQ0EsSUFBSSxLQUFJLENBQUN2QixZQUFULEVBQXVCO2dCQUNyQixLQUFJLENBQUNBLFlBQUwsQ0FBa0J5QixNQUFsQixHQUEyQkwsVUFBM0I7Y0FDRDs7WUFqQmtCO2NBSUdDLENBQUMsRUFKSjtjQUFBO2NBQUE7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFtQnRCO0FBbERNLENBQVQsR0FxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbGF0ZW5jeUxhYmVsOiBjYy5MYWJlbCxcbiAgfSxcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5tZWFzdXJhTGF0ZW5jeSgpO1xuICB9LFxuXG4gIGFzeW5jIGdldFNlcnZlclRpbWUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2luZG93LmxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgbWV0aG9kOiAnSEVBRCcsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2VydmVyRGF0ZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiRGF0ZVwiKTtcblxuICAgICAgaWYgKCFzZXJ2ZXJEYXRlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIktow7RuZyBs4bqleSDEkcaw4bujYyB0aOG7nWkgZ2lhbiB04burIGhlYWRlci5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgRGF0ZShzZXJ2ZXJEYXRlKS5nZXRUaW1lKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjYy5lcnJvcihcIuKdjCBM4buXaSBraGkgbOG6pXkgdGjhu51pIGdpYW4gc2VydmVyOlwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAvLyBUcuG6oyB24buBIHRo4budaSBnaWFuIGxvY2FsIG7hur91IGtow7RuZyBs4bqleSDEkcaw4bujYyB0aOG7nWkgZ2lhbiBzZXJ2ZXJcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgbWVhc3VyYUxhdGVuY3koKSB7XG4gICAgbGV0IHN0YXJ0VGltZSA9IGF3YWl0IHRoaXMuZ2V0U2VydmVyVGltZSgpO1xuICAgIGxldCByZXN1bHRUZXh0ID0gXCJcIjtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gYXdhaXQgdGhpcy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICBjb25zdCBsYXRlbmN5ID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIFxuICAgICAgY2MubG9nKCfEkOG7mSB0cuG7hTogJyArIGxhdGVuY3kpO1xuICAgICAgXG4gICAgICAvLyBUaMOqbSBr4bq/dCBxdeG6oyB2w6BvIGNodeG7l2kgaGnhu4NuIHRo4buLXG4gICAgICByZXN1bHRUZXh0ICs9ICfEkOG7mSB0cuG7hTogJyArIGxhdGVuY3kgKyAnbXNcXG4nO1xuICAgICAgXG4gICAgICAvLyBD4bqtcCBuaOG6rXQgbGFiZWwgbuG6v3UgY8OzXG4gICAgICBpZiAodGhpcy5sYXRlbmN5TGFiZWwpIHtcbiAgICAgICAgdGhpcy5sYXRlbmN5TGFiZWwuc3RyaW5nID0gcmVzdWx0VGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG4vL0Lhuq90IMSR4bqndSBsb2dMYXRlbmN5KClcbi8vIOKGk1xuLy8gTOG6pXkgc3RhcnRUaW1lIGzhuqduIMSR4bqndVxuLy8g4oaTXG4vLyBC4bqvdCDEkeG6p3UgdsOybmcgbOG6t3AgMTAgbOG6p246XG4vLyAgIOKUnOKUgCBM4bqnbiAxOlxuLy8gICDilIIgICDilJzilIAgR+G7jWkgZ2V0U2VydmVyVGltZSgpIOKGkiBjdXJyZW50VGltZVxuLy8gICDilIIgICDilJzilIAgbGF0ZW5jeSA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lXG4vLyAgIOKUgiAgIOKUnOKUgCBJbiByYSBsb2cgJiBMYWJlbFxuLy8gICDilIIgICDilJTilIAgQ+G6rXAgbmjhuq10IHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lXG4vLyAgIOKUnOKUgCBEZWxheSAxIGdpw6J5XG4vLyAgIOKUlOKUgCBM4bq3cCBs4bqhaVxuLy8g4oaTXG4vLyBL4bq/dCB0aMO6YyBzYXUgMTAgbOG6p25cblxuLy9mbG93IGRlIGhpZXUiXX0=