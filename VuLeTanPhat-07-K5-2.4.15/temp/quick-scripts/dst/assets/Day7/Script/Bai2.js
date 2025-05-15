
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