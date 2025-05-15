
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai9_D7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b485IfcTJMvYvohlEvMDD8', 'Bai9_D7');
// Day7/Script/Bai9_D7.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk5X0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib3V0cHV0TGFiZWwiLCJMYWJlbCIsInN0YXJ0IiwidGVzdENpcmN1aXRCcmVha2VyIiwiZ2V0U2VydmVyVGltZSIsImZldGNoIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9TdHJpbmciLCJtZXRob2QiLCJyZXNwb25zZSIsImRhdGVIZWFkZXIiLCJoZWFkZXJzIiwiZ2V0IiwiRXJyb3IiLCJEYXRlIiwiZ2V0VGltZSIsIm5vdyIsImNpcmN1aXRCcmVha2VyIiwiZm4iLCJ0aW1lVGhyZXNob2xkIiwiaXNPcGVuIiwic2V0VGltZW91dCIsImdldFRpbWVMaW1pdGVkIiwicmVzdWx0MSIsImxvZyIsInN0cmluZyIsInJlc3VsdDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1pDLFdBQVcsRUFBRUosRUFBRSxDQUFDSztFQURKLENBSFA7RUFPTEMsS0FQSyxtQkFPRztJQUNSLEtBQUtDLGtCQUFMO0VBQ0MsQ0FUSTtFQVdDQyxhQVhELDJCQVdpQjtJQUFBO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQSxPQUVLQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLFFBQXJCLEVBQUQsRUFBa0M7Z0JBQUVDLE1BQU0sRUFBRTtjQUFWLENBQWxDLENBRlY7O1lBQUE7Y0FFWkMsUUFGWTtjQUdaQyxVQUhZLEdBR0NELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckIsQ0FIRDs7Y0FBQSxJQUliRixVQUphO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUEsTUFJSyxJQUFJRyxLQUFKLENBQVUsZ0JBQVYsQ0FKTDs7WUFBQTtjQUFBLGlDQUtYLElBQUlDLElBQUosQ0FBU0osVUFBVCxFQUFxQkssT0FBckIsRUFMVzs7WUFBQTtjQUFBO2NBQUE7Y0FBQSxpQ0FPWEQsSUFBSSxDQUFDRSxHQUFMLEVBUFc7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFTckIsQ0FwQkk7RUFzQkNDLGNBdEJELDBCQXNCZ0JDLEVBdEJoQixFQXNCb0JDLGFBdEJwQixFQXNCbUM7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FDcENDLE1BRG9DLEdBQzNCLElBRDJCO2NBRXhDQyxVQUFVLENBQUMsWUFBTTtnQkFDYkQsTUFBTSxHQUFHLEtBQVQ7Y0FDSCxDQUZTLEVBRVBELGFBRk8sQ0FBVjtjQUZ3QywwR0FNakM7Z0JBQUE7Z0JBQUE7a0JBQUE7b0JBQUE7c0JBQUE7d0JBQUEsS0FDQ0MsTUFERDswQkFBQTswQkFBQTt3QkFBQTs7d0JBQUE7d0JBQUEsT0FFVUYsRUFBRSxNQUFGLGdCQUZWOztzQkFBQTt3QkFBQTs7c0JBQUE7d0JBQUEsa0NBSUksZ0JBSko7O3NCQUFBO3NCQUFBO3dCQUFBO29CQUFBO2tCQUFBO2dCQUFBO2NBQUEsQ0FOaUM7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFhdkMsQ0FuQ0k7RUFxQ0NqQixrQkFyQ0QsZ0NBcUNzQjtJQUFBOztJQUFBO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUEsT0FDRSxLQUFJLENBQUNnQixjQUFMLENBQW9CLEtBQUksQ0FBQ2YsYUFBekIsRUFBd0MsSUFBeEMsQ0FERjs7WUFBQTtjQUNyQm9CLGNBRHFCO2NBRzNCRCxVQUFVLDBFQUFDO2dCQUFBO2dCQUFBO2tCQUFBO29CQUFBO3NCQUFBO3dCQUFBO3dCQUFBLE9BQ2VDLGNBQWMsRUFEN0I7O3NCQUFBO3dCQUNEQyxPQURDO3dCQUVQN0IsRUFBRSxDQUFDOEIsR0FBSCxDQUFPRCxPQUFQO3dCQUNBLEtBQUksQ0FBQ3pCLFdBQUwsQ0FBaUIyQixNQUFqQixHQUEwQixXQUFXRixPQUFyQzs7c0JBSE87c0JBQUE7d0JBQUE7b0JBQUE7a0JBQUE7Z0JBQUE7Y0FBQSxDQUFELElBSVAsR0FKTyxDQUFWO2NBTUFGLFVBQVUsMEVBQUM7Z0JBQUE7Z0JBQUE7a0JBQUE7b0JBQUE7c0JBQUE7d0JBQUE7d0JBQUEsT0FDZUMsY0FBYyxFQUQ3Qjs7c0JBQUE7d0JBQ0RJLE9BREM7d0JBRVBoQyxFQUFFLENBQUM4QixHQUFILENBQU9FLE9BQVA7d0JBQ0EsS0FBSSxDQUFDNUIsV0FBTCxDQUFpQjJCLE1BQWpCLElBQTJCLGFBQWFDLE9BQXhDOztzQkFITztzQkFBQTt3QkFBQTtvQkFBQTtrQkFBQTtnQkFBQTtjQUFBLENBQUQsSUFJUCxJQUpPLENBQVY7O1lBVDJCO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBO0VBYzFCO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgb3V0cHV0TGFiZWw6IGNjLkxhYmVsLFxuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcbiAgICB0aGlzLnRlc3RDaXJjdWl0QnJlYWtlcigpO1xuICAgIH0sXG5cbiAgICBhc3luYyBnZXRTZXJ2ZXJUaW1lKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2luZG93LmxvY2F0aW9uLmhyZWYudG9TdHJpbmcoKSwgeyBtZXRob2Q6ICdIRUFEJyB9KTtcbiAgICAgICAgY29uc3QgZGF0ZUhlYWRlciA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdEYXRlJyk7XG4gICAgICAgIGlmICghZGF0ZUhlYWRlcikgdGhyb3cgbmV3IEVycm9yKCdObyBEYXRlIGhlYWRlcicpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZUhlYWRlcikuZ2V0VGltZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7IC8vIGZhbGxiYWNrXG4gICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBjaXJjdWl0QnJlYWtlcihmbiwgdGltZVRocmVzaG9sZCkge1xuICAgIGxldCBpc09wZW4gPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpc09wZW4gPSBmYWxzZTtcbiAgICB9LCB0aW1lVGhyZXNob2xkKTtcblxuICAgIHJldHVybiBhc3luYyAoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBmbiguLi5hcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwic2VydmljZSBjbG9zZWRcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgfSxcblxuICAgIGFzeW5jIHRlc3RDaXJjdWl0QnJlYWtlcigpIHtcbiAgICBjb25zdCBnZXRUaW1lTGltaXRlZCA9IGF3YWl0IHRoaXMuY2lyY3VpdEJyZWFrZXIodGhpcy5nZXRTZXJ2ZXJUaW1lLCAyMDAwKTtcblxuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQxID0gYXdhaXQgZ2V0VGltZUxpbWl0ZWQoKTtcbiAgICAgICAgY2MubG9nKHJlc3VsdDEpO1xuICAgICAgICB0aGlzLm91dHB1dExhYmVsLnN0cmluZyA9ICdLUSAxOiAnICsgcmVzdWx0MTtcbiAgICB9LCAzMDApO1xuXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDIgPSBhd2FpdCBnZXRUaW1lTGltaXRlZCgpO1xuICAgICAgICBjYy5sb2cocmVzdWx0Mik7XG4gICAgICAgIHRoaXMub3V0cHV0TGFiZWwuc3RyaW5nICs9ICdcXG5LUSAyOiAnICsgcmVzdWx0MjtcbiAgICB9LCAyMTAwKTtcbiAgICB9XG5cbn0pO1xuIl19