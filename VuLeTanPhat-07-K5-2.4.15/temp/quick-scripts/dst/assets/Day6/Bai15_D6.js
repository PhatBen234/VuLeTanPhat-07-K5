
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai15_D6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2388feHWxLfJ91xB5fNwRC', 'Bai15_D6');
// Day6/Bai15_D6.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTE1X0Q2LmpzIl0sIm5hbWVzIjpbImFzeW5jRnVuYzEiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiYXN5bmNGdW5jMiIsImFzeW5jRnVuYzMiLCJ0aW1lb3V0RnVuYyIsIl8iLCJyZWplY3QiLCJhc3luY0FyciIsInByb21pc2VBcnIiLCJtYXAiLCJmbiIsInB1c2giLCJyYWNlIiwidGhlbiIsInJlc3VsdCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O1NBRGVBOzs7OzswRUFBZjtJQUFBO01BQUE7UUFBQTtVQUFBO1lBQThCO1lBQzVCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtZQURGO1lBQUEsT0FFUSxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztjQUFBLE9BQUlDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVLElBQVYsQ0FBZDtZQUFBLENBQW5CLENBRlI7O1VBQUE7WUFBQSxpQ0FHUyx3QkFIVDs7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTs7OztTQU1lRTs7Ozs7MkVBQWY7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUE4QjtZQUM1QkwsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7WUFERjtZQUFBLE9BRVEsSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU87Y0FBQSxPQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVSxJQUFWLENBQWQ7WUFBQSxDQUFuQixDQUZSOztVQUFBO1lBQUEsa0NBR1Msd0JBSFQ7O1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUE7Ozs7U0FNZUc7Ozs7OzJFQUFmO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBOEI7WUFDNUJOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO1lBREY7WUFBQSxPQUVRLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO2NBQUEsT0FBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVUsSUFBVixDQUFkO1lBQUEsQ0FBbkIsQ0FGUjs7VUFBQTtZQUFBLGtDQUdTLHdCQUhUOztVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBOzs7O0FBTUEsU0FBU0ksV0FBVCxHQUF1QjtFQUFFO0VBQ3ZCLE9BQU8sSUFBSUwsT0FBSixDQUFZLFVBQUNNLENBQUQsRUFBSUMsTUFBSixFQUFlO0lBQUU7SUFDbENMLFVBQVUsQ0FBQyxZQUFNO01BQ2ZLLE1BQU0sQ0FBQyxzQkFBRCxDQUFOO0lBQ0QsQ0FGUyxFQUVQLElBRk8sQ0FBVixDQURnQyxDQUd2QjtFQUNWLENBSk0sQ0FBUDtBQUtEOztBQUVELElBQU1DLFFBQVEsR0FBRyxDQUFDWCxVQUFELEVBQWFNLFVBQWIsRUFBeUJDLFVBQXpCLENBQWpCLEVBQXVEOztBQUN2RCxJQUFNSyxVQUFVLEdBQUdELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUFDLEVBQUU7RUFBQSxPQUFJQSxFQUFFLEVBQU47QUFBQSxDQUFmLENBQW5CLEVBQThDOztBQUM5Q0YsVUFBVSxDQUFDRyxJQUFYLENBQWdCUCxXQUFXLEVBQTNCLEdBQW1DOztBQUVuQ0wsT0FBTyxDQUFDYSxJQUFSLENBQWFKLFVBQWIsRUFBeUI7QUFBekIsQ0FDR0ssSUFESCxDQUNRLFVBQUFDLE1BQU07RUFBQSxPQUFJakIsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JnQixNQUEvQixDQUFKO0FBQUEsQ0FEZCxXQUVTLFVBQUFDLEtBQUs7RUFBQSxPQUFJbEIsT0FBTyxDQUFDa0IsS0FBUixDQUFjLHFCQUFkLEVBQXFDQSxLQUFyQyxDQUFKO0FBQUEsQ0FGZCxHQUlBO0FBQ0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGFzeW5jRnVuYzEoKSB7IC8vIGhhbSBhc3luYyBhd2FpdFxuICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jMVwiKTtcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMDApKTtcbiAgcmV0dXJuIFwiUmVzdWx0IGZyb20gYXN5bmNGdW5jMVwiOyAvL3RyYSBrZXQgcXVhIGtoaSB4b25nXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFzeW5jRnVuYzIoKSB7IC8vIGhhbSBhc3luYyBhd2FpdFxuICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jMlwiKTtcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKTtcbiAgcmV0dXJuIFwiUmVzdWx0IGZyb20gYXN5bmNGdW5jMlwiOyAvL3RyYSBrZXQgcXVhIGtoaSB4b25nXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFzeW5jRnVuYzMoKSB7IC8vIGhhbSBhc3luYyBhd2FpdFxuICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYXN5bmNGdW5jM1wiKTtcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcbiAgcmV0dXJuIFwiUmVzdWx0IGZyb20gYXN5bmNGdW5jM1wiOy8vdHJhIGtldCBxdWEga2hpIHhvbmdcbn1cblxuZnVuY3Rpb24gdGltZW91dEZ1bmMoKSB7IC8vIGhhbSB0cmEgdmUgcHJvbWlzZSBiaSByZWplY3Qgc2F1IDEuNXNcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHsgLy8gcHJvbWlzZSByZWplY3QgLSB0cmEgcXVhIGtldCBxdWEgbG9pfiwgYm8gcXVhIHJlc29sdmUgKF8pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZWplY3QoXCLij7AgVGltZW91dCBhZnRlciAxLjVzXCIpOyBcbiAgICB9LCAxNTAwKTsvL3NhdSAxLjVzIHNlIGJpIGxvYWlcbiAgfSk7XG59XG5cbmNvbnN0IGFzeW5jQXJyID0gW2FzeW5jRnVuYzEsIGFzeW5jRnVuYzIsIGFzeW5jRnVuYzNdOyAvL21hbmcgY2h1YSBjYWMgaGFtIGFzeW5jIGF3YWl0LCBjaHVhIGdvaVxuY29uc3QgcHJvbWlzZUFyciA9IGFzeW5jQXJyLm1hcChmbiA9PiBmbigpKTsgIC8vIGNhbGwgdHVuZyBoYW0sIGJpZW4gbm8gdGhhbmggcHJvbWlzZVxucHJvbWlzZUFyci5wdXNoKHRpbWVvdXRGdW5jKCkpOyAgICAvLyBzdSBkdW5nIGhhbSB0aW1lb3V0IG8gdHJlbiwgbm9pIHRoYW5nIHJhIGxhIHRoZW0gaGFtIHByb21pc2UgdGltZW91dCB2YW8gbWFuZywgZ2lvaSBoYW4gdGhvaSBnaWFuIGNob2BcblxuUHJvbWlzZS5yYWNlKHByb21pc2VBcnIpIC8vIHByb21pc2UgcmFjZSBsYXkga2V0IHF1YSBkYXUgdGllbiB0cmEgdmUgKHJlc29sdmUgb3IgcmVqZWN0KVxuICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coXCLinIUgRmlyc3QgcmVzdWx0OlwiLCByZXN1bHQpKVxuICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihcIuKdjCBFcnJvciBvciBUaW1lb3V0OlwiLCBlcnJvcikpO1xuXG4vLyBpbiByYSBjYWMgaGFtIGFzeW5jL2F3YWl0IG5nYXkgbGFwIHR1Y1xuLy8gcGhpYSBwcm9taXNlIGhpZW4gcmEga2V0IHF1YSBuaGFuaCBuaGF0IGNoaW5oIGxhIGFzeW5jRnVuYzNcbiJdfQ==