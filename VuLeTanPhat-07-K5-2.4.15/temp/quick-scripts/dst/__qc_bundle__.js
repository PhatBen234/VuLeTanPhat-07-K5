
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
                    var __filename = 'preview-scripts/assets/Day6/Bai15.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3455bPejOVEg4aclith3V7w', 'Bai15');
// Day6/Bai15.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function asyncFunc1() {
  return _asyncFunc.apply(this, arguments);
}

function _asyncFunc() {
  _asyncFunc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // ham async await
            console.log("Started asyncFunc1");
            _context.next = 3;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 3000);
            });

          case 3:
            return _context.abrupt("return", "Result from asyncFunc1");

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncFunc.apply(this, arguments);
}

function asyncFunc2() {
  return _asyncFunc2.apply(this, arguments);
}

function _asyncFunc2() {
  _asyncFunc2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // ham async await
            console.log("Started asyncFunc2");
            _context2.next = 3;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 2000);
            });

          case 3:
            return _context2.abrupt("return", "Result from asyncFunc2");

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _asyncFunc2.apply(this, arguments);
}

function asyncFunc3() {
  return _asyncFunc3.apply(this, arguments);
}

function _asyncFunc3() {
  _asyncFunc3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // ham async await
            console.log("Started asyncFunc3");
            _context3.next = 3;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 1000);
            });

          case 3:
            return _context3.abrupt("return", "Result from asyncFunc3");

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _asyncFunc3.apply(this, arguments);
}

function timeoutFunc() {
  // ham tra ve promise bi reject sau 1.5s
  return new Promise(function (_, reject) {
    // promise reject - tra qua ket qua loi~, bo qua resolve (_)
    setTimeout(function () {
      reject("⏰ Timeout after 1.5s");
    }, 1500); //sau 1.5s se bi loai
  });
}

var asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3]; //mang chua cac ham async await, chua goi

var promiseArr = asyncArr.map(function (fn) {
  return fn();
}); // call tung ham, bien no thanh promise

promiseArr.push(timeoutFunc()); // su dung ham timeout o tren, noi thang ra la them ham promise timeout vao mang, gioi han thoi gian cho`

Promise.race(promiseArr) // promise race lay ket qua dau tien tra ve (resolve or reject)
.then(function (result) {
  return console.log("✅ First result:", result);
})["catch"](function (error) {
  return console.error("❌ Error or Timeout:", error);
}); // in ra cac ham async/await ngay lap tuc
// phia promise hien ra ket qua nhanh nhat chinh la asyncFunc3

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTE1LmpzIl0sIm5hbWVzIjpbImFzeW5jRnVuYzEiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiYXN5bmNGdW5jMiIsImFzeW5jRnVuYzMiLCJ0aW1lb3V0RnVuYyIsIl8iLCJyZWplY3QiLCJhc3luY0FyciIsInByb21pc2VBcnIiLCJtYXAiLCJmbiIsInB1c2giLCJyYWNlIiwidGhlbiIsInJlc3VsdCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O1NBRGVBOzs7OzswRUFBZjtJQUFBO01BQUE7UUFBQTtVQUFBO1lBQThCO1lBQzVCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtZQURGO1lBQUEsT0FFUSxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztjQUFBLE9BQUlDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVLElBQVYsQ0FBZDtZQUFBLENBQW5CLENBRlI7O1VBQUE7WUFBQSxpQ0FHUyx3QkFIVDs7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTs7OztTQU1lRTs7Ozs7MkVBQWY7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUE4QjtZQUM1QkwsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7WUFERjtZQUFBLE9BRVEsSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU87Y0FBQSxPQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVSxJQUFWLENBQWQ7WUFBQSxDQUFuQixDQUZSOztVQUFBO1lBQUEsa0NBR1Msd0JBSFQ7O1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUE7Ozs7U0FNZUc7Ozs7OzJFQUFmO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBOEI7WUFDNUJOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO1lBREY7WUFBQSxPQUVRLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO2NBQUEsT0FBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVUsSUFBVixDQUFkO1lBQUEsQ0FBbkIsQ0FGUjs7VUFBQTtZQUFBLGtDQUdTLHdCQUhUOztVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBOzs7O0FBTUEsU0FBU0ksV0FBVCxHQUF1QjtFQUFFO0VBQ3ZCLE9BQU8sSUFBSUwsT0FBSixDQUFZLFVBQUNNLENBQUQsRUFBSUMsTUFBSixFQUFlO0lBQUU7SUFDbENMLFVBQVUsQ0FBQyxZQUFNO01BQ2ZLLE1BQU0sQ0FBQyxzQkFBRCxDQUFOO0lBQ0QsQ0FGUyxFQUVQLElBRk8sQ0FBVixDQURnQyxDQUd2QjtFQUNWLENBSk0sQ0FBUDtBQUtEOztBQUVELElBQU1DLFFBQVEsR0FBRyxDQUFDWCxVQUFELEVBQWFNLFVBQWIsRUFBeUJDLFVBQXpCLENBQWpCLEVBQXVEOztBQUN2RCxJQUFNSyxVQUFVLEdBQUdELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUFDLEVBQUU7RUFBQSxPQUFJQSxFQUFFLEVBQU47QUFBQSxDQUFmLENBQW5CLEVBQThDOztBQUM5Q0YsVUFBVSxDQUFDRyxJQUFYLENBQWdCUCxXQUFXLEVBQTNCLEdBQW1DOztBQUVuQ0wsT0FBTyxDQUFDYSxJQUFSLENBQWFKLFVBQWIsRUFBeUI7QUFBekIsQ0FDR0ssSUFESCxDQUNRLFVBQUFDLE1BQU07RUFBQSxPQUFJakIsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JnQixNQUEvQixDQUFKO0FBQUEsQ0FEZCxXQUVTLFVBQUFDLEtBQUs7RUFBQSxPQUFJbEIsT0FBTyxDQUFDa0IsS0FBUixDQUFjLHFCQUFkLEVBQXFDQSxLQUFyQyxDQUFKO0FBQUEsQ0FGZCxHQUlBO0FBQ0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGFzeW5jRnVuYzEoKSB7IC8vIGhhbSBhc3luYyBhd2FpdFxuICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jMVwiKTtcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMDApKTtcbiAgcmV0dXJuIFwiUmVzdWx0IGZyb20gYXN5bmNGdW5jMVwiOyAvL3RyYSBrZXQgcXVhIGtoaSB4b25nXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFzeW5jRnVuYzIoKSB7IC8vIGhhbSBhc3luYyBhd2FpdFxuICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jMlwiKTtcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKTtcbiAgcmV0dXJuIFwiUmVzdWx0IGZyb20gYXN5bmNGdW5jMlwiOyAvL3RyYSBrZXQgcXVhIGtoaSB4b25nXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFzeW5jRnVuYzMoKSB7IC8vIGhhbSBhc3luYyBhd2FpdFxuICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jM1wiKTtcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcbiAgcmV0dXJuIFwiUmVzdWx0IGZyb20gYXN5bmNGdW5jM1wiOy8vdHJhIGtldCBxdWEga2hpIHhvbmdcbn1cblxuZnVuY3Rpb24gdGltZW91dEZ1bmMoKSB7IC8vIGhhbSB0cmEgdmUgcHJvbWlzZSBiaSByZWplY3Qgc2F1IDEuNXNcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHsgLy8gcHJvbWlzZSByZWplY3QgLSB0cmEgcXVhIGtldCBxdWEgbG9pfiwgYm8gcXVhIHJlc29sdmUgKF8pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZWplY3QoXCLij7AgVGltZW91dCBhZnRlciAxLjVzXCIpOyBcbiAgICB9LCAxNTAwKTsvL3NhdSAxLjVzIHNlIGJpIGxvYWlcbiAgfSk7XG59XG5cbmNvbnN0IGFzeW5jQXJyID0gW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzNdOyAvL21hbmcgY2h1YSBjYWMgaGFtIGFzeW5jIGF3YWl0LCBjaHVhIGdvaVxuY29uc3QgcHJvbWlzZUFyciA9IGFzeW5jQXJyLm1hcChmbiA9PiBmbigpKTsgIC8vIGNhbGwgdHVuZyBoYW0sIGJpZW4gbm8gdGhhbmggcHJvbWlzZVxucHJvbWlzZUFyci5wdXNoKHRpbWVvdXRGdW5jKCkpOyAgICAvLyBzdSBkdW5nIGhhbSB0aW1lb3V0IG8gdHJlbiwgbm9pIHRoYW5nIHJhIGxhIHRoZW0gaGFtIHByb21pc2UgdGltZW91dCB2YW8gbWFuZywgZ2lvaSBoYW4gdGhvaSBnaWFuIGNob2BcblxuUHJvbWlzZS5yYWNlKHByb21pc2VBcnIpIC8vIHByb21pc2UgcmFjZSBsYXkga2V0IHF1YSBkYXUgdGllbiB0cmEgdmUgKHJlc29sdmUgb3IgcmVqZWN0KVxuICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coXCLinIUgRmlyc3QgcmVzdWx0OlwiLCByZXN1bHQpKVxuICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihcIuKdjCBFcnJvciBvciBUaW1lb3V0OlwiLCBlcnJvcikpO1xuXG4vLyBpbiByYSBjYWMgaGFtIGFzeW5jL2F3YWl0IG5nYXkgbGFwIHR1Y1xuLy8gcGhpYSBwcm9taXNlIGhpZW4gcmEga2V0IHF1YSBuaGFuaCBuaGF0IGNoaW5oIGxhIGFzeW5jRnVuYzNcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd22f9a7FvVNhahNEs6fn+pe', 'Bai1');
// Day6/Bai1.js

"use strict";

// callback goi lai HW sau 3s
setTimeout(function () {
  //setTimeout nhan function... lam doi so
  console.log("Hello World !");
}, 3000); //tuy chon thoi gian tre
// let timeoutId = setTimeout(() => {
//   console.log("Done!");
// }, 3000);
// console.log(timeoutId);
// function sayHello(name) {
//   console.log("Hello", name);
// }
// let id = setTimeout(sayHello, 2000, "Bob");
// console.log(id)
// clearTimeout(id);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTEuanMiXSwibmFtZXMiOlsic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQUEsVUFBVSxDQUFDLFlBQVc7RUFBTTtFQUN4QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNILENBRlMsRUFFUCxJQUZPLENBQVYsRUFFVTtBQVFWO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjYWxsYmFjayBnb2kgbGFpIEhXIHNhdSAzc1xuc2V0VGltZW91dChmdW5jdGlvbigpIHsgICAgIC8vc2V0VGltZW91dCBuaGFuIGZ1bmN0aW9uLi4uIGxhbSBkb2kgc29cbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkICFcIik7XG59LCAzMDAwKTsgLy90dXkgY2hvbiB0aG9pIGdpYW4gdHJlXG5cblxuXG5cblxuXG5cbi8vIGxldCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgY29uc29sZS5sb2coXCJEb25lIVwiKTtcbi8vIH0sIDMwMDApO1xuXG4vLyBjb25zb2xlLmxvZyh0aW1lb3V0SWQpO1xuXG4vLyBmdW5jdGlvbiBzYXlIZWxsbyhuYW1lKSB7XG4vLyAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIiwgbmFtZSk7XG4vLyB9XG5cbi8vIGxldCBpZCA9IHNldFRpbWVvdXQoc2F5SGVsbG8sIDIwMDAsIFwiQm9iXCIpO1xuXG4vLyBjb25zb2xlLmxvZyhpZClcbi8vIGNsZWFyVGltZW91dChpZCk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf3361XkpBLAobi+e76VpB6', 'Bai2');
// Day6/Bai2.js

"use strict";

function test(callback) {
  //test la ham boc ngoai, va nhan callback lam ham doi so
  setTimeout(callback, 2000); // thuc thi sau 2s
} // another way (cach nay lam hieu ro hon ve nhan ham lam doi so)
// function myFun(){
//     console.log("This is another test");
// }
// test(myFun); // neu su dung cach nay thi k them dau () vi myFun(), khi truyen ham lam doi so k can ()


test(function () {
  //test thu
  console.log("This is test");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTIuanMiXSwibmFtZXMiOlsidGVzdCIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsSUFBVCxDQUFjQyxRQUFkLEVBQXdCO0VBQUU7RUFDdEJDLFVBQVUsQ0FBQ0QsUUFBRCxFQUFXLElBQVgsQ0FBVixDQURvQixDQUNRO0FBQy9CLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUFELElBQUksQ0FBQyxZQUFVO0VBQUU7RUFDYkcsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNILENBRkcsQ0FBSiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdGVzdChjYWxsYmFjaykgeyAvL3Rlc3QgbGEgaGFtIGJvYyBuZ29haSwgdmEgbmhhbiBjYWxsYmFjayBsYW0gaGFtIGRvaSBzb1xuICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIDIwMDApOyAvLyB0aHVjIHRoaSBzYXUgMnNcbn1cblxuLy8gYW5vdGhlciB3YXkgKGNhY2ggbmF5IGxhbSBoaWV1IHJvIGhvbiB2ZSBuaGFuIGhhbSBsYW0gZG9pIHNvKVxuLy8gZnVuY3Rpb24gbXlGdW4oKXtcbi8vICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgYW5vdGhlciB0ZXN0XCIpO1xuLy8gfVxuXG4vLyB0ZXN0KG15RnVuKTsgLy8gbmV1IHN1IGR1bmcgY2FjaCBuYXkgdGhpIGsgdGhlbSBkYXUgKCkgdmkgbXlGdW4oKSwga2hpIHRydXllbiBoYW0gbGFtIGRvaSBzbyBrIGNhbiAoKVxuXG50ZXN0KGZ1bmN0aW9uKCl7IC8vdGVzdCB0aHVcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGVzdFwiKVxufSkiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai13.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab92dF/HRpHKYl9I19aNi5B', 'Bai13');
// Day6/Bai13.js

"use strict";

function asyncFunc1() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc1");
    setTimeout(function () {
      console.log("Completed asyncFunc1");
      resolve("Result 1");
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc2");
    setTimeout(function () {
      console.log("Completed asyncFunc2");
      resolve("Result 2");
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc3");
    setTimeout(function () {
      console.log("Completed asyncFunc3");
      resolve("Result 3");
    }, 1000);
  });
}

function runSequentialPromises(funcArray) {
  // ham nhan mang, mang do chua cac ham bat dong bo
  funcArray.reduce(function (prevPromise, currentFunc) {
    // duyet qua tung mang, reduce de dam bao chay tuan tu, prevPromise la promise ham truoc, currentFunc chinh la ham dang xet
    // console.log('prevPromise',prevPromise,currentFunc) //log thu lan dau co ket qua undefined, pending, pending
    return prevPromise.then(function () {
      return currentFunc();
    }); //prevPromise hoan thanh moi goi ham moi, va currentFunc tra ve 1 promise moi de tiep tuc chuoi
  }, Promise.resolve()); //tao 1 promise co gia tri ngay lap tuc, dong thoi resolve cung la thong bao trang thai thanh cong da co ket qua 200ms tra ve nhu ben web
}

runSequentialPromises([asyncFunc1, asyncFunc2, asyncFunc3]); // khi su dung reduce thi no can cac gia tri de chay tuan tu, nhung cac ham bat dong bo nay moi vo khong co ket qua nao nen khong chay duoc, Promise.resolve dung de khac phuc van de nay
// vi du de nho ve reduce
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 0); // bắt đầu với 0
// console.log(sum); // 👉 15
// Lần	Accumulator	Current	Tổng
// 1	0	1	1
// 2	1	2	3
// 3	3	3	6
// 4	6	4	10
// 5	10	5	15

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTEzLmpzIl0sIm5hbWVzIjpbImFzeW5jRnVuYzEiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiYXN5bmNGdW5jMiIsImFzeW5jRnVuYzMiLCJydW5TZXF1ZW50aWFsUHJvbWlzZXMiLCJmdW5jQXJyYXkiLCJyZWR1Y2UiLCJwcmV2UHJvbWlzZSIsImN1cnJlbnRGdW5jIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUM5QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUYsT0FBTyxDQUFDLFVBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTSSxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSUwsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUM5QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUYsT0FBTyxDQUFDLFVBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTSyxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSU4sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUM5QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUYsT0FBTyxDQUFDLFVBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTTSxxQkFBVCxDQUErQkMsU0FBL0IsRUFBMEM7RUFBRTtFQUMxQ0EsU0FBUyxDQUFDQyxNQUFWLENBQWlCLFVBQUNDLFdBQUQsRUFBY0MsV0FBZCxFQUE4QjtJQUFFO0lBQy9DO0lBQ0EsT0FBT0QsV0FBVyxDQUFDRSxJQUFaLENBQWlCO01BQUEsT0FBTUQsV0FBVyxFQUFqQjtJQUFBLENBQWpCLENBQVAsQ0FGNkMsQ0FFQztFQUMvQyxDQUhELEVBR0dYLE9BQU8sQ0FBQ0MsT0FBUixFQUhILEVBRHdDLENBSWpCO0FBQ3hCOztBQUVETSxxQkFBcUIsQ0FBQyxDQUFDUixVQUFELEVBQWFNLFVBQWIsRUFBeUJDLFVBQXpCLENBQUQsQ0FBckIsRUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNGdW5jMSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGVkIGFzeW5jRnVuYzFcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMxXCIpO1xuICAgICAgcmVzb2x2ZShcIlJlc3VsdCAxXCIpO1xuICAgIH0sIDMwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNGdW5jMigpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGVkIGFzeW5jRnVuYzJcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMyXCIpO1xuICAgICAgcmVzb2x2ZShcIlJlc3VsdCAyXCIpO1xuICAgIH0sIDIwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNGdW5jMygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGVkIGFzeW5jRnVuYzNcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMzXCIpO1xuICAgICAgcmVzb2x2ZShcIlJlc3VsdCAzXCIpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcnVuU2VxdWVudGlhbFByb21pc2VzKGZ1bmNBcnJheSkgeyAvLyBoYW0gbmhhbiBtYW5nLCBtYW5nIGRvIGNodWEgY2FjIGhhbSBiYXQgZG9uZyBib1xuICBmdW5jQXJyYXkucmVkdWNlKChwcmV2UHJvbWlzZSwgY3VycmVudEZ1bmMpID0+IHsgLy8gZHV5ZXQgcXVhIHR1bmcgbWFuZywgcmVkdWNlIGRlIGRhbSBiYW8gY2hheSB0dWFuIHR1LCBwcmV2UHJvbWlzZSBsYSBwcm9taXNlIGhhbSB0cnVvYywgY3VycmVudEZ1bmMgY2hpbmggbGEgaGFtIGRhbmcgeGV0XG4gICAgLy8gY29uc29sZS5sb2coJ3ByZXZQcm9taXNlJyxwcmV2UHJvbWlzZSxjdXJyZW50RnVuYykgLy9sb2cgdGh1IGxhbiBkYXUgY28ga2V0IHF1YSB1bmRlZmluZWQsIHBlbmRpbmcsIHBlbmRpbmdcbiAgICByZXR1cm4gcHJldlByb21pc2UudGhlbigoKSA9PiBjdXJyZW50RnVuYygpKTsgLy9wcmV2UHJvbWlzZSBob2FuIHRoYW5oIG1vaSBnb2kgaGFtIG1vaSwgdmEgY3VycmVudEZ1bmMgdHJhIHZlIDEgcHJvbWlzZSBtb2kgZGUgdGllcCB0dWMgY2h1b2lcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpOyAvL3RhbyAxIHByb21pc2UgY28gZ2lhIHRyaSBuZ2F5IGxhcCB0dWMsIGRvbmcgdGhvaSByZXNvbHZlIGN1bmcgbGEgdGhvbmcgYmFvIHRyYW5nIHRoYWkgdGhhbmggY29uZyBkYSBjbyBrZXQgcXVhIDIwMG1zIHRyYSB2ZSBuaHUgYmVuIHdlYlxufVxuXG5ydW5TZXF1ZW50aWFsUHJvbWlzZXMoW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzNdKTtcblxuLy8ga2hpIHN1IGR1bmcgcmVkdWNlIHRoaSBubyBjYW4gY2FjIGdpYSB0cmkgZGUgY2hheSB0dWFuIHR1LCBuaHVuZyBjYWMgaGFtIGJhdCBkb25nIGJvIG5heSBtb2kgdm8ga2hvbmcgY28ga2V0IHF1YSBuYW8gbmVuIGtob25nIGNoYXkgZHVvYywgUHJvbWlzZS5yZXNvbHZlIGR1bmcgZGUga2hhYyBwaHVjIHZhbiBkZSBuYXlcbi8vIHZpIGR1IGRlIG5obyB2ZSByZWR1Y2Vcbi8vIGNvbnN0IG51bWJlcnMgPSBbMSwgMiwgMywgNCwgNV07XG5cbi8vIGNvbnN0IHN1bSA9IG51bWJlcnMucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudCkgPT4ge1xuLy8gICByZXR1cm4gYWNjdW11bGF0b3IgKyBjdXJyZW50O1xuLy8gfSwgMCk7IC8vIGLhuq90IMSR4bqndSB24bubaSAwXG5cbi8vIGNvbnNvbGUubG9nKHN1bSk7IC8vIPCfkYkgMTVcblxuLy8gTOG6p25cdEFjY3VtdWxhdG9yXHRDdXJyZW50XHRU4buVbmdcbi8vIDFcdDBcdDFcdDFcbi8vIDJcdDFcdDJcdDNcbi8vIDNcdDNcdDNcdDZcbi8vIDRcdDZcdDRcdDEwXG4vLyA1XHQxMFx0NVx0MTVcblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai14.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69ae5QLyz1El5eiM/XXnIy2', 'Bai14');
// Day6/Bai14.js

"use strict";

function printInOrderConcurrently(funcArray) {
  // khoi tao ham nhan mang co chua cac ham async
  var results = new Array(funcArray.length); // mang result co do dai cua mang funcArray, muc dich de dung vi tri index khi tra ve

  var printed = new Array(funcArray.length).fill(false); // ban dau ket qua deu la false, printed danh dau mang nao da in ra roi

  var nextIndexToPrint = 0;
  funcArray.forEach(function (func, index) {
    //duyet qua tung mang cung index cua no
    func().then(function (value) {
      //se xu ly sau khi promise hoan tat
      results[index] = value; // luu gia tri value vao dung vi tri trong mang results

      while (nextIndexToPrint < results.length && // da het do dai mang
      results[nextIndexToPrint] !== undefined && //da co ket qua
      !printed[nextIndexToPrint] //chua in truoc do
      ) {
        console.log("Result " + (nextIndexToPrint + 1) + ":", results[nextIndexToPrint]); // index 0 => result 1

        printed[nextIndexToPrint] = true; //danh dau da duoc in

        nextIndexToPrint++; // goi vi tri tiep theo trong mang
      }
    });
  });
}

function asyncFunc1() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(1);
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(2);
    }, 1000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(3);
    }, 2000);
  });
}

printInOrderConcurrently([asyncFunc1, asyncFunc2, asyncFunc3]); // sau 3s co ket qua toan bo va theo thu tu
//asci for each
// forEach:
//  ┌──────────────────────────────────────────────────────┐
//  │ gọi từng hàm async() → chạy song song               │
//  │      └─> khi xong → lưu vào `results[index]`         │
//  │                 └─> nếu có thể in → in và tăng index │
//  └──────────────────────────────────────────────────────┘

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTE0LmpzIl0sIm5hbWVzIjpbInByaW50SW5PcmRlckNvbmN1cnJlbnRseSIsImZ1bmNBcnJheSIsInJlc3VsdHMiLCJBcnJheSIsImxlbmd0aCIsInByaW50ZWQiLCJmaWxsIiwibmV4dEluZGV4VG9QcmludCIsImZvckVhY2giLCJmdW5jIiwiaW5kZXgiLCJ0aGVuIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiYXN5bmNGdW5jMSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImFzeW5jRnVuYzIiLCJhc3luY0Z1bmMzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLHdCQUFULENBQWtDQyxTQUFsQyxFQUE2QztFQUFFO0VBQzdDLElBQU1DLE9BQU8sR0FBRyxJQUFJQyxLQUFKLENBQVVGLFNBQVMsQ0FBQ0csTUFBcEIsQ0FBaEIsQ0FEMkMsQ0FDRTs7RUFDN0MsSUFBTUMsT0FBTyxHQUFHLElBQUlGLEtBQUosQ0FBVUYsU0FBUyxDQUFDRyxNQUFwQixFQUE0QkUsSUFBNUIsQ0FBaUMsS0FBakMsQ0FBaEIsQ0FGMkMsQ0FFYzs7RUFFekQsSUFBSUMsZ0JBQWdCLEdBQUcsQ0FBdkI7RUFFQU4sU0FBUyxDQUFDTyxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtJQUFFO0lBQ25DRCxJQUFJLEdBQUdFLElBQVAsQ0FBWSxVQUFDQyxLQUFELEVBQVc7TUFBRTtNQUN2QlYsT0FBTyxDQUFDUSxLQUFELENBQVAsR0FBaUJFLEtBQWpCLENBRHFCLENBQ0c7O01BRXhCLE9BQ0VMLGdCQUFnQixHQUFHTCxPQUFPLENBQUNFLE1BQTNCLElBQXFDO01BQ3JDRixPQUFPLENBQUNLLGdCQUFELENBQVAsS0FBOEJNLFNBRDlCLElBQzJDO01BQzNDLENBQUNSLE9BQU8sQ0FBQ0UsZ0JBQUQsQ0FIVixDQUc2QjtNQUg3QixFQUtFO1FBQ0FPLE9BQU8sQ0FBQ0MsR0FBUixjQUFzQlIsZ0JBQWdCLEdBQUcsQ0FBekMsU0FBK0NMLE9BQU8sQ0FBQ0ssZ0JBQUQsQ0FBdEQsRUFEQSxDQUMyRTs7UUFDM0VGLE9BQU8sQ0FBQ0UsZ0JBQUQsQ0FBUCxHQUE0QixJQUE1QixDQUZBLENBRWtDOztRQUNsQ0EsZ0JBQWdCLEdBSGhCLENBR29CO01BQ3JCO0lBQ0YsQ0FiRDtFQWNELENBZkQ7QUFnQkQ7O0FBRUQsU0FBU1MsVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0lBQUEsT0FBSUMsVUFBVSxDQUFDO01BQUEsT0FBTUQsT0FBTyxDQUFDLENBQUQsQ0FBYjtJQUFBLENBQUQsRUFBbUIsSUFBbkIsQ0FBZDtFQUFBLENBQW5CLENBQVA7QUFDRDs7QUFDRCxTQUFTRSxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSUgsT0FBSixDQUFZLFVBQUFDLE9BQU87SUFBQSxPQUFJQyxVQUFVLENBQUM7TUFBQSxPQUFNRCxPQUFPLENBQUMsQ0FBRCxDQUFiO0lBQUEsQ0FBRCxFQUFtQixJQUFuQixDQUFkO0VBQUEsQ0FBbkIsQ0FBUDtBQUNEOztBQUNELFNBQVNHLFVBQVQsR0FBc0I7RUFDcEIsT0FBTyxJQUFJSixPQUFKLENBQVksVUFBQUMsT0FBTztJQUFBLE9BQUlDLFVBQVUsQ0FBQztNQUFBLE9BQU1ELE9BQU8sQ0FBQyxDQUFELENBQWI7SUFBQSxDQUFELEVBQW1CLElBQW5CLENBQWQ7RUFBQSxDQUFuQixDQUFQO0FBQ0Q7O0FBR0RsQix3QkFBd0IsQ0FBQyxDQUFDZ0IsVUFBRCxFQUFhSSxVQUFiLEVBQXlCQyxVQUF6QixDQUFELENBQXhCLEVBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHJpbnRJbk9yZGVyQ29uY3VycmVudGx5KGZ1bmNBcnJheSkgeyAvLyBraG9pIHRhbyBoYW0gbmhhbiBtYW5nIGNvIGNodWEgY2FjIGhhbSBhc3luY1xuICBjb25zdCByZXN1bHRzID0gbmV3IEFycmF5KGZ1bmNBcnJheS5sZW5ndGgpOyAvLyBtYW5nIHJlc3VsdCBjbyBkbyBkYWkgY3VhIG1hbmcgZnVuY0FycmF5LCBtdWMgZGljaCBkZSBkdW5nIHZpIHRyaSBpbmRleCBraGkgdHJhIHZlXG4gIGNvbnN0IHByaW50ZWQgPSBuZXcgQXJyYXkoZnVuY0FycmF5Lmxlbmd0aCkuZmlsbChmYWxzZSk7IC8vIGJhbiBkYXUga2V0IHF1YSBkZXUgbGEgZmFsc2UsIHByaW50ZWQgZGFuaCBkYXUgbWFuZyBuYW8gZGEgaW4gcmEgcm9pXG5cbiAgbGV0IG5leHRJbmRleFRvUHJpbnQgPSAwO1xuXG4gIGZ1bmNBcnJheS5mb3JFYWNoKChmdW5jLCBpbmRleCkgPT4geyAvL2R1eWV0IHF1YSB0dW5nIG1hbmcgY3VuZyBpbmRleCBjdWEgbm9cbiAgICBmdW5jKCkudGhlbigodmFsdWUpID0+IHsgLy9zZSB4dSBseSBzYXUga2hpIHByb21pc2UgaG9hbiB0YXRcbiAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7IC8vIGx1dSBnaWEgdHJpIHZhbHVlIHZhbyBkdW5nIHZpIHRyaSB0cm9uZyBtYW5nIHJlc3VsdHNcblxuICAgICAgd2hpbGUgKFxuICAgICAgICBuZXh0SW5kZXhUb1ByaW50IDwgcmVzdWx0cy5sZW5ndGggJiYgLy8gZGEgaGV0IGRvIGRhaSBtYW5nXG4gICAgICAgIHJlc3VsdHNbbmV4dEluZGV4VG9QcmludF0gIT09IHVuZGVmaW5lZCAmJiAvL2RhIGNvIGtldCBxdWFcbiAgICAgICAgIXByaW50ZWRbbmV4dEluZGV4VG9QcmludF0gLy9jaHVhIGluIHRydW9jIGRvXG4gICAgICAgIFxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZXN1bHQgJHtuZXh0SW5kZXhUb1ByaW50ICsgMX06YCwgcmVzdWx0c1tuZXh0SW5kZXhUb1ByaW50XSk7IC8vIGluZGV4IDAgPT4gcmVzdWx0IDFcbiAgICAgICAgcHJpbnRlZFtuZXh0SW5kZXhUb1ByaW50XSA9IHRydWU7IC8vZGFuaCBkYXUgZGEgZHVvYyBpblxuICAgICAgICBuZXh0SW5kZXhUb1ByaW50Kys7IC8vIGdvaSB2aSB0cmkgdGllcCB0aGVvIHRyb25nIG1hbmdcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFzeW5jRnVuYzEoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgxKSwgMzAwMCkpO1xufVxuZnVuY3Rpb24gYXN5bmNGdW5jMigpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKDIpLCAxMDAwKSk7XG59XG5mdW5jdGlvbiBhc3luY0Z1bmMzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoMyksIDIwMDApKTtcbn1cblxuXG5wcmludEluT3JkZXJDb25jdXJyZW50bHkoW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzNdKTtcblxuLy8gc2F1IDNzIGNvIGtldCBxdWEgdG9hbiBibyB2YSB0aGVvIHRodSB0dVxuXG4vL2FzY2kgZm9yIGVhY2hcbi8vIGZvckVhY2g6XG4vLyAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4vLyAg4pSCIGfhu41pIHThu6tuZyBow6BtIGFzeW5jKCkg4oaSIGNo4bqheSBzb25nIHNvbmcgICAgICAgICAgICAgICDilIJcbi8vICDilIIgICAgICDilJTilIA+IGtoaSB4b25nIOKGkiBsxrB1IHbDoG8gYHJlc3VsdHNbaW5kZXhdYCAgICAgICAgIOKUglxuLy8gIOKUgiAgICAgICAgICAgICAgICAg4pSU4pSAPiBu4bq/dSBjw7MgdGjhu4MgaW4g4oaSIGluIHbDoCB0xINuZyBpbmRleCDilIJcbi8vICDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJhcblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b43dDy3wJFeJ7YspJ13oO+', 'Bai4');
// Day6/Bai4.js

"use strict";

var count = 1; //global scope voi let de cap nhat gia tri

var intervalId = setInterval(function () {
  // in ra moi giay nho interval
  console.log(count);
  count++;

  if (count > 10) {
    //dieu kien dung
    clearInterval(intervalId); //clearInterval de dung lai
  }
}, 1000); // setnterval co the lap lai lien tuc con setTimeout chi chay 1 lan
// setTimeout(() => {
//   console.log("1 lần sau 1 giây");
// }, 1000);
// const id = setInterval(() => {
//   console.log("Lặp mỗi 1 giây");
// }, 1000);
// clearInterval(id) // su dung cai nay neu muon dung Interval, tat nhien phai + dieu kien chu khong la k in ra gi het, cach su dung o bai chinh

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTQuanMiXSwibmFtZXMiOlsiY291bnQiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlOztBQUVmLElBQU1DLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQUs7RUFBRTtFQUNsQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7RUFDQUEsS0FBSzs7RUFFTCxJQUFJQSxLQUFLLEdBQUcsRUFBWixFQUFnQjtJQUFFO0lBQ2RLLGFBQWEsQ0FBQ0osVUFBRCxDQUFiLENBRFksQ0FDZTtFQUM5QjtBQUNKLENBUDZCLEVBTzVCLElBUDRCLENBQTlCLEVBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvdW50ID0gMTsgLy9nbG9iYWwgc2NvcGUgdm9pIGxldCBkZSBjYXAgbmhhdCBnaWEgdHJpXG5cbmNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PnsgLy8gaW4gcmEgbW9pIGdpYXkgbmhvIGludGVydmFsXG4gICAgY29uc29sZS5sb2coY291bnQpO1xuICAgIGNvdW50Kys7XG5cbiAgICBpZiAoY291bnQgPiAxMCkgeyAvL2RpZXUga2llbiBkdW5nXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7IC8vY2xlYXJJbnRlcnZhbCBkZSBkdW5nIGxhaVxuICAgIH1cbn0sMTAwMClcblxuLy8gc2V0bnRlcnZhbCBjbyB0aGUgbGFwIGxhaSBsaWVuIHR1YyBjb24gc2V0VGltZW91dCBjaGkgY2hheSAxIGxhblxuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgY29uc29sZS5sb2coXCIxIGzhuqduIHNhdSAxIGdpw6J5XCIpO1xuLy8gfSwgMTAwMCk7XG5cbi8vIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcIkzhurdwIG3hu5dpIDEgZ2nDonlcIik7XG4vLyB9LCAxMDAwKTtcblxuLy8gY2xlYXJJbnRlcnZhbChpZCkgLy8gc3UgZHVuZyBjYWkgbmF5IG5ldSBtdW9uIGR1bmcgSW50ZXJ2YWwsIHRhdCBuaGllbiBwaGFpICsgZGlldSBraWVuIGNodSBraG9uZyBsYSBrIGluIHJhIGdpIGhldCwgY2FjaCBzdSBkdW5nIG8gYmFpIGNoaW5oXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20a1fOkeOZMhqq9KGgDnyNY', 'Bai5');
// Day6/Bai5.js

"use strict";

var _loop = function _loop(i) {
  // lam nguoc lai vs bai 3, van la let trong block scope nhung o vong for thi bat dau tu 10, dung khi toi 1, va dieu kien la -
  setTimeout(function () {
    console.log(i);
  }, (10 - i) * 1000); //thay vi la i*1000 ta thay bang 10-i vi dem nguoc lai ( phai la 10-i chu ghi i*1000 la dem tu 1 toi 10 )
};

for (var i = 10; i >= 1; i--) {
  _loop(i);
} //test thu dao nguoc lai bi sao
// for (let i = 10; i >= 1; i--) { // lam nguoc lai vs bai 3, van la let trong block scope nhung o vong for thi bat dau tu 10, dung khi toi 1, va dieu kien la -
//   setTimeout(() => {
//     console.log(i);
//   }, (i) * 1000); //thay vi la i*1000 ta thay bang 10-i vi dem nguoc lai ( phai la 10-i chu ghi i*1000 la dem tu 1 toi 10 )
// }
// for (var i = 10; i >= 1; i--) { //var + IIFE
//   (function(j) {
//     setTimeout(() => {
//       console.log(j);
//     }, (10 - j) * 1000);
//   })(i); //truyen i ngay day de dung gia tri
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTUuanMiXSwibmFtZXMiOlsiaSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsyQkFBU0E7RUFBdUI7RUFDOUJDLFVBQVUsQ0FBQyxZQUFNO0lBQ2ZDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFaO0VBQ0QsQ0FGUyxFQUVQLENBQUMsS0FBR0EsQ0FBSixJQUFTLElBRkYsQ0FBVixFQUVtQjs7O0FBSHJCLEtBQUssSUFBSUEsQ0FBQyxHQUFHLEVBQWIsRUFBaUJBLENBQUMsSUFBSSxDQUF0QixFQUF5QkEsQ0FBQyxFQUExQixFQUE4QjtFQUFBLE1BQXJCQSxDQUFxQjtBQUk3QixFQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJmb3IgKGxldCBpID0gMTA7IGkgPj0gMTsgaS0tKSB7IC8vIGxhbSBuZ3VvYyBsYWkgdnMgYmFpIDMsIHZhbiBsYSBsZXQgdHJvbmcgYmxvY2sgc2NvcGUgbmh1bmcgbyB2b25nIGZvciB0aGkgYmF0IGRhdSB0dSAxMCwgZHVuZyBraGkgdG9pIDEsIHZhIGRpZXUga2llbiBsYSAtXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICB9LCAoMTAtaSkgKiAxMDAwKTsgLy90aGF5IHZpIGxhIGkqMTAwMCB0YSB0aGF5IGJhbmcgMTAtaSB2aSBkZW0gbmd1b2MgbGFpICggcGhhaSBsYSAxMC1pIGNodSBnaGkgaSoxMDAwIGxhIGRlbSB0dSAxIHRvaSAxMCApXG59XG5cbi8vdGVzdCB0aHUgZGFvIG5ndW9jIGxhaSBiaSBzYW9cbi8vIGZvciAobGV0IGkgPSAxMDsgaSA+PSAxOyBpLS0pIHsgLy8gbGFtIG5ndW9jIGxhaSB2cyBiYWkgMywgdmFuIGxhIGxldCB0cm9uZyBibG9jayBzY29wZSBuaHVuZyBvIHZvbmcgZm9yIHRoaSBiYXQgZGF1IHR1IDEwLCBkdW5nIGtoaSB0b2kgMSwgdmEgZGlldSBraWVuIGxhIC1cbi8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coaSk7XG4vLyAgIH0sIChpKSAqIDEwMDApOyAvL3RoYXkgdmkgbGEgaSoxMDAwIHRhIHRoYXkgYmFuZyAxMC1pIHZpIGRlbSBuZ3VvYyBsYWkgKCBwaGFpIGxhIDEwLWkgY2h1IGdoaSBpKjEwMDAgbGEgZGVtIHR1IDEgdG9pIDEwIClcbi8vIH1cblxuXG5cbi8vIGZvciAodmFyIGkgPSAxMDsgaSA+PSAxOyBpLS0pIHsgLy92YXIgKyBJSUZFXG4vLyAgIChmdW5jdGlvbihqKSB7XG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhqKTtcbi8vICAgICB9LCAoMTAgLSBqKSAqIDEwMDApO1xuLy8gICB9KShpKTsgLy90cnV5ZW4gaSBuZ2F5IGRheSBkZSBkdW5nIGdpYSB0cmlcbi8vIH1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df8c6hiOZ9JQ4jbxYFTqZNm', 'Bai3');
// Day6/Bai3.js

"use strict";

var _loop = function _loop(i) {
  //lap tu 1 den 10
  setTimeout(function () {
    console.log(i); // in ra gia tri
  }, i * 1000); // moi 1s in ra gia tri cua i
};

//cach hay hon
for (var i = 1; i <= 10; i++) {
  _loop(i);
} // su dung let vi su dung tot trong block scope, cap nhat gia tri sau moi lan lap  
// const thi chi su dung luu gia tri cua bien, k cap nhat duoc gia tri
// var thi cu phap cu es5 5, ko khuyen khich xai, k co block scope, gay kho khan cho nguoi code lan doc
// cach callback hell =))))
// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//         setTimeout(() => {
//           console.log(5);
//           setTimeout(() => {
//             console.log(6);
//             setTimeout(() => {
//               console.log(7);
//               setTimeout(() => {
//                 console.log(8);
//                 setTimeout(() => {
//                   console.log(9);
//                   setTimeout(() => {
//                     console.log(10);
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTMuanMiXSwibmFtZXMiOlsiaSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsyQkFDU0E7RUFBb0I7RUFDekJDLFVBQVUsQ0FBQyxZQUFNO0lBQ2JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFaLEVBRGEsQ0FDRztFQUNuQixDQUZTLEVBRVBBLENBQUMsR0FBQyxJQUZLLENBQVYsRUFFWTs7O0FBSmhCO0FBQ0EsS0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFFLEVBQW5CLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTJCO0VBQUEsTUFBbEJBLENBQWtCO0FBSTFCLEVBQ0Q7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vY2FjaCBoYXkgaG9uXG5mb3IgKGxldCBpID0gMTsgaTw9MTA7IGkrKyl7IC8vbGFwIHR1IDEgZGVuIDEwXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpOyAvLyBpbiByYSBnaWEgdHJpXG4gICAgfSwgaSoxMDAwKTsgLy8gbW9pIDFzIGluIHJhIGdpYSB0cmkgY3VhIGlcbn1cbi8vIHN1IGR1bmcgbGV0IHZpIHN1IGR1bmcgdG90IHRyb25nIGJsb2NrIHNjb3BlLCBjYXAgbmhhdCBnaWEgdHJpIHNhdSBtb2kgbGFuIGxhcCAgXG4vLyBjb25zdCB0aGkgY2hpIHN1IGR1bmcgbHV1IGdpYSB0cmkgY3VhIGJpZW4sIGsgY2FwIG5oYXQgZHVvYyBnaWEgdHJpXG4vLyB2YXIgdGhpIGN1IHBoYXAgY3UgZXM1IDUsIGtvIGtodXllbiBraGljaCB4YWksIGsgY28gYmxvY2sgc2NvcGUsIGdheSBraG8ga2hhbiBjaG8gbmd1b2kgY29kZSBsYW4gZG9jXG5cbi8vIGNhY2ggY2FsbGJhY2sgaGVsbCA9KSkpKVxuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgY29uc29sZS5sb2coMSk7XG4vLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKDIpO1xuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2coMyk7XG4vLyAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coNCk7XG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKDUpO1xuLy8gICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coNik7XG4vLyAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgICAgY29uc29sZS5sb2coNyk7XG4vLyAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDgpO1xuLy8gICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coOSk7XG4vLyAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMTApO1xuLy8gICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4vLyAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4vLyAgICAgICAgICAgICAgIH0sIDEwMDApO1xuLy8gICAgICAgICAgICAgfSwgMTAwMCk7XG4vLyAgICAgICAgICAgfSwgMTAwMCk7XG4vLyAgICAgICAgIH0sIDEwMDApO1xuLy8gICAgICAgfSwgMTAwMCk7XG4vLyAgICAgfSwgMTAwMCk7XG4vLyAgIH0sIDEwMDApO1xuLy8gfSwgMTAwMCk7XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fa97xw7QFCjoj+H0oeimj2', 'Bai7');
// Day6/Bai7.js

"use strict";

// Hàm chính: nhận vào 1 mảng các hàm async callback-style
function callbackManager(funcArray) {
  var currentFuncs = [].concat(funcArray); // Clone mảng để xử lý, tránh làm hỏng mảng gốc

  var retryCount = 0; // Đếm số lần chạy lại (để biết là lần mấy)
  // Hàm phụ để chạy loạt hàm hiện tại

  function run() {
    // In thông báo chạy lần đầu hay chạy lại
    console.log(retryCount === 0 ? "\n🔁 Bắt đầu chạy hàm lần đầu...\n" : "\n\uD83D\uDD01 B\u1EAFt \u0111\u1EA7u ch\u1EA1y l\u1EA1i l\u1EA7n " + retryCount + "...\n");
    var index = 0; // Biến đếm vị trí hàm đang chạy

    var newFuncs = []; // Mảng mới chứa các hàm thành công để chạy lại nếu cần

    var hasError = false; // Cờ báo nếu có lỗi xảy ra
    // Hàm đệ quy chạy từng hàm một theo thứ tự

    function execute() {
      // Khi đã chạy hết các hàm
      if (index >= currentFuncs.length) {
        if (hasError) {
          // Nếu có lỗi: thông báo và chuẩn bị chạy lại sau 5s
          console.log("\n❌ Có hàm bị lỗi, sẽ chạy lại toàn bộ sau 5s...\n");
          currentFuncs = newFuncs; // Chỉ giữ lại hàm thành công để chạy lại

          retryCount++; // Tăng số lần chạy lại

          setTimeout(run, 5000); // Chờ 5s rồi chạy lại
        } else {
          // Nếu tất cả đều thành công thì kết thúc
          console.log("\n✅ Tất cả hàm đã chạy thành công!\n");
        }

        return;
      } // Lấy hàm hiện tại theo index


      var func = currentFuncs[index]; // In trạng thái bắt đầu chạy hàm

      console.log("Started asyncFunc" + (func.originalIndex + 1));

      try {
        // Gọi hàm async với callback nhận lỗi (err)
        func.cb(function (err) {
          if (err) {
            // Nếu lỗi: thông báo lỗi
            console.log("\u274C H\xE0m " + func.originalIndex + " b\u1ECB l\u1ED7i: " + err.message);
            hasError = true; // Cắm cờ lỗi
            // Không push vào newFuncs → bỏ luôn khỏi lần chạy sau
          } else {
            // Nếu thành công: in log và đưa vào danh sách chạy tiếp
            console.log("Completed asyncFunc" + (func.originalIndex + 1));
            console.log("\u2705 H\xE0m " + func.originalIndex + " ch\u1EA1y th\xE0nh c\xF4ng!");
            newFuncs.push(func); // Chỉ giữ hàm đã thành công
          }

          index++; // Tăng chỉ số để xử lý tiếp

          execute(); // Gọi đệ quy cho hàm tiếp theo
        });
      } catch (e) {
        // Nếu có lỗi throw ngoài callback (hiếm): bắt ngoại lệ
        console.log("\u274C Exception t\u1EA1i h\xE0m " + func.originalIndex + ": " + e.message);
        hasError = true;
        index++;
        execute(); // Tiếp tục xử lý hàm sau
      }
    } // Bắt đầu chuỗi gọi đệ quy


    execute();
  } // Gắn thông tin chỉ số ban đầu vào từng hàm để in log chính xác


  var wrappedFuncs = funcArray.map(function (f, i) {
    return {
      cb: f,
      originalIndex: i
    };
  });
  currentFuncs = wrappedFuncs; // Cập nhật mảng đang chạy

  run(); // Bắt đầu thực thi chuỗi
}

function asyncFunc1(callback) {
  console.log("Started asyncFunc1");
  setTimeout(function () {
    console.log("Completed asyncFunc1");
    callback();
  }, 3000);
}

function asyncFunc2(callback) {
  console.log("Started asyncFunc2");
  setTimeout(function () {
    console.log("Completed asyncFunc2");
    callback();
  }, 2000);
}

var failOnce = true;

function asyncFunc4(callback) {
  console.log("Started asyncFunc4");
  setTimeout(function () {
    if (failOnce) {
      failOnce = false;
      callback(new Error("Error in asyncFunc4"));
    } else {
      console.log("Completed asyncFunc4");
      callback();
    }
  }, 1000);
}

function asyncFunc3(callback) {
  console.log("Started asyncFunc3");
  setTimeout(function () {
    console.log("Completed asyncFunc3");
    callback();
  }, 1000);
} // Driver code
// lan chay dau tien


callbackManager([asyncFunc1, asyncFunc2, asyncFunc4, asyncFunc3]); // sau khi chay nhan xet:
// ke tu khi lenh Started asyncFunc1 thi mat 3s de hien completed tuong tu asyncFunc2 mat 2s va cuoi cung mat 1s, moi thu in ra theo dung thu tu voi dung so giay.
// lan chay thu 2 (sau 7s)
// setTimeout(() =>{
//   console.log("_________________________")
//   console.log("CALLING AGAINNNNNNN")
//   callbackManager([asyncFunc1, asyncFunc2, asyncFunc4, asyncFunc3]);
// },7000)
//bonus ASCI tu chatGPT de hieu Flow
// funcArray = [asyncFunc1, asyncFunc2, asyncFunc3]
// Gọi callbackManager([asyncFunc1, asyncFunc2, asyncFunc3])
// ↓
// Gọi execute(0)
// ↓
// Gọi asyncFunc1(callback: () => execute(1))
//    ↓
//    Đợi 3 giây...
//    ↓
//    Gọi callback → execute(1)
//    ↓
//    Gọi asyncFunc2(callback: () => execute(2))
//        ↓
//        Đợi 2 giây...
//        ↓
//        Gọi callback → execute(2)
//        ↓
//        Gọi asyncFunc3(callback: () => execute(3))
//            ↓
//            Đợi 1 giây...
//            ↓
//            Gọi callback → execute(3)
//                ↓
//                Thoát vì index >= funcArray.length
// async4 throw new error, chen vao giua, khi ham loi go ra va chay lai cho du
// lan sau goi lai se chay het duoc

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTcuanMiXSwibmFtZXMiOlsiY2FsbGJhY2tNYW5hZ2VyIiwiZnVuY0FycmF5IiwiY3VycmVudEZ1bmNzIiwicmV0cnlDb3VudCIsInJ1biIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsIm5ld0Z1bmNzIiwiaGFzRXJyb3IiLCJleGVjdXRlIiwibGVuZ3RoIiwic2V0VGltZW91dCIsImZ1bmMiLCJvcmlnaW5hbEluZGV4IiwiY2IiLCJlcnIiLCJtZXNzYWdlIiwicHVzaCIsImUiLCJ3cmFwcGVkRnVuY3MiLCJtYXAiLCJmIiwiaSIsImFzeW5jRnVuYzEiLCJjYWxsYmFjayIsImFzeW5jRnVuYzIiLCJmYWlsT25jZSIsImFzeW5jRnVuYzQiLCJFcnJvciIsImFzeW5jRnVuYzMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxTQUFTQSxlQUFULENBQXlCQyxTQUF6QixFQUFvQztFQUNsQyxJQUFJQyxZQUFZLGFBQU9ELFNBQVAsQ0FBaEIsQ0FEa0MsQ0FDQzs7RUFDbkMsSUFBSUUsVUFBVSxHQUFHLENBQWpCLENBRmtDLENBRUM7RUFFbkM7O0VBQ0EsU0FBU0MsR0FBVCxHQUFlO0lBQ2I7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILFVBQVUsS0FBSyxDQUFmLEdBQW1CLG9DQUFuQiwwRUFBdUZBLFVBQXZGLFVBQVo7SUFFQSxJQUFJSSxLQUFLLEdBQUcsQ0FBWixDQUphLENBSWE7O0lBQzFCLElBQUlDLFFBQVEsR0FBRyxFQUFmLENBTGEsQ0FLYTs7SUFDMUIsSUFBSUMsUUFBUSxHQUFHLEtBQWYsQ0FOYSxDQU1hO0lBRTFCOztJQUNBLFNBQVNDLE9BQVQsR0FBbUI7TUFDakI7TUFDQSxJQUFJSCxLQUFLLElBQUlMLFlBQVksQ0FBQ1MsTUFBMUIsRUFBa0M7UUFDaEMsSUFBSUYsUUFBSixFQUFjO1VBQ1o7VUFDQUosT0FBTyxDQUFDQyxHQUFSLENBQVksb0RBQVo7VUFDQUosWUFBWSxHQUFHTSxRQUFmLENBSFksQ0FHYTs7VUFDekJMLFVBQVUsR0FKRSxDQUlhOztVQUN6QlMsVUFBVSxDQUFDUixHQUFELEVBQU0sSUFBTixDQUFWLENBTFksQ0FLYTtRQUMxQixDQU5ELE1BTU87VUFDTDtVQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWjtRQUNEOztRQUNEO01BQ0QsQ0FkZ0IsQ0FnQmpCOzs7TUFDQSxJQUFNTyxJQUFJLEdBQUdYLFlBQVksQ0FBQ0ssS0FBRCxDQUF6QixDQWpCaUIsQ0FtQmpCOztNQUNBRixPQUFPLENBQUNDLEdBQVIsd0JBQWdDTyxJQUFJLENBQUNDLGFBQUwsR0FBcUIsQ0FBckQ7O01BRUEsSUFBSTtRQUNGO1FBQ0FELElBQUksQ0FBQ0UsRUFBTCxDQUFRLFVBQUNDLEdBQUQsRUFBUztVQUNmLElBQUlBLEdBQUosRUFBUztZQUNQO1lBQ0FYLE9BQU8sQ0FBQ0MsR0FBUixvQkFBcUJPLElBQUksQ0FBQ0MsYUFBMUIsMkJBQW1ERSxHQUFHLENBQUNDLE9BQXZEO1lBQ0FSLFFBQVEsR0FBRyxJQUFYLENBSE8sQ0FHVTtZQUNqQjtVQUNELENBTEQsTUFLTztZQUNMO1lBQ0FKLE9BQU8sQ0FBQ0MsR0FBUiwwQkFBa0NPLElBQUksQ0FBQ0MsYUFBTCxHQUFxQixDQUF2RDtZQUNBVCxPQUFPLENBQUNDLEdBQVIsb0JBQXFCTyxJQUFJLENBQUNDLGFBQTFCO1lBQ0FOLFFBQVEsQ0FBQ1UsSUFBVCxDQUFjTCxJQUFkLEVBSkssQ0FJZ0I7VUFDdEI7O1VBQ0ROLEtBQUssR0FaVSxDQVlEOztVQUNkRyxPQUFPLEdBYlEsQ0FhRDtRQUNmLENBZEQ7TUFlRCxDQWpCRCxDQWlCRSxPQUFPUyxDQUFQLEVBQVU7UUFDVjtRQUNBZCxPQUFPLENBQUNDLEdBQVIsdUNBQW1DTyxJQUFJLENBQUNDLGFBQXhDLFVBQTBESyxDQUFDLENBQUNGLE9BQTVEO1FBQ0FSLFFBQVEsR0FBRyxJQUFYO1FBQ0FGLEtBQUs7UUFDTEcsT0FBTyxHQUxHLENBS0M7TUFDWjtJQUNGLENBdkRZLENBeURiOzs7SUFDQUEsT0FBTztFQUNSLENBaEVpQyxDQWtFbEM7OztFQUNBLElBQU1VLFlBQVksR0FBR25CLFNBQVMsQ0FBQ29CLEdBQVYsQ0FBYyxVQUFDQyxDQUFELEVBQUlDLENBQUo7SUFBQSxPQUFXO01BQUVSLEVBQUUsRUFBRU8sQ0FBTjtNQUFTUixhQUFhLEVBQUVTO0lBQXhCLENBQVg7RUFBQSxDQUFkLENBQXJCO0VBQ0FyQixZQUFZLEdBQUdrQixZQUFmLENBcEVrQyxDQW9FTDs7RUFDN0JoQixHQUFHLEdBckUrQixDQXFFM0I7QUFDUjs7QUFFRCxTQUFTb0IsVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEI7RUFDNUJwQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtFQUNBTSxVQUFVLENBQUMsWUFBTTtJQUNmUCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtJQUNBbUIsUUFBUTtFQUNULENBSFMsRUFHUCxJQUhPLENBQVY7QUFJRDs7QUFFRCxTQUFTQyxVQUFULENBQW9CRCxRQUFwQixFQUE4QjtFQUM1QnBCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0VBQ0FNLFVBQVUsQ0FBQyxZQUFNO0lBQ2ZQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0lBQ0FtQixRQUFRO0VBQ1QsQ0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlEOztBQUVELElBQUlFLFFBQVEsR0FBRyxJQUFmOztBQUNBLFNBQVNDLFVBQVQsQ0FBb0JILFFBQXBCLEVBQThCO0VBQzVCcEIsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7RUFDQU0sVUFBVSxDQUFDLFlBQU07SUFDZixJQUFJZSxRQUFKLEVBQWM7TUFDWkEsUUFBUSxHQUFHLEtBQVg7TUFDQUYsUUFBUSxDQUFDLElBQUlJLEtBQUosQ0FBVSxxQkFBVixDQUFELENBQVI7SUFDRCxDQUhELE1BR087TUFDTHhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO01BQ0FtQixRQUFRO0lBQ1Q7RUFDRixDQVJTLEVBUVIsSUFSUSxDQUFWO0FBU0Q7O0FBR0QsU0FBU0ssVUFBVCxDQUFvQkwsUUFBcEIsRUFBOEI7RUFDNUJwQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtFQUNBTSxVQUFVLENBQUMsWUFBTTtJQUNmUCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtJQUNBbUIsUUFBUTtFQUNULENBSFMsRUFHUCxJQUhPLENBQVY7QUFJRCxFQUVEO0FBQ0E7OztBQUNBekIsZUFBZSxDQUFDLENBQUN3QixVQUFELEVBQWFFLFVBQWIsRUFBeUJFLFVBQXpCLEVBQXFDRSxVQUFyQyxDQUFELENBQWYsRUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIw6BtIGNow61uaDogbmjhuq1uIHbDoG8gMSBt4bqjbmcgY8OhYyBow6BtIGFzeW5jIGNhbGxiYWNrLXN0eWxlXG5mdW5jdGlvbiBjYWxsYmFja01hbmFnZXIoZnVuY0FycmF5KSB7XG4gIGxldCBjdXJyZW50RnVuY3MgPSBbLi4uZnVuY0FycmF5XTsgLy8gQ2xvbmUgbeG6o25nIMSR4buDIHjhu60gbMO9LCB0csOhbmggbMOgbSBo4buPbmcgbeG6o25nIGfhu5FjXG4gIGxldCByZXRyeUNvdW50ID0gMDsgICAgICAgICAgICAgICAgLy8gxJDhur9tIHPhu5EgbOG6p24gY2jhuqF5IGzhuqFpICjEkeG7gyBiaeG6v3QgbMOgIGzhuqduIG3huqV5KVxuXG4gIC8vIEjDoG0gcGjhu6UgxJHhu4MgY2jhuqF5IGxv4bqhdCBow6BtIGhp4buHbiB04bqhaVxuICBmdW5jdGlvbiBydW4oKSB7XG4gICAgLy8gSW4gdGjDtG5nIGLDoW8gY2jhuqF5IGzhuqduIMSR4bqndSBoYXkgY2jhuqF5IGzhuqFpXG4gICAgY29uc29sZS5sb2cocmV0cnlDb3VudCA9PT0gMCA/IFwiXFxu8J+UgSBC4bqvdCDEkeG6p3UgY2jhuqF5IGjDoG0gbOG6p24gxJHhuqd1Li4uXFxuXCIgOiBgXFxu8J+UgSBC4bqvdCDEkeG6p3UgY2jhuqF5IGzhuqFpIGzhuqduICR7cmV0cnlDb3VudH0uLi5cXG5gKTtcbiAgICBcbiAgICBsZXQgaW5kZXggPSAwOyAgICAgICAgICAgIC8vIEJp4bq/biDEkeG6v20gduG7iyB0csOtIGjDoG0gxJFhbmcgY2jhuqF5XG4gICAgbGV0IG5ld0Z1bmNzID0gW107ICAgICAgICAvLyBN4bqjbmcgbeG7m2kgY2jhu6lhIGPDoWMgaMOgbSB0aMOgbmggY8O0bmcgxJHhu4MgY2jhuqF5IGzhuqFpIG7hur91IGPhuqduXG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7ICAgICAvLyBD4budIGLDoW8gbuG6v3UgY8OzIGzhu5dpIHjhuqN5IHJhXG5cbiAgICAvLyBIw6BtIMSR4buHIHF1eSBjaOG6oXkgdOG7q25nIGjDoG0gbeG7mXQgdGhlbyB0aOG7qSB04buxXG4gICAgZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICAgIC8vIEtoaSDEkcOjIGNo4bqheSBo4bq/dCBjw6FjIGjDoG1cbiAgICAgIGlmIChpbmRleCA+PSBjdXJyZW50RnVuY3MubGVuZ3RoKSB7XG4gICAgICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICAgIC8vIE7hur91IGPDsyBs4buXaTogdGjDtG5nIGLDoW8gdsOgIGNodeG6qW4gYuG7iyBjaOG6oXkgbOG6oWkgc2F1IDVzXG4gICAgICAgICAgY29uc29sZS5sb2coXCJcXG7inYwgQ8OzIGjDoG0gYuG7iyBs4buXaSwgc+G6vSBjaOG6oXkgbOG6oWkgdG/DoG4gYuG7mSBzYXUgNXMuLi5cXG5cIik7XG4gICAgICAgICAgY3VycmVudEZ1bmNzID0gbmV3RnVuY3M7IC8vIENo4buJIGdp4buvIGzhuqFpIGjDoG0gdGjDoG5oIGPDtG5nIMSR4buDIGNo4bqheSBs4bqhaVxuICAgICAgICAgIHJldHJ5Q291bnQrKzsgICAgICAgICAgICAvLyBUxINuZyBz4buRIGzhuqduIGNo4bqheSBs4bqhaVxuICAgICAgICAgIHNldFRpbWVvdXQocnVuLCA1MDAwKTsgICAvLyBDaOG7nSA1cyBy4buTaSBjaOG6oXkgbOG6oWlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBO4bq/dSB04bqldCBj4bqjIMSR4buBdSB0aMOgbmggY8O0bmcgdGjDrCBr4bq/dCB0aMO6Y1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiXFxu4pyFIFThuqV0IGPhuqMgaMOgbSDEkcOjIGNo4bqheSB0aMOgbmggY8O0bmchXFxuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTOG6pXkgaMOgbSBoaeG7h24gdOG6oWkgdGhlbyBpbmRleFxuICAgICAgY29uc3QgZnVuYyA9IGN1cnJlbnRGdW5jc1tpbmRleF07XG5cbiAgICAgIC8vIEluIHRy4bqhbmcgdGjDoWkgYuG6r3QgxJHhuqd1IGNo4bqheSBow6BtXG4gICAgICBjb25zb2xlLmxvZyhgU3RhcnRlZCBhc3luY0Z1bmMke2Z1bmMub3JpZ2luYWxJbmRleCArIDF9YCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEfhu41pIGjDoG0gYXN5bmMgduG7m2kgY2FsbGJhY2sgbmjhuq1uIGzhu5dpIChlcnIpXG4gICAgICAgIGZ1bmMuY2IoKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIC8vIE7hur91IGzhu5dpOiB0aMO0bmcgYsOhbyBs4buXaVxuICAgICAgICAgICAgY29uc29sZS5sb2coYOKdjCBIw6BtICR7ZnVuYy5vcmlnaW5hbEluZGV4fSBi4buLIGzhu5dpOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlOyAvLyBD4bqvbSBj4budIGzhu5dpXG4gICAgICAgICAgICAvLyBLaMO0bmcgcHVzaCB2w6BvIG5ld0Z1bmNzIOKGkiBi4buPIGx1w7RuIGto4buPaSBs4bqnbiBjaOG6oXkgc2F1XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE7hur91IHRow6BuaCBjw7RuZzogaW4gbG9nIHbDoCDEkcawYSB2w6BvIGRhbmggc8OhY2ggY2jhuqF5IHRp4bq/cFxuICAgICAgICAgICAgY29uc29sZS5sb2coYENvbXBsZXRlZCBhc3luY0Z1bmMke2Z1bmMub3JpZ2luYWxJbmRleCArIDF9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg4pyFIEjDoG0gJHtmdW5jLm9yaWdpbmFsSW5kZXh9IGNo4bqheSB0aMOgbmggY8O0bmchYCk7XG4gICAgICAgICAgICBuZXdGdW5jcy5wdXNoKGZ1bmMpOyAvLyBDaOG7iSBnaeG7ryBow6BtIMSRw6MgdGjDoG5oIGPDtG5nXG4gICAgICAgICAgfVxuICAgICAgICAgIGluZGV4Kys7ICAgICAgLy8gVMSDbmcgY2jhu4kgc+G7kSDEkeG7gyB44butIGzDvSB0aeG6v3BcbiAgICAgICAgICBleGVjdXRlKCk7ICAgIC8vIEfhu41pIMSR4buHIHF1eSBjaG8gaMOgbSB0aeG6v3AgdGhlb1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gTuG6v3UgY8OzIGzhu5dpIHRocm93IG5nb8OgaSBjYWxsYmFjayAoaGnhur9tKTogYuG6r3Qgbmdv4bqhaSBs4buHXG4gICAgICAgIGNvbnNvbGUubG9nKGDinYwgRXhjZXB0aW9uIHThuqFpIGjDoG0gJHtmdW5jLm9yaWdpbmFsSW5kZXh9OiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBleGVjdXRlKCk7IC8vIFRp4bq/cCB04bulYyB44butIGzDvSBow6BtIHNhdVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIELhuq90IMSR4bqndSBjaHXhu5dpIGfhu41pIMSR4buHIHF1eVxuICAgIGV4ZWN1dGUoKTtcbiAgfVxuXG4gIC8vIEfhuq9uIHRow7RuZyB0aW4gY2jhu4kgc+G7kSBiYW4gxJHhuqd1IHbDoG8gdOG7q25nIGjDoG0gxJHhu4MgaW4gbG9nIGNow61uaCB4w6FjXG4gIGNvbnN0IHdyYXBwZWRGdW5jcyA9IGZ1bmNBcnJheS5tYXAoKGYsIGkpID0+ICh7IGNiOiBmLCBvcmlnaW5hbEluZGV4OiBpIH0pKTtcbiAgY3VycmVudEZ1bmNzID0gd3JhcHBlZEZ1bmNzOyAvLyBD4bqtcCBuaOG6rXQgbeG6o25nIMSRYW5nIGNo4bqheVxuICBydW4oKTsgLy8gQuG6r3QgxJHhuqd1IHRo4buxYyB0aGkgY2h14buXaVxufVxuXG5mdW5jdGlvbiBhc3luY0Z1bmMxKGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMxXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMxXCIpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH0sIDMwMDApO1xufVxuXG5mdW5jdGlvbiBhc3luY0Z1bmMyKGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMyXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMyXCIpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH0sIDIwMDApO1xufVxuXG5sZXQgZmFpbE9uY2UgPSB0cnVlO1xuZnVuY3Rpb24gYXN5bmNGdW5jNChjYWxsYmFjaykge1xuICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jNFwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYoIGZhaWxPbmNlKSB7XG4gICAgICBmYWlsT25jZSA9IGZhbHNlO1xuICAgICAgY2FsbGJhY2sobmV3IEVycm9yKFwiRXJyb3IgaW4gYXN5bmNGdW5jNFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzRcIik7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfSwxMDAwKTtcbn1cblxuXG5mdW5jdGlvbiBhc3luY0Z1bmMzKGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMzXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMzXCIpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH0sIDEwMDApO1xufVxuXG4vLyBEcml2ZXIgY29kZVxuLy8gbGFuIGNoYXkgZGF1IHRpZW5cbmNhbGxiYWNrTWFuYWdlcihbYXN5bmNGdW5jMSwgYXN5bmNGdW5jMiwgYXN5bmNGdW5jNCwgYXN5bmNGdW5jM10pO1xuXG4vLyBzYXUga2hpIGNoYXkgbmhhbiB4ZXQ6XG4vLyBrZSB0dSBraGkgbGVuaCBTdGFydGVkIGFzeW5jRnVuYzEgdGhpIG1hdCAzcyBkZSBoaWVuIGNvbXBsZXRlZCB0dW9uZyB0dSBhc3luY0Z1bmMyIG1hdCAycyB2YSBjdW9pIGN1bmcgbWF0IDFzLCBtb2kgdGh1IGluIHJhIHRoZW8gZHVuZyB0aHUgdHUgdm9pIGR1bmcgc28gZ2lheS5cblxuLy8gbGFuIGNoYXkgdGh1IDIgKHNhdSA3cylcblxuLy8gc2V0VGltZW91dCgoKSA9Pntcbi8vICAgY29uc29sZS5sb2coXCJfX19fX19fX19fX19fX19fX19fX19fX19fXCIpXG4vLyAgIGNvbnNvbGUubG9nKFwiQ0FMTElORyBBR0FJTk5OTk5OTlwiKVxuLy8gICBjYWxsYmFja01hbmFnZXIoW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzQsIGFzeW5jRnVuYzNdKTtcbi8vIH0sNzAwMClcblxuXG5cblxuXG5cblxuXG4vL2JvbnVzIEFTQ0kgdHUgY2hhdEdQVCBkZSBoaWV1IEZsb3dcblxuLy8gZnVuY0FycmF5ID0gW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzNdXG5cbi8vIEfhu41pIGNhbGxiYWNrTWFuYWdlcihbYXN5bmNGdW5jMSwgYXN5bmNGdW5jMiwgYXN5bmNGdW5jM10pXG4vLyDihpNcbi8vIEfhu41pIGV4ZWN1dGUoMClcbi8vIOKGk1xuLy8gR+G7jWkgYXN5bmNGdW5jMShjYWxsYmFjazogKCkgPT4gZXhlY3V0ZSgxKSlcbi8vICAgIOKGk1xuLy8gICAgxJDhu6NpIDMgZ2nDonkuLi5cbi8vICAgIOKGk1xuLy8gICAgR+G7jWkgY2FsbGJhY2sg4oaSIGV4ZWN1dGUoMSlcbi8vICAgIOKGk1xuLy8gICAgR+G7jWkgYXN5bmNGdW5jMihjYWxsYmFjazogKCkgPT4gZXhlY3V0ZSgyKSlcbi8vICAgICAgICDihpNcbi8vICAgICAgICDEkOG7o2kgMiBnacOieS4uLlxuLy8gICAgICAgIOKGk1xuLy8gICAgICAgIEfhu41pIGNhbGxiYWNrIOKGkiBleGVjdXRlKDIpXG4vLyAgICAgICAg4oaTXG4vLyAgICAgICAgR+G7jWkgYXN5bmNGdW5jMyhjYWxsYmFjazogKCkgPT4gZXhlY3V0ZSgzKSlcbi8vICAgICAgICAgICAg4oaTXG4vLyAgICAgICAgICAgIMSQ4bujaSAxIGdpw6J5Li4uXG4vLyAgICAgICAgICAgIOKGk1xuLy8gICAgICAgICAgICBH4buNaSBjYWxsYmFjayDihpIgZXhlY3V0ZSgzKVxuLy8gICAgICAgICAgICAgICAg4oaTXG4vLyAgICAgICAgICAgICAgICBUaG/DoXQgdsOsIGluZGV4ID49IGZ1bmNBcnJheS5sZW5ndGhcblxuXG4vLyBhc3luYzQgdGhyb3cgbmV3IGVycm9yLCBjaGVuIHZhbyBnaXVhLCBraGkgaGFtIGxvaSBnbyByYSB2YSBjaGF5IGxhaSBjaG8gZHVcblxuLy8gbGFuIHNhdSBnb2kgbGFpIHNlIGNoYXkgaGV0IGR1b2MiXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9f37IIAMpOqJ5v2EwgWyYF', 'Bai8');
// Day6/Bai8.js

"use strict";

function asyncParallel(funcArray, finalCallback) {
  //funcArray: mang chua cac ham bat dong bo; finalCallback la ham dc goi khi callback hoan thanh
  var result = []; // mang chua ket qua tung ham

  var completed = 0; // dem so mang hoan thanh

  funcArray.forEach(function (func, index) {
    // duyet qua tung ham cua funcArray, func se la ham async hien tai, index la vi tri cua no trong mang
    func(function (value) {
      //goi ham async, o day no se chay cac setTimeout, roi moi toi callback(value)
      result[index] = value; // gan ket qua value tra ve result[index] VD: aS3 tuy hoan thanh truoc nhung no van gan result[2] =3, aS2 xong tiep gan vo result[1]=2, cuoi cung la aS1 xong cuoi nhung no lai dc gan result[0]=1 => Ket qua van la [1,2,3]

      completed++; // tang so luong ham hoan thanh

      if (completed === funcArray.length) {
        //neu tat ca cac ham chay xong
        finalCallback(result); //tra ket qua khi toan bo ham chay xong het va truyen vao result
      }
    });
  });
} // doc tu tren xuong theo cmt la hieu 


function asyncFunc1(callback) {
  setTimeout(function () {
    return callback(1);
  }, 3000);
}

function asyncFunc2(callback) {
  setTimeout(function () {
    return callback(2);
  }, 2000);
}

function asyncFunc3(callback) {
  setTimeout(function () {
    return callback(3);
  }, 1000);
}

asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], function (result) {
  console.log(result);
}); // sau khi chay thi mat dung 3s de chay ra tat ca cac ham in ra ket qua [1,2,3] => cac ham chay song song khong doi ham nao xong roi moi chay
// bonus asci
// funcArray: [func1, func2, func3]
// index:      0       1       2
// func:     async1  async2  async3
//           ↓       ↓       ↓
//         (3s)    (2s)    (1s)
//           ↓       ↓       ↓
//  value:    1       2       3
// result: [1,     2,     3]
//          ↑      ↑      ↑
//        giữ đúng thứ tự dù thời gian chạy khác nhau

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTguanMiXSwibmFtZXMiOlsiYXN5bmNQYXJhbGxlbCIsImZ1bmNBcnJheSIsImZpbmFsQ2FsbGJhY2siLCJyZXN1bHQiLCJjb21wbGV0ZWQiLCJmb3JFYWNoIiwiZnVuYyIsImluZGV4IiwidmFsdWUiLCJsZW5ndGgiLCJhc3luY0Z1bmMxIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiYXN5bmNGdW5jMiIsImFzeW5jRnVuYzMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLGFBQVQsQ0FBdUJDLFNBQXZCLEVBQWtDQyxhQUFsQyxFQUFpRDtFQUFFO0VBQy9DLElBQU1DLE1BQU0sR0FBRyxFQUFmLENBRDZDLENBQzFCOztFQUNuQixJQUFJQyxTQUFTLEdBQUcsQ0FBaEIsQ0FGNkMsQ0FFMUI7O0VBRW5CSCxTQUFTLENBQUNJLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0lBQUU7SUFDakNELElBQUksQ0FBQyxVQUFDRSxLQUFELEVBQVU7TUFBRTtNQUNiTCxNQUFNLENBQUNJLEtBQUQsQ0FBTixHQUFnQkMsS0FBaEIsQ0FEVyxDQUNXOztNQUN0QkosU0FBUyxHQUZFLENBRUU7O01BQ2IsSUFBSUEsU0FBUyxLQUFLSCxTQUFTLENBQUNRLE1BQTVCLEVBQW1DO1FBQUU7UUFDakNQLGFBQWEsQ0FBQ0MsTUFBRCxDQUFiLENBRCtCLENBQ1Q7TUFDekI7SUFDSixDQU5HLENBQUo7RUFPSCxDQVJEO0FBU0gsRUFBQTs7O0FBRUQsU0FBU08sVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEI7RUFDNUJDLFVBQVUsQ0FBQztJQUFBLE9BQU1ELFFBQVEsQ0FBQyxDQUFELENBQWQ7RUFBQSxDQUFELEVBQW9CLElBQXBCLENBQVY7QUFDRDs7QUFDRCxTQUFTRSxVQUFULENBQW9CRixRQUFwQixFQUE4QjtFQUM1QkMsVUFBVSxDQUFDO0lBQUEsT0FBTUQsUUFBUSxDQUFDLENBQUQsQ0FBZDtFQUFBLENBQUQsRUFBb0IsSUFBcEIsQ0FBVjtBQUNEOztBQUNELFNBQVNHLFVBQVQsQ0FBb0JILFFBQXBCLEVBQThCO0VBQzVCQyxVQUFVLENBQUM7SUFBQSxPQUFNRCxRQUFRLENBQUMsQ0FBRCxDQUFkO0VBQUEsQ0FBRCxFQUFvQixJQUFwQixDQUFWO0FBQ0Q7O0FBRURYLGFBQWEsQ0FBQyxDQUFDVSxVQUFELEVBQWFHLFVBQWIsRUFBeUJDLFVBQXpCLENBQUQsRUFBdUMsVUFBQ1gsTUFBRCxFQUFZO0VBQzlEWSxPQUFPLENBQUNDLEdBQVIsQ0FBWWIsTUFBWjtBQUNELENBRlksQ0FBYixFQUlBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNQYXJhbGxlbChmdW5jQXJyYXksIGZpbmFsQ2FsbGJhY2spIHsgLy9mdW5jQXJyYXk6IG1hbmcgY2h1YSBjYWMgaGFtIGJhdCBkb25nIGJvOyBmaW5hbENhbGxiYWNrIGxhIGhhbSBkYyBnb2kga2hpIGNhbGxiYWNrIGhvYW4gdGhhbmhcbiAgICBjb25zdCByZXN1bHQgPSBbXTsgLy8gbWFuZyBjaHVhIGtldCBxdWEgdHVuZyBoYW1cbiAgICBsZXQgY29tcGxldGVkID0gMDsgLy8gZGVtIHNvIG1hbmcgaG9hbiB0aGFuaFxuXG4gICAgZnVuY0FycmF5LmZvckVhY2goKGZ1bmMsIGluZGV4KSA9PiB7IC8vIGR1eWV0IHF1YSB0dW5nIGhhbSBjdWEgZnVuY0FycmF5LCBmdW5jIHNlIGxhIGhhbSBhc3luYyBoaWVuIHRhaSwgaW5kZXggbGEgdmkgdHJpIGN1YSBubyB0cm9uZyBtYW5nXG4gICAgICAgIGZ1bmMoKHZhbHVlKSA9PnsgLy9nb2kgaGFtIGFzeW5jLCBvIGRheSBubyBzZSBjaGF5IGNhYyBzZXRUaW1lb3V0LCByb2kgbW9pIHRvaSBjYWxsYmFjayh2YWx1ZSlcbiAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSB2YWx1ZTsvLyBnYW4ga2V0IHF1YSB2YWx1ZSB0cmEgdmUgcmVzdWx0W2luZGV4XSBWRDogYVMzIHR1eSBob2FuIHRoYW5oIHRydW9jIG5odW5nIG5vIHZhbiBnYW4gcmVzdWx0WzJdID0zLCBhUzIgeG9uZyB0aWVwIGdhbiB2byByZXN1bHRbMV09MiwgY3VvaSBjdW5nIGxhIGFTMSB4b25nIGN1b2kgbmh1bmcgbm8gbGFpIGRjIGdhbiByZXN1bHRbMF09MSA9PiBLZXQgcXVhIHZhbiBsYSBbMSwyLDNdXG4gICAgICAgICAgICBjb21wbGV0ZWQrKzsgLy8gdGFuZyBzbyBsdW9uZyBoYW0gaG9hbiB0aGFuaFxuICAgICAgICAgICAgaWYoIGNvbXBsZXRlZCA9PT0gZnVuY0FycmF5Lmxlbmd0aCl7IC8vbmV1IHRhdCBjYSBjYWMgaGFtIGNoYXkgeG9uZ1xuICAgICAgICAgICAgICAgIGZpbmFsQ2FsbGJhY2socmVzdWx0KSAvL3RyYSBrZXQgcXVhIGtoaSB0b2FuIGJvIGhhbSBjaGF5IHhvbmcgaGV0IHZhIHRydXllbiB2YW8gcmVzdWx0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0vLyBkb2MgdHUgdHJlbiB4dW9uZyB0aGVvIGNtdCBsYSBoaWV1IFxuXG5mdW5jdGlvbiBhc3luY0Z1bmMxKGNhbGxiYWNrKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soMSksIDMwMDApO1xufVxuZnVuY3Rpb24gYXN5bmNGdW5jMihjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKDIpLCAyMDAwKTtcbn1cbmZ1bmN0aW9uIGFzeW5jRnVuYzMoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjaygzKSwgMTAwMCk7XG59XG5cbmFzeW5jUGFyYWxsZWwoW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzNdLCAocmVzdWx0KSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlc3VsdCk7XG59KTtcblxuLy8gc2F1IGtoaSBjaGF5IHRoaSBtYXQgZHVuZyAzcyBkZSBjaGF5IHJhIHRhdCBjYSBjYWMgaGFtIGluIHJhIGtldCBxdWEgWzEsMiwzXSA9PiBjYWMgaGFtIGNoYXkgc29uZyBzb25nIGtob25nIGRvaSBoYW0gbmFvIHhvbmcgcm9pIG1vaSBjaGF5XG5cblxuLy8gYm9udXMgYXNjaVxuXG4vLyBmdW5jQXJyYXk6IFtmdW5jMSwgZnVuYzIsIGZ1bmMzXVxuXG4vLyBpbmRleDogICAgICAwICAgICAgIDEgICAgICAgMlxuLy8gZnVuYzogICAgIGFzeW5jMSAgYXN5bmMyICBhc3luYzNcblxuLy8gICAgICAgICAgIOKGkyAgICAgICDihpMgICAgICAg4oaTXG4vLyAgICAgICAgICgzcykgICAgKDJzKSAgICAoMXMpXG4vLyAgICAgICAgICAg4oaTICAgICAgIOKGkyAgICAgICDihpNcbi8vICB2YWx1ZTogICAgMSAgICAgICAyICAgICAgIDNcblxuLy8gcmVzdWx0OiBbMSwgICAgIDIsICAgICAzXVxuLy8gICAgICAgICAg4oaRICAgICAg4oaRICAgICAg4oaRXG4vLyAgICAgICAgZ2nhu68gxJHDum5nIHRo4bupIHThu7EgZMO5IHRo4budaSBnaWFuIGNo4bqheSBraMOhYyBuaGF1XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai12.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd551d+tFxhHxaY9ZPD35O7l', 'Bai12');
// Day6/Bai12.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function asyncFunc1() {
  return new Promise(function (resolve, reject) {
    console.log("Started asyncFunc1");
    setTimeout(function () {
      //   reject("Error in asyncFunc1"); 
      console.log("Completed asyncFunc1");
      resolve("Result 1");
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise(function (resolve, reject) {
    console.log("Started asyncFunc2");
    setTimeout(function () {
      //   reject("Error in asyncFunc2");
      console.log("Completed asyncFunc2");
      resolve("Result 2");
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve, reject) {
    console.log("Started asyncFunc3");
    setTimeout(function () {
      //   reject("Error in asyncFunc3");
      console.log("Completed asyncFunc3");
      resolve("Result 3");
    }, 1000);
  });
}

function runSafeAsyncSequence() {
  return _runSafeAsyncSequence.apply(this, arguments);
}

function _runSafeAsyncSequence() {
  _runSafeAsyncSequence = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var result1, result2, result3;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return asyncFunc1();

          case 3:
            result1 = _context.sent;
            console.log("Result 1:", result1);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error("Error in asyncFunc1:", _context.t0);

          case 10:
            _context.prev = 10;
            _context.next = 13;
            return asyncFunc2();

          case 13:
            result2 = _context.sent;
            console.log("Result 2:", result2);
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t1 = _context["catch"](10);
            console.error("Error in asyncFunc2:", _context.t1);

          case 20:
            _context.prev = 20;
            _context.next = 23;
            return asyncFunc3();

          case 23:
            result3 = _context.sent;
            console.log("Result 3:", result3);
            _context.next = 30;
            break;

          case 27:
            _context.prev = 27;
            _context.t2 = _context["catch"](20);
            console.error("Error in asyncFunc3:", _context.t2);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7], [10, 17], [20, 27]]);
  }));
  return _runSafeAsyncSequence.apply(this, arguments);
}

runSafeAsyncSequence(); // khi chay ket qua , bat dong cmt reject de test loi thi ket qua nhu sau
// Started asyncFunc1
// Completed asyncFunc1
// Error in asyncFunc1: Error in asyncFunc1
// Started asyncFunc2
// Completed asyncFunc2
// Error in asyncFunc2: Error in asyncFunc2
// Started asyncFunc3
// Completed asyncFunc3
// Error in asyncFunc3: Error in asyncFunc3
// nhu da thay no van chay dc mac du bi error

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTEyLmpzIl0sIm5hbWVzIjpbImFzeW5jRnVuYzEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiYXN5bmNGdW5jMiIsImFzeW5jRnVuYzMiLCJydW5TYWZlQXN5bmNTZXF1ZW5jZSIsInJlc3VsdDEiLCJlcnJvciIsInJlc3VsdDIiLCJyZXN1bHQzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREEsU0FBU0EsVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0lBQ0FDLFVBQVUsQ0FBQyxZQUFNO01BQ2pCO01BQ0VGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO01BQ0FILE9BQU8sQ0FBQyxVQUFELENBQVA7SUFDRCxDQUpTLEVBSVAsSUFKTyxDQUFWO0VBS0QsQ0FQTSxDQUFQO0FBUUQ7O0FBRUQsU0FBU0ssVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlOLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0lBQ0FDLFVBQVUsQ0FBQyxZQUFNO01BQ2pCO01BQ0VGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO01BQ0FILE9BQU8sQ0FBQyxVQUFELENBQVA7SUFDRCxDQUpTLEVBSVAsSUFKTyxDQUFWO0VBS0QsQ0FQTSxDQUFQO0FBUUQ7O0FBRUQsU0FBU00sVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0lBQ0FDLFVBQVUsQ0FBQyxZQUFNO01BQ2pCO01BQ0VGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO01BQ0FILE9BQU8sQ0FBQyxVQUFELENBQVA7SUFDRCxDQUpTLEVBSVAsSUFKTyxDQUFWO0VBS0QsQ0FQTSxDQUFQO0FBUUQ7O1NBRWNPOzs7OztxRkFBZjtJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUEsT0FFMEJULFVBQVUsRUFGcEM7O1VBQUE7WUFFVVUsT0FGVjtZQUdJTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSyxPQUF6QjtZQUhKO1lBQUE7O1VBQUE7WUFBQTtZQUFBO1lBS0lOLE9BQU8sQ0FBQ08sS0FBUixDQUFjLHNCQUFkOztVQUxKO1lBQUE7WUFBQTtZQUFBLE9BUzBCSixVQUFVLEVBVHBDOztVQUFBO1lBU1VLLE9BVFY7WUFVSVIsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5Qk8sT0FBekI7WUFWSjtZQUFBOztVQUFBO1lBQUE7WUFBQTtZQVlJUixPQUFPLENBQUNPLEtBQVIsQ0FBYyxzQkFBZDs7VUFaSjtZQUFBO1lBQUE7WUFBQSxPQWdCMEJILFVBQVUsRUFoQnBDOztVQUFBO1lBZ0JVSyxPQWhCVjtZQWlCSVQsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlEsT0FBekI7WUFqQko7WUFBQTs7VUFBQTtZQUFBO1lBQUE7WUFtQklULE9BQU8sQ0FBQ08sS0FBUixDQUFjLHNCQUFkOztVQW5CSjtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTs7OztBQXVCQUYsb0JBQW9CLElBQ3BCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jRnVuYzEoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGVkIGFzeW5jRnVuYzFcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICByZWplY3QoXCJFcnJvciBpbiBhc3luY0Z1bmMxXCIpOyBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzFcIik7XG4gICAgICByZXNvbHZlKFwiUmVzdWx0IDFcIik7XG4gICAgfSwgMzAwMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY0Z1bmMyKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMyXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgcmVqZWN0KFwiRXJyb3IgaW4gYXN5bmNGdW5jMlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzJcIik7XG4gICAgICByZXNvbHZlKFwiUmVzdWx0IDJcIik7XG4gICAgfSwgMjAwMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY0Z1bmMzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMzXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgcmVqZWN0KFwiRXJyb3IgaW4gYXN5bmNGdW5jM1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzNcIik7XG4gICAgICByZXNvbHZlKFwiUmVzdWx0IDNcIik7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBydW5TYWZlQXN5bmNTZXF1ZW5jZSgpIHsgLy8gdmUgcGhhbiB4dSBseSBjdWEgYXN5bmMgYXdhaXQgdGhpIHRhIHRhY2ggdHVuZyB0cnktY2F0Y2ggY2hvIHR1bmcgZnVuY3Rpb24sIHRoaSBubyBzZSB2YW4gY2hheSBidGggbWFjIGR1IGZ1bmN0aW9uIHRydW9jIGRvIGJpIGxvaSB0aG9pXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0MSA9IGF3YWl0IGFzeW5jRnVuYzEoKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCAxOlwiLCByZXN1bHQxKTtcbiAgfSBjYXRjaCAoZXJyMSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBhc3luY0Z1bmMxOlwiLCBlcnIxKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0MiA9IGF3YWl0IGFzeW5jRnVuYzIoKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCAyOlwiLCByZXN1bHQyKTtcbiAgfSBjYXRjaCAoZXJyMikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBhc3luY0Z1bmMyOlwiLCBlcnIyKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0MyA9IGF3YWl0IGFzeW5jRnVuYzMoKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCAzOlwiLCByZXN1bHQzKTtcbiAgfSBjYXRjaCAoZXJyMykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBhc3luY0Z1bmMzOlwiLCBlcnIzKTtcbiAgfVxufVxuXG5ydW5TYWZlQXN5bmNTZXF1ZW5jZSgpO1xuLy8ga2hpIGNoYXkga2V0IHF1YSAsIGJhdCBkb25nIGNtdCByZWplY3QgZGUgdGVzdCBsb2kgdGhpIGtldCBxdWEgbmh1IHNhdVxuXG4vLyBTdGFydGVkIGFzeW5jRnVuYzFcbi8vIENvbXBsZXRlZCBhc3luY0Z1bmMxXG4vLyBFcnJvciBpbiBhc3luY0Z1bmMxOiBFcnJvciBpbiBhc3luY0Z1bmMxXG4vLyBTdGFydGVkIGFzeW5jRnVuYzJcbi8vIENvbXBsZXRlZCBhc3luY0Z1bmMyXG4vLyBFcnJvciBpbiBhc3luY0Z1bmMyOiBFcnJvciBpbiBhc3luY0Z1bmMyXG4vLyBTdGFydGVkIGFzeW5jRnVuYzNcbi8vIENvbXBsZXRlZCBhc3luY0Z1bmMzXG4vLyBFcnJvciBpbiBhc3luY0Z1bmMzOiBFcnJvciBpbiBhc3luY0Z1bmMzXG5cbi8vIG5odSBkYSB0aGF5IG5vIHZhbiBjaGF5IGRjIG1hYyBkdSBiaSBlcnJvciJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai10.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7a08sFSwdLqoXn0ClIe9r5', 'Bai10');
// Day6/Bai10.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function asyncFunc1() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc1");
    setTimeout(function () {
      console.log("Completed asyncFunc1");
      resolve(1);
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc2");
    setTimeout(function () {
      console.log("Completed asyncFunc2");
      resolve(2);
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc3");
    setTimeout(function () {
      console.log("Completed asyncFunc3");
      resolve(3);
    }, 1000);
  });
}

function runSequentialAsync() {
  return _runSequentialAsync.apply(this, arguments);
}

function _runSequentialAsync() {
  _runSequentialAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var result1, result2, result3;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return asyncFunc1();

          case 3:
            result1 = _context.sent;
            // cho ket qua cua asyncFunc1()
            console.log("Result 1:", result1); //roi moi in ra 

            _context.next = 7;
            return asyncFunc2();

          case 7:
            result2 = _context.sent;
            // cho ket qua cua asyncFunc2()
            console.log("Result 2:", result2); //roi moi in ra 

            _context.next = 11;
            return asyncFunc3();

          case 11:
            result3 = _context.sent;
            // cho ket qua cua asyncFunc3()
            console.log("Result 3:", result3); //roi moi in ra 

            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            console.error("Error occurred:", _context.t0); //bat loi

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));
  return _runSequentialAsync.apply(this, arguments);
}

runSequentialAsync(); //chay ham

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTEwLmpzIl0sIm5hbWVzIjpbImFzeW5jRnVuYzEiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiYXN5bmNGdW5jMiIsImFzeW5jRnVuYzMiLCJydW5TZXF1ZW50aWFsQXN5bmMiLCJyZXN1bHQxIiwicmVzdWx0MiIsInJlc3VsdDMiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7Ozs7OztBQURBLFNBQVNBLFVBQVQsR0FBc0I7RUFDcEIsT0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0lBQzlCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtJQUNBQyxVQUFVLENBQUMsWUFBTTtNQUNmRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtNQUNBRixPQUFPLENBQUMsQ0FBRCxDQUFQO0lBQ0QsQ0FIUyxFQUdQLElBSE8sQ0FBVjtFQUlELENBTk0sQ0FBUDtBQU9EOztBQUVELFNBQVNJLFVBQVQsR0FBc0I7RUFDcEIsT0FBTyxJQUFJTCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0lBQzlCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtJQUNBQyxVQUFVLENBQUMsWUFBTTtNQUNmRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtNQUNBRixPQUFPLENBQUMsQ0FBRCxDQUFQO0lBQ0QsQ0FIUyxFQUdQLElBSE8sQ0FBVjtFQUlELENBTk0sQ0FBUDtBQU9EOztBQUVELFNBQVNLLFVBQVQsR0FBc0I7RUFDcEIsT0FBTyxJQUFJTixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0lBQzlCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtJQUNBQyxVQUFVLENBQUMsWUFBTTtNQUNmRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtNQUNBRixPQUFPLENBQUMsQ0FBRCxDQUFQO0lBQ0QsQ0FIUyxFQUdQLElBSE8sQ0FBVjtFQUlELENBTk0sQ0FBUDtBQU9EOztTQUVjTTs7Ozs7bUZBQWY7SUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBLE9BRTBCUixVQUFVLEVBRnBDOztVQUFBO1lBRVVTLE9BRlY7WUFFd0M7WUFDcENOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJLLE9BQXpCLEVBSEosQ0FHdUM7O1lBSHZDO1lBQUEsT0FLMEJILFVBQVUsRUFMcEM7O1VBQUE7WUFLVUksT0FMVjtZQUt1QztZQUNuQ1AsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5Qk0sT0FBekIsRUFOSixDQU1zQzs7WUFOdEM7WUFBQSxPQVEwQkgsVUFBVSxFQVJwQzs7VUFBQTtZQVFVSSxPQVJWO1lBUXdDO1lBQ3BDUixPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCTyxPQUF6QixFQVRKLENBU3NDOztZQVR0QztZQUFBOztVQUFBO1lBQUE7WUFBQTtZQVdJUixPQUFPLENBQUNTLEtBQVIsQ0FBYyxpQkFBZCxlQVhKLENBVzZDOztVQVg3QztVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTs7OztBQWVBSixrQkFBa0IsSUFBRyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNGdW5jMSgpIHsgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMxXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJDb21wbGV0ZWQgYXN5bmNGdW5jMVwiKTtcbiAgICAgIHJlc29sdmUoMSk7XG4gICAgfSwgMzAwMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY0Z1bmMyKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jMlwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzJcIik7XG4gICAgICByZXNvbHZlKDIpO1xuICAgIH0sIDIwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNGdW5jMygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGVkIGFzeW5jRnVuYzNcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMzXCIpO1xuICAgICAgcmVzb2x2ZSgzKTtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1blNlcXVlbnRpYWxBc3luYygpIHsgLy9hc3luYyBmdW50aW9uIHRob25nIGJhbyByYW5nIGRheSBsYSAxIGhhbSB4dSBseSBiYXQgZG9uZyBib1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdDEgPSBhd2FpdCBhc3luY0Z1bmMxKCk7IC8vIGNobyBrZXQgcXVhIGN1YSBhc3luY0Z1bmMxKClcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCAxOlwiLCByZXN1bHQxKTsgLy9yb2kgbW9pIGluIHJhIFxuXG4gICAgY29uc3QgcmVzdWx0MiA9IGF3YWl0IGFzeW5jRnVuYzIoKTsvLyBjaG8ga2V0IHF1YSBjdWEgYXN5bmNGdW5jMigpXG4gICAgY29uc29sZS5sb2coXCJSZXN1bHQgMjpcIiwgcmVzdWx0Mik7Ly9yb2kgbW9pIGluIHJhIFxuXG4gICAgY29uc3QgcmVzdWx0MyA9IGF3YWl0IGFzeW5jRnVuYzMoKTsgLy8gY2hvIGtldCBxdWEgY3VhIGFzeW5jRnVuYzMoKVxuICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IDM6XCIsIHJlc3VsdDMpOy8vcm9pIG1vaSBpbiByYSBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igb2NjdXJyZWQ6XCIsIGVycm9yKTsgLy9iYXQgbG9pXG4gIH1cbn1cblxucnVuU2VxdWVudGlhbEFzeW5jKCk7Ly9jaGF5IGhhbVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai11.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab9cbTtGjFE1p3c3Vge7oiO', 'Bai11');
// Day6/Bai11.js

"use strict";

function asyncFunc1() {
  return new Promise(function (resolve, reject) {
    // co the hieu la resolve la trang thai thanh cong, reject la that bai
    console.log("Started asyncFunc1");
    setTimeout(function () {
      console.log("Completed asyncFunc1");
      resolve("Result 1");
    }, 1000);
  });
}

function asyncFunc2() {
  return new Promise(function (resolve, reject) {
    console.log("Started asyncFunc2");
    setTimeout(function () {
      console.log("Failed asyncFunc2");
      reject("Error in asyncFunc2");
    }, 1000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve, reject) {
    console.log("Started asyncFunc3");
    setTimeout(function () {
      console.log("Completed asyncFunc3");
      resolve("Result 3");
    }, 1000);
  });
}

asyncFunc1().then(function (res1) {
  // xu li trang thai thanh cong tuc la no la resolve
  console.log(res1);
  return asyncFunc2();
}, function (err1) {
  // that bai duong nhien no la reject 
  console.error("Error in asyncFunc1:", err1);
  return asyncFunc2();
}).then(function (res2) {
  // xu li trang thai thanh cong tuc la no la resolve
  console.log(res2);
  return asyncFunc3();
}, function (err2) {
  // that bai duong nhien no la reject 
  console.error("Error in asyncFunc2:", err2);
  return asyncFunc3();
}).then(function (res3) {
  // xu li trang thai thanh cong tuc la no la resolve
  console.log(res3);
}, function (err3) {
  // that bai duong nhien no la reject 
  console.error("Error in asyncFunc3:", err3);
}); //co test error bang reject o function 2... ket qua la
//Started asyncFunc1
// Completed asyncFunc1
// Result 1
// Started asyncFunc2
// Failed asyncFunc2
// Error in asyncFunc2: Error in asyncFunc2
// Started asyncFunc3
// Completed asyncFunc3
// Result 3
// v la chi function 2 bi fail nhung tat ca func khac deu chay dc

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTExLmpzIl0sIm5hbWVzIjpbImFzeW5jRnVuYzEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiYXN5bmNGdW5jMiIsImFzeW5jRnVuYzMiLCJ0aGVuIiwicmVzMSIsImVycjEiLCJlcnJvciIsInJlczIiLCJlcnIyIiwicmVzMyIsImVycjMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7SUFBRTtJQUN4Q0MsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUgsT0FBTyxDQUFDLFVBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTSyxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSU4sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtJQUN0Q0MsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7TUFDQUYsTUFBTSxDQUFDLHFCQUFELENBQU47SUFDRCxDQUhTLEVBR1AsSUFITyxDQUFWO0VBSUQsQ0FOTSxDQUFQO0FBT0Q7O0FBRUQsU0FBU0ssVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0lBQ0FDLFVBQVUsQ0FBQyxZQUFNO01BQ2ZGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO01BQ0FILE9BQU8sQ0FBQyxVQUFELENBQVA7SUFDRCxDQUhTLEVBR1AsSUFITyxDQUFWO0VBSUQsQ0FOTSxDQUFQO0FBT0Q7O0FBRURGLFVBQVUsR0FDUFMsSUFESCxDQUNRLFVBQUNDLElBQUQsRUFBVTtFQUFFO0VBQ2hCTixPQUFPLENBQUNDLEdBQVIsQ0FBWUssSUFBWjtFQUNBLE9BQU9ILFVBQVUsRUFBakI7QUFDRCxDQUpILEVBSUssVUFBQ0ksSUFBRCxFQUFVO0VBQUU7RUFDYlAsT0FBTyxDQUFDUSxLQUFSLENBQWMsc0JBQWQsRUFBc0NELElBQXRDO0VBQ0EsT0FBT0osVUFBVSxFQUFqQjtBQUNELENBUEgsRUFRR0UsSUFSSCxDQVFRLFVBQUNJLElBQUQsRUFBVTtFQUFDO0VBQ2ZULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxJQUFaO0VBQ0EsT0FBT0wsVUFBVSxFQUFqQjtBQUNELENBWEgsRUFXSyxVQUFDTSxJQUFELEVBQVU7RUFBQztFQUNaVixPQUFPLENBQUNRLEtBQVIsQ0FBYyxzQkFBZCxFQUFzQ0UsSUFBdEM7RUFDQSxPQUFPTixVQUFVLEVBQWpCO0FBQ0QsQ0FkSCxFQWVHQyxJQWZILENBZVEsVUFBQ00sSUFBRCxFQUFVO0VBQUM7RUFDZlgsT0FBTyxDQUFDQyxHQUFSLENBQVlVLElBQVo7QUFDRCxDQWpCSCxFQWlCSyxVQUFDQyxJQUFELEVBQVU7RUFBQztFQUNaWixPQUFPLENBQUNRLEtBQVIsQ0FBYyxzQkFBZCxFQUFzQ0ksSUFBdEM7QUFDRCxDQW5CSCxHQXFCRTtBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0Z1bmMxKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyAvLyBjbyB0aGUgaGlldSBsYSByZXNvbHZlIGxhIHRyYW5nIHRoYWkgdGhhbmggY29uZywgcmVqZWN0IGxhIHRoYXQgYmFpXG4gICAgY29uc29sZS5sb2coXCJTdGFydGVkIGFzeW5jRnVuYzFcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhc3luY0Z1bmMxXCIpO1xuICAgICAgcmVzb2x2ZShcIlJlc3VsdCAxXCIpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNGdW5jMigpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jMlwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIGFzeW5jRnVuYzJcIik7XG4gICAgICByZWplY3QoXCJFcnJvciBpbiBhc3luY0Z1bmMyXCIpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNGdW5jMygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jM1wiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzNcIik7XG4gICAgICByZXNvbHZlKFwiUmVzdWx0IDNcIik7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xufVxuXG5hc3luY0Z1bmMxKClcbiAgLnRoZW4oKHJlczEpID0+IHsgLy8geHUgbGkgdHJhbmcgdGhhaSB0aGFuaCBjb25nIHR1YyBsYSBubyBsYSByZXNvbHZlXG4gICAgY29uc29sZS5sb2cocmVzMSk7XG4gICAgcmV0dXJuIGFzeW5jRnVuYzIoKTtcbiAgfSwgKGVycjEpID0+IHsgLy8gdGhhdCBiYWkgZHVvbmcgbmhpZW4gbm8gbGEgcmVqZWN0IFxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBhc3luY0Z1bmMxOlwiLCBlcnIxKTtcbiAgICByZXR1cm4gYXN5bmNGdW5jMigpOyBcbiAgfSlcbiAgLnRoZW4oKHJlczIpID0+IHsvLyB4dSBsaSB0cmFuZyB0aGFpIHRoYW5oIGNvbmcgdHVjIGxhIG5vIGxhIHJlc29sdmVcbiAgICBjb25zb2xlLmxvZyhyZXMyKTtcbiAgICByZXR1cm4gYXN5bmNGdW5jMygpO1xuICB9LCAoZXJyMikgPT4gey8vIHRoYXQgYmFpIGR1b25nIG5oaWVuIG5vIGxhIHJlamVjdCBcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gYXN5bmNGdW5jMjpcIiwgZXJyMik7XG4gICAgcmV0dXJuIGFzeW5jRnVuYzMoKTtcbiAgfSlcbiAgLnRoZW4oKHJlczMpID0+IHsvLyB4dSBsaSB0cmFuZyB0aGFpIHRoYW5oIGNvbmcgdHVjIGxhIG5vIGxhIHJlc29sdmVcbiAgICBjb25zb2xlLmxvZyhyZXMzKTtcbiAgfSwgKGVycjMpID0+IHsvLyB0aGF0IGJhaSBkdW9uZyBuaGllbiBubyBsYSByZWplY3QgXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGFzeW5jRnVuYzM6XCIsIGVycjMpO1xuICB9KTtcblxuICAvL2NvIHRlc3QgZXJyb3IgYmFuZyByZWplY3QgbyBmdW5jdGlvbiAyLi4uIGtldCBxdWEgbGFcbiAgLy9TdGFydGVkIGFzeW5jRnVuYzFcbi8vIENvbXBsZXRlZCBhc3luY0Z1bmMxXG4vLyBSZXN1bHQgMVxuLy8gU3RhcnRlZCBhc3luY0Z1bmMyXG4vLyBGYWlsZWQgYXN5bmNGdW5jMlxuLy8gRXJyb3IgaW4gYXN5bmNGdW5jMjogRXJyb3IgaW4gYXN5bmNGdW5jMlxuLy8gU3RhcnRlZCBhc3luY0Z1bmMzXG4vLyBDb21wbGV0ZWQgYXN5bmNGdW5jM1xuLy8gUmVzdWx0IDNcbi8vIHYgbGEgY2hpIGZ1bmN0aW9uIDIgYmkgZmFpbCBuaHVuZyB0YXQgY2EgZnVuYyBraGFjIGRldSBjaGF5IGRjIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai9.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ecff1nyUBJ44NrxRa9Avdh', 'Bai9');
// Day6/Bai9.js

"use strict";

function asyncFunc1() {
  return new Promise(function (resolve) {
    // tao 1 promise, promise nay nhan 1 ham doi so, o day la resolve - ham nay dung de bao hieu cong viec da hoan thanh
    console.log("Started asyncFunc1");
    setTimeout(function () {
      console.log("Completed asyncFunc1");
      resolve(1); // in 1, hoan thanh va dua len promise
    }, 3000); // doi 3s
  });
}

function asyncFunc2() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc2");
    setTimeout(function () {
      console.log("Completed asyncFunc2");
      resolve(2);
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise(function (resolve) {
    console.log("Started asyncFunc3");
    setTimeout(function () {
      console.log("Completed asyncFunc3");
      resolve(3);
    }, 1000);
  });
}

asyncFunc1().then(function (result1) {
  // sau khi hoan thanh (sau 3s nhu tren), no goi ham dau tien trong chuoi bang then
  console.log("Result 1:", result1); //result1 nhan gia tri tu resolve(1)

  return asyncFunc2(); //goi ham async2 ( ham tiep theo)
}).then(function (result2) {
  console.log("Result 2:", result2);
  return asyncFunc3();
}).then(function (result3) {
  console.log("Result 3:", result3);
})["catch"](function (error) {
  // neu co loi thi in loi
  console.error("Error occurred:", error);
}); //sau khi chay nhan xet ket qua giong bai 7, no doi chay xong ket qua moi toi ham tiep theo

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTkuanMiXSwibmFtZXMiOlsiYXN5bmNGdW5jMSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJhc3luY0Z1bmMyIiwiYXN5bmNGdW5jMyIsInRoZW4iLCJyZXN1bHQxIiwicmVzdWx0MiIsInJlc3VsdDMiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUFFO0lBQ2hDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtJQUNBQyxVQUFVLENBQUMsWUFBTTtNQUNmRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtNQUNBRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBRmUsQ0FFSjtJQUNaLENBSFMsRUFHUCxJQUhPLENBQVYsQ0FGOEIsQ0FLckI7RUFDVixDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTSSxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSUwsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUM5QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUYsT0FBTyxDQUFDLENBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFRCxTQUFTSyxVQUFULEdBQXNCO0VBQ3BCLE9BQU8sSUFBSU4sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtJQUM5QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7SUFDQUMsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7TUFDQUYsT0FBTyxDQUFDLENBQUQsQ0FBUDtJQUNELENBSFMsRUFHUCxJQUhPLENBQVY7RUFJRCxDQU5NLENBQVA7QUFPRDs7QUFFREYsVUFBVSxHQUNQUSxJQURILENBQ1EsVUFBQ0MsT0FBRCxFQUFhO0VBQUU7RUFDbkJOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJLLE9BQXpCLEVBRGlCLENBQ2tCOztFQUNuQyxPQUFPSCxVQUFVLEVBQWpCLENBRmlCLENBRUk7QUFDdEIsQ0FKSCxFQUtHRSxJQUxILENBS1EsVUFBQ0UsT0FBRCxFQUFhO0VBQ2pCUCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCTSxPQUF6QjtFQUNBLE9BQU9ILFVBQVUsRUFBakI7QUFDRCxDQVJILEVBU0dDLElBVEgsQ0FTUSxVQUFDRyxPQUFELEVBQWE7RUFDakJSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJPLE9BQXpCO0FBQ0QsQ0FYSCxXQVlTLFVBQUNDLEtBQUQsRUFBVztFQUFDO0VBQ2pCVCxPQUFPLENBQUNTLEtBQVIsQ0FBYyxpQkFBZCxFQUFpQ0EsS0FBakM7QUFDRCxDQWRILEdBZUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jRnVuYzEoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyAvLyB0YW8gMSBwcm9taXNlLCBwcm9taXNlIG5heSBuaGFuIDEgaGFtIGRvaSBzbywgbyBkYXkgbGEgcmVzb2x2ZSAtIGhhbSBuYXkgZHVuZyBkZSBiYW8gaGlldSBjb25nIHZpZWMgZGEgaG9hbiB0aGFuaFxuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMxXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJDb21wbGV0ZWQgYXN5bmNGdW5jMVwiKTtcbiAgICAgIHJlc29sdmUoMSk7Ly8gaW4gMSwgaG9hbiB0aGFuaCB2YSBkdWEgbGVuIHByb21pc2VcbiAgICB9LCAzMDAwKTsvLyBkb2kgM3NcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFzeW5jRnVuYzIoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMyXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJDb21wbGV0ZWQgYXN5bmNGdW5jMlwiKTtcbiAgICAgIHJlc29sdmUoMik7XG4gICAgfSwgMjAwMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY0Z1bmMzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jM1wiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzNcIik7XG4gICAgICByZXNvbHZlKDMpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cblxuYXN5bmNGdW5jMSgpXG4gIC50aGVuKChyZXN1bHQxKSA9PiB7IC8vIHNhdSBraGkgaG9hbiB0aGFuaCAoc2F1IDNzIG5odSB0cmVuKSwgbm8gZ29pIGhhbSBkYXUgdGllbiB0cm9uZyBjaHVvaSBiYW5nIHRoZW5cbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCAxOlwiLCByZXN1bHQxKTsgLy9yZXN1bHQxIG5oYW4gZ2lhIHRyaSB0dSByZXNvbHZlKDEpXG4gICAgcmV0dXJuIGFzeW5jRnVuYzIoKTsgLy9nb2kgaGFtIGFzeW5jMiAoIGhhbSB0aWVwIHRoZW8pXG4gIH0pXG4gIC50aGVuKChyZXN1bHQyKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSZXN1bHQgMjpcIiwgcmVzdWx0Mik7XG4gICAgcmV0dXJuIGFzeW5jRnVuYzMoKTtcbiAgfSlcbiAgLnRoZW4oKHJlc3VsdDMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCAzOlwiLCByZXN1bHQzKTtcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4gey8vIG5ldSBjbyBsb2kgdGhpIGluIGxvaVxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBvY2N1cnJlZDpcIiwgZXJyb3IpO1xuICB9KTtcbi8vc2F1IGtoaSBjaGF5IG5oYW4geGV0IGtldCBxdWEgZ2lvbmcgYmFpIDcsIG5vIGRvaSBjaGF5IHhvbmcga2V0IHF1YSBtb2kgdG9pIGhhbSB0aWVwIHRoZW8iXX0=
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
}); //FLOW
//User gọi fetchDataWithTimeout(url, timeout)
//                │
//                ▼
// ┌────────────────────────────────────────┐
// │ Tạo AbortController + signal           │
// └────────────────────────────────────────┘
//                │
//                ▼
// ┌────────────────────────────────────────┐
// │ setTimeout sau `timeout` ms            │
// │   └──> nếu hết giờ: controller.abort() │
// │                  reject("timeout")     │
// └────────────────────────────────────────┘
//                │
//                ▼
// ┌────────────────────────────────────────┐
// │ fetch(url, { signal })                 │
// └────────────────────────────────────────┘
//                │
//                ├──> Nếu response về trước khi timeout:
//                │        └── clearTimeout
//                │        └── resolve(data)
//                │
//                └──> Nếu bị timeout (bị abort):
//                         └── catch -> kiểm tra lỗi
//                         └── reject("Request aborted...")
// abort su dung khi nao, khong su dung
// gia su co 1 cai plat k ho tro, thi cta giai quyet ntn
// abort controler chi su dung cho fetch, neu xai axios hoac cai khac tuong tu thi nhu the nao`

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk2LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiVGltZU91dCIsIlRpbGUiLCJMYWJlbCIsIkJvZHkiLCJzcHJpdGVBcnJheSIsInR5cGUiLCJTcHJpdGUiLCJmZXRjaEltYWdlV2l0aFRpbWVvdXQiLCJ1cmwiLCJ0aW1lb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImFib3J0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjbGVhclRpbWVvdXQiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiYmxvYiIsImltZyIsIkltYWdlIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25sb2FkIiwib25lcnJvciIsImVyciIsImVycm9yIiwibmFtZSIsImNhbGwiLCJ1cmxzIiwicHJvbWlzZXMiLCJtYXAiLCJhbGwiLCJyZXN1bHRzIiwiaSIsImxlbmd0aCIsInJlc3VsdCIsInN0cmluZyIsInRleHR1cmUiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUUsS0FERDtJQUVSQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sS0FGRDtJQUdSQyxJQUFJLEVBQUVQLEVBQUUsQ0FBQ00sS0FIRDtJQUtSRSxXQUFXLEVBQUU7TUFDVCxXQUFTLEVBREE7TUFFVEMsSUFBSSxFQUFFLENBQUNULEVBQUUsQ0FBQ1UsTUFBSjtJQUZHO0VBTEwsQ0FIUDtFQWNMQyxxQkFkSyxpQ0FjaUJDLEdBZGpCLEVBY3NCQyxPQWR0QixFQWMrQjtJQUNoQyxPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7TUFDcEMsSUFBTUMsVUFBVSxHQUFHLElBQUlDLGVBQUosRUFBbkI7TUFDQSxJQUFNQyxNQUFNLEdBQUdGLFVBQVUsQ0FBQ0UsTUFBMUI7TUFFQSxJQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO1FBQy9CSixVQUFVLENBQUNLLEtBQVg7TUFDSCxDQUYyQixFQUV6QlQsT0FGeUIsQ0FBNUI7TUFJQVUsS0FBSyxDQUFDWCxHQUFELEVBQU07UUFBRU8sTUFBTSxFQUFOQTtNQUFGLENBQU4sQ0FBTCxDQUNLSyxJQURMLENBQ1UsVUFBQUMsUUFBUSxFQUFJO1FBQ2RDLFlBQVksQ0FBQ04sU0FBRCxDQUFaOztRQUNBLElBQUksQ0FBQ0ssUUFBUSxDQUFDRSxFQUFkLEVBQWtCO1VBQ2QsTUFBTSxJQUFJQyxLQUFKLDBCQUFpQ0gsUUFBUSxDQUFDSSxNQUExQyxDQUFOO1FBQ0g7O1FBQ0QsT0FBT0osUUFBUSxDQUFDSyxJQUFULEVBQVA7TUFDSCxDQVBMLEVBUUtOLElBUkwsQ0FRVSxVQUFBTSxJQUFJLEVBQUk7UUFDVixJQUFJQyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFWO1FBQ0FELEdBQUcsQ0FBQ0UsR0FBSixHQUFVQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JMLElBQXBCLENBQVY7O1FBQ0FDLEdBQUcsQ0FBQ0ssTUFBSixHQUFhO1VBQUEsT0FBTXJCLE9BQU8sQ0FBQ2dCLEdBQUQsQ0FBYjtRQUFBLENBQWI7O1FBQ0FBLEdBQUcsQ0FBQ00sT0FBSixHQUFjLFVBQUFDLEdBQUc7VUFBQSxPQUFJdEIsTUFBTSxDQUFDc0IsR0FBRCxDQUFWO1FBQUEsQ0FBakI7TUFDSCxDQWJMLFdBY1csVUFBQUMsS0FBSyxFQUFJO1FBQ1osSUFBSUEsS0FBSyxDQUFDQyxJQUFOLEtBQWUsWUFBbkIsRUFBaUM7VUFDN0J4QixNQUFNLENBQUMsSUFBSVksS0FBSixDQUFVLG1CQUFWLENBQUQsQ0FBTjtRQUNILENBRkQsTUFFTztVQUNIWixNQUFNLENBQUN1QixLQUFELENBQU47UUFDSDtNQUNKLENBcEJMO0lBcUJILENBN0JNLENBQVA7RUE4QkgsQ0E3Q0k7RUErQ0NFLElBL0NELGtCQStDUTtJQUFBOztJQUFBO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUNIQyxJQURHLEdBQ0ksQ0FDVCxzQ0FEUyxFQUVULGtHQUZTLEVBR1Qsa0dBSFMsRUFJVCxrR0FKUyxFQUtULGtHQUxTLENBREo7Y0FTSEMsUUFURyxHQVNRRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFBaEMsR0FBRztnQkFBQSxPQUN6QixLQUFJLENBQUNELHFCQUFMLENBQTJCQyxHQUEzQixFQUFnQyxLQUFJLENBQUNSLE9BQXJDLEVBQ0tvQixJQURMLENBQ1UsVUFBQU8sR0FBRztrQkFBQSxPQUFLO29CQUFFRixNQUFNLEVBQUUsV0FBVjtvQkFBdUJFLEdBQUcsRUFBSEEsR0FBdkI7b0JBQTRCbkIsR0FBRyxFQUFIQTtrQkFBNUIsQ0FBTDtnQkFBQSxDQURiLFdBRVcsVUFBQTJCLEtBQUs7a0JBQUEsT0FBSztvQkFBRVYsTUFBTSxFQUFFLFVBQVY7b0JBQXNCVSxLQUFLLEVBQUxBLEtBQXRCO29CQUE2QjNCLEdBQUcsRUFBSEE7a0JBQTdCLENBQUw7Z0JBQUEsQ0FGaEIsQ0FEeUI7Y0FBQSxDQUFaLENBVFI7Y0FBQTtjQUFBLE9BZWFFLE9BQU8sQ0FBQytCLEdBQVIsQ0FBWUYsUUFBWixDQWZiOztZQUFBO2NBZUhHLE9BZkc7O2NBaUJULEtBQVNDLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELE9BQU8sQ0FBQ0UsTUFBNUIsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7Z0JBQy9CRSxNQUQrQixHQUN0QkgsT0FBTyxDQUFDQyxDQUFELENBRGU7O2dCQUdyQyxJQUFJRSxNQUFNLENBQUNwQixNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO2tCQUMvQixLQUFJLENBQUN4QixJQUFMLENBQVU2QyxNQUFWLEdBQW1CLGVBQW5CO2tCQUNBLEtBQUksQ0FBQzNDLElBQUwsQ0FBVTJDLE1BQVYsR0FBbUJELE1BQU0sQ0FBQ3JDLEdBQTFCO2tCQUVJdUMsT0FKMkIsR0FJakIsSUFBSW5ELEVBQUUsQ0FBQ29ELFNBQVAsRUFKaUI7a0JBSy9CRCxPQUFPLENBQUNFLGVBQVIsQ0FBd0JKLE1BQU0sQ0FBQ2xCLEdBQS9CO2tCQUNBb0IsT0FBTyxDQUFDRyxtQkFBUjtrQkFFSUMsV0FSMkIsR0FRYixJQUFJdkQsRUFBRSxDQUFDd0QsV0FBUCxDQUFtQkwsT0FBbkIsQ0FSYTs7a0JBVS9CLElBQUlKLENBQUMsR0FBRyxLQUFJLENBQUN2QyxXQUFMLENBQWlCd0MsTUFBekIsRUFBaUM7b0JBQzdCLEtBQUksQ0FBQ3hDLFdBQUwsQ0FBaUJ1QyxDQUFqQixFQUFvQlEsV0FBcEIsR0FBa0NBLFdBQWxDO2tCQUNILENBRkQsTUFFTztvQkFDSEUsT0FBTyxDQUFDQyxJQUFSLG9DQUE4Q1gsQ0FBOUM7a0JBQ0g7Z0JBRUosQ0FoQkQsTUFnQk87a0JBQ0gsS0FBSSxDQUFDMUMsSUFBTCxDQUFVNkMsTUFBVixHQUFtQixRQUFuQjtrQkFDQSxLQUFJLENBQUMzQyxJQUFMLENBQVUyQyxNQUFWLEdBQW1CRCxNQUFNLENBQUNWLEtBQVAsQ0FBYW9CLE9BQWhDO2tCQUNBRixPQUFPLENBQUNsQixLQUFSLENBQWMsc0JBQWQsRUFBc0NVLE1BQU0sQ0FBQ3JDLEdBQTdDLEVBQWtEcUMsTUFBTSxDQUFDVixLQUF6RDtnQkFDSDtjQUNKOztZQXpDUTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQTtFQTBDWixDQXpGSTtFQTJGTHFCLEtBM0ZLLG1CQTJGRztJQUNKLEtBQUtuQixJQUFMO0VBQ0g7QUE3RkksQ0FBVCxHQWdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFRpbWVPdXQ6IDEwMDAwLFxuICAgICAgICBUaWxlOiBjYy5MYWJlbCxcbiAgICAgICAgQm9keTogY2MuTGFiZWwsXG5cbiAgICAgICAgc3ByaXRlQXJyYXk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlNwcml0ZV1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmZXRjaEltYWdlV2l0aFRpbWVvdXQodXJsLCB0aW1lb3V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpOyBcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsO1xuXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcblxuICAgICAgICAgICAgZmV0Y2godXJsLCB7IHNpZ25hbCB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oYmxvYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltZyk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmVycm9yID0gZXJyID0+IHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignUmVxdWVzdCB0aW1lZCBvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhc3luYyBjYWxsKCkge1xuICAgICAgICBjb25zdCB1cmxzID0gW1xuICAgICAgICAgICAgJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8yMzcvMzAwLzIwMCcsXG4gICAgICAgICAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8zLzUwMDAvMzMzMy5qcGc/aG1hYz1HRGpaMnVOV0UzVjU5UGtkRGFPelRPdVYzdFBXV3hKU2Y0Zk5jeHU0UzJnJyxcbiAgICAgICAgICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzEvNTAwMC8zMzMzLmpwZz9obWFjPUFzdjJEVTNyQV81RDF4U2UyMnhaSzQ3V0VBTjB3aldlRk9oemQxM3VqVzQnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMi81MDAwLzMzMzMuanBnP2htYWM9X0tEa3FRVnR0WHdfbk0tUnlKZkxJbUliYWZGcnFMc3VHTzVZdUhxRC1xUScsXG4gICAgICAgICAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8zLzUwMDAvMzMzMy5qcGc/aG1hYz1HRGpaMnVOV0UzVjU5UGtkRGFPelRPdVYzdFBXV3hKU2Y0Zk5jeHU0UzJnJ1xuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gdXJscy5tYXAodXJsID0+XG4gICAgICAgICAgICB0aGlzLmZldGNoSW1hZ2VXaXRoVGltZW91dCh1cmwsIHRoaXMuVGltZU91dClcbiAgICAgICAgICAgICAgICAudGhlbihpbWcgPT4gKHsgc3RhdHVzOiAnZnVsZmlsbGVkJywgaW1nLCB1cmwgfSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IHN0YXR1czogJ3JlamVjdGVkJywgZXJyb3IsIHVybCB9KSlcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5UaWxlLnN0cmluZyA9IFwiSW1hZ2UgbG9hZGVkOlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuQm9keS5zdHJpbmcgPSByZXN1bHQudXJsO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XG4gICAgICAgICAgICAgICAgdGV4dHVyZS5pbml0V2l0aEVsZW1lbnQocmVzdWx0LmltZyk7XG4gICAgICAgICAgICAgICAgdGV4dHVyZS5oYW5kbGVMb2FkZWRUZXh0dXJlKCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA8IHRoaXMuc3ByaXRlQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQXJyYXlbaV0uc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIHNwcml0ZSBhdmFpbGFibGUgZm9yIGluZGV4ICR7aX1gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5UaWxlLnN0cmluZyA9IFwiRXJyb3I6XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5Cb2R5LnN0cmluZyA9IHJlc3VsdC5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIGltYWdlOlwiLCByZXN1bHQudXJsLCByZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmNhbGwoKTtcbiAgICB9LFxufSk7XG5cbi8vRkxPV1xuLy9Vc2VyIGfhu41pIGZldGNoRGF0YVdpdGhUaW1lb3V0KHVybCwgdGltZW91dClcbi8vICAgICAgICAgICAgICAgIOKUglxuLy8gICAgICAgICAgICAgICAg4pa8XG4vLyDilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJBcbi8vIOKUgiBU4bqhbyBBYm9ydENvbnRyb2xsZXIgKyBzaWduYWwgICAgICAgICAgIOKUglxuLy8g4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4vLyAgICAgICAgICAgICAgICDilIJcbi8vICAgICAgICAgICAgICAgIOKWvFxuLy8g4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4vLyDilIIgc2V0VGltZW91dCBzYXUgYHRpbWVvdXRgIG1zICAgICAgICAgICAg4pSCXG4vLyDilIIgICDilJTilIDilIA+IG7hur91IGjhur90IGdp4budOiBjb250cm9sbGVyLmFib3J0KCkg4pSCXG4vLyDilIIgICAgICAgICAgICAgICAgICByZWplY3QoXCJ0aW1lb3V0XCIpICAgICDilIJcbi8vIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuLy8gICAgICAgICAgICAgICAg4pSCXG4vLyAgICAgICAgICAgICAgICDilrxcbi8vIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuLy8g4pSCIGZldGNoKHVybCwgeyBzaWduYWwgfSkgICAgICAgICAgICAgICAgIOKUglxuLy8g4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4vLyAgICAgICAgICAgICAgICDilIJcbi8vICAgICAgICAgICAgICAgIOKUnOKUgOKUgD4gTuG6v3UgcmVzcG9uc2UgduG7gSB0csaw4bubYyBraGkgdGltZW91dDpcbi8vICAgICAgICAgICAgICAgIOKUgiAgICAgICAg4pSU4pSA4pSAIGNsZWFyVGltZW91dFxuLy8gICAgICAgICAgICAgICAg4pSCICAgICAgICDilJTilIDilIAgcmVzb2x2ZShkYXRhKVxuLy8gICAgICAgICAgICAgICAg4pSCXG4vLyAgICAgICAgICAgICAgICDilJTilIDilIA+IE7hur91IGLhu4sgdGltZW91dCAoYuG7iyBhYm9ydCk6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICDilJTilIDilIAgY2F0Y2ggLT4ga2nhu4NtIHRyYSBs4buXaVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAg4pSU4pSA4pSAIHJlamVjdChcIlJlcXVlc3QgYWJvcnRlZC4uLlwiKVxuXG5cblxuLy8gYWJvcnQgc3UgZHVuZyBraGkgbmFvLCBraG9uZyBzdSBkdW5nXG4vLyBnaWEgc3UgY28gMSBjYWkgcGxhdCBrIGhvIHRybywgdGhpIGN0YSBnaWFpIHF1eWV0IG50blxuLy8gYWJvcnQgY29udHJvbGVyIGNoaSBzdSBkdW5nIGNobyBmZXRjaCwgbmV1IHhhaSBheGlvcyBob2FjIGNhaSBraGFjIHR1b25nIHR1IHRoaSBuaHUgdGhlIG5hb2AiXX0=
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
