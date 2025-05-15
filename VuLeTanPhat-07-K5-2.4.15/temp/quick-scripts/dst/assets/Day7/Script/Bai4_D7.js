
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai4_D7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e08bdHWWwlIVLaaa28LKEDF', 'Bai4_D7');
// Day7/Script/Bai4_D7.js

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
    logLabel: cc.Label
  },
  start: function start() {
    var _this = this;

    var Store = /*#__PURE__*/function () {
      function Store(name) {
        this.name = name;
        this.dependencies = [];
      } // them store phu thuoc vao


      var _proto = Store.prototype;

      _proto.wait = function wait(store) {
        this.dependencies.push(store);
      } // Giai quyet theo thu tu phu thuoc
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
                  // neu da xu ly bo qua, tranh lap vo han, DONG NAY KEY, neu da kiem tra roi thi kiem tra store ke tiep
                  visited.add(this); // Danh dau da xu ly ( neu chua danh dau da xu ly)
                  // Giai quyet cac phu thuoc

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

                  results.push(this.name); // luu ten vao store

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
                visited = new Set(); // Danh dau store da thuc hien

                results = []; // Luu ket qua store theo thu tu

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk0X0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibG9nTGFiZWwiLCJMYWJlbCIsInN0YXJ0IiwiU3RvcmUiLCJuYW1lIiwiZGVwZW5kZW5jaWVzIiwid2FpdCIsInN0b3JlIiwicHVzaCIsInJlc29sdmUiLCJzdGVwVGltZSIsInZpc2l0ZWQiLCJyZXN1bHRzIiwibG9nRnVuYyIsIlNldCIsImhhcyIsImFkZCIsImRlcCIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwibG9nIiwiY29udHJpYnV0ZSIsInN0b3JlcyIsImZpbmFsTG9nIiwiam9pbiIsImxvZ1RvTGFiZWwiLCJtc2ciLCJzdHJpbmciLCJzdG9yZTEiLCJzdG9yZTIiLCJzdG9yZTMiLCJzdG9yZTQiLCJzdG9yZTUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7Ozs7Ozs7QUFEQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNQLFdBQVNELEVBQUUsQ0FBQ0UsU0FETDtFQUdQQyxVQUFVLEVBQUU7SUFDVkMsUUFBUSxFQUFFSixFQUFFLENBQUNLO0VBREgsQ0FITDtFQU9QQyxLQVBPLG1CQU9DO0lBQUE7O0lBQUEsSUFDQUMsS0FEQTtNQUVKLGVBQVlDLElBQVosRUFBa0I7UUFDaEIsS0FBS0EsSUFBTCxHQUFZQSxJQUFaO1FBQ0EsS0FBS0MsWUFBTCxHQUFvQixFQUFwQjtNQUNELENBTEcsQ0FPSjs7O01BUEk7O01BQUEsT0FRSkMsSUFSSSxHQVFKLGNBQUtDLEtBQUwsRUFBWTtRQUNWLEtBQUtGLFlBQUwsQ0FBa0JHLElBQWxCLENBQXVCRCxLQUF2QjtNQUNELENBVkcsQ0FZSjtNQVpJOztNQUFBLE9BYUVFLE9BYkY7TUFBQTtNQUFBO1FBQUEsMEVBYUosaUJBQWNDLFFBQWQsRUFBd0JDLE9BQXhCLEVBQTZDQyxPQUE3QyxFQUEyREMsT0FBM0Q7VUFBQTs7VUFBQTtZ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QUFHLElBQUk3QixLQUFKLENBQVUsU0FBVixDQUFmLENBM0RNLENBNkROO0lBQ0E7O0lBQ0F5QixNQUFNLENBQUN0QixJQUFQLENBQVl3QixNQUFaO0lBQ0FBLE1BQU0sQ0FBQ3hCLElBQVAsQ0FBWXVCLE1BQVo7SUFDQUEsTUFBTSxDQUFDdkIsSUFBUCxDQUFZMEIsTUFBWjtJQUNBQSxNQUFNLENBQUMxQixJQUFQLENBQVl5QixNQUFaLEVBbEVNLENBb0VOOztJQUNBLEtBQUsvQixRQUFMLENBQWMyQixNQUFkLEdBQXVCLEVBQXZCLENBckVNLENBcUVxQjs7SUFDM0JOLFVBQVUsQ0FBQyxDQUFELEVBQUlJLFVBQUosRUFBZ0JHLE1BQWhCLEVBQXdCQyxNQUF4QixFQUFnQ0MsTUFBaEMsRUFBd0NDLE1BQXhDLEVBQWdEQyxNQUFoRCxDQUFWLENBdEVNLENBdUVOO0VBQ0Q7QUEvRU0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy9tYSBvaSBiYWkgbmF5IGtob25nIGhpZXUgZ2kgaGV0XG5cbmNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICBsb2dMYWJlbDogY2MuTGFiZWwsIFxuICB9LFxuXG4gIHN0YXJ0KCkge1xuICAgIGNsYXNzIFN0b3JlIHtcbiAgICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTsgXG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gW107XG4gICAgICB9XG5cbiAgICAgIC8vIHRoZW0gc3RvcmUgcGh1IHRodW9jIHZhb1xuICAgICAgd2FpdChzdG9yZSkge1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llcy5wdXNoKHN0b3JlKTtcbiAgICAgIH1cblxuICAgICAgLy8gR2lhaSBxdXlldCB0aGVvIHRodSB0dSBwaHUgdGh1b2NcbiAgICAgIGFzeW5jIHJlc29sdmUoc3RlcFRpbWUsIHZpc2l0ZWQgPSBuZXcgU2V0KCksIHJlc3VsdHMgPSBbXSwgbG9nRnVuYykge1xuICAgICAgICBpZiAodmlzaXRlZC5oYXModGhpcykpIHJldHVybjsgLy8gbmV1IGRhIHh1IGx5IGJvIHF1YSwgdHJhbmggbGFwIHZvIGhhbiwgRE9ORyBOQVkgS0VZLCBuZXUgZGEga2llbSB0cmEgcm9pIHRoaSBraWVtIHRyYSBzdG9yZSBrZSB0aWVwXG5cbiAgICAgICAgdmlzaXRlZC5hZGQodGhpcyk7IC8vIERhbmggZGF1IGRhIHh1IGx5ICggbmV1IGNodWEgZGFuaCBkYXUgZGEgeHUgbHkpXG5cbiAgICAgICAgLy8gR2lhaSBxdXlldCBjYWMgcGh1IHRodW9jXG4gICAgICAgIGZvciAoY29uc3QgZGVwIG9mIHRoaXMuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICAgYXdhaXQgZGVwLnJlc29sdmUoc3RlcFRpbWUsIHZpc2l0ZWQsIHJlc3VsdHMsIGxvZ0Z1bmMpOy8vIGdvaSBERVFVWSBkZSBnaWFpIHF1eWV0IGNhYyBzdG9yZSBjbyBjaHVhIGNhYyBwaHUgdGh1b2MoTmV1IGsgY28gcGh1IHRodW9jIHRoaSBmb3Igc2UgYm8gcXVhLCB4dSBseSBuZ2F5IHRoYW5nIHN0b3JlIGhpZW4gdGFpKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gxJDhu6NpIHN0ZXBUaW1lIHMgdHJ1b2Mga2hpIGdpYWkgcXV5ZXRcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHN0ZXBUaW1lICogMTAwMCkpO1xuXG4gICAgICAgIGNjLmxvZyh0aGlzLm5hbWUpOyAvLyBJbiB0w6puIHN0b3JlIHJhIGNvbnNvbGVcbiAgICAgICAgbG9nRnVuYyh0aGlzLm5hbWUpOyAvLyBHaGkgbG9nIHbDoG8gTGFiZWwgVUlcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubmFtZSk7IC8vIGx1dSB0ZW4gdmFvIHN0b3JlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g4pSA4pSA4pSAIEZVTkNUSU9OIENPTlRSSUJVVEUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgLy8gSMOgbSBjaMOtbmggdGjhu7FjIHRoaSB0b8OgbiBi4buZIGPDoWMgc3RvcmUgdHJ1eeG7gW4gdsOgbyB0aGVvIMSRw7puZyB0aOG7qSB04buxIHBo4bulIHRodeG7mWNcbiAgICBhc3luYyBmdW5jdGlvbiBjb250cmlidXRlKHN0ZXBUaW1lLCBsb2dGdW5jLCAuLi5zdG9yZXMpIHtcbiAgICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KCk7IC8vIERhbmggZGF1IHN0b3JlIGRhIHRodWMgaGllblxuICAgICAgY29uc3QgcmVzdWx0cyA9IFtdOyAvLyBMdXUga2V0IHF1YSBzdG9yZSB0aGVvIHRodSB0dVxuXG4gICAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIHN0b3Jlcykge1xuICAgICAgICBhd2FpdCBzdG9yZS5yZXNvbHZlKHN0ZXBUaW1lLCB2aXNpdGVkLCByZXN1bHRzLCBsb2dGdW5jKTsgLy8gZ2lhaSBxdXlldCB0dW5nIHN0b3JlXG4gICAgICB9XG5cbiAgICAgIC8vIFNhdSBraGkgdOG6pXQgY+G6oyBzdG9yZSB4b25nLCBsb2cga+G6v3QgcXXhuqMgY3Xhu5FpIGPDuW5nXG4gICAgICBjb25zdCBmaW5hbExvZyA9ICdIb8OgbiB04bqldDogJyArIHJlc3VsdHMuam9pbignIOKGkiAnKTtcbiAgICAgIGNjLmxvZyhmaW5hbExvZyk7XG4gICAgICBsb2dGdW5jKGZpbmFsTG9nKTtcbiAgICB9XG5cbiAgICAvLyDilIDilIDilIAgTE9HIEhFTFBFUiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgICAvLyBHaGkgbeG7mXQgZMOybmcgbG9nIHbDoG8gTGFiZWwgVUlcbiAgICBjb25zdCBsb2dUb0xhYmVsID0gKG1zZykgPT4ge1xuICAgICAgdGhpcy5sb2dMYWJlbC5zdHJpbmcgKz0gbXNnICsgJ1xcbic7XG4gICAgfTtcblxuICAgIC8vIOKUgOKUgOKUgCBU4bqgTyBDw4FDIFNUT1JFICYgUEjhu6QgVEhV4buYQyDilIDilIDilIDilIDilIDilIDilIBcbiAgICBjb25zdCBzdG9yZTEgPSBuZXcgU3RvcmUoJ3N0b3JlXzEnKTtcbiAgICBjb25zdCBzdG9yZTIgPSBuZXcgU3RvcmUoJ3N0b3JlXzInKTtcbiAgICBjb25zdCBzdG9yZTMgPSBuZXcgU3RvcmUoJ3N0b3JlXzMnKTtcbiAgICBjb25zdCBzdG9yZTQgPSBuZXcgU3RvcmUoJ3N0b3JlXzQnKTtcbiAgICBjb25zdCBzdG9yZTUgPSBuZXcgU3RvcmUoJ3N0b3JlXzUnKTtcblxuICAgIC8vIFRoaeG6v3QgbOG6rXAgcXVhbiBo4buHIHBo4bulIHRodeG7mWM6XG4gICAgLy8gc3RvcmUxIC0+IHN0b3JlMyAtPiBzdG9yZTIgLT4gc3RvcmU1IC0+IHN0b3JlNFxuICAgIHN0b3JlMS53YWl0KHN0b3JlMyk7XG4gICAgc3RvcmUzLndhaXQoc3RvcmUyKTtcbiAgICBzdG9yZTIud2FpdChzdG9yZTUpO1xuICAgIHN0b3JlNS53YWl0KHN0b3JlNCk7XG5cbiAgICAvLyDilIDilIDilIAgVEjhu7BDIFRISSBDSMONTkgg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgdGhpcy5sb2dMYWJlbC5zdHJpbmcgPSAnJzsgLy8gWMOzYSBu4buZaSBkdW5nIGxhYmVsIHRyxrDhu5tjIGtoaSBjaOG6oXlcbiAgICBjb250cmlidXRlKDMsIGxvZ1RvTGFiZWwsIHN0b3JlMSwgc3RvcmUyLCBzdG9yZTMsIHN0b3JlNCwgc3RvcmU1KTtcbiAgICAvLyBH4buNaSBjb250cmlidXRlKCkgduG7m2kgZGVsYXkgMyBnacOieSBnaeG7r2EgbeG7l2kgYsaw4bubY1xuICB9XG59KTtcbiJdfQ==