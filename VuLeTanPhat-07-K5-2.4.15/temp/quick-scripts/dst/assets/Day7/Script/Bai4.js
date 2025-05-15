
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibG9nTGFiZWwiLCJMYWJlbCIsInN0YXJ0IiwiU3RvcmUiLCJuYW1lIiwiZGVwZW5kZW5jaWVzIiwid2FpdCIsInN0b3JlIiwicHVzaCIsInJlc29sdmUiLCJzdGVwVGltZSIsInZpc2l0ZWQiLCJyZXN1bHRzIiwibG9nRnVuYyIsIlNldCIsImhhcyIsImFkZCIsImRlcCIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwibG9nIiwiY29udHJpYnV0ZSIsInN0b3JlcyIsImZpbmFsTG9nIiwiam9pbiIsImxvZ1RvTGFiZWwiLCJtc2ciLCJzdHJpbmciLCJzdG9yZTEiLCJzdG9yZTIiLCJzdG9yZTMiLCJzdG9yZTQiLCJzdG9yZTUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7Ozs7Ozs7QUFEQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNQLFdBQVNELEVBQUUsQ0FBQ0UsU0FETDtFQUdQQyxVQUFVLEVBQUU7SUFDVkMsUUFBUSxFQUFFSixFQUFFLENBQUNLLEtBREgsQ0FDVTs7RUFEVixDQUhMO0VBT1BDLEtBUE8sbUJBT0M7SUFBQTs7SUFDTjtJQUNBO0lBRk0sSUFHQUMsS0FIQTtNQUlKLGVBQVlDLElBQVosRUFBa0I7UUFDaEIsS0FBS0EsSUFBTCxHQUFZQSxJQUFaLENBRGdCLENBQ0U7O1FBQ2xCLEtBQUtDLFlBQUwsR0FBb0IsRUFBcEIsQ0FGZ0IsQ0FFUTtNQUN6QixDQVBHLENBU0o7OztNQVRJOztNQUFBLE9BVUpDLElBVkksR0FVSixjQUFLQyxLQUFMLEVBQVk7UUFDVixLQUFLRixZQUFMLENBQWtCRyxJQUFsQixDQUF1QkQsS0FBdkI7TUFDRCxDQVpHLENBY0o7TUFkSTs7TUFBQSxPQWVFRSxPQWZGO01BQUE7TUFBQTtRQUFBLDBFQWVKLGlCQUFjQyxRQUFkLEVBQXdCQyxP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QUk1QixLQUFKLENBQVUsU0FBVixDQUFmO0lBQ0EsSUFBTTZCLE1BQU0sR0FBRyxJQUFJN0IsS0FBSixDQUFVLFNBQVYsQ0FBZixDQTdETSxDQStETjtJQUNBOztJQUNBeUIsTUFBTSxDQUFDdEIsSUFBUCxDQUFZd0IsTUFBWjtJQUNBQSxNQUFNLENBQUN4QixJQUFQLENBQVl1QixNQUFaO0lBQ0FBLE1BQU0sQ0FBQ3ZCLElBQVAsQ0FBWTBCLE1BQVo7SUFDQUEsTUFBTSxDQUFDMUIsSUFBUCxDQUFZeUIsTUFBWixFQXBFTSxDQXNFTjs7SUFDQSxLQUFLL0IsUUFBTCxDQUFjMkIsTUFBZCxHQUF1QixFQUF2QixDQXZFTSxDQXVFcUI7O0lBQzNCTixVQUFVLENBQUMsQ0FBRCxFQUFJSSxVQUFKLEVBQWdCRyxNQUFoQixFQUF3QkMsTUFBeEIsRUFBZ0NDLE1BQWhDLEVBQXdDQyxNQUF4QyxFQUFnREMsTUFBaEQsQ0FBVixDQXhFTSxDQXlFTjtFQUNEO0FBakZNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vbWEgb2kgYmFpIG5heSBraG9uZyBoaWV1IGdpIGhldFxuXG5jYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbG9nTGFiZWw6IGNjLkxhYmVsLCAvLyBHw6FuIG5vZGUgTGFiZWwgdOG7qyBJbnNwZWN0b3IgxJHhu4MgaW4ga+G6v3QgcXXhuqMgbG9nXG4gIH0sXG5cbiAgc3RhcnQoKSB7XG4gICAgLy8g4pSA4pSA4pSAIENMQVNTIFNUT1JFIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIC8vIE3hu5dpIFN0b3JlIGzDoCBt4buZdCBcImPDtG5nIMSRb+G6oW5cIiBjw7MgdGjhu4MgcGjhu6UgdGh14buZYyB2w6BvIGPDtG5nIMSRb+G6oW4ga2jDoWNcbiAgICBjbGFzcyBTdG9yZSB7XG4gICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7IC8vIFTDqm4gY+G7p2EgU3RvcmVcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTsgLy8gRGFuaCBzw6FjaCBjw6FjIFN0b3JlIG3DoCBTdG9yZSBuw6B5IHBo4bulIHRodeG7mWNcbiAgICAgIH1cblxuICAgICAgLy8gVGjDqm0gbeG7mXQgc3RvcmUgcGjhu6UgdGh14buZYyB2w6BvIGRhbmggc8OhY2hcbiAgICAgIHdhaXQoc3RvcmUpIHtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMucHVzaChzdG9yZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEdp4bqjaSBxdXnhur90IHN0b3JlIHRoZW8gdGjhu6kgdOG7sSBwaOG7pSB0aHXhu5ljICjEkeG7hyBxdXkpXG4gICAgICBhc3luYyByZXNvbHZlKHN0ZXBUaW1lLCB2aXNpdGVkID0gbmV3IFNldCgpLCByZXN1bHRzID0gW10sIGxvZ0Z1bmMpIHtcbiAgICAgICAgaWYgKHZpc2l0ZWQuaGFzKHRoaXMpKSByZXR1cm47IC8vIE7hur91IMSRw6MgeOG7rSBsw70gcuG7k2kgdGjDrCBi4buPIHF1YSAodHLDoW5oIGzhurdwIHbDtCBo4bqhbilcblxuICAgICAgICB2aXNpdGVkLmFkZCh0aGlzKTsgLy8gxJDDoW5oIGThuqV1IGzDoCDEkcOjIHjhu60gbMO9XG5cbiAgICAgICAgLy8gR2nhuqNpIHF1eeG6v3QgY8OhYyBwaOG7pSB0aHXhu5ljIHRyxrDhu5tjXG4gICAgICAgIGZvciAoY29uc3QgZGVwIG9mIHRoaXMuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICAgYXdhaXQgZGVwLnJlc29sdmUoc3RlcFRpbWUsIHZpc2l0ZWQsIHJlc3VsdHMsIGxvZ0Z1bmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gxJDhu6NpIHN0ZXBUaW1lIGdpw6J5IHRyxrDhu5tjIGtoaSB0aOG7sWMgaGnhu4duIHN0b3JlIG7DoHlcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHN0ZXBUaW1lICogMTAwMCkpO1xuXG4gICAgICAgIGNjLmxvZyh0aGlzLm5hbWUpOyAvLyBJbiB0w6puIHN0b3JlIHJhIGNvbnNvbGVcbiAgICAgICAgbG9nRnVuYyh0aGlzLm5hbWUpOyAvLyBHaGkgbG9nIHbDoG8gTGFiZWwgVUlcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubmFtZSk7IC8vIEzGsHUgdMOqbiBzdG9yZSDEkcOjIGhvw6BuIHRow6BuaCB2w6BvIG3huqNuZyBr4bq/dCBxdeG6o1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOKUgOKUgOKUgCBGVU5DVElPTiBDT05UUklCVVRFIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIC8vIEjDoG0gY2jDrW5oIHRo4buxYyB0aGkgdG/DoG4gYuG7mSBjw6FjIHN0b3JlIHRydXnhu4FuIHbDoG8gdGhlbyDEkcO6bmcgdGjhu6kgdOG7sSBwaOG7pSB0aHXhu5ljXG4gICAgYXN5bmMgZnVuY3Rpb24gY29udHJpYnV0ZShzdGVwVGltZSwgbG9nRnVuYywgLi4uc3RvcmVzKSB7XG4gICAgICBjb25zdCB2aXNpdGVkID0gbmV3IFNldCgpOyAvLyDEkMOhbmggZOG6pXUgc3RvcmUgxJHDoyB0aOG7sWMgaGnhu4duXG4gICAgICBjb25zdCByZXN1bHRzID0gW107IC8vIEzGsHUga+G6v3QgcXXhuqMgdMOqbiBzdG9yZSB0aGVvIHRo4bupIHThu7FcblxuICAgICAgZm9yIChjb25zdCBzdG9yZSBvZiBzdG9yZXMpIHtcbiAgICAgICAgYXdhaXQgc3RvcmUucmVzb2x2ZShzdGVwVGltZSwgdmlzaXRlZCwgcmVzdWx0cywgbG9nRnVuYyk7IC8vIEdp4bqjaSBxdXnhur90IHThu6tuZyBzdG9yZVxuICAgICAgfVxuXG4gICAgICAvLyBTYXUga2hpIHThuqV0IGPhuqMgc3RvcmUgeG9uZywgbG9nIGvhur90IHF14bqjIGN14buRaSBjw7luZ1xuICAgICAgY29uc3QgZmluYWxMb2cgPSAnSG/DoG4gdOG6pXQ6ICcgKyByZXN1bHRzLmpvaW4oJyDihpIgJyk7XG4gICAgICBjYy5sb2coZmluYWxMb2cpO1xuICAgICAgbG9nRnVuYyhmaW5hbExvZyk7XG4gICAgfVxuXG4gICAgLy8g4pSA4pSA4pSAIExPRyBIRUxQRVIg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgLy8gR2hpIG3hu5l0IGTDsm5nIGxvZyB2w6BvIExhYmVsIFVJXG4gICAgY29uc3QgbG9nVG9MYWJlbCA9IChtc2cpID0+IHtcbiAgICAgIHRoaXMubG9nTGFiZWwuc3RyaW5nICs9IG1zZyArICdcXG4nO1xuICAgIH07XG5cbiAgICAvLyDilIDilIDilIAgVOG6oE8gQ8OBQyBTVE9SRSAmIFBI4bukIFRIVeG7mEMg4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgY29uc3Qgc3RvcmUxID0gbmV3IFN0b3JlKCdzdG9yZV8xJyk7XG4gICAgY29uc3Qgc3RvcmUyID0gbmV3IFN0b3JlKCdzdG9yZV8yJyk7XG4gICAgY29uc3Qgc3RvcmUzID0gbmV3IFN0b3JlKCdzdG9yZV8zJyk7XG4gICAgY29uc3Qgc3RvcmU0ID0gbmV3IFN0b3JlKCdzdG9yZV80Jyk7XG4gICAgY29uc3Qgc3RvcmU1ID0gbmV3IFN0b3JlKCdzdG9yZV81Jyk7XG5cbiAgICAvLyBUaGnhur90IGzhuq1wIHF1YW4gaOG7hyBwaOG7pSB0aHXhu5ljOlxuICAgIC8vIHN0b3JlMSAtPiBzdG9yZTMgLT4gc3RvcmUyIC0+IHN0b3JlNSAtPiBzdG9yZTRcbiAgICBzdG9yZTEud2FpdChzdG9yZTMpO1xuICAgIHN0b3JlMy53YWl0KHN0b3JlMik7XG4gICAgc3RvcmUyLndhaXQoc3RvcmU1KTtcbiAgICBzdG9yZTUud2FpdChzdG9yZTQpO1xuXG4gICAgLy8g4pSA4pSA4pSAIFRI4buwQyBUSEkgQ0jDjU5IIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIHRoaXMubG9nTGFiZWwuc3RyaW5nID0gJyc7IC8vIFjDs2EgbuG7mWkgZHVuZyBsYWJlbCB0csaw4bubYyBraGkgY2jhuqF5XG4gICAgY29udHJpYnV0ZSgzLCBsb2dUb0xhYmVsLCBzdG9yZTEsIHN0b3JlMiwgc3RvcmUzLCBzdG9yZTQsIHN0b3JlNSk7XG4gICAgLy8gR+G7jWkgY29udHJpYnV0ZSgpIHbhu5tpIGRlbGF5IDMgZ2nDonkgZ2nhu69hIG3hu5dpIGLGsOG7m2NcbiAgfVxufSk7XG4iXX0=