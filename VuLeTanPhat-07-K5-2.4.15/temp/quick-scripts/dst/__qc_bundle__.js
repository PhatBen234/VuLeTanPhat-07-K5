
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Day7/Script/Bai1');
require('./assets/Day7/Script/Bai2');
require('./assets/Day7/Script/Bai3');
require('./assets/Day7/Script/Bai4');
require('./assets/Day7/Script/Bai5');
require('./assets/Day7/Script/Bai6');
require('./assets/Day7/Script/Bai7');
require('./assets/Day7/Script/Bai8');
require('./assets/Day7/Script/Bai9');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e08bdHWWwlIVLaaa28LKEDF', 'Bai4');
// Day7/Script/Bai4.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//ma oi bai nay khong hieu gi het
cc.Class({
  "extends": cc.Component,
  properties: {
    logLabel: cc.Label // Gán node Label từ Inspector để in kết quả log

  },
  start: function start() {
    var _this = this;

    // ─── CLASS STORE ─────────────────────
    // Mỗi Store là một "công đoạn" có thể phụ thuộc vào công đoạn khác
    var Store = /*#__PURE__*/function () {
      function Store(name) {
        this.name = name; // Tên của Store

        this.dependencies = []; // Danh sách các Store mà Store này phụ thuộc
      } // Thêm một store phụ thuộc vào danh sách


      var _proto = Store.prototype;

      _proto.wait = function wait(store) {
        this.dependencies.push(store);
      } // Giải quyết store theo thứ tự phụ thuộc (đệ quy)
      ;

      _proto.resolve =
      /*#__PURE__*/
      function () {
        var _resolve = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(stepTime, visited, results, logFunc) {
          var _iterator, _step, dep;

          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (visited === void 0) {
                    visited = new Set();
                  }

                  if (results === void 0) {
                    results = [];
                  }

                  if (!visited.has(this)) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return");

                case 4:
                  // Nếu đã xử lý rồi thì bỏ qua (tránh lặp vô hạn)
                  visited.add(this); // Đánh dấu là đã xử lý
                  // Giải quyết các phụ thuộc trước

                  _iterator = _createForOfIteratorHelperLoose(this.dependencies);

                case 6:
                  if ((_step = _iterator()).done) {
                    _context.next = 12;
                    break;
                  }

                  dep = _step.value;
                  _context.next = 10;
                  return dep.resolve(stepTime, visited, results, logFunc);

                case 10:
                  _context.next = 6;
                  break;

                case 12:
                  _context.next = 14;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, stepTime * 1000);
                  });

                case 14:
                  cc.log(this.name); // In tên store ra console

                  logFunc(this.name); // Ghi log vào Label UI

                  results.push(this.name); // Lưu tên store đã hoàn thành vào mảng kết quả

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function resolve(_x, _x2, _x3, _x4) {
          return _resolve.apply(this, arguments);
        }

        return resolve;
      }();

      return Store;
    }(); // ─── FUNCTION CONTRIBUTE ──────────────
    // Hàm chính thực thi toàn bộ các store truyền vào theo đúng thứ tự phụ thuộc


    function contribute(_x5, _x6) {
      return _contribute.apply(this, arguments);
    } // ─── LOG HELPER ───────────────────────
    // Ghi một dòng log vào Label UI


    function _contribute() {
      _contribute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(stepTime, logFunc) {
        var visited,
            results,
            _len,
            stores,
            _key,
            _i,
            _stores,
            store,
            finalLog,
            _args2 = arguments;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                visited = new Set(); // Đánh dấu store đã thực hiện

                results = []; // Lưu kết quả tên store theo thứ tự

                for (_len = _args2.length, stores = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                  stores[_key - 2] = _args2[_key];
                }

                _i = 0, _stores = stores;

              case 4:
                if (!(_i < _stores.length)) {
                  _context2.next = 11;
                  break;
                }

                store = _stores[_i];
                _context2.next = 8;
                return store.resolve(stepTime, visited, results, logFunc);

              case 8:
                _i++;
                _context2.next = 4;
                break;

              case 11:
                // Sau khi tất cả store xong, log kết quả cuối cùng
                finalLog = 'Hoàn tất: ' + results.join(' → ');
                cc.log(finalLog);
                logFunc(finalLog);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _contribute.apply(this, arguments);
    }

    var logToLabel = function logToLabel(msg) {
      _this.logLabel.string += msg + '\n';
    }; // ─── TẠO CÁC STORE & PHỤ THUỘC ───────


    var store1 = new Store('store_1');
    var store2 = new Store('store_2');
    var store3 = new Store('store_3');
    var store4 = new Store('store_4');
    var store5 = new Store('store_5'); // Thiết lập quan hệ phụ thuộc:
    // store1 -> store3 -> store2 -> store5 -> store4

    store1.wait(store3);
    store3.wait(store2);
    store2.wait(store5);
    store5.wait(store4); // ─── THỰC THI CHÍNH ───────────────────

    this.logLabel.string = ''; // Xóa nội dung label trước khi chạy

    contribute(3, logToLabel, store1, store2, store3, store4, store5); // Gọi contribute() với delay 3 giây giữa mỗi bước
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibG9nTGFiZWwiLCJMYWJlbCIsInN0YXJ0IiwiU3RvcmUiLCJuYW1lIiwiZGVwZW5kZW5jaWVzIiwid2FpdCIsInN0b3JlIiwicHVzaCIsInJlc29sdmUiLCJzdGVwVGltZSIsInZpc2l0ZWQiLCJyZXN1bHRzIiwibG9nRnVuYyIsIlNldCIsImhhcyIsImFkZCIsImRlcCIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwibG9nIiwiY29udHJpYnV0ZSIsInN0b3JlcyIsImZpbmFsTG9nIiwiam9pbiIsImxvZ1RvTGFiZWwiLCJtc2ciLCJzdHJpbmciLCJzdG9yZTEiLCJzdG9yZTIiLCJzdG9yZTMiLCJzdG9yZTQiLCJzdG9yZTUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7Ozs7Ozs7QUFEQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNQLFdBQVNELEVBQUUsQ0FBQ0UsU0FETDtFQUdQQyxVQUFVLEVBQUU7SUFDVkMsUUFBUSxFQUFFSixFQUFFLENBQUNLLEtBREgsQ0FDVTs7RUFEVixDQUhMO0VBT1BDLEtBUE8sbUJBT0M7SUFBQTs7SUFDTjtJQUNBO0lBRk0sSUFHQUMsS0FIQTtNQUlKLGVBQVlDLElBQVosRUFBa0I7UUFDaEIsS0FBS0EsSUFBTCxHQUFZQSxJQUFaLENBRGdCLENBQ0U7O1FBQ2xCLEtBQUtDLFlBQUwsR0FBb0IsRUFBcEIsQ0FGZ0IsQ0FFUTtNQUN6QixDQVBHLENBU0o7OztNQVRJOztNQUFBLE9BVUpDLElBVkksR0FVSixjQUFLQyxLQUFMLEVBQVk7UUFDVixLQUFLRixZQUFMLENBQWtCRyxJQUFsQixDQUF1QkQsS0FBdkI7TUFDRCxDQVpHLENBY0o7TUFkSTs7TUFBQSxPQWVFRSxPQWZGO01BQUE7TUFBQTtRQUFBLDBFQWVKLGlCQUFjQyxRQUFkLEVBQXdCQyxPQUF4QixFQUE2Q0MsT0FBN0MsRUFBMkRDLE9BQTNEO1VBQUE7O1VBQUE7WUFBQTtjQUFBO2dCQUFBO2tCQUFBLElBQXdCRixPQUF4QjtvQkFBd0JBLE9BQXhCLEdBQWtDLElBQUlHLEdBQUosRUFBbEM7a0JBQUE7O2tCQUFBLElBQTZDRixPQUE3QztvQkFBNkNBLE9BQTdDLEdBQXVELEVBQXZEO2tCQUFBOztrQkFBQSxLQUNNRCxPQUFPLENBQUNJLEdBQVIsQ0FBWSxJQUFaLENBRE47b0JBQUE7b0JBQUE7a0JBQUE7O2tCQUFBOztnQkFBQTtrQkFDaUM7a0JBRS9CSixPQUFPLENBQUNLLEdBQVIsQ0FBWSxJQUFaLEVBSEYsQ0FHcUI7a0JBRW5COztrQkFMRiw0Q0FNb0IsS0FBS1gsWUFOekI7O2dCQUFBO2tCQUFBO29CQUFBO29CQUFBO2tCQUFBOztrQkFNYVksR0FOYjtrQkFBQTtrQkFBQSxPQU9VQSxHQUFHLENBQUNSLE9BQUosQ0FBWUMsUUFBWixFQUFzQkMsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDQyxPQUF4QyxDQVBWOztnQkFBQTtrQkFBQTtrQkFBQTs7Z0JBQUE7a0JBQUE7a0JBQUEsT0FXUSxJQUFJSyxPQUFKLENBQVksVUFBQVQsT0FBTztvQkFBQSxPQUFJVSxVQUFVLENBQUNWLE9BQUQsRUFBVUMsUUFBUSxHQUFHLElBQXJCLENBQWQ7a0JBQUEsQ0FBbkIsQ0FYUjs7Z0JBQUE7a0JBYUVkLEVBQUUsQ0FBQ3dCLEdBQUgsQ0FBTyxLQUFLaEIsSUFBWixFQWJGLENBYXFCOztrQkFDbkJTLE9BQU8sQ0FBQyxLQUFLVCxJQUFOLENBQVAsQ0FkRixDQWNzQjs7a0JBQ3BCUSxPQUFPLENBQUNKLElBQVIsQ0FBYSxLQUFLSixJQUFsQixFQWZGLENBZTJCOztnQkFmM0I7Z0JBQUE7a0JBQUE7Y0FBQTtZQUFBO1VBQUE7UUFBQSxDQWZJOztRQUFBO1VBQUE7UUFBQTs7UUFBQTtNQUFBOztNQUFBO0lBQUEsS0FrQ047SUFDQTs7O0lBbkNNLFNBb0NTaUIsVUFwQ1Q7TUFBQTtJQUFBLEVBa0ROO0lBQ0E7OztJQW5ETTtNQUFBLHlFQW9DTixrQkFBMEJYLFFBQTFCLEVBQW9DRyxPQUFwQztRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBOztRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNRRixPQURSLEdBQ2tCLElBQUlHLEdBQUosRUFEbEIsRUFDNkI7O2dCQUNyQkYsT0FGUixHQUVrQixFQUZsQixFQUVzQjs7Z0JBRnRCLDJCQUFnRFUsTUFBaEQ7a0JBQWdEQSxNQUFoRDtnQkFBQTs7Z0JBQUEsa0JBSXNCQSxNQUp0Qjs7Y0FBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTs7Z0JBSWFmLEtBSmI7Z0JBQUE7Z0JBQUEsT0FLVUEsS0FBSyxDQUFDRSxPQUFOLENBQWNDLFFBQWQsRUFBd0JDLE9BQXhCLEVBQWlDQyxPQUFqQyxFQUEwQ0MsT0FBMUMsQ0FMVjs7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQTs7Y0FBQTtnQkFRRTtnQkFDTVUsUUFUUixHQVNtQixlQUFlWCxPQUFPLENBQUNZLElBQVIsQ0FBYSxLQUFiLENBVGxDO2dCQVVFNUIsRUFBRSxDQUFDd0IsR0FBSCxDQUFPRyxRQUFQO2dCQUNBVixPQUFPLENBQUNVLFFBQUQsQ0FBUDs7Y0FYRjtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUEsQ0FwQ007TUFBQTtJQUFBOztJQW9ETixJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQVM7TUFDMUIsS0FBSSxDQUFDMUIsUUFBTCxDQUFjMkIsTUFBZCxJQUF3QkQsR0FBRyxHQUFHLElBQTlCO0lBQ0QsQ0FGRCxDQXBETSxDQXdETjs7O0lBQ0EsSUFBTUUsTUFBTSxHQUFHLElBQUl6QixLQUFKLENBQVUsU0FBVixDQUFmO0lBQ0EsSUFBTTBCLE1BQU0sR0FBRyxJQUFJMUIsS0FBSixDQUFVLFNBQVYsQ0FBZjtJQUNBLElBQU0yQixNQUFNLEdBQUcsSUFBSTNCLEtBQUosQ0FBVSxTQUFWLENBQWY7SUFDQSxJQUFNNEIsTUFBTSxHQUFHLElBQUk1QixLQUFKLENBQVUsU0FBVixDQUFmO0lBQ0EsSUFBTTZCLE1BQU0sR0FBRyxJQUFJN0IsS0FBSixDQUFVLFNBQVYsQ0FBZixDQTdETSxDQStETjtJQUNBOztJQUNBeUIsTUFBTSxDQUFDdEIsSUFBUCxDQUFZd0IsTUFBWjtJQUNBQSxNQUFNLENBQUN4QixJQUFQLENBQVl1QixNQUFaO0lBQ0FBLE1BQU0sQ0FBQ3ZCLElBQVAsQ0FBWTBCLE1BQVo7SUFDQUEsTUFBTSxDQUFDMUIsSUFBUCxDQUFZeUIsTUFBWixFQXBFTSxDQXNFTjs7SUFDQSxLQUFLL0IsUUFBTCxDQUFjMkIsTUFBZCxHQUF1QixFQUF2QixDQXZFTSxDQXVFcUI7O0lBQzNCTixVQUFVLENBQUMsQ0FBRCxFQUFJSSxVQUFKLEVBQWdCRyxNQUFoQixFQUF3QkMsTUFBeEIsRUFBZ0NDLE1BQWhDLEVBQXdDQyxNQUF4QyxFQUFnREMsTUFBaEQsQ0FBVixDQXhFTSxDQXlFTjtFQUNEO0FBakZNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vbWEgb2kgYmFpIG5heSBraG9uZyBoaWV1IGdpIGhldFxuXG5jYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbG9nTGFiZWw6IGNjLkxhYmVsLCAvLyBHw6FuIG5vZGUgTGFiZWwgdOG7qyBJbnNwZWN0b3IgxJHhu4MgaW4ga+G6v3QgcXXhuqMgbG9nXG4gIH0sXG5cbiAgc3RhcnQoKSB7XG4gICAgLy8g4pSA4pSA4pSAIENMQVNTIFNUT1JFIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIC8vIE3hu5dpIFN0b3JlIGzDoCBt4buZdCBcImPDtG5nIMSRb+G6oW5cIiBjw7MgdGjhu4MgcGjhu6UgdGh14buZYyB2w6BvIGPDtG5nIMSRb+G6oW4ga2jDoWNcbiAgICBjbGFzcyBTdG9yZSB7XG4gICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7IC8vIFTDqm4gY+G7p2EgU3RvcmVcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTsgLy8gRGFuaCBzw6FjaCBjw6FjIFN0b3JlIG3DoCBTdG9yZSBuw6B5IHBo4bulIHRodeG7mWNcbiAgICAgIH1cblxuICAgICAgLy8gVGjDqm0gbeG7mXQgc3RvcmUgcGjhu6UgdGh14buZYyB2w6BvIGRhbmggc8OhY2hcbiAgICAgIHdhaXQoc3RvcmUpIHtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMucHVzaChzdG9yZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEdp4bqjaSBxdXnhur90IHN0b3JlIHRoZW8gdGjhu6kgdOG7sSBwaOG7pSB0aHXhu5ljICjEkeG7hyBxdXkpXG4gICAgICBhc3luYyByZXNvbHZlKHN0ZXBUaW1lLCB2aXNpdGVkID0gbmV3IFNldCgpLCByZXN1bHRzID0gW10sIGxvZ0Z1bmMpIHtcbiAgICAgICAgaWYgKHZpc2l0ZWQuaGFzKHRoaXMpKSByZXR1cm47IC8vIE7hur91IMSRw6MgeOG7rSBsw70gcuG7k2kgdGjDrCBi4buPIHF1YSAodHLDoW5oIGzhurdwIHbDtCBo4bqhbilcblxuICAgICAgICB2aXNpdGVkLmFkZCh0aGlzKTsgLy8gxJDDoW5oIGThuqV1IGzDoCDEkcOjIHjhu60gbMO9XG5cbiAgICAgICAgLy8gR2nhuqNpIHF1eeG6v3QgY8OhYyBwaOG7pSB0aHXhu5ljIHRyxrDhu5tjXG4gICAgICAgIGZvciAoY29uc3QgZGVwIG9mIHRoaXMuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICAgYXdhaXQgZGVwLnJlc29sdmUoc3RlcFRpbWUsIHZpc2l0ZWQsIHJlc3VsdHMsIGxvZ0Z1bmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gxJDhu6NpIHN0ZXBUaW1lIGdpw6J5IHRyxrDhu5tjIGtoaSB0aOG7sWMgaGnhu4duIHN0b3JlIG7DoHlcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHN0ZXBUaW1lICogMTAwMCkpO1xuXG4gICAgICAgIGNjLmxvZyh0aGlzLm5hbWUpOyAvLyBJbiB0w6puIHN0b3JlIHJhIGNvbnNvbGVcbiAgICAgICAgbG9nRnVuYyh0aGlzLm5hbWUpOyAvLyBHaGkgbG9nIHbDoG8gTGFiZWwgVUlcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubmFtZSk7IC8vIEzGsHUgdMOqbiBzdG9yZSDEkcOjIGhvw6BuIHRow6BuaCB2w6BvIG3huqNuZyBr4bq/dCBxdeG6o1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOKUgOKUgOKUgCBGVU5DVElPTiBDT05UUklCVVRFIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIC8vIEjDoG0gY2jDrW5oIHRo4buxYyB0aGkgdG/DoG4gYuG7mSBjw6FjIHN0b3JlIHRydXnhu4FuIHbDoG8gdGhlbyDEkcO6bmcgdGjhu6kgdOG7sSBwaOG7pSB0aHXhu5ljXG4gICAgYXN5bmMgZnVuY3Rpb24gY29udHJpYnV0ZShzdGVwVGltZSwgbG9nRnVuYywgLi4uc3RvcmVzKSB7XG4gICAgICBjb25zdCB2aXNpdGVkID0gbmV3IFNldCgpOyAvLyDEkMOhbmggZOG6pXUgc3RvcmUgxJHDoyB0aOG7sWMgaGnhu4duXG4gICAgICBjb25zdCByZXN1bHRzID0gW107IC8vIEzGsHUga+G6v3QgcXXhuqMgdMOqbiBzdG9yZSB0aGVvIHRo4bupIHThu7FcblxuICAgICAgZm9yIChjb25zdCBzdG9yZSBvZiBzdG9yZXMpIHtcbiAgICAgICAgYXdhaXQgc3RvcmUucmVzb2x2ZShzdGVwVGltZSwgdmlzaXRlZCwgcmVzdWx0cywgbG9nRnVuYyk7IC8vIEdp4bqjaSBxdXnhur90IHThu6tuZyBzdG9yZVxuICAgICAgfVxuXG4gICAgICAvLyBTYXUga2hpIHThuqV0IGPhuqMgc3RvcmUgeG9uZywgbG9nIGvhur90IHF14bqjIGN14buRaSBjw7luZ1xuICAgICAgY29uc3QgZmluYWxMb2cgPSAnSG/DoG4gdOG6pXQ6ICcgKyByZXN1bHRzLmpvaW4oJyDihpIgJyk7XG4gICAgICBjYy5sb2coZmluYWxMb2cpO1xuICAgICAgbG9nRnVuYyhmaW5hbExvZyk7XG4gICAgfVxuXG4gICAgLy8g4pSA4pSA4pSAIExPRyBIRUxQRVIg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgLy8gR2hpIG3hu5l0IGTDsm5nIGxvZyB2w6BvIExhYmVsIFVJXG4gICAgY29uc3QgbG9nVG9MYWJlbCA9IChtc2cpID0+IHtcbiAgICAgIHRoaXMubG9nTGFiZWwuc3RyaW5nICs9IG1zZyArICdcXG4nO1xuICAgIH07XG5cbiAgICAvLyDilIDilIDilIAgVOG6oE8gQ8OBQyBTVE9SRSAmIFBI4bukIFRIVeG7mEMg4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgY29uc3Qgc3RvcmUxID0gbmV3IFN0b3JlKCdzdG9yZV8xJyk7XG4gICAgY29uc3Qgc3RvcmUyID0gbmV3IFN0b3JlKCdzdG9yZV8yJyk7XG4gICAgY29uc3Qgc3RvcmUzID0gbmV3IFN0b3JlKCdzdG9yZV8zJyk7XG4gICAgY29uc3Qgc3RvcmU0ID0gbmV3IFN0b3JlKCdzdG9yZV80Jyk7XG4gICAgY29uc3Qgc3RvcmU1ID0gbmV3IFN0b3JlKCdzdG9yZV81Jyk7XG5cbiAgICAvLyBUaGnhur90IGzhuq1wIHF1YW4gaOG7hyBwaOG7pSB0aHXhu5ljOlxuICAgIC8vIHN0b3JlMSAtPiBzdG9yZTMgLT4gc3RvcmUyIC0+IHN0b3JlNSAtPiBzdG9yZTRcbiAgICBzdG9yZTEud2FpdChzdG9yZTMpO1xuICAgIHN0b3JlMy53YWl0KHN0b3JlMik7XG4gICAgc3RvcmUyLndhaXQoc3RvcmU1KTtcbiAgICBzdG9yZTUud2FpdChzdG9yZTQpO1xuXG4gICAgLy8g4pSA4pSA4pSAIFRI4buwQyBUSEkgQ0jDjU5IIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIHRoaXMubG9nTGFiZWwuc3RyaW5nID0gJyc7IC8vIFjDs2EgbuG7mWkgZHVuZyBsYWJlbCB0csaw4bubYyBraGkgY2jhuqF5XG4gICAgY29udHJpYnV0ZSgzLCBsb2dUb0xhYmVsLCBzdG9yZTEsIHN0b3JlMiwgc3RvcmUzLCBzdG9yZTQsIHN0b3JlNSk7XG4gICAgLy8gR+G7jWkgY29udHJpYnV0ZSgpIHbhu5tpIGRlbGF5IDMgZ2nDonkgZ2nhu69hIG3hu5dpIGLGsOG7m2NcbiAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai9.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b485IfcTJMvYvohlEvMDD8', 'Bai9');
// Day7/Script/Bai9.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    outputLabel: cc.Label
  },
  start: function start() {
    this.testCircuitBreaker();
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
                method: 'HEAD'
              });

            case 3:
              response = _context.sent;
              dateHeader = response.headers.get('Date');

              if (dateHeader) {
                _context.next = 7;
                break;
              }

              throw new Error('No Date header');

            case 7:
              return _context.abrupt("return", new Date(dateHeader).getTime());

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", Date.now());

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }))();
  },
  circuitBreaker: function circuitBreaker(fn, timeThreshold) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var isOpen;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              isOpen = true;
              setTimeout(function () {
                isOpen = false;
              }, timeThreshold);
              return _context3.abrupt("return", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var _args2 = arguments;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!isOpen) {
                          _context2.next = 6;
                          break;
                        }

                        _context2.next = 3;
                        return fn.apply(void 0, _args2);

                      case 3:
                        return _context2.abrupt("return", _context2.sent);

                      case 6:
                        return _context2.abrupt("return", "service closed");

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })));

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  testCircuitBreaker: function testCircuitBreaker() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var getTimeLimited;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this.circuitBreaker(_this.getServerTime, 2000);

            case 2:
              getTimeLimited = _context6.sent;
              setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                var result1;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return getTimeLimited();

                      case 2:
                        result1 = _context4.sent;
                        cc.log(result1);
                        _this.outputLabel.string = 'KQ 1: ' + result1;

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })), 300);
              setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                var result2;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return getTimeLimited();

                      case 2:
                        result2 = _context5.sent;
                        cc.log(result2);
                        _this.outputLabel.string += '\nKQ 2: ' + result2;

                      case 5:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              })), 2100);

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib3V0cHV0TGFiZWwiLCJMYWJlbCIsInN0YXJ0IiwidGVzdENpcmN1aXRCcmVha2VyIiwiZ2V0U2VydmVyVGltZSIsImZldGNoIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9TdHJpbmciLCJtZXRob2QiLCJyZXNwb25zZSIsImRhdGVIZWFkZXIiLCJoZWFkZXJzIiwiZ2V0IiwiRXJyb3IiLCJEYXRlIiwiZ2V0VGltZSIsIm5vdyIsImNpcmN1aXRCcmVha2VyIiwiZm4iLCJ0aW1lVGhyZXNob2xkIiwiaXNPcGVuIiwic2V0VGltZW91dCIsImdldFRpbWVMaW1pdGVkIiwicmVzdWx0MSIsImxvZyIsInN0cmluZyIsInJlc3VsdDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1pDLFdBQVcsRUFBRUosRUFBRSxDQUFDSztFQURKLENBSFA7RUFPTEMsS0FQSyxtQkFPRztJQUNSLEtBQUtDLGtCQUFMO0VBQ0MsQ0FUSTtFQVdDQyxhQVhELDJCQVdpQjtJQUFBO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQSxPQUVLQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLFFBQXJCLEVBQUQsRUFBa0M7Z0JBQUVDLE1BQU0sRUFBRTtjQUFWLENBQWxDLENBRlY7O1lBQUE7Y0FFWkMsUUFGWTtjQUdaQyxVQUhZLEdBR0NELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckIsQ0FIRDs7Y0FBQSxJQUliRixVQUphO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUEsTUFJSyxJQUFJRyxLQUFKLENBQVUsZ0JBQVYsQ0FKTDs7WUFBQTtjQUFBLGlDQUtYLElBQUlDLElBQUosQ0FBU0osVUFBVCxFQUFxQkssT0FBckIsRUFMVzs7WUFBQTtjQUFBO2NBQUE7Y0FBQSxpQ0FPWEQsSUFBSSxDQUFDRSxHQUFMLEVBUFc7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFTckIsQ0FwQkk7RUFzQkNDLGNBdEJELDBCQXNCZ0JDLEVBdEJoQixFQXNCb0JDLGFBdEJwQixFQXNCbUM7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FDcENDLE1BRG9DLEdBQzNCLElBRDJCO2NBRXhDQyxVQUFVLENBQUMsWUFBTTtnQkFDYkQsTUFBTSxHQUFHLEtBQVQ7Y0FDSCxDQUZTLEVBRVBELGFBRk8sQ0FBVjtjQUZ3QywwR0FNakM7Z0JBQUE7Z0JBQUE7a0JBQUE7b0JBQUE7c0JBQUE7d0JBQUEsS0FDQ0MsTUFERDswQkFBQTswQkFBQTt3QkFBQTs7d0JBQUE7d0JBQUEsT0FFVUYsRUFBRSxNQUFGLGdCQUZWOztzQkFBQTt3QkFBQTs7c0JBQUE7d0JBQUEsa0NBSUksZ0JBSko7O3NCQUFBO3NCQUFBO3dCQUFBO29CQUFBO2tCQUFBO2dCQUFBO2NBQUEsQ0FOaUM7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFhdkMsQ0FuQ0k7RUFxQ0NqQixrQkFyQ0QsZ0NBcUNzQjtJQUFBOztJQUFBO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUEsT0FDRSxLQUFJLENBQUNnQixjQUFMLENBQW9CLEtBQUksQ0FBQ2YsYUFBekIsRUFBd0MsSUFBeEMsQ0FERjs7WUFBQTtjQUNyQm9CLGNBRHFCO2NBRzNCRCxVQUFVLDBFQUFDO2dCQUFBO2dCQUFBO2tCQUFBO29CQUFBO3NCQUFBO3dCQUFBO3dCQUFBLE9BQ2VDLGNBQWMsRUFEN0I7O3NCQUFBO3dCQUNEQyxPQURDO3dCQUVQN0IsRUFBRSxDQUFDOEIsR0FBSCxDQUFPRCxPQUFQO3dCQUNBLEtBQUksQ0FBQ3pCLFdBQUwsQ0FBaUIyQixNQUFqQixHQUEwQixXQUFXRixPQUFyQzs7c0JBSE87c0JBQUE7d0JBQUE7b0JBQUE7a0JBQUE7Z0JBQUE7Y0FBQSxDQUFELElBSVAsR0FKTyxDQUFWO2NBTUFGLFVBQVUsMEVBQUM7Z0JBQUE7Z0JBQUE7a0JBQUE7b0JBQUE7c0JBQUE7d0JBQUE7d0JBQUEsT0FDZUMsY0FBYyxFQUQ3Qjs7c0JBQUE7d0JBQ0RJLE9BREM7d0JBRVBoQyxFQUFFLENBQUM4QixHQUFILENBQU9FLE9BQVA7d0JBQ0EsS0FBSSxDQUFDNUIsV0FBTCxDQUFpQjJCLE1BQWpCLElBQTJCLGFBQWFDLE9BQXhDOztzQkFITztzQkFBQTt3QkFBQTtvQkFBQTtrQkFBQTtnQkFBQTtjQUFBLENBQUQsSUFJUCxJQUpPLENBQVY7O1lBVDJCO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBO0VBYzFCO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgb3V0cHV0TGFiZWw6IGNjLkxhYmVsLFxuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcbiAgICB0aGlzLnRlc3RDaXJjdWl0QnJlYWtlcigpO1xuICAgIH0sXG5cbiAgICBhc3luYyBnZXRTZXJ2ZXJUaW1lKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2luZG93LmxvY2F0aW9uLmhyZWYudG9TdHJpbmcoKSwgeyBtZXRob2Q6ICdIRUFEJyB9KTtcbiAgICAgICAgY29uc3QgZGF0ZUhlYWRlciA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdEYXRlJyk7XG4gICAgICAgIGlmICghZGF0ZUhlYWRlcikgdGhyb3cgbmV3IEVycm9yKCdObyBEYXRlIGhlYWRlcicpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZUhlYWRlcikuZ2V0VGltZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7IC8vIGZhbGxiYWNrXG4gICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBjaXJjdWl0QnJlYWtlcihmbiwgdGltZVRocmVzaG9sZCkge1xuICAgIGxldCBpc09wZW4gPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpc09wZW4gPSBmYWxzZTtcbiAgICB9LCB0aW1lVGhyZXNob2xkKTtcblxuICAgIHJldHVybiBhc3luYyAoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBmbiguLi5hcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwic2VydmljZSBjbG9zZWRcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgfSxcblxuICAgIGFzeW5jIHRlc3RDaXJjdWl0QnJlYWtlcigpIHtcbiAgICBjb25zdCBnZXRUaW1lTGltaXRlZCA9IGF3YWl0IHRoaXMuY2lyY3VpdEJyZWFrZXIodGhpcy5nZXRTZXJ2ZXJUaW1lLCAyMDAwKTtcblxuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQxID0gYXdhaXQgZ2V0VGltZUxpbWl0ZWQoKTtcbiAgICAgICAgY2MubG9nKHJlc3VsdDEpO1xuICAgICAgICB0aGlzLm91dHB1dExhYmVsLnN0cmluZyA9ICdLUSAxOiAnICsgcmVzdWx0MTtcbiAgICB9LCAzMDApO1xuXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDIgPSBhd2FpdCBnZXRUaW1lTGltaXRlZCgpO1xuICAgICAgICBjYy5sb2cocmVzdWx0Mik7XG4gICAgICAgIHRoaXMub3V0cHV0TGFiZWwuc3RyaW5nICs9ICdcXG5LUSAyOiAnICsgcmVzdWx0MjtcbiAgICB9LCAyMTAwKTtcbiAgICB9XG5cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46eaahVhyJMIIrJ/Nhyww6N', 'Bai3');
// Day7/Script/Bai3.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    displaySprite: cc.Sprite // Sprite để hiển thị ảnh

  },
  start: function start() {
    this.imageUrls = ['https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4', 'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ', 'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g'];
    this.downloadImagesSequentially(this.imageUrls);
  },
  downloadImagesSequentially: function downloadImagesSequentially(urls) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var i, texture;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < urls.length)) {
                _context.next = 19;
                break;
              }

              _context.prev = 2;
              cc.log("\u0110ang t\u1EA3i \u1EA3nh " + (i + 1) + "/" + urls.length); //ghi log anh thu may/ tong? dc tai?

              _context.next = 6;
              return _this.downloadImage(urls[i]);

            case 6:
              texture = _context.sent;
              // goi ham dowloadImage o duoi de tai anh
              _this.displaySprite.spriteFrame = new cc.SpriteFrame(texture); // gan vo spriteframe de tai hinh

              cc.log("\u0110\xE3 hi\u1EC3n th\u1ECB \u1EA3nh " + (i + 1));
              _context.next = 11;
              return _this.delay(2000);

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              cc.error("L\u1ED7i khi t\u1EA3i \u1EA3nh " + (i + 1) + ":", _context.t0);

            case 16:
              i++;
              _context.next = 1;
              break;

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13]]);
    }))();
  },
  downloadImage: function downloadImage(url) {
    return new Promise(function (resolve, reject) {
      cc.loader.load({
        url: url,
        type: 'jpg'
      }, function (err, texture) {
        if (err) {
          reject(err); // that bai
        } else {
          resolve(texture); // tra ve textture neu thanh cong
        }
      });
    });
  },
  delay: function delay(ms) {
    // delay bang promise
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWkzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGlzcGxheVNwcml0ZSIsIlNwcml0ZSIsInN0YXJ0IiwiaW1hZ2VVcmxzIiwiZG93bmxvYWRJbWFnZXNTZXF1ZW50aWFsbHkiLCJ1cmxzIiwiaSIsImxlbmd0aCIsImxvZyIsImRvd25sb2FkSW1hZ2UiLCJ0ZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsImRlbGF5IiwiZXJyb3IiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWRlciIsImxvYWQiLCJ0eXBlIiwiZXJyIiwibXMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ1AsV0FBU0QsRUFBRSxDQUFDRSxTQURMO0VBR1BDLFVBQVUsRUFBRTtJQUNWQyxhQUFhLEVBQUVKLEVBQUUsQ0FBQ0ssTUFEUixDQUNnQjs7RUFEaEIsQ0FITDtFQU9QQyxLQVBPLG1CQU9DO0lBQ04sS0FBS0MsU0FBTCxHQUFpQixDQUNmLGtHQURlLEVBRWYsa0dBRmUsRUFHZixrR0FIZSxFQUlmLGtHQUplLENBQWpCO0lBT0EsS0FBS0MsMEJBQUwsQ0FBZ0MsS0FBS0QsU0FBckM7RUFDRCxDQWhCTTtFQWtCREMsMEJBbEJDLHNDQWtCMEJDLElBbEIxQixFQWtCZ0M7SUFBQTs7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FDNUJDLENBRDRCLEdBQ3hCLENBRHdCOztZQUFBO2NBQUEsTUFDckJBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxNQURZO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUE7Y0FHakNYLEVBQUUsQ0FBQ1ksR0FBSCxtQ0FBdUJGLENBQUMsR0FBRyxDQUEzQixVQUFnQ0QsSUFBSSxDQUFDRSxNQUFyQyxFQUhpQyxDQUdlOztjQUhmO2NBQUEsT0FJWCxLQUFJLENBQUNFLGFBQUwsQ0FBbUJKLElBQUksQ0FBQ0MsQ0FBRCxDQUF2QixDQUpXOztZQUFBO2NBSTNCSSxPQUoyQjtjQUlrQjtjQUNuRCxLQUFJLENBQUNWLGFBQUwsQ0FBbUJXLFdBQW5CLEdBQWlDLElBQUlmLEVBQUUsQ0FBQ2dCLFdBQVAsQ0FBbUJGLE9BQW5CLENBQWpDLENBTGlDLENBSzZCOztjQUM5RGQsRUFBRSxDQUFDWSxHQUFILDhDQUEwQkYsQ0FBQyxHQUFHLENBQTlCO2NBTmlDO2NBQUEsT0FPM0IsS0FBSSxDQUFDTyxLQUFMLENBQVcsSUFBWCxDQVAyQjs7WUFBQTtjQUFBO2NBQUE7O1lBQUE7Y0FBQTtjQUFBO2NBU2pDakIsRUFBRSxDQUFDa0IsS0FBSCxzQ0FBNEJSLENBQUMsR0FBRyxDQUFoQzs7WUFUaUM7Y0FDSkEsQ0FBQyxFQURHO2NBQUE7Y0FBQTs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQTtFQVl0QyxDQTlCTTtFQWdDUEcsYUFoQ08seUJBZ0NPTSxHQWhDUCxFQWdDWTtJQUNqQixPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7TUFDdEN0QixFQUFFLENBQUN1QixNQUFILENBQVVDLElBQVYsQ0FBZTtRQUFFTCxHQUFHLEVBQUVBLEdBQVA7UUFBWU0sSUFBSSxFQUFFO01BQWxCLENBQWYsRUFBMEMsVUFBQ0MsR0FBRCxFQUFNWixPQUFOLEVBQWtCO1FBQzFELElBQUlZLEdBQUosRUFBUztVQUNQSixNQUFNLENBQUNJLEdBQUQsQ0FBTixDQURPLENBQ007UUFDZCxDQUZELE1BRU87VUFDTEwsT0FBTyxDQUFDUCxPQUFELENBQVAsQ0FESyxDQUNhO1FBQ25CO01BQ0YsQ0FORDtJQU9ELENBUk0sQ0FBUDtFQVNELENBMUNNO0VBNENQRyxLQTVDTyxpQkE0Q0RVLEVBNUNDLEVBNENHO0lBQUM7SUFDVCxPQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFBQyxPQUFPO01BQUEsT0FBSU8sVUFBVSxDQUFDUCxPQUFELEVBQVVNLEVBQVYsQ0FBZDtJQUFBLENBQW5CLENBQVA7RUFDRDtBQTlDTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgZGlzcGxheVNwcml0ZTogY2MuU3ByaXRlLCAvLyBTcHJpdGUgxJHhu4MgaGnhu4NuIHRo4buLIOG6o25oXG4gIH0sXG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5pbWFnZVVybHMgPSBbXG4gICAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8wLzUwMDAvMzMzMy5qcGc/aG1hYz1fajZnaFk1ZkNmU0Q2dHZ0Y1Y3NHpYaXZrSlNQSWZSOUI4dzM0WGVRbXZVJyxcbiAgICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzEvNTAwMC8zMzMzLmpwZz9obWFjPUFzdjJEVTNyQV81RDF4U2UyMnhaSzQ3V0VBTjB3aldlRk9oemQxM3VqVzQnLFxuICAgICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMi81MDAwLzMzMzMuanBnP2htYWM9X0tEa3FRVnR0WHdfbk0tUnlKZkxJbUliYWZGcnFMc3VHTzVZdUhxRC1xUScsXG4gICAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8zLzUwMDAvMzMzMy5qcGc/aG1hYz1HRGpaMnVOV0UzVjU5UGtkRGFPelRPdVYzdFBXV3hKU2Y0Zk5jeHU0UzJnJyxcbiAgICBdO1xuXG4gICAgdGhpcy5kb3dubG9hZEltYWdlc1NlcXVlbnRpYWxseSh0aGlzLmltYWdlVXJscyk7XG4gIH0sXG5cbiAgYXN5bmMgZG93bmxvYWRJbWFnZXNTZXF1ZW50aWFsbHkodXJscykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJscy5sZW5ndGg7IGkrKykgeyAvLyB2b25nIGxhcCBjaGF5IHF1YSB0dW5nIFVSTCB0cm9uZyBtYW5nXG4gICAgICB0cnkge1xuICAgICAgICBjYy5sb2coYMSQYW5nIHThuqNpIOG6o25oICR7aSArIDF9LyR7dXJscy5sZW5ndGh9YCk7IC8vZ2hpIGxvZyBhbmggdGh1IG1heS8gdG9uZz8gZGMgdGFpP1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gYXdhaXQgdGhpcy5kb3dubG9hZEltYWdlKHVybHNbaV0pOyAvLyBnb2kgaGFtIGRvd2xvYWRJbWFnZSBvIGR1b2kgZGUgdGFpIGFuaFxuICAgICAgICB0aGlzLmRpc3BsYXlTcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7IC8vIGdhbiB2byBzcHJpdGVmcmFtZSBkZSB0YWkgaGluaFxuICAgICAgICBjYy5sb2coYMSQw6MgaGnhu4NuIHRo4buLIOG6o25oICR7aSArIDF9YCk7XG4gICAgICAgIGF3YWl0IHRoaXMuZGVsYXkoMjAwMCk7IC8vIERlbGF5IDIgZ2nDonkgbW9pIHRhaSBhbmggdGllcCB0aGVvXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjYy5lcnJvcihgTOG7l2kga2hpIHThuqNpIOG6o25oICR7aSArIDF9OmAsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZG93bmxvYWRJbWFnZSh1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHVybCwgdHlwZTogJ2pwZycgfSwgKGVyciwgdGV4dHVyZSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7IC8vIHRoYXQgYmFpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh0ZXh0dXJlKTsgLy8gdHJhIHZlIHRleHR0dXJlIG5ldSB0aGFuaCBjb25nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGRlbGF5KG1zKSB7Ly8gZGVsYXkgYmFuZyBwcm9taXNlXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '304f1H+qG9Erbnagqg6LNUR', 'Bai8');
// Day7/Script/Bai8.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    timeLabel: cc.Label
  },
  start: function start() {
    var _this = this;

    // Hàm thường
    function getLocalTime() {
      return new Date().getTime();
    } // Hàm async


    function getServerTime() {
      return _getServerTime.apply(this, arguments);
    } // Hàm promisify


    function _getServerTime() {
      _getServerTime = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response, dateHeader;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch(window.location.href.toString(), {
                  method: 'HEAD',
                  headers: {
                    'Content-Type': 'text/html'
                  }
                });

              case 3:
                response = _context2.sent;
                dateHeader = response.headers.get("Date");

                if (dateHeader) {
                  _context2.next = 7;
                  break;
                }

                throw new Error("Không có Date header");

              case 7:
                return _context2.abrupt("return", new Date(dateHeader).getTime());

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                cc.error("Lỗi getServerTime:", _context2.t0);
                return _context2.abrupt("return", Date.now());

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }));
      return _getServerTime.apply(this, arguments);
    }

    function promisify(fn) {
      return function () {
        try {
          var result = fn.apply(void 0, arguments);
          return result instanceof Promise ? result : Promise.resolve(result);
        } catch (err) {
          return Promise.reject(err);
        }
      };
    } // Chạy thử


    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var localTime, serverTime, latency, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return promisify(getLocalTime)();

            case 2:
              localTime = _context.sent;
              _context.next = 5;
              return promisify(getServerTime)();

            case 5:
              serverTime = _context.sent;
              latency = serverTime - localTime;
              result = "Local Time: " + localTime + "\nServer Time: " + serverTime + "\n\u0110\u1ED9 tr\u1EC5: " + latency + "ms";
              cc.log(result);
              _this.timeLabel.string = result;

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk4LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGltZUxhYmVsIiwiTGFiZWwiLCJzdGFydCIsImdldExvY2FsVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiZ2V0U2VydmVyVGltZSIsImZldGNoIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9TdHJpbmciLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJkYXRlSGVhZGVyIiwiZ2V0IiwiRXJyb3IiLCJlcnJvciIsIm5vdyIsInByb21pc2lmeSIsImZuIiwicmVzdWx0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJlcnIiLCJyZWplY3QiLCJsb2NhbFRpbWUiLCJzZXJ2ZXJUaW1lIiwibGF0ZW5jeSIsImxvZyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7Ozs7OztBQURBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNQLFdBQVNELEVBQUUsQ0FBQ0UsU0FETDtFQUdQQyxVQUFVLEVBQUU7SUFDVkMsU0FBUyxFQUFFSixFQUFFLENBQUNLO0VBREosQ0FITDtFQU9QQyxLQVBPLG1CQU9DO0lBQUE7O0lBQ047SUFDQSxTQUFTQyxZQUFULEdBQXdCO01BQ3RCLE9BQU8sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVA7SUFDRCxDQUpLLENBTU47OztJQU5NLFNBT1NDLGFBUFQ7TUFBQTtJQUFBLEVBeUJOOzs7SUF6Qk07TUFBQSw0RUFPTjtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFMkJDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsUUFBckIsRUFBRCxFQUFrQztrQkFDNURDLE1BQU0sRUFBRSxNQURvRDtrQkFFNURDLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7a0JBRFQ7Z0JBRm1ELENBQWxDLENBRmhDOztjQUFBO2dCQUVVQyxRQUZWO2dCQVNVQyxVQVRWLEdBU3VCRCxRQUFRLENBQUNELE9BQVQsQ0FBaUJHLEdBQWpCLENBQXFCLE1BQXJCLENBVHZCOztnQkFBQSxJQVVTRCxVQVZUO2tCQUFBO2tCQUFBO2dCQUFBOztnQkFBQSxNQVUyQixJQUFJRSxLQUFKLENBQVUsc0JBQVYsQ0FWM0I7O2NBQUE7Z0JBQUEsa0NBV1csSUFBSWIsSUFBSixDQUFTVyxVQUFULEVBQXFCVixPQUFyQixFQVhYOztjQUFBO2dCQUFBO2dCQUFBO2dCQWFJVCxFQUFFLENBQUNzQixLQUFILENBQVMsb0JBQVQ7Z0JBYkosa0NBY1dkLElBQUksQ0FBQ2UsR0FBTCxFQWRYOztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDQVBNO01BQUE7SUFBQTs7SUEwQk4sU0FBU0MsU0FBVCxDQUFtQkMsRUFBbkIsRUFBdUI7TUFDckIsT0FBTyxZQUFtQjtRQUN4QixJQUFJO1VBQ0YsSUFBTUMsTUFBTSxHQUFHRCxFQUFFLE1BQUYsbUJBQWY7VUFDQSxPQUFPQyxNQUFNLFlBQVlDLE9BQWxCLEdBQTRCRCxNQUE1QixHQUFxQ0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCRixNQUFoQixDQUE1QztRQUNELENBSEQsQ0FHRSxPQUFPRyxHQUFQLEVBQVk7VUFDWixPQUFPRixPQUFPLENBQUNHLE1BQVIsQ0FBZUQsR0FBZixDQUFQO1FBQ0Q7TUFDRixDQVBEO0lBUUQsQ0FuQ0ssQ0FxQ047OztJQUNBLDJEQUFDO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUEsT0FDeUJMLFNBQVMsQ0FBQ2pCLFlBQUQsQ0FBVCxFQUR6Qjs7WUFBQTtjQUNPd0IsU0FEUDtjQUFBO2NBQUEsT0FFMEJQLFNBQVMsQ0FBQ2QsYUFBRCxDQUFULEVBRjFCOztZQUFBO2NBRU9zQixVQUZQO2NBR09DLE9BSFAsR0FHaUJELFVBQVUsR0FBR0QsU0FIOUI7Y0FLT0wsTUFMUCxvQkFLK0JLLFNBTC9CLHVCQUswREMsVUFMMUQsaUNBS2lGQyxPQUxqRjtjQU1DakMsRUFBRSxDQUFDa0MsR0FBSCxDQUFPUixNQUFQO2NBQ0EsS0FBSSxDQUFDdEIsU0FBTCxDQUFlK0IsTUFBZixHQUF3QlQsTUFBeEI7O1lBUEQ7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBRDtFQVNEO0FBdERNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0aW1lTGFiZWw6IGNjLkxhYmVsLFxuICB9LFxuXG4gIHN0YXJ0KCkge1xuICAgIC8vIEjDoG0gdGjGsOG7nW5nXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxUaW1lKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIC8vIEjDoG0gYXN5bmNcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJUaW1lKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3aW5kb3cubG9jYXRpb24uaHJlZi50b1N0cmluZygpLCB7XG4gICAgICAgICAgbWV0aG9kOiAnSEVBRCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRlSGVhZGVyID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJEYXRlXCIpO1xuICAgICAgICBpZiAoIWRhdGVIZWFkZXIpIHRocm93IG5ldyBFcnJvcihcIktow7RuZyBjw7MgRGF0ZSBoZWFkZXJcIik7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlSGVhZGVyKS5nZXRUaW1lKCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY2MuZXJyb3IoXCJM4buXaSBnZXRTZXJ2ZXJUaW1lOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTsgLy8gZmFsbGJhY2tcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIw6BtIHByb21pc2lmeVxuICAgIGZ1bmN0aW9uIHByb21pc2lmeShmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UgPyByZXN1bHQgOiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ2jhuqF5IHRo4butXG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGxvY2FsVGltZSA9IGF3YWl0IHByb21pc2lmeShnZXRMb2NhbFRpbWUpKCk7XG4gICAgICBjb25zdCBzZXJ2ZXJUaW1lID0gYXdhaXQgcHJvbWlzaWZ5KGdldFNlcnZlclRpbWUpKCk7XG4gICAgICBjb25zdCBsYXRlbmN5ID0gc2VydmVyVGltZSAtIGxvY2FsVGltZTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYExvY2FsIFRpbWU6ICR7bG9jYWxUaW1lfVxcblNlcnZlciBUaW1lOiAke3NlcnZlclRpbWV9XFxuxJDhu5kgdHLhu4U6ICR7bGF0ZW5jeX1tc2A7XG4gICAgICBjYy5sb2cocmVzdWx0KTtcbiAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IHJlc3VsdDtcbiAgICB9KSgpO1xuICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa987CDUExBRrpdRYM7EKy2', 'Bai2');
// Day7/Script/Bai2.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    timeLabel: cc.Label
  },
  start: function start() {
    this.fetchWithAutoRetry(this.simulateAPICall, 3); // Gọi hàm retry với 3 lần thử lại
  },
  // Hàm thực hiện API Call giả lập
  simulateAPICall: function simulateAPICall() {
    return new Promise(function (resolve, reject) {
      // Giả lập 50% khả năng thất bại
      if (Math.random() < 0.5) {
        reject(new Error('API call failed'));
      } else {
        resolve('API call succeeded');
      }
    });
  },
  // Hàm retry request
  fetchWithAutoRetry: function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempt, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (maximumRetryCount === void 0) {
                maximumRetryCount = 5;
              }

              // truyen so lan retry mac dinh la 5, no se chay 5 neu o tren ngta quen truyen vao
              attempt = 0;

            case 2:
              if (!(attempt < maximumRetryCount)) {
                _context.next = 25;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return fetcher();

            case 6:
              result = _context.sent;
              // Thực hiện gọi API
              cc.log('Success:', result); // Log thành công

              _this.timeLabel.string = result; // Hiển thị kết quả lên label

              return _context.abrupt("return", result);

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              attempt++; // Tăng số lần thử lại

              cc.log("Attempt " + attempt + " failed:", _context.t0.message); // Log lỗi

              if (!(attempt >= maximumRetryCount)) {
                _context.next = 20;
                break;
              }

              cc.log('All retries failed'); // Khi vượt quá số lần thử lại

              _this.timeLabel.string = 'All retries failed'; // Hiển thị thông báo lên label

              throw new Error('All retries failed');

            case 20:
              cc.log("Retrying... (" + attempt + "/" + maximumRetryCount + ")"); // Log retry
              // Delay giữa các lần thử lại

              _context.next = 23;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 1000);
              });

            case 23:
              _context.next = 2;
              break;

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 12]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWkyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGltZUxhYmVsIiwiTGFiZWwiLCJzdGFydCIsImZldGNoV2l0aEF1dG9SZXRyeSIsInNpbXVsYXRlQVBJQ2FsbCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiTWF0aCIsInJhbmRvbSIsIkVycm9yIiwiZmV0Y2hlciIsIm1heGltdW1SZXRyeUNvdW50IiwiYXR0ZW1wdCIsInJlc3VsdCIsImxvZyIsInN0cmluZyIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ1AsV0FBU0QsRUFBRSxDQUFDRSxTQURMO0VBR1BDLFVBQVUsRUFBRTtJQUNWQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0s7RUFESixDQUhMO0VBT1BDLEtBUE8sbUJBT0M7SUFDTixLQUFLQyxrQkFBTCxDQUF3QixLQUFLQyxlQUE3QixFQUE4QyxDQUE5QyxFQURNLENBQzZDO0VBQ3BELENBVE07RUFXUDtFQUNBQSxlQVpPLDZCQVlXO0lBQ2hCLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtNQUN0QztNQUNBLElBQUlDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtRQUN2QkYsTUFBTSxDQUFDLElBQUlHLEtBQUosQ0FBVSxpQkFBVixDQUFELENBQU47TUFDRCxDQUZELE1BRU87UUFDTEosT0FBTyxDQUFDLG9CQUFELENBQVA7TUFDRDtJQUNGLENBUE0sQ0FBUDtFQVFELENBckJNO0VBdUJQO0VBQ01ILGtCQXhCQyw4QkF3QmtCUSxPQXhCbEIsRUF3QjJCQyxpQkF4QjNCLEVBd0JrRDtJQUFBOztJQUFBO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBLElBQXZCQSxpQkFBdUI7Z0JBQXZCQSxpQkFBdUIsR0FBSCxDQUFHO2NBQUE7O2NBQUU7Y0FDckRDLE9BRG1ELEdBQ3pDLENBRHlDOztZQUFBO2NBQUEsTUFFaERBLE9BQU8sR0FBR0QsaUJBRnNDO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUE7Y0FBQTtjQUFBLE9BSTlCRCxPQUFPLEVBSnVCOztZQUFBO2NBSTdDRyxNQUo2QztjQUlsQjtjQUNqQ2xCLEVBQUUsQ0FBQ21CLEdBQUgsQ0FBTyxVQUFQLEVBQW1CRCxNQUFuQixFQUxtRCxDQUt0Qjs7Y0FDN0IsS0FBSSxDQUFDZCxTQUFMLENBQWVnQixNQUFmLEdBQXdCRixNQUF4QixDQU5tRCxDQU1sQjs7Y0FOa0IsaUNBTzVDQSxNQVA0Qzs7WUFBQTtjQUFBO2NBQUE7Y0FTbkRELE9BQU8sR0FUNEMsQ0FTdkM7O2NBQ1pqQixFQUFFLENBQUNtQixHQUFILGNBQWtCRixPQUFsQixlQUFxQyxZQUFNSSxPQUEzQyxFQVZtRCxDQVVHOztjQVZILE1BVy9DSixPQUFPLElBQUlELGlCQVhvQztnQkFBQTtnQkFBQTtjQUFBOztjQVlqRGhCLEVBQUUsQ0FBQ21CLEdBQUgsQ0FBTyxvQkFBUCxFQVppRCxDQVlsQjs7Y0FDL0IsS0FBSSxDQUFDZixTQUFMLENBQWVnQixNQUFmLEdBQXdCLG9CQUF4QixDQWJpRCxDQWFGOztjQWJFLE1BYzNDLElBQUlOLEtBQUosQ0FBVSxvQkFBVixDQWQyQzs7WUFBQTtjQWdCbkRkLEVBQUUsQ0FBQ21CLEdBQUgsbUJBQXVCRixPQUF2QixTQUFrQ0QsaUJBQWxDLFFBaEJtRCxDQWdCTztjQUMxRDs7Y0FqQm1EO2NBQUEsT0FrQjdDLElBQUlQLE9BQUosQ0FBWSxVQUFBQyxPQUFPO2dCQUFBLE9BQUlZLFVBQVUsQ0FBQ1osT0FBRCxFQUFVLElBQVYsQ0FBZDtjQUFBLENBQW5CLENBbEI2Qzs7WUFBQTtjQUFBO2NBQUE7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFxQnhEO0FBN0NNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0aW1lTGFiZWw6IGNjLkxhYmVsLCAgXG4gIH0sXG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5mZXRjaFdpdGhBdXRvUmV0cnkodGhpcy5zaW11bGF0ZUFQSUNhbGwsIDMpOyAgLy8gR+G7jWkgaMOgbSByZXRyeSB24bubaSAzIGzhuqduIHRo4butIGzhuqFpXG4gIH0sXG5cbiAgLy8gSMOgbSB0aOG7sWMgaGnhu4duIEFQSSBDYWxsIGdp4bqjIGzhuq1wXG4gIHNpbXVsYXRlQVBJQ2FsbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gR2nhuqMgbOG6rXAgNTAlIGto4bqjIG7Eg25nIHRo4bqldCBi4bqhaVxuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQVBJIGNhbGwgZmFpbGVkJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgnQVBJIGNhbGwgc3VjY2VlZGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gSMOgbSByZXRyeSByZXF1ZXN0XG4gIGFzeW5jIGZldGNoV2l0aEF1dG9SZXRyeShmZXRjaGVyLCBtYXhpbXVtUmV0cnlDb3VudCA9IDUpIHsgLy8gdHJ1eWVuIHNvIGxhbiByZXRyeSBtYWMgZGluaCBsYSA1LCBubyBzZSBjaGF5IDUgbmV1IG8gdHJlbiBuZ3RhIHF1ZW4gdHJ1eWVuIHZhb1xuICAgIGxldCBhdHRlbXB0ID0gMDtcbiAgICB3aGlsZSAoYXR0ZW1wdCA8IG1heGltdW1SZXRyeUNvdW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaGVyKCk7ICAvLyBUaOG7sWMgaGnhu4duIGfhu41pIEFQSVxuICAgICAgICBjYy5sb2coJ1N1Y2Nlc3M6JywgcmVzdWx0KTsgIC8vIExvZyB0aMOgbmggY8O0bmdcbiAgICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gcmVzdWx0OyAgLy8gSGnhu4NuIHRo4buLIGvhur90IHF14bqjIGzDqm4gbGFiZWxcbiAgICAgICAgcmV0dXJuIHJlc3VsdDsgIC8vIE7hur91IHRow6BuaCBjw7RuZywgdHLhuqMgduG7gSBr4bq/dCBxdeG6o1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYXR0ZW1wdCsrOyAgLy8gVMSDbmcgc+G7kSBs4bqnbiB0aOG7rSBs4bqhaVxuICAgICAgICBjYy5sb2coYEF0dGVtcHQgJHthdHRlbXB0fSBmYWlsZWQ6YCwgZXJyb3IubWVzc2FnZSk7ICAvLyBMb2cgbOG7l2lcbiAgICAgICAgaWYgKGF0dGVtcHQgPj0gbWF4aW11bVJldHJ5Q291bnQpIHtcbiAgICAgICAgICBjYy5sb2coJ0FsbCByZXRyaWVzIGZhaWxlZCcpOyAgLy8gS2hpIHbGsOG7o3QgcXXDoSBz4buRIGzhuqduIHRo4butIGzhuqFpXG4gICAgICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gJ0FsbCByZXRyaWVzIGZhaWxlZCc7ICAvLyBIaeG7g24gdGjhu4sgdGjDtG5nIGLDoW8gbMOqbiBsYWJlbFxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWxsIHJldHJpZXMgZmFpbGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKGBSZXRyeWluZy4uLiAoJHthdHRlbXB0fS8ke21heGltdW1SZXRyeUNvdW50fSlgKTsgIC8vIExvZyByZXRyeVxuICAgICAgICAvLyBEZWxheSBnaeG7r2EgY8OhYyBs4bqnbiB0aOG7rSBs4bqhaVxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpOyAgLy8gMSBnacOieVxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40a18eiTVNHYoNycm4dDpmp', 'Bai7');
// Day7/Script/Bai7.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    logLabel: cc.Label // kéo node Label vào đây

  },
  start: function start() {
    // Truyền label xuống LazyMan để in ra
    var lazyMan = new LazyMan('jack', this.logLabel);
    lazyMan.eat('apple').sleep(5000).eat('hamburger').sleep(3000).eat('pear');
  }
});

var LazyMan = /*#__PURE__*/function () {
  function LazyMan(name, label) {
    this.queue = [];
    this.label = label; // giữ tham chiếu label

    this.sayName(name);

    this._run(); // bắt đầu thực thi hàng đợi

  }

  var _proto = LazyMan.prototype;

  _proto._log = function _log(message) {
    cc.log(message);

    if (this.label) {
      this.label.string += message + '\n';
    }
  };

  _proto.sayName = function sayName(name) {
    var _this = this;

    this.queue.push(function () {
      _this._log("My name is " + name);

      return Promise.resolve();
    });
  };

  _proto.eat = function eat(food) {
    var _this2 = this;

    this.queue.push(function () {
      _this2._log("I am eating " + food);

      return Promise.resolve();
    });
    return this;
  };

  _proto.sleep = function sleep(ms) {
    var _this3 = this;

    this.queue.push(function () {
      _this3._log("I am sleeping...");

      return new Promise(function (resolve) {
        setTimeout(function () {
          _this3._log("After " + ms / 1000 + " seconds");

          resolve();
        }, ms);
      });
    });
    return this;
  };

  _proto._run = /*#__PURE__*/function () {
    var _run2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _iterator, _step, action;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelperLoose(this.queue);

            case 1:
              if ((_step = _iterator()).done) {
                _context.next = 7;
                break;
              }

              action = _step.value;
              _context.next = 5;
              return action();

            case 5:
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _run() {
      return _run2.apply(this, arguments);
    }

    return _run;
  }();

  return LazyMan;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibG9nTGFiZWwiLCJMYWJlbCIsInN0YXJ0IiwibGF6eU1hbiIsIkxhenlNYW4iLCJlYXQiLCJzbGVlcCIsIm5hbWUiLCJsYWJlbCIsInF1ZXVlIiwic2F5TmFtZSIsIl9ydW4iLCJfbG9nIiwibWVzc2FnZSIsImxvZyIsInN0cmluZyIsInB1c2giLCJQcm9taXNlIiwicmVzb2x2ZSIsImZvb2QiLCJtcyIsInNldFRpbWVvdXQiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7Ozs7Ozs7QUFEQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFO0lBQ1ZDLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxLQURILENBQ1U7O0VBRFYsQ0FITDtFQU9QQyxLQVBPLG1CQU9DO0lBQ047SUFDQSxJQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZLE1BQVosRUFBb0IsS0FBS0osUUFBekIsQ0FBaEI7SUFDQUcsT0FBTyxDQUNKRSxHQURILENBQ08sT0FEUCxFQUVHQyxLQUZILENBRVMsSUFGVCxFQUdHRCxHQUhILENBR08sV0FIUCxFQUlHQyxLQUpILENBSVMsSUFKVCxFQUtHRCxHQUxILENBS08sTUFMUDtFQU1EO0FBaEJNLENBQVQ7O0lBbUJNRDtFQUNKLGlCQUFZRyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QjtJQUN2QixLQUFLQyxLQUFMLEdBQWEsRUFBYjtJQUNBLEtBQUtELEtBQUwsR0FBYUEsS0FBYixDQUZ1QixDQUVIOztJQUNwQixLQUFLRSxPQUFMLENBQWFILElBQWI7O0lBQ0EsS0FBS0ksSUFBTCxHQUp1QixDQUlWOztFQUNkOzs7O1NBRURDLE9BQUEsY0FBS0MsT0FBTCxFQUFjO0lBQ1pqQixFQUFFLENBQUNrQixHQUFILENBQU9ELE9BQVA7O0lBQ0EsSUFBSSxLQUFLTCxLQUFULEVBQWdCO01BQ2QsS0FBS0EsS0FBTCxDQUFXTyxNQUFYLElBQXFCRixPQUFPLEdBQUcsSUFBL0I7SUFDRDtFQUNGOztTQUVESCxVQUFBLGlCQUFRSCxJQUFSLEVBQWM7SUFBQTs7SUFDWixLQUFLRSxLQUFMLENBQVdPLElBQVgsQ0FBZ0IsWUFBTTtNQUNwQixLQUFJLENBQUNKLElBQUwsaUJBQXdCTCxJQUF4Qjs7TUFDQSxPQUFPVSxPQUFPLENBQUNDLE9BQVIsRUFBUDtJQUNELENBSEQ7RUFJRDs7U0FFRGIsTUFBQSxhQUFJYyxJQUFKLEVBQVU7SUFBQTs7SUFDUixLQUFLVixLQUFMLENBQVdPLElBQVgsQ0FBZ0IsWUFBTTtNQUNwQixNQUFJLENBQUNKLElBQUwsa0JBQXlCTyxJQUF6Qjs7TUFDQSxPQUFPRixPQUFPLENBQUNDLE9BQVIsRUFBUDtJQUNELENBSEQ7SUFJQSxPQUFPLElBQVA7RUFDRDs7U0FFRFosUUFBQSxlQUFNYyxFQUFOLEVBQVU7SUFBQTs7SUFDUixLQUFLWCxLQUFMLENBQVdPLElBQVgsQ0FBZ0IsWUFBTTtNQUNwQixNQUFJLENBQUNKLElBQUw7O01BQ0EsT0FBTyxJQUFJSyxPQUFKLENBQVksVUFBQUMsT0FBTyxFQUFJO1FBQzVCRyxVQUFVLENBQUMsWUFBTTtVQUNmLE1BQUksQ0FBQ1QsSUFBTCxZQUFtQlEsRUFBRSxHQUFHLElBQXhCOztVQUNBRixPQUFPO1FBQ1IsQ0FIUyxFQUdQRSxFQUhPLENBQVY7TUFJRCxDQUxNLENBQVA7SUFNRCxDQVJEO0lBU0EsT0FBTyxJQUFQO0VBQ0Q7O1NBRUtUOzJFQUFOO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQSw0Q0FDdUIsS0FBS0YsS0FENUI7O1lBQUE7Y0FBQTtnQkFBQTtnQkFBQTtjQUFBOztjQUNhYSxNQURiO2NBQUE7Y0FBQSxPQUVVQSxNQUFNLEVBRmhCOztZQUFBO2NBQUE7Y0FBQTs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGxvZ0xhYmVsOiBjYy5MYWJlbCwgLy8ga8OpbyBub2RlIExhYmVsIHbDoG8gxJHDonlcbiAgfSxcblxuICBzdGFydCgpIHtcbiAgICAvLyBUcnV54buBbiBsYWJlbCB4deG7kW5nIExhenlNYW4gxJHhu4MgaW4gcmFcbiAgICBjb25zdCBsYXp5TWFuID0gbmV3IExhenlNYW4oJ2phY2snLCB0aGlzLmxvZ0xhYmVsKTtcbiAgICBsYXp5TWFuXG4gICAgICAuZWF0KCdhcHBsZScpXG4gICAgICAuc2xlZXAoNTAwMClcbiAgICAgIC5lYXQoJ2hhbWJ1cmdlcicpXG4gICAgICAuc2xlZXAoMzAwMClcbiAgICAgIC5lYXQoJ3BlYXInKTtcbiAgfSxcbn0pO1xuXG5jbGFzcyBMYXp5TWFuIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGFiZWwpIHtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsOyAvLyBnaeG7ryB0aGFtIGNoaeG6v3UgbGFiZWxcbiAgICB0aGlzLnNheU5hbWUobmFtZSk7XG4gICAgdGhpcy5fcnVuKCk7IC8vIGLhuq90IMSR4bqndSB0aOG7sWMgdGhpIGjDoG5nIMSR4bujaVxuICB9XG5cbiAgX2xvZyhtZXNzYWdlKSB7XG4gICAgY2MubG9nKG1lc3NhZ2UpO1xuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsLnN0cmluZyArPSBtZXNzYWdlICsgJ1xcbic7XG4gICAgfVxuICB9XG5cbiAgc2F5TmFtZShuYW1lKSB7XG4gICAgdGhpcy5xdWV1ZS5wdXNoKCgpID0+IHtcbiAgICAgIHRoaXMuX2xvZyhgTXkgbmFtZSBpcyAke25hbWV9YCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBlYXQoZm9vZCkge1xuICAgIHRoaXMucXVldWUucHVzaCgoKSA9PiB7XG4gICAgICB0aGlzLl9sb2coYEkgYW0gZWF0aW5nICR7Zm9vZH1gKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNsZWVwKG1zKSB7XG4gICAgdGhpcy5xdWV1ZS5wdXNoKCgpID0+IHtcbiAgICAgIHRoaXMuX2xvZyhgSSBhbSBzbGVlcGluZy4uLmApO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9sb2coYEFmdGVyICR7bXMgLyAxMDAwfSBzZWNvbmRzYCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LCBtcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFzeW5jIF9ydW4oKSB7XG4gICAgZm9yIChjb25zdCBhY3Rpb24gb2YgdGhpcy5xdWV1ZSkge1xuICAgICAgYXdhaXQgYWN0aW9uKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1026eLjmF5ADJJSwdq2KO8t', 'Bai1');
// Day7/Script/Bai1.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    timeLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.fetchServerTime(); //goi qua trinh lay thoi gian ngay khi node vua chay
  },
  fetchServerTime: function fetchServerTime() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, serverDate, timeStr, localTime;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(window.location.href, {
                //fetch, tuc gui http rq toi dia chi trang hien tai, 
                method: 'HEAD' //nhung chi can HEAD, k can noi dung trang

              });

            case 3:
              response = _context.sent;
              serverDate = response.headers.get("Date"); // lay gia tri header tu Date

              if (serverDate) {
                _context.next = 7;
                break;
              }

              throw new Error("Không lấy được thời gian từ header.");

            case 7:
              timeStr = new Date(serverDate).toISOString(); //convert string thanh date

              _this.timeLabel.string = "🕒 Server Time: " + timeStr;
              _context.next = 16;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              // neu co loi bat loi~
              cc.error("❌ Lỗi khi lấy thời gian server:", _context.t0.message);
              localTime = new Date().toISOString();
              _this.timeLabel.string = "🕒 Local Time: " + localTime;

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWkxLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGltZUxhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJmZXRjaFNlcnZlclRpbWUiLCJmZXRjaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm1ldGhvZCIsInJlc3BvbnNlIiwic2VydmVyRGF0ZSIsImhlYWRlcnMiLCJnZXQiLCJFcnJvciIsInRpbWVTdHIiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdHJpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJsb2NhbFRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFO0lBQ1ZDLFNBQVMsRUFBRUosRUFBRSxDQUFDSztFQURKLENBSEw7RUFPUEMsTUFQTyxvQkFPRTtJQUNQLEtBQUtDLGVBQUwsR0FETyxDQUNpQjtFQUN6QixDQVRNO0VBV0RBLGVBWEMsNkJBV2lCO0lBQUE7O0lBQUE7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBLE9BRUdDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFqQixFQUF1QjtnQkFBRTtnQkFDbkRDLE1BQU0sRUFBRSxNQUR5QyxDQUNsQzs7Y0FEa0MsQ0FBdkIsQ0FGUjs7WUFBQTtjQUVkQyxRQUZjO2NBTWRDLFVBTmMsR0FNREQsUUFBUSxDQUFDRSxPQUFULENBQWlCQyxHQUFqQixDQUFxQixNQUFyQixDQU5DLEVBTTZCOztjQU43QixJQVFmRixVQVJlO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUEsTUFTWixJQUFJRyxLQUFKLENBQVUscUNBQVYsQ0FUWTs7WUFBQTtjQVlkQyxPQVpjLEdBWUosSUFBSUMsSUFBSixDQUFTTCxVQUFULEVBQXFCTSxXQUFyQixFQVpJLEVBWWdDOztjQUNwRCxLQUFJLENBQUNoQixTQUFMLENBQWVpQixNQUFmLEdBQXdCLHFCQUFxQkgsT0FBN0M7Y0Fib0I7Y0FBQTs7WUFBQTtjQUFBO2NBQUE7Y0FjTjtjQUNkbEIsRUFBRSxDQUFDc0IsS0FBSCxDQUFTLGlDQUFULEVBQTRDLFlBQUlDLE9BQWhEO2NBQ01DLFNBaEJjLEdBZ0JGLElBQUlMLElBQUosR0FBV0MsV0FBWCxFQWhCRTtjQWlCcEIsS0FBSSxDQUFDaEIsU0FBTCxDQUFlaUIsTUFBZixHQUF3QixvQkFBb0JHLFNBQTVDOztZQWpCb0I7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFtQnZCO0FBOUJNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0aW1lTGFiZWw6IGNjLkxhYmVsLCAgXG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuZmV0Y2hTZXJ2ZXJUaW1lKCk7IC8vZ29pIHF1YSB0cmluaCBsYXkgdGhvaSBnaWFuIG5nYXkga2hpIG5vZGUgdnVhIGNoYXlcbiAgfSxcblxuICBhc3luYyBmZXRjaFNlcnZlclRpbWUoKSB7IC8vIHhhaSBhc3luYyB0aGkgeGFpIGRjIGF3YWl0IGJlbiB0cm9uZ1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB7IC8vZmV0Y2gsIHR1YyBndWkgaHR0cCBycSB0b2kgZGlhIGNoaSB0cmFuZyBoaWVuIHRhaSwgXG4gICAgICAgIG1ldGhvZDogJ0hFQUQnLC8vbmh1bmcgY2hpIGNhbiBIRUFELCBrIGNhbiBub2kgZHVuZyB0cmFuZ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNlcnZlckRhdGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcIkRhdGVcIik7IC8vIGxheSBnaWEgdHJpIGhlYWRlciB0dSBEYXRlXG5cbiAgICAgIGlmICghc2VydmVyRGF0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJLaMO0bmcgbOG6pXkgxJHGsOG7o2MgdGjhu51pIGdpYW4gdOG7qyBoZWFkZXIuXCIpOy8vIGsgY28gZGF0ZSB4dSBseSBsb2kgbyBjYXRjaFxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aW1lU3RyID0gbmV3IERhdGUoc2VydmVyRGF0ZSkudG9JU09TdHJpbmcoKTsgLy9jb252ZXJ0IHN0cmluZyB0aGFuaCBkYXRlXG4gICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSBcIvCflZIgU2VydmVyIFRpbWU6IFwiICsgdGltZVN0cjtcbiAgICB9IGNhdGNoIChlcnIpIHsgLy8gbmV1IGNvIGxvaSBiYXQgbG9pflxuICAgICAgY2MuZXJyb3IoXCLinYwgTOG7l2kga2hpIGzhuqV5IHRo4budaSBnaWFuIHNlcnZlcjpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgY29uc3QgbG9jYWxUaW1lID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gXCLwn5WSIExvY2FsIFRpbWU6IFwiICsgbG9jYWxUaW1lO1xuICAgIH1cbiAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e83dFFC/hLRJNwWeeuaBQv', 'Bai6');
// Day7/Script/Bai6.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    TimeOut: 10000,
    Tile: cc.Label,
    Body: cc.Label,
    spriteArray: {
      "default": [],
      type: [cc.Sprite]
    }
  },
  fetchImageWithTimeout: function fetchImageWithTimeout(url, timeout) {
    return new Promise(function (resolve, reject) {
      var controller = new AbortController();
      var signal = controller.signal;
      var timeoutId = setTimeout(function () {
        controller.abort();
      }, timeout);
      fetch(url, {
        signal: signal
      }).then(function (response) {
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error("HTTP error! Status: " + response.status);
        }

        return response.blob();
      }).then(function (blob) {
        var img = new Image();
        img.src = URL.createObjectURL(blob);

        img.onload = function () {
          return resolve(img);
        };

        img.onerror = function (err) {
          return reject(err);
        };
      })["catch"](function (error) {
        if (error.name === 'AbortError') {
          reject(new Error('Request timed out'));
        } else {
          reject(error);
        }
      });
    });
  },
  call: function call() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var urls, promises, results, i, result, texture, spriteFrame;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              urls = ['https://picsum.photos/id/237/300/200', 'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g', 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4', 'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ', 'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g'];
              promises = urls.map(function (url) {
                return _this.fetchImageWithTimeout(url, _this.TimeOut).then(function (img) {
                  return {
                    status: 'fulfilled',
                    img: img,
                    url: url
                  };
                })["catch"](function (error) {
                  return {
                    status: 'rejected',
                    error: error,
                    url: url
                  };
                });
              });
              _context.next = 4;
              return Promise.all(promises);

            case 4:
              results = _context.sent;

              for (i = 0; i < results.length; i++) {
                result = results[i];

                if (result.status === 'fulfilled') {
                  _this.Tile.string = "Image loaded:";
                  _this.Body.string = result.url;
                  texture = new cc.Texture2D();
                  texture.initWithElement(result.img);
                  texture.handleLoadedTexture();
                  spriteFrame = new cc.SpriteFrame(texture);

                  if (i < _this.spriteArray.length) {
                    _this.spriteArray[i].spriteFrame = spriteFrame;
                  } else {
                    console.warn("No sprite available for index " + i);
                  }
                } else {
                  _this.Tile.string = "Error:";
                  _this.Body.string = result.error.message;
                  console.error("Error loading image:", result.url, result.error);
                }
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  start: function start() {
    this.call();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk2LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiVGltZU91dCIsIlRpbGUiLCJMYWJlbCIsIkJvZHkiLCJzcHJpdGVBcnJheSIsInR5cGUiLCJTcHJpdGUiLCJmZXRjaEltYWdlV2l0aFRpbWVvdXQiLCJ1cmwiLCJ0aW1lb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImFib3J0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjbGVhclRpbWVvdXQiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiYmxvYiIsImltZyIsIkltYWdlIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25sb2FkIiwib25lcnJvciIsImVyciIsImVycm9yIiwibmFtZSIsImNhbGwiLCJ1cmxzIiwicHJvbWlzZXMiLCJtYXAiLCJhbGwiLCJyZXN1bHRzIiwiaSIsImxlbmd0aCIsInJlc3VsdCIsInN0cmluZyIsInRleHR1cmUiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUUsS0FERDtJQUVSQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sS0FGRDtJQUdSQyxJQUFJLEVBQUVQLEVBQUUsQ0FBQ00sS0FIRDtJQUtSRSxXQUFXLEVBQUU7TUFDVCxXQUFTLEVBREE7TUFFVEMsSUFBSSxFQUFFLENBQUNULEVBQUUsQ0FBQ1UsTUFBSjtJQUZHO0VBTEwsQ0FIUDtFQWNMQyxxQkFkSyxpQ0FjaUJDLEdBZGpCLEVBY3NCQyxPQWR0QixFQWMrQjtJQUNoQyxPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7TUFDcEMsSUFBTUMsVUFBVSxHQUFHLElBQUlDLGVBQUosRUFBbkI7TUFDQSxJQUFNQyxNQUFNLEdBQUdGLFVBQVUsQ0FBQ0UsTUFBMUI7TUFFQSxJQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO1FBQy9CSixVQUFVLENBQUNLLEtBQVg7TUFDSCxDQUYyQixFQUV6QlQsT0FGeUIsQ0FBNUI7TUFJQVUsS0FBSyxDQUFDWCxHQUFELEVBQU07UUFBRU8sTUFBTSxFQUFOQTtNQUFGLENBQU4sQ0FBTCxDQUNLSyxJQURMLENBQ1UsVUFBQUMsUUFBUSxFQUFJO1FBQ2RDLFlBQVksQ0FBQ04sU0FBRCxDQUFaOztRQUNBLElBQUksQ0FBQ0ssUUFBUSxDQUFDRSxFQUFkLEVBQWtCO1VBQ2QsTUFBTSxJQUFJQyxLQUFKLDBCQUFpQ0gsUUFBUSxDQUFDSSxNQUExQyxDQUFOO1FBQ0g7O1FBQ0QsT0FBT0osUUFBUSxDQUFDSyxJQUFULEVBQVA7TUFDSCxDQVBMLEVBUUtOLElBUkwsQ0FRVSxVQUFBTSxJQUFJLEVBQUk7UUFDVixJQUFJQyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFWO1FBQ0FELEdBQUcsQ0FBQ0UsR0FBSixHQUFVQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JMLElBQXBCLENBQVY7O1FBQ0FDLEdBQUcsQ0FBQ0ssTUFBSixHQUFhO1VBQUEsT0FBTXJCLE9BQU8sQ0FBQ2dCLEdBQUQsQ0FBYjtRQUFBLENBQWI7O1FBQ0FBLEdBQUcsQ0FBQ00sT0FBSixHQUFjLFVBQUFDLEdBQUc7VUFBQSxPQUFJdEIsTUFBTSxDQUFDc0IsR0FBRCxDQUFWO1FBQUEsQ0FBakI7TUFDSCxDQWJMLFdBY1csVUFBQUMsS0FBSyxFQUFJO1FBQ1osSUFBSUEsS0FBSyxDQUFDQyxJQUFOLEtBQWUsWUFBbkIsRUFBaUM7VUFDN0J4QixNQUFNLENBQUMsSUFBSVksS0FBSixDQUFVLG1CQUFWLENBQUQsQ0FBTjtRQUNILENBRkQsTUFFTztVQUNIWixNQUFNLENBQUN1QixLQUFELENBQU47UUFDSDtNQUNKLENBcEJMO0lBcUJILENBN0JNLENBQVA7RUE4QkgsQ0E3Q0k7RUErQ0NFLElBL0NELGtCQStDUTtJQUFBOztJQUFBO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUNIQyxJQURHLEdBQ0ksQ0FDVCxzQ0FEUyxFQUVULGtHQUZTLEVBR1Qsa0dBSFMsRUFJVCxrR0FKUyxFQUtULGtHQUxTLENBREo7Y0FTSEMsUUFURyxHQVNRRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFBaEMsR0FBRztnQkFBQSxPQUN6QixLQUFJLENBQUNELHFCQUFMLENBQTJCQyxHQUEzQixFQUFnQyxLQUFJLENBQUNSLE9BQXJDLEVBQ0tvQixJQURMLENBQ1UsVUFBQU8sR0FBRztrQkFBQSxPQUFLO29CQUFFRixNQUFNLEVBQUUsV0FBVjtvQkFBdUJFLEdBQUcsRUFBSEEsR0FBdkI7b0JBQTRCbkIsR0FBRyxFQUFIQTtrQkFBNUIsQ0FBTDtnQkFBQSxDQURiLFdBRVcsVUFBQTJCLEtBQUs7a0JBQUEsT0FBSztvQkFBRVYsTUFBTSxFQUFFLFVBQVY7b0JBQXNCVSxLQUFLLEVBQUxBLEtBQXRCO29CQUE2QjNCLEdBQUcsRUFBSEE7a0JBQTdCLENBQUw7Z0JBQUEsQ0FGaEIsQ0FEeUI7Y0FBQSxDQUFaLENBVFI7Y0FBQTtjQUFBLE9BZWFFLE9BQU8sQ0FBQytCLEdBQVIsQ0FBWUYsUUFBWixDQWZiOztZQUFBO2NBZUhHLE9BZkc7O2NBaUJULEtBQVNDLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELE9BQU8sQ0FBQ0UsTUFBNUIsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7Z0JBQy9CRSxNQUQrQixHQUN0QkgsT0FBTyxDQUFDQyxDQUFELENBRGU7O2dCQUdyQyxJQUFJRSxNQUFNLENBQUNwQixNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO2tCQUMvQixLQUFJLENBQUN4QixJQUFMLENBQVU2QyxNQUFWLEdBQW1CLGVBQW5CO2tCQUNBLEtBQUksQ0FBQzNDLElBQUwsQ0FBVTJDLE1BQVYsR0FBbUJELE1BQU0sQ0FBQ3JDLEdBQTFCO2tCQUVJdUMsT0FKMkIsR0FJakIsSUFBSW5ELEVBQUUsQ0FBQ29ELFNBQVAsRUFKaUI7a0JBSy9CRCxPQUFPLENBQUNFLGVBQVIsQ0FBd0JKLE1BQU0sQ0FBQ2xCLEdBQS9CO2tCQUNBb0IsT0FBTyxDQUFDRyxtQkFBUjtrQkFFSUMsV0FSMkIsR0FRYixJQUFJdkQsRUFBRSxDQUFDd0QsV0FBUCxDQUFtQkwsT0FBbkIsQ0FSYTs7a0JBVS9CLElBQUlKLENBQUMsR0FBRyxLQUFJLENBQUN2QyxXQUFMLENBQWlCd0MsTUFBekIsRUFBaUM7b0JBQzdCLEtBQUksQ0FBQ3hDLFdBQUwsQ0FBaUJ1QyxDQUFqQixFQUFvQlEsV0FBcEIsR0FBa0NBLFdBQWxDO2tCQUNILENBRkQsTUFFTztvQkFDSEUsT0FBTyxDQUFDQyxJQUFSLG9DQUE4Q1gsQ0FBOUM7a0JBQ0g7Z0JBRUosQ0FoQkQsTUFnQk87a0JBQ0gsS0FBSSxDQUFDMUMsSUFBTCxDQUFVNkMsTUFBVixHQUFtQixRQUFuQjtrQkFDQSxLQUFJLENBQUMzQyxJQUFMLENBQVUyQyxNQUFWLEdBQW1CRCxNQUFNLENBQUNWLEtBQVAsQ0FBYW9CLE9BQWhDO2tCQUNBRixPQUFPLENBQUNsQixLQUFSLENBQWMsc0JBQWQsRUFBc0NVLE1BQU0sQ0FBQ3JDLEdBQTdDLEVBQWtEcUMsTUFBTSxDQUFDVixLQUF6RDtnQkFDSDtjQUNKOztZQXpDUTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQTtFQTBDWixDQXpGSTtFQTJGTHFCLEtBM0ZLLG1CQTJGRztJQUNKLEtBQUtuQixJQUFMO0VBQ0g7QUE3RkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgVGltZU91dDogMTAwMDAsXG4gICAgICAgIFRpbGU6IGNjLkxhYmVsLFxuICAgICAgICBCb2R5OiBjYy5MYWJlbCxcblxuICAgICAgICBzcHJpdGVBcnJheToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlXVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZldGNoSW1hZ2VXaXRoVGltZW91dCh1cmwsIHRpbWVvdXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7IFxuICAgICAgICAgICAgY29uc3Qgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWw7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuXG4gICAgICAgICAgICBmZXRjaCh1cmwsIHsgc2lnbmFsIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihibG9iID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSBlcnIgPT4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdSZXF1ZXN0IHRpbWVkIG91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFzeW5jIGNhbGwoKSB7XG4gICAgICAgIGNvbnN0IHVybHMgPSBbXG4gICAgICAgICAgICAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8zMDAvMjAwJyxcbiAgICAgICAgICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzMvNTAwMC8zMzMzLmpwZz9obWFjPUdEaloydU5XRTNWNTlQa2REYU96VE91VjN0UFdXeEpTZjRmTmN4dTRTMmcnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMS81MDAwLzMzMzMuanBnP2htYWM9QXN2MkRVM3JBXzVEMXhTZTIyeFpLNDdXRUFOMHdqV2VGT2h6ZDEzdWpXNCcsXG4gICAgICAgICAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8yLzUwMDAvMzMzMy5qcGc/aG1hYz1fS0RrcVFWdHRYd19uTS1SeUpmTEltSWJhZkZycUxzdUdPNVl1SHFELXFRJyxcbiAgICAgICAgICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzMvNTAwMC8zMzMzLmpwZz9obWFjPUdEaloydU5XRTNWNTlQa2REYU96VE91VjN0UFdXeEpTZjRmTmN4dTRTMmcnXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSB1cmxzLm1hcCh1cmwgPT5cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hJbWFnZVdpdGhUaW1lb3V0KHVybCwgdGhpcy5UaW1lT3V0KVxuICAgICAgICAgICAgICAgIC50aGVuKGltZyA9PiAoeyBzdGF0dXM6ICdmdWxmaWxsZWQnLCBpbWcsIHVybCB9KSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgc3RhdHVzOiAncmVqZWN0ZWQnLCBlcnJvciwgdXJsIH0pKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlRpbGUuc3RyaW5nID0gXCJJbWFnZSBsb2FkZWQ6XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5Cb2R5LnN0cmluZyA9IHJlc3VsdC51cmw7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmluaXRXaXRoRWxlbWVudChyZXN1bHQuaW1nKTtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcblxuICAgICAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcblxuICAgICAgICAgICAgICAgIGlmIChpIDwgdGhpcy5zcHJpdGVBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVBcnJheVtpXS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTm8gc3ByaXRlIGF2YWlsYWJsZSBmb3IgaW5kZXggJHtpfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlRpbGUuc3RyaW5nID0gXCJFcnJvcjpcIjtcbiAgICAgICAgICAgICAgICB0aGlzLkJvZHkuc3RyaW5nID0gcmVzdWx0LmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgaW1hZ2U6XCIsIHJlc3VsdC51cmwsIHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuY2FsbCgpO1xuICAgIH0sXG59KTsiXX0=
//------QC-SOURCE-SPLIT------
