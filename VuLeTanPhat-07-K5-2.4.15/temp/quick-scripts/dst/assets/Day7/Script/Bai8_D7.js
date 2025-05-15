
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai8_D7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '304f1H+qG9Erbnagqg6LNUR', 'Bai8_D7');
// Day7/Script/Bai8_D7.js

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
      // dinh nghia no la 1 promisify
      return function () {
        //tra ve ham moi, nhan tat ca doi so args truyen vao ham
        try {
          var result = fn.apply(void 0, arguments); // goi ham fn goc voi cac doi so;

          return result instanceof Promise ? result : Promise.resolve(result); // ep no thanh promise, neu la promise thi thoi, con k ep no thanh promise
        } catch (err) {
          return Promise.reject(err); // tra ve promise reject
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
              // gan promisify
              latency = serverTime - localTime; //tinh do tre

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk4X0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGltZUxhYmVsIiwiTGFiZWwiLCJzdGFydCIsImdldExvY2FsVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiZ2V0U2VydmVyVGltZSIsImZldGNoIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9TdHJpbmciLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJkYXRlSGVhZGVyIiwiZ2V0IiwiRXJyb3IiLCJlcnJvciIsIm5vdyIsInByb21pc2lmeSIsImZuIiwicmVzdWx0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJlcnIiLCJyZWplY3QiLCJsb2NhbFRpbWUiLCJzZXJ2ZXJUaW1lIiwibGF0ZW5jeSIsImxvZyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7Ozs7OztBQURBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNQLFdBQVNELEVBQUUsQ0FBQ0UsU0FETDtFQUdQQyxVQUFVLEVBQUU7SUFDVkMsU0FBUyxFQUFFSixFQUFFLENBQUNLO0VBREosQ0FITDtFQU9QQyxLQVBPLG1CQU9DO0lBQUE7O0lBQ047SUFDQSxTQUFTQyxZQUFULEdBQXdCO01BQ3RCLE9BQU8sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVA7SUFDRCxDQUpLLENBTU47OztJQU5NLFNBT1NDLGFBUFQ7TUFBQTtJQUFBLEVBeUJOOzs7SUF6Qk07TUFBQSw0RUFPTjtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFMkJDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsUUFBckIsRUFBRCxFQUFrQztrQkFDNURDLE1BQU0sRUFBRSxNQURvRDtrQkFFNURDLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7a0JBRFQ7Z0JBRm1ELENBQWxDLENBRmhDOztjQUFBO2dCQUVVQyxRQUZWO2dCQVNVQyxVQVRWLEdBU3VCRCxRQUFRLENBQUNELE9BQVQsQ0FBaUJHLEdBQWpCLENBQXFCLE1BQXJCLENBVHZCOztnQkFBQSxJQVVTRCxVQVZUO2tCQUFBO2tCQUFBO2dCQUFBOztnQkFBQSxNQVUyQixJQUFJRSxLQUFKLENBQVUsc0JBQVYsQ0FWM0I7O2NBQUE7Z0JBQUEsa0NBV1csSUFBSWIsSUFBSixDQUFTVyxVQUFULEVBQXFCVixPQUFyQixFQVhYOztjQUFBO2dCQUFBO2dCQUFBO2dCQWFJVCxFQUFFLENBQUNzQixLQUFILENBQVMsb0JBQVQ7Z0JBYkosa0NBY1dkLElBQUksQ0FBQ2UsR0FBTCxFQWRYOztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDQVBNO01BQUE7SUFBQTs7SUEwQk4sU0FBU0MsU0FBVCxDQUFtQkMsRUFBbkIsRUFBdUI7TUFBRTtNQUN2QixPQUFPLFlBQW1CO1FBQUU7UUFDMUIsSUFBSTtVQUNGLElBQU1DLE1BQU0sR0FBR0QsRUFBRSxNQUFGLG1CQUFmLENBREUsQ0FDd0I7O1VBQzFCLE9BQU9DLE1BQU0sWUFBWUMsT0FBbEIsR0FBNEJELE1BQTVCLEdBQXFDQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JGLE1BQWhCLENBQTVDLENBRkUsQ0FFa0U7UUFDckUsQ0FIRCxDQUdFLE9BQU9HLEdBQVAsRUFBWTtVQUNaLE9BQU9GLE9BQU8sQ0FBQ0csTUFBUixDQUFlRCxHQUFmLENBQVAsQ0FEWSxDQUNlO1FBQzVCO01BQ0YsQ0FQRDtJQVFELENBbkNLLENBcUNOOzs7SUFDQSwyREFBQztNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBLE9BQ3lCTCxTQUFTLENBQUNqQixZQUFELENBQVQsRUFEekI7O1lBQUE7Y0FDT3dCLFNBRFA7Y0FBQTtjQUFBLE9BRTBCUCxTQUFTLENBQUNkLGFBQUQsQ0FBVCxFQUYxQjs7WUFBQTtjQUVPc0IsVUFGUDtjQUVxRDtjQUM5Q0MsT0FIUCxHQUdpQkQsVUFBVSxHQUFHRCxTQUg5QixFQUd5Qzs7Y0FFbENMLE1BTFAsb0JBSytCSyxTQUwvQix1QkFLMERDLFVBTDFELGlDQUtpRkMsT0FMakY7Y0FNQ2pDLEVBQUUsQ0FBQ2tDLEdBQUgsQ0FBT1IsTUFBUDtjQUNBLEtBQUksQ0FBQ3RCLFNBQUwsQ0FBZStCLE1BQWYsR0FBd0JULE1BQXhCOztZQVBEO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUQ7RUFTRDtBQXRETSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdGltZUxhYmVsOiBjYy5MYWJlbCxcbiAgfSxcblxuICBzdGFydCgpIHtcbiAgICAvLyBIw6BtIHRoxrDhu51uZ1xuICAgIGZ1bmN0aW9uIGdldExvY2FsVGltZSgpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG5cbiAgICAvLyBIw6BtIGFzeW5jXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyVGltZSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2luZG93LmxvY2F0aW9uLmhyZWYudG9TdHJpbmcoKSwge1xuICAgICAgICAgIG1ldGhvZDogJ0hFQUQnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGF0ZUhlYWRlciA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiRGF0ZVwiKTtcbiAgICAgICAgaWYgKCFkYXRlSGVhZGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJLaMO0bmcgY8OzIERhdGUgaGVhZGVyXCIpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZUhlYWRlcikuZ2V0VGltZSgpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNjLmVycm9yKFwiTOG7l2kgZ2V0U2VydmVyVGltZTpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7IC8vIGZhbGxiYWNrXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSMOgbSBwcm9taXNpZnlcbiAgICBmdW5jdGlvbiBwcm9taXNpZnkoZm4pIHsgLy8gZGluaCBuZ2hpYSBubyBsYSAxIHByb21pc2lmeVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7IC8vdHJhIHZlIGhhbSBtb2ksIG5oYW4gdGF0IGNhIGRvaSBzbyBhcmdzIHRydXllbiB2YW8gaGFtXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oLi4uYXJncykvLyBnb2kgaGFtIGZuIGdvYyB2b2kgY2FjIGRvaSBzbztcbiAgICAgICAgICByZXR1cm4gcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSA/IHJlc3VsdCA6IFByb21pc2UucmVzb2x2ZShyZXN1bHQpOy8vIGVwIG5vIHRoYW5oIHByb21pc2UsIG5ldSBsYSBwcm9taXNlIHRoaSB0aG9pLCBjb24gayBlcCBubyB0aGFuaCBwcm9taXNlXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpOy8vIHRyYSB2ZSBwcm9taXNlIHJlamVjdFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIENo4bqheSB0aOG7rVxuICAgIChhc3luYyAoKSA9PiB7Ly8gdGFvIHZhIGdvaSBoYW0gYXN5bmMgYW4gZGFuaCwgZHVuZyBkZSBhd2FpdCBiZW4gdHJvbmdcbiAgICAgIGNvbnN0IGxvY2FsVGltZSA9IGF3YWl0IHByb21pc2lmeShnZXRMb2NhbFRpbWUpKCk7Ly8gZ2FuIHByb21pc2lmeVxuICAgICAgY29uc3Qgc2VydmVyVGltZSA9IGF3YWl0IHByb21pc2lmeShnZXRTZXJ2ZXJUaW1lKSgpOy8vIGdhbiBwcm9taXNpZnlcbiAgICAgIGNvbnN0IGxhdGVuY3kgPSBzZXJ2ZXJUaW1lIC0gbG9jYWxUaW1lOyAvL3RpbmggZG8gdHJlXG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGBMb2NhbCBUaW1lOiAke2xvY2FsVGltZX1cXG5TZXJ2ZXIgVGltZTogJHtzZXJ2ZXJUaW1lfVxcbsSQ4buZIHRy4buFOiAke2xhdGVuY3l9bXNgO1xuICAgICAgY2MubG9nKHJlc3VsdCk7XG4gICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSByZXN1bHQ7XG4gICAgfSkoKTtcbiAgfVxufSk7XG4iXX0=