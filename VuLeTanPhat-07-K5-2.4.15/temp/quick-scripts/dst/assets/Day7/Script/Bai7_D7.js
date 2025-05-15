
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai7_D7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40a18eiTVNHYoNycm4dDpmp', 'Bai7_D7');
// Day7/Script/Bai7_D7.js

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
    //dc goi khi node được tạo
    // Truyền label xuống LazyMan để in ra
    var lazyMan = new LazyMan('jack', this.logLabel); //method chaining

    lazyMan.eat('apple').sleep(5000).eat('hamburger').sleep(3000).eat('pear');
  }
});

var LazyMan = /*#__PURE__*/function () {
  function LazyMan(name, label) {
    this.queue = []; // hang doi cac ham

    this.label = label; // giữ tham chiếu label

    this.sayName(name); // hanh dong dau tien them vao queue

    this._run(); // bắt đầu thực thi hàng đợi

  }

  var _proto = LazyMan.prototype;

  _proto._log = function _log(message) {
    cc.log(message); // in ra console

    if (this.label) {
      this.label.string += message + '\n'; // them vao label
    }
  };

  _proto.sayName = function sayName(name) {
    var _this = this;

    // them 1 ham vao queue
    this.queue.push(function () {
      // 
      _this._log("My name is " + name); //lgo name


      return Promise.resolve(); //tra ve promise hoan thanh
    });
  };

  _proto.eat = function eat(food) {
    var _this2 = this;

    this.queue.push(function () {
      _this2._log("I am eating " + food);

      return Promise.resolve();
    });
    return this; // de chaining lien ket .sleep().eat() lien tuc
  };

  _proto.sleep = function sleep(ms) {
    var _this3 = this;

    this.queue.push(function () {
      // them vao queue, them setTimeout()
      _this3._log("I am sleeping...");

      return new Promise(function (resolve) {
        setTimeout(function () {
          _this3._log("After " + ms / 1000 + " seconds");

          resolve();
        }, ms); // sleep xong goi resolve
      });
    });
    return this; // de chaining lien ket .sleep().eat() lien tuc
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk3X0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibG9nTGFiZWwiLCJMYWJlbCIsInN0YXJ0IiwibGF6eU1hbiIsIkxhenlNYW4iLCJlYXQiLCJzbGVlcCIsIm5hbWUiLCJsYWJlbCIsInF1ZXVlIiwic2F5TmFtZSIsIl9ydW4iLCJfbG9nIiwibWVzc2FnZSIsImxvZyIsInN0cmluZyIsInB1c2giLCJQcm9taXNlIiwicmVzb2x2ZSIsImZvb2QiLCJtcyIsInNldFRpbWVvdXQiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7Ozs7Ozs7QUFEQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFO0lBQ1ZDLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxLQURILENBQ1U7O0VBRFYsQ0FITDtFQU9QQyxLQVBPLG1CQU9DO0lBQUU7SUFDUjtJQUNBLElBQU1DLE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVksTUFBWixFQUFvQixLQUFLSixRQUF6QixDQUFoQixDQUZNLENBRTZDOztJQUNuREcsT0FBTyxDQUNKRSxHQURILENBQ08sT0FEUCxFQUVHQyxLQUZILENBRVMsSUFGVCxFQUdHRCxHQUhILENBR08sV0FIUCxFQUlHQyxLQUpILENBSVMsSUFKVCxFQUtHRCxHQUxILENBS08sTUFMUDtFQU1EO0FBaEJNLENBQVQ7O0lBbUJNRDtFQUNKLGlCQUFZRyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QjtJQUN2QixLQUFLQyxLQUFMLEdBQWEsRUFBYixDQUR1QixDQUNOOztJQUNqQixLQUFLRCxLQUFMLEdBQWFBLEtBQWIsQ0FGdUIsQ0FFSDs7SUFDcEIsS0FBS0UsT0FBTCxDQUFhSCxJQUFiLEVBSHVCLENBR0o7O0lBQ25CLEtBQUtJLElBQUwsR0FKdUIsQ0FJVjs7RUFDZDs7OztTQUVEQyxPQUFBLGNBQUtDLE9BQUwsRUFBYztJQUNaakIsRUFBRSxDQUFDa0IsR0FBSCxDQUFPRCxPQUFQLEVBRFksQ0FDSTs7SUFDaEIsSUFBSSxLQUFLTCxLQUFULEVBQWdCO01BQ2QsS0FBS0EsS0FBTCxDQUFXTyxNQUFYLElBQXFCRixPQUFPLEdBQUcsSUFBL0IsQ0FEYyxDQUN1QjtJQUN0QztFQUNGOztTQUVESCxVQUFBLGlCQUFRSCxJQUFSLEVBQWM7SUFBQTs7SUFBRTtJQUNkLEtBQUtFLEtBQUwsQ0FBV08sSUFBWCxDQUFnQixZQUFNO01BQUU7TUFDdEIsS0FBSSxDQUFDSixJQUFMLGlCQUF3QkwsSUFBeEIsRUFEb0IsQ0FDYTs7O01BQ2pDLE9BQU9VLE9BQU8sQ0FBQ0MsT0FBUixFQUFQLENBRm9CLENBRUs7SUFDMUIsQ0FIRDtFQUlEOztTQUVEYixNQUFBLGFBQUljLElBQUosRUFBVTtJQUFBOztJQUNSLEtBQUtWLEtBQUwsQ0FBV08sSUFBWCxDQUFnQixZQUFNO01BQ3BCLE1BQUksQ0FBQ0osSUFBTCxrQkFBeUJPLElBQXpCOztNQUNBLE9BQU9GLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0lBQ0QsQ0FIRDtJQUlBLE9BQU8sSUFBUCxDQUxRLENBS0k7RUFDYjs7U0FFRFosUUFBQSxlQUFNYyxFQUFOLEVBQVU7SUFBQTs7SUFDUixLQUFLWCxLQUFMLENBQVdPLElBQVgsQ0FBZ0IsWUFBTTtNQUFFO01BQ3RCLE1BQUksQ0FBQ0osSUFBTDs7TUFDQSxPQUFPLElBQUlLLE9BQUosQ0FBWSxVQUFBQyxPQUFPLEVBQUk7UUFDNUJHLFVBQVUsQ0FBQyxZQUFNO1VBQ2YsTUFBSSxDQUFDVCxJQUFMLFlBQW1CUSxFQUFFLEdBQUcsSUFBeEI7O1VBQ0FGLE9BQU87UUFDUixDQUhTLEVBR1BFLEVBSE8sQ0FBVixDQUQ0QixDQUlyQjtNQUNSLENBTE0sQ0FBUDtJQU1ELENBUkQ7SUFTQSxPQUFPLElBQVAsQ0FWUSxDQVVJO0VBQ2I7O1NBRUtUOzJFQUFOO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQSw0Q0FDdUIsS0FBS0YsS0FENUI7O1lBQUE7Y0FBQTtnQkFBQTtnQkFBQTtjQUFBOztjQUNhYSxNQURiO2NBQUE7Y0FBQSxPQUVVQSxNQUFNLEVBRmhCOztZQUFBO2NBQUE7Y0FBQTs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGxvZ0xhYmVsOiBjYy5MYWJlbCwgLy8ga8OpbyBub2RlIExhYmVsIHbDoG8gxJHDonlcbiAgfSxcblxuICBzdGFydCgpIHsgLy9kYyBnb2kga2hpIG5vZGUgxJHGsOG7o2MgdOG6oW9cbiAgICAvLyBUcnV54buBbiBsYWJlbCB4deG7kW5nIExhenlNYW4gxJHhu4MgaW4gcmFcbiAgICBjb25zdCBsYXp5TWFuID0gbmV3IExhenlNYW4oJ2phY2snLCB0aGlzLmxvZ0xhYmVsKTsvL21ldGhvZCBjaGFpbmluZ1xuICAgIGxhenlNYW5cbiAgICAgIC5lYXQoJ2FwcGxlJylcbiAgICAgIC5zbGVlcCg1MDAwKVxuICAgICAgLmVhdCgnaGFtYnVyZ2VyJylcbiAgICAgIC5zbGVlcCgzMDAwKVxuICAgICAgLmVhdCgncGVhcicpO1xuICB9LFxufSk7XG5cbmNsYXNzIExhenlNYW4ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsYWJlbCkge1xuICAgIHRoaXMucXVldWUgPSBbXTsgLy8gaGFuZyBkb2kgY2FjIGhhbVxuICAgIHRoaXMubGFiZWwgPSBsYWJlbDsgLy8gZ2nhu68gdGhhbSBjaGnhur91IGxhYmVsXG4gICAgdGhpcy5zYXlOYW1lKG5hbWUpOy8vIGhhbmggZG9uZyBkYXUgdGllbiB0aGVtIHZhbyBxdWV1ZVxuICAgIHRoaXMuX3J1bigpOyAvLyBi4bqvdCDEkeG6p3UgdGjhu7FjIHRoaSBow6BuZyDEkeG7o2lcbiAgfVxuXG4gIF9sb2cobWVzc2FnZSkge1xuICAgIGNjLmxvZyhtZXNzYWdlKTsvLyBpbiByYSBjb25zb2xlXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwuc3RyaW5nICs9IG1lc3NhZ2UgKyAnXFxuJzsgLy8gdGhlbSB2YW8gbGFiZWxcbiAgICB9XG4gIH1cblxuICBzYXlOYW1lKG5hbWUpIHsgLy8gdGhlbSAxIGhhbSB2YW8gcXVldWVcbiAgICB0aGlzLnF1ZXVlLnB1c2goKCkgPT4geyAvLyBcbiAgICAgIHRoaXMuX2xvZyhgTXkgbmFtZSBpcyAke25hbWV9YCk7IC8vbGdvIG5hbWVcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsvL3RyYSB2ZSBwcm9taXNlIGhvYW4gdGhhbmhcbiAgICB9KTtcbiAgfVxuXG4gIGVhdChmb29kKSB7XG4gICAgdGhpcy5xdWV1ZS5wdXNoKCgpID0+IHtcbiAgICAgIHRoaXMuX2xvZyhgSSBhbSBlYXRpbmcgJHtmb29kfWApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzOy8vIGRlIGNoYWluaW5nIGxpZW4ga2V0IC5zbGVlcCgpLmVhdCgpIGxpZW4gdHVjXG4gIH1cblxuICBzbGVlcChtcykge1xuICAgIHRoaXMucXVldWUucHVzaCgoKSA9PiB7IC8vIHRoZW0gdmFvIHF1ZXVlLCB0aGVtIHNldFRpbWVvdXQoKVxuICAgICAgdGhpcy5fbG9nKGBJIGFtIHNsZWVwaW5nLi4uYCk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2xvZyhgQWZ0ZXIgJHttcyAvIDEwMDB9IHNlY29uZHNgKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIG1zKTsvLyBzbGVlcCB4b25nIGdvaSByZXNvbHZlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpczsvLyBkZSBjaGFpbmluZyBsaWVuIGtldCAuc2xlZXAoKS5lYXQoKSBsaWVuIHR1Y1xuICB9XG5cbiAgYXN5bmMgX3J1bigpIHsgLy8gY2hheSBsYW4gbHVvdCBhY3Rpb25cbiAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiB0aGlzLnF1ZXVlKSB7XG4gICAgICBhd2FpdCBhY3Rpb24oKTsgLy9hd2FpdCBkZSBjaGF5IGxhbiBsdW90XG4gICAgfVxuICB9XG59XG4iXX0=