
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day6/Bai12_D6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6384cuFTlFKuqYaCJpja/Bp', 'Bai12_D6');
// Day6/Bai12_D6.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk2L0JhaTEyX0Q2LmpzIl0sIm5hbWVzIjpbImFzeW5jRnVuYzEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiYXN5bmNGdW5jMiIsImFzeW5jRnVuYzMiLCJydW5TYWZlQXN5bmNTZXF1ZW5jZSIsInJlc3VsdDEiLCJlcnJvciIsInJlc3VsdDIiLCJyZXN1bHQzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREEsU0FBU0EsVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0lBQ0FDLFVBQVUsQ0FBQyxZQUFNO01BQ2pCO01BQ0VGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO01BQ0FILE9BQU8sQ0FBQyxVQUFELENBQVA7SUFDRCxDQUpTLEVBSVAsSUFKTyxDQUFWO0VBS0QsQ0FQTSxDQUFQO0FBUUQ7O0FBRUQsU0FBU0ssVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlOLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0lBQ0FDLFVBQVUsQ0FBQyxZQUFNO01BQ2pCO01BQ0VGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO01BQ0FILE9BQU8sQ0FBQyxVQUFELENBQVA7SUFDRCxDQUpTLEVBSVAsSUFKTyxDQUFWO0VBS0QsQ0FQTSxDQUFQO0FBUUQ7O0FBRUQsU0FBU00sVUFBVCxHQUFzQjtFQUNwQixPQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7SUFDdENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0lBQ0FDLFVBQVUsQ0FBQyxZQUFNO01BQ2pCO01BQ0VGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO01BQ0FILE9BQU8sQ0FBQyxVQUFELENBQVA7SUFDRCxDQUpTLEVBSVAsSUFKTyxDQUFWO0VBS0QsQ0FQTSxDQUFQO0FBUUQ7O1NBRWNPOzs7OztxRkFBZjtJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUEsT0FFMEJULFVBQVUsRUFGcEM7O1VBQUE7WUFFVVUsT0FGVjtZQUdJTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSyxPQUF6QjtZQUhKO1lBQUE7O1VBQUE7WUFBQTtZQUFBO1lBS0lOLE9BQU8sQ0FBQ08sS0FBUixDQUFjLHNCQUFkOztVQUxKO1lBQUE7WUFBQTtZQUFBLE9BUzBCSixVQUFVLEVBVHBDOztVQUFBO1lBU1VLLE9BVFY7WUFVSVIsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5Qk8sT0FBekI7WUFWSjtZQUFBOztVQUFBO1lBQUE7WUFBQTtZQVlJUixPQUFPLENBQUNPLEtBQVIsQ0FBYyxzQkFBZDs7VUFaSjtZQUFBO1lBQUE7WUFBQSxPQWdCMEJILFVBQVUsRUFoQnBDOztVQUFBO1lBZ0JVSyxPQWhCVjtZQWlCSVQsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlEsT0FBekI7WUFqQko7WUFBQTs7VUFBQTtZQUFBO1lBQUE7WUFtQklULE9BQU8sQ0FBQ08sS0FBUixDQUFjLHNCQUFkOztVQW5CSjtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTs7OztBQXVCQUYsb0JBQW9CLElBQ3BCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jRnVuYzEoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGVkIGFzeW5jRnVuYzFcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICByZWplY3QoXCJFcnJvciBpbiBhc3luY0Z1bmMxXCIpOyBcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzFcIik7XG4gICAgICByZXNvbHZlKFwiUmVzdWx0IDFcIik7XG4gICAgfSwgMzAwMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY0Z1bmMyKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMyXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgcmVqZWN0KFwiRXJyb3IgaW4gYXN5bmNGdW5jMlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzJcIik7XG4gICAgICByZXNvbHZlKFwiUmVzdWx0IDJcIik7XG4gICAgfSwgMjAwMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY0Z1bmMzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRlZCBhc3luY0Z1bmMzXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgcmVqZWN0KFwiRXJyb3IgaW4gYXN5bmNGdW5jM1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFzeW5jRnVuYzNcIik7XG4gICAgICByZXNvbHZlKFwiUmVzdWx0IDNcIik7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBydW5TYWZlQXN5bmNTZXF1ZW5jZSgpIHsgLy8gdmUgcGhhbiB4dSBseSBjdWEgYXN5bmMgYXdhaXQgdGhpIHRhIHRhY2ggdHVuZyB0cnktY2F0Y2ggY2hvIHR1bmcgZnVuY3Rpb24sIHRoaSBubyBzZSB2YW4gY2hheSBidGggbWFjIGR1IGZ1bmN0aW9uIHRydW9jIGRvIGJpIGxvaSB0aG9pXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0MSA9IGF3YWl0IGFzeW5jRnVuYzEoKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCAxOlwiLCByZXN1bHQxKTtcbiAgfSBjYXRjaCAoZXJyMSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBhc3luY0Z1bmMxOlwiLCBlcnIxKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0MiA9IGF3YWl0IGFzeW5jRnVuYzIoKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCAyOlwiLCByZXN1bHQyKTtcbiAgfSBjYXRjaCAoZXJyMikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBhc3luY0Z1bmMyOlwiLCBlcnIyKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0MyA9IGF3YWl0IGFzeW5jRnVuYzMoKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCAzOlwiLCByZXN1bHQzKTtcbiAgfSBjYXRjaCAoZXJyMykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBhc3luY0Z1bmMzOlwiLCBlcnIzKTtcbiAgfVxufVxuXG5ydW5TYWZlQXN5bmNTZXF1ZW5jZSgpO1xuLy8ga2hpIGNoYXkga2V0IHF1YSAsIGJhdCBkb25nIGNtdCByZWplY3QgZGUgdGVzdCBsb2kgdGhpIGtldCBxdWEgbmh1IHNhdVxuXG4vLyBTdGFydGVkIGFzeW5jRnVuYzFcbi8vIENvbXBsZXRlZCBhc3luY0Z1bmMxXG4vLyBFcnJvciBpbiBhc3luY0Z1bmMxOiBFcnJvciBpbiBhc3luY0Z1bmMxXG4vLyBTdGFydGVkIGFzeW5jRnVuYzJcbi8vIENvbXBsZXRlZCBhc3luY0Z1bmMyXG4vLyBFcnJvciBpbiBhc3luY0Z1bmMyOiBFcnJvciBpbiBhc3luY0Z1bmMyXG4vLyBTdGFydGVkIGFzeW5jRnVuYzNcbi8vIENvbXBsZXRlZCBhc3luY0Z1bmMzXG4vLyBFcnJvciBpbiBhc3luY0Z1bmMzOiBFcnJvciBpbiBhc3luY0Z1bmMzXG5cbi8vIG5odSBkYSB0aGF5IG5vIHZhbiBjaGF5IGRjIG1hYyBkdSBiaSBlcnJvciJdfQ==