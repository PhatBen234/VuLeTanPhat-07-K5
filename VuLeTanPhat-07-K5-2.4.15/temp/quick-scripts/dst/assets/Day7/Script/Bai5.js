
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c15a0e+BtZFHastKnyJR07z', 'Bai5');
// Day7/Script/Bai5.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    timeLabel: cc.Label // Kết nối Label với thuộc tính trong Cocos Creator

  },
  start: function start() {
    this.logLatency();
  },
  getServerTime: function getServerTime() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, dateHeader;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(window.location.href.toString(), {
                method: 'HEAD',
                headers: {
                  'Content-Type': 'text/html'
                }
              });

            case 3:
              response = _context.sent;
              dateHeader = response.headers.get('Date');

              if (dateHeader) {
                _context.next = 7;
                break;
              }

              throw new Error('Không thể lấy header "Date" từ response');

            case 7:
              cc.log('Header Date từ server: ' + dateHeader); // Log giá trị Date từ server

              return _context.abrupt("return", new Date(dateHeader).getTime());

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              cc.error('Lỗi khi lấy thời gian từ server:', _context.t0);
              return _context.abrupt("return", Date.now());

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }))();
  },
  logLatency: function logLatency() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var startTime, i, currentTime, latency;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.getServerTime();

            case 2:
              startTime = _context2.sent;
              cc.log('Thời gian bắt đầu: ' + startTime);
              _this.timeLabel.string = "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u: " + startTime; // Hiển thị thời gian bắt đầu lên Label

              i = 0;

            case 6:
              if (!(i < 10)) {
                _context2.next = 20;
                break;
              }

              _context2.next = 9;
              return _this.getServerTime();

            case 9:
              currentTime = _context2.sent;
              latency = currentTime - startTime;
              cc.log('Thời gian hiện tại: ' + currentTime);
              cc.log("\u0110\u1ED9 tr\u1EC5: " + latency + "ms"); // Hiển thị kết quả mỗi lần vào Label

              _this.timeLabel.string = "Th\u1EDDi gian hi\u1EC7n t\u1EA1i: " + currentTime + "\n\u0110\u1ED9 tr\u1EC5: " + latency + "ms";
              startTime = currentTime; // Delay 1 giây giữa các lần gọi để giá trị thay đổi rõ rệt

              _context2.next = 17;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 1000);
              });

            case 17:
              i++;
              _context2.next = 6;
              break;

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk1LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGltZUxhYmVsIiwiTGFiZWwiLCJzdGFydCIsImxvZ0xhdGVuY3kiLCJnZXRTZXJ2ZXJUaW1lIiwiZmV0Y2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0b1N0cmluZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImRhdGVIZWFkZXIiLCJnZXQiLCJFcnJvciIsImxvZyIsIkRhdGUiLCJnZXRUaW1lIiwiZXJyb3IiLCJub3ciLCJzdGFydFRpbWUiLCJzdHJpbmciLCJpIiwiY3VycmVudFRpbWUiLCJsYXRlbmN5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ1AsV0FBU0QsRUFBRSxDQUFDRSxTQURMO0VBRVBDLFVBQVUsRUFBRTtJQUNWQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssS0FESixDQUNZOztFQURaLENBRkw7RUFNUEMsS0FOTyxtQkFNQztJQUNOLEtBQUtDLFVBQUw7RUFDRCxDQVJNO0VBVURDLGFBVkMsMkJBVWU7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUEsT0FFS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxRQUFyQixFQUFELEVBQWtDO2dCQUM1REMsTUFBTSxFQUFFLE1BRG9EO2dCQUU1REMsT0FBTyxFQUFFO2tCQUNQLGdCQUFnQjtnQkFEVDtjQUZtRCxDQUFsQyxDQUZWOztZQUFBO2NBRVpDLFFBRlk7Y0FTWkMsVUFUWSxHQVNDRCxRQUFRLENBQUNELE9BQVQsQ0FBaUJHLEdBQWpCLENBQXFCLE1BQXJCLENBVEQ7O2NBQUEsSUFXYkQsVUFYYTtnQkFBQTtnQkFBQTtjQUFBOztjQUFBLE1BWVYsSUFBSUUsS0FBSixDQUFVLHlDQUFWLENBWlU7O1lBQUE7Y0FlbEJuQixFQUFFLENBQUNvQixHQUFILENBQU8sNEJBQTRCSCxVQUFuQyxFQWZrQixDQWU4Qjs7Y0FmOUIsaUNBZ0JYLElBQUlJLElBQUosQ0FBU0osVUFBVCxFQUFxQkssT0FBckIsRUFoQlc7O1lBQUE7Y0FBQTtjQUFBO2NBa0JsQnRCLEVBQUUsQ0FBQ3VCLEtBQUgsQ0FBUyxrQ0FBVDtjQWxCa0IsaUNBbUJYRixJQUFJLENBQUNHLEdBQUwsRUFuQlc7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFxQnJCLENBL0JNO0VBaUNEakIsVUFqQ0Msd0JBaUNZO0lBQUE7O0lBQUE7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Y0FBQSxPQUNLLEtBQUksQ0FBQ0MsYUFBTCxFQURMOztZQUFBO2NBQ2JpQixTQURhO2NBRWpCekIsRUFBRSxDQUFDb0IsR0FBSCxDQUFPLHdCQUF3QkssU0FBL0I7Y0FDQSxLQUFJLENBQUNyQixTQUFMLENBQWVzQixNQUFmLCtDQUE4Q0QsU0FBOUMsQ0FIaUIsQ0FHMEM7O2NBRWxERSxDQUxRLEdBS0osQ0FMSTs7WUFBQTtjQUFBLE1BS0RBLENBQUMsR0FBRyxFQUxIO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUE7Y0FBQSxPQU1XLEtBQUksQ0FBQ25CLGFBQUwsRUFOWDs7WUFBQTtjQU1Ub0IsV0FOUztjQU9UQyxPQVBTLEdBT0NELFdBQVcsR0FBR0gsU0FQZjtjQVFmekIsRUFBRSxDQUFDb0IsR0FBSCxDQUFPLHlCQUF5QlEsV0FBaEM7Y0FDQTVCLEVBQUUsQ0FBQ29CLEdBQUgsNkJBQWtCUyxPQUFsQixTQVRlLENBV2Y7O2NBQ0EsS0FBSSxDQUFDekIsU0FBTCxDQUFlc0IsTUFBZiwyQ0FBK0NFLFdBQS9DLGlDQUF1RUMsT0FBdkU7Y0FFQUosU0FBUyxHQUFHRyxXQUFaLENBZGUsQ0FnQmY7O2NBaEJlO2NBQUEsT0FpQlQsSUFBSUUsT0FBSixDQUFZLFVBQUFDLE9BQU87Z0JBQUEsT0FBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVUsSUFBVixDQUFkO2NBQUEsQ0FBbkIsQ0FqQlM7O1lBQUE7Y0FLT0osQ0FBQyxFQUxSO2NBQUE7Y0FBQTs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQTtFQW1CbEI7QUFwRE0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0aW1lTGFiZWw6IGNjLkxhYmVsLCAgLy8gS+G6v3QgbuG7kWkgTGFiZWwgduG7m2kgdGh14buZYyB0w61uaCB0cm9uZyBDb2NvcyBDcmVhdG9yXG4gIH0sXG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5sb2dMYXRlbmN5KCk7XG4gIH0sXG5cbiAgYXN5bmMgZ2V0U2VydmVyVGltZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3aW5kb3cubG9jYXRpb24uaHJlZi50b1N0cmluZygpLCB7XG4gICAgICAgIG1ldGhvZDogJ0hFQUQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRlSGVhZGVyID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0RhdGUnKTtcblxuICAgICAgaWYgKCFkYXRlSGVhZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignS2jDtG5nIHRo4buDIGzhuqV5IGhlYWRlciBcIkRhdGVcIiB04burIHJlc3BvbnNlJyk7XG4gICAgICB9XG5cbiAgICAgIGNjLmxvZygnSGVhZGVyIERhdGUgdOG7qyBzZXJ2ZXI6ICcgKyBkYXRlSGVhZGVyKTsgLy8gTG9nIGdpw6EgdHLhu4sgRGF0ZSB04burIHNlcnZlclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVIZWFkZXIpLmdldFRpbWUoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2MuZXJyb3IoJ0zhu5dpIGtoaSBs4bqleSB0aOG7nWkgZ2lhbiB04burIHNlcnZlcjonLCBlcnJvcik7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKTsgLy8gZmFsbGJhY2sgbuG6v3UgbOG7l2lcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgbG9nTGF0ZW5jeSgpIHtcbiAgICBsZXQgc3RhcnRUaW1lID0gYXdhaXQgdGhpcy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgY2MubG9nKCdUaOG7nWkgZ2lhbiBi4bqvdCDEkeG6p3U6ICcgKyBzdGFydFRpbWUpO1xuICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IGBUaOG7nWkgZ2lhbiBi4bqvdCDEkeG6p3U6ICR7c3RhcnRUaW1lfWA7IC8vIEhp4buDbiB0aOG7iyB0aOG7nWkgZ2lhbiBi4bqvdCDEkeG6p3UgbMOqbiBMYWJlbFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IGF3YWl0IHRoaXMuZ2V0U2VydmVyVGltZSgpO1xuICAgICAgY29uc3QgbGF0ZW5jeSA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgY2MubG9nKCdUaOG7nWkgZ2lhbiBoaeG7h24gdOG6oWk6ICcgKyBjdXJyZW50VGltZSk7XG4gICAgICBjYy5sb2coYMSQ4buZIHRy4buFOiAke2xhdGVuY3l9bXNgKTtcblxuICAgICAgLy8gSGnhu4NuIHRo4buLIGvhur90IHF14bqjIG3hu5dpIGzhuqduIHbDoG8gTGFiZWxcbiAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IGBUaOG7nWkgZ2lhbiBoaeG7h24gdOG6oWk6ICR7Y3VycmVudFRpbWV9XFxuxJDhu5kgdHLhu4U6ICR7bGF0ZW5jeX1tc2A7XG5cbiAgICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuXG4gICAgICAvLyBEZWxheSAxIGdpw6J5IGdp4buvYSBjw6FjIGzhuqduIGfhu41pIMSR4buDIGdpw6EgdHLhu4sgdGhheSDEkeG7lWkgcsO1IHLhu4d0XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpOyAvLyAxIGdpw6J5XG4gICAgfVxuICB9XG59KTtcbiJdfQ==