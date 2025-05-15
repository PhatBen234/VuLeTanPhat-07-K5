
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
require('./assets/Day7/Script/Bai1_D7');
require('./assets/Day7/Script/Bai2_D7');
require('./assets/Day7/Script/Bai3_D7');
require('./assets/Day7/Script/Bai4_D7');
require('./assets/Day7/Script/Bai5_D7');
require('./assets/Day7/Script/Bai6_D7');
require('./assets/Day7/Script/Bai7_D7');
require('./assets/Day7/Script/Bai8_D7');
require('./assets/Day7/Script/Bai9_D7');

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
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai3_D7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46eaahVhyJMIIrJ/Nhyww6N', 'Bai3_D7');
// Day7/Script/Bai3_D7.js

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
              cc.log("\u0110ang t\u1EA3i \u1EA3nh " + (i + 1) + "/" + urls.length); //ghi log anh thu may/tong? dc tai?

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWkzX0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGlzcGxheVNwcml0ZSIsIlNwcml0ZSIsInN0YXJ0IiwiaW1hZ2VVcmxzIiwiZG93bmxvYWRJbWFnZXNTZXF1ZW50aWFsbHkiLCJ1cmxzIiwiaSIsImxlbmd0aCIsImxvZyIsImRvd25sb2FkSW1hZ2UiLCJ0ZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsImRlbGF5IiwiZXJyb3IiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWRlciIsImxvYWQiLCJ0eXBlIiwiZXJyIiwibXMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ1AsV0FBU0QsRUFBRSxDQUFDRSxTQURMO0VBR1BDLFVBQVUsRUFBRTtJQUNWQyxhQUFhLEVBQUVKLEVBQUUsQ0FBQ0ssTUFEUixDQUNnQjs7RUFEaEIsQ0FITDtFQU9QQyxLQVBPLG1CQU9DO0lBQ04sS0FBS0MsU0FBTCxHQUFpQixDQUNmLGtHQURlLEVBRWYsa0dBRmUsRUFHZixrR0FIZSxFQUlmLGtHQUplLENBQWpCO0lBT0EsS0FBS0MsMEJBQUwsQ0FBZ0MsS0FBS0QsU0FBckM7RUFDRCxDQWhCTTtFQWtCREMsMEJBbEJDLHNDQWtCMEJDLElBbEIxQixFQWtCZ0M7SUFBQTs7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FDNUJDLENBRDRCLEdBQ3hCLENBRHdCOztZQUFBO2NBQUEsTUFDckJBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxNQURZO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUE7Y0FHakNYLEVBQUUsQ0FBQ1ksR0FBSCxtQ0FBdUJGLENBQUMsR0FBRyxDQUEzQixVQUFnQ0QsSUFBSSxDQUFDRSxNQUFyQyxFQUhpQyxDQUdlOztjQUhmO2NBQUEsT0FJWCxLQUFJLENBQUNFLGFBQUwsQ0FBbUJKLElBQUksQ0FBQ0MsQ0FBRCxDQUF2QixDQUpXOztZQUFBO2NBSTNCSSxPQUoyQjtjQUlrQjtjQUNuRCxLQUFJLENBQUNWLGFBQUwsQ0FBbUJXLFdBQW5CLEdBQWlDLElBQUlmLEVBQUUsQ0FBQ2dCLFdBQVAsQ0FBbUJGLE9BQW5CLENBQWpDLENBTGlDLENBSzZCOztjQUM5RGQsRUFBRSxDQUFDWSxHQUFILDhDQUEwQkYsQ0FBQyxHQUFHLENBQTlCO2NBTmlDO2NBQUEsT0FPM0IsS0FBSSxDQUFDTyxLQUFMLENBQVcsSUFBWCxDQVAyQjs7WUFBQTtjQUFBO2NBQUE7O1lBQUE7Y0FBQTtjQUFBO2NBU2pDakIsRUFBRSxDQUFDa0IsS0FBSCxzQ0FBNEJSLENBQUMsR0FBRyxDQUFoQzs7WUFUaUM7Y0FDSkEsQ0FBQyxFQURHO2NBQUE7Y0FBQTs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQTtFQVl0QyxDQTlCTTtFQWdDUEcsYUFoQ08seUJBZ0NPTSxHQWhDUCxFQWdDWTtJQUNqQixPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7TUFDdEN0QixFQUFFLENBQUN1QixNQUFILENBQVVDLElBQVYsQ0FBZTtRQUFFTCxHQUFHLEVBQUVBLEdBQVA7UUFBWU0sSUFBSSxFQUFFO01BQWxCLENBQWYsRUFBMEMsVUFBQ0MsR0FBRCxFQUFNWixPQUFOLEVBQWtCO1FBQzFELElBQUlZLEdBQUosRUFBUztVQUNQSixNQUFNLENBQUNJLEdBQUQsQ0FBTixDQURPLENBQ007UUFDZCxDQUZELE1BRU87VUFDTEwsT0FBTyxDQUFDUCxPQUFELENBQVAsQ0FESyxDQUNhO1FBQ25CO01BQ0YsQ0FORDtJQU9ELENBUk0sQ0FBUDtFQVNELENBMUNNO0VBNENQRyxLQTVDTyxpQkE0Q0RVLEVBNUNDLEVBNENHO0lBQUM7SUFDVCxPQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFBQyxPQUFPO01BQUEsT0FBSU8sVUFBVSxDQUFDUCxPQUFELEVBQVVNLEVBQVYsQ0FBZDtJQUFBLENBQW5CLENBQVA7RUFDRDtBQTlDTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgZGlzcGxheVNwcml0ZTogY2MuU3ByaXRlLCAvLyBTcHJpdGUgxJHhu4MgaGnhu4NuIHRo4buLIOG6o25oXG4gIH0sXG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5pbWFnZVVybHMgPSBbXG4gICAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8wLzUwMDAvMzMzMy5qcGc/aG1hYz1fajZnaFk1ZkNmU0Q2dHZ0Y1Y3NHpYaXZrSlNQSWZSOUI4dzM0WGVRbXZVJyxcbiAgICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzEvNTAwMC8zMzMzLmpwZz9obWFjPUFzdjJEVTNyQV81RDF4U2UyMnhaSzQ3V0VBTjB3aldlRk9oemQxM3VqVzQnLFxuICAgICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMi81MDAwLzMzMzMuanBnP2htYWM9X0tEa3FRVnR0WHdfbk0tUnlKZkxJbUliYWZGcnFMc3VHTzVZdUhxRC1xUScsXG4gICAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8zLzUwMDAvMzMzMy5qcGc/aG1hYz1HRGpaMnVOV0UzVjU5UGtkRGFPelRPdVYzdFBXV3hKU2Y0Zk5jeHU0UzJnJyxcbiAgICBdO1xuXG4gICAgdGhpcy5kb3dubG9hZEltYWdlc1NlcXVlbnRpYWxseSh0aGlzLmltYWdlVXJscyk7XG4gIH0sXG5cbiAgYXN5bmMgZG93bmxvYWRJbWFnZXNTZXF1ZW50aWFsbHkodXJscykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJscy5sZW5ndGg7IGkrKykgeyAvLyB2b25nIGxhcCBjaGF5IHF1YSB0dW5nIFVSTCB0cm9uZyBtYW5nXG4gICAgICB0cnkge1xuICAgICAgICBjYy5sb2coYMSQYW5nIHThuqNpIOG6o25oICR7aSArIDF9LyR7dXJscy5sZW5ndGh9YCk7IC8vZ2hpIGxvZyBhbmggdGh1IG1heS90b25nPyBkYyB0YWk/XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBhd2FpdCB0aGlzLmRvd25sb2FkSW1hZ2UodXJsc1tpXSk7IC8vIGdvaSBoYW0gZG93bG9hZEltYWdlIG8gZHVvaSBkZSB0YWkgYW5oXG4gICAgICAgIHRoaXMuZGlzcGxheVNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTsgLy8gZ2FuIHZvIHNwcml0ZWZyYW1lIGRlIHRhaSBoaW5oXG4gICAgICAgIGNjLmxvZyhgxJDDoyBoaeG7g24gdGjhu4sg4bqjbmggJHtpICsgMX1gKTtcbiAgICAgICAgYXdhaXQgdGhpcy5kZWxheSgyMDAwKTsgLy8gRGVsYXkgMiBnacOieSBtb2kgdGFpIGFuaCB0aWVwIHRoZW9cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNjLmVycm9yKGBM4buXaSBraGkgdOG6o2kg4bqjbmggJHtpICsgMX06YCwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBkb3dubG9hZEltYWdlKHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogdXJsLCB0eXBlOiAnanBnJyB9LCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTsgLy8gdGhhdCBiYWlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHRleHR1cmUpOyAvLyB0cmEgdmUgdGV4dHR1cmUgbmV1IHRoYW5oIGNvbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZGVsYXkobXMpIHsvLyBkZWxheSBiYW5nIHByb21pc2VcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai5_D7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c15a0e+BtZFHastKnyJR07z', 'Bai5_D7');
// Day7/Script/Bai5_D7.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    latencyLabel: cc.Label
  },
  onLoad: function onLoad() {
    this.measuraLatency();
  },
  getServerTime: function getServerTime() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, serverDate;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(window.location.href, {
                method: 'HEAD'
              });

            case 3:
              response = _context.sent;
              serverDate = response.headers.get("Date");

              if (serverDate) {
                _context.next = 7;
                break;
              }

              throw new Error("Không lấy được thời gian từ header.");

            case 7:
              return _context.abrupt("return", new Date(serverDate).getTime());

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              cc.error("❌ Lỗi khi lấy thời gian server:", _context.t0.message); // Trả về thời gian local nếu không lấy được thời gian server

              return _context.abrupt("return", new Date().getTime());

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }))();
  },
  measuraLatency: function measuraLatency() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var startTime, resultText, i, currentTime, latency;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.getServerTime();

            case 2:
              startTime = _context2.sent;
              resultText = "";
              i = 0;

            case 5:
              if (!(i < 10)) {
                _context2.next = 17;
                break;
              }

              _context2.next = 8;
              return _this.getServerTime();

            case 8:
              currentTime = _context2.sent;
              latency = currentTime - startTime;
              startTime = currentTime;
              cc.log('Độ trễ: ' + latency); // Thêm kết quả vào chuỗi hiển thị

              resultText += 'Độ trễ: ' + latency + 'ms\n'; // Cập nhật label nếu có

              if (_this.latencyLabel) {
                _this.latencyLabel.string = resultText;
              }

            case 14:
              i++;
              _context2.next = 5;
              break;

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
}); //Bắt đầu logLatency()
// ↓
// Lấy startTime lần đầu
// ↓
// Bắt đầu vòng lặp 10 lần:
//   ├─ Lần 1:
//   │   ├─ Gọi getServerTime() → currentTime
//   │   ├─ latency = currentTime - startTime
//   │   ├─ In ra log & Label
//   │   └─ Cập nhật startTime = currentTime
//   ├─ Delay 1 giây
//   └─ Lặp lại
// ↓
// Kết thúc sau 10 lần
//flow de hieu

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk1X0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGF0ZW5jeUxhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJtZWFzdXJhTGF0ZW5jeSIsImdldFNlcnZlclRpbWUiLCJmZXRjaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm1ldGhvZCIsInJlc3BvbnNlIiwic2VydmVyRGF0ZSIsImhlYWRlcnMiLCJnZXQiLCJFcnJvciIsIkRhdGUiLCJnZXRUaW1lIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhcnRUaW1lIiwicmVzdWx0VGV4dCIsImkiLCJjdXJyZW50VGltZSIsImxhdGVuY3kiLCJsb2ciLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFO0lBQ1ZDLFlBQVksRUFBRUosRUFBRSxDQUFDSztFQURQLENBSEw7RUFPUEMsTUFQTyxvQkFPRTtJQUNQLEtBQUtDLGNBQUw7RUFDRCxDQVRNO0VBV0RDLGFBWEMsMkJBV2U7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUEsT0FFS0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWpCLEVBQXVCO2dCQUNqREMsTUFBTSxFQUFFO2NBRHlDLENBQXZCLENBRlY7O1lBQUE7Y0FFWkMsUUFGWTtjQU1aQyxVQU5ZLEdBTUNELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckIsQ0FORDs7Y0FBQSxJQVFiRixVQVJhO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUEsTUFTVixJQUFJRyxLQUFKLENBQVUscUNBQVYsQ0FUVTs7WUFBQTtjQUFBLGlDQVlYLElBQUlDLElBQUosQ0FBU0osVUFBVCxFQUFxQkssT0FBckIsRUFaVzs7WUFBQTtjQUFBO2NBQUE7Y0FjbEJwQixFQUFFLENBQUNxQixLQUFILENBQVMsaUNBQVQsRUFBNEMsWUFBSUMsT0FBaEQsRUFka0IsQ0FlbEI7O2NBZmtCLGlDQWdCWCxJQUFJSCxJQUFKLEdBQVdDLE9BQVgsRUFoQlc7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFrQnJCLENBN0JNO0VBK0JEYixjQS9CQyw0QkErQmdCO0lBQUE7O0lBQUE7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Y0FBQSxPQUNDLEtBQUksQ0FBQ0MsYUFBTCxFQUREOztZQUFBO2NBQ2pCZSxTQURpQjtjQUVqQkMsVUFGaUIsR0FFSixFQUZJO2NBSVpDLENBSlksR0FJUixDQUpROztZQUFBO2NBQUEsTUFJTEEsQ0FBQyxHQUFHLEVBSkM7Z0JBQUE7Z0JBQUE7Y0FBQTs7Y0FBQTtjQUFBLE9BS08sS0FBSSxDQUFDakIsYUFBTCxFQUxQOztZQUFBO2NBS2JrQixXQUxhO2NBTWJDLE9BTmEsR0FNSEQsV0FBVyxHQUFHSCxTQU5YO2NBT25CQSxTQUFTLEdBQUdHLFdBQVo7Y0FFQTFCLEVBQUUsQ0FBQzRCLEdBQUgsQ0FBTyxhQUFhRCxPQUFwQixFQVRtQixDQVduQjs7Y0FDQUgsVUFBVSxJQUFJLGFBQWFHLE9BQWIsR0FBdUIsTUFBckMsQ0FabUIsQ0FjbkI7O2NBQ0EsSUFBSSxLQUFJLENBQUN2QixZQUFULEVBQXVCO2dCQUNyQixLQUFJLENBQUNBLFlBQUwsQ0FBa0J5QixNQUFsQixHQUEyQkwsVUFBM0I7Y0FDRDs7WUFqQmtCO2NBSUdDLENBQUMsRUFKSjtjQUFBO2NBQUE7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUE7RUFtQnRCO0FBbERNLENBQVQsR0FxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbGF0ZW5jeUxhYmVsOiBjYy5MYWJlbCxcbiAgfSxcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5tZWFzdXJhTGF0ZW5jeSgpO1xuICB9LFxuXG4gIGFzeW5jIGdldFNlcnZlclRpbWUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2luZG93LmxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgbWV0aG9kOiAnSEVBRCcsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2VydmVyRGF0ZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiRGF0ZVwiKTtcblxuICAgICAgaWYgKCFzZXJ2ZXJEYXRlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIktow7RuZyBs4bqleSDEkcaw4bujYyB0aOG7nWkgZ2lhbiB04burIGhlYWRlci5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgRGF0ZShzZXJ2ZXJEYXRlKS5nZXRUaW1lKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjYy5lcnJvcihcIuKdjCBM4buXaSBraGkgbOG6pXkgdGjhu51pIGdpYW4gc2VydmVyOlwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAvLyBUcuG6oyB24buBIHRo4budaSBnaWFuIGxvY2FsIG7hur91IGtow7RuZyBs4bqleSDEkcaw4bujYyB0aOG7nWkgZ2lhbiBzZXJ2ZXJcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgbWVhc3VyYUxhdGVuY3koKSB7XG4gICAgbGV0IHN0YXJ0VGltZSA9IGF3YWl0IHRoaXMuZ2V0U2VydmVyVGltZSgpO1xuICAgIGxldCByZXN1bHRUZXh0ID0gXCJcIjtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gYXdhaXQgdGhpcy5nZXRTZXJ2ZXJUaW1lKCk7XG4gICAgICBjb25zdCBsYXRlbmN5ID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIFxuICAgICAgY2MubG9nKCfEkOG7mSB0cuG7hTogJyArIGxhdGVuY3kpO1xuICAgICAgXG4gICAgICAvLyBUaMOqbSBr4bq/dCBxdeG6oyB2w6BvIGNodeG7l2kgaGnhu4NuIHRo4buLXG4gICAgICByZXN1bHRUZXh0ICs9ICfEkOG7mSB0cuG7hTogJyArIGxhdGVuY3kgKyAnbXNcXG4nO1xuICAgICAgXG4gICAgICAvLyBD4bqtcCBuaOG6rXQgbGFiZWwgbuG6v3UgY8OzXG4gICAgICBpZiAodGhpcy5sYXRlbmN5TGFiZWwpIHtcbiAgICAgICAgdGhpcy5sYXRlbmN5TGFiZWwuc3RyaW5nID0gcmVzdWx0VGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG4vL0Lhuq90IMSR4bqndSBsb2dMYXRlbmN5KClcbi8vIOKGk1xuLy8gTOG6pXkgc3RhcnRUaW1lIGzhuqduIMSR4bqndVxuLy8g4oaTXG4vLyBC4bqvdCDEkeG6p3UgdsOybmcgbOG6t3AgMTAgbOG6p246XG4vLyAgIOKUnOKUgCBM4bqnbiAxOlxuLy8gICDilIIgICDilJzilIAgR+G7jWkgZ2V0U2VydmVyVGltZSgpIOKGkiBjdXJyZW50VGltZVxuLy8gICDilIIgICDilJzilIAgbGF0ZW5jeSA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lXG4vLyAgIOKUgiAgIOKUnOKUgCBJbiByYSBsb2cgJiBMYWJlbFxuLy8gICDilIIgICDilJTilIAgQ+G6rXAgbmjhuq10IHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lXG4vLyAgIOKUnOKUgCBEZWxheSAxIGdpw6J5XG4vLyAgIOKUlOKUgCBM4bq3cCBs4bqhaVxuLy8g4oaTXG4vLyBL4bq/dCB0aMO6YyBzYXUgMTAgbOG6p25cblxuLy9mbG93IGRlIGhpZXUiXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai1_D7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1026eLjmF5ADJJSwdq2KO8t', 'Bai1_D7');
// Day7/Script/Bai1_D7.js

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
              timeStr = new Date(serverDate).toISOString(); //convert string thanh date VD:Tue, 14 May 2024 08:32:45 GMT -> 2024-05-14T08:32:45.000Z

              _this.timeLabel.string = "🕒 Server Time: " + timeStr; //set text cho label

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWkxX0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGltZUxhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJmZXRjaFNlcnZlclRpbWUiLCJmZXRjaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm1ldGhvZCIsInJlc3BvbnNlIiwic2VydmVyRGF0ZSIsImhlYWRlcnMiLCJnZXQiLCJFcnJvciIsInRpbWVTdHIiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdHJpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJsb2NhbFRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDUCxXQUFTRCxFQUFFLENBQUNFLFNBREw7RUFHUEMsVUFBVSxFQUFFO0lBQ1ZDLFNBQVMsRUFBRUosRUFBRSxDQUFDSztFQURKLENBSEw7RUFPUEMsTUFQTyxvQkFPRTtJQUNQLEtBQUtDLGVBQUwsR0FETyxDQUNpQjtFQUN6QixDQVRNO0VBV0RBLGVBWEMsNkJBV2lCO0lBQUE7O0lBQUE7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBLE9BRUdDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFqQixFQUF1QjtnQkFBRTtnQkFDbkRDLE1BQU0sRUFBRSxNQUR5QyxDQUNsQzs7Y0FEa0MsQ0FBdkIsQ0FGUjs7WUFBQTtjQUVkQyxRQUZjO2NBTWRDLFVBTmMsR0FNREQsUUFBUSxDQUFDRSxPQUFULENBQWlCQyxHQUFqQixDQUFxQixNQUFyQixDQU5DLEVBTTZCOztjQU43QixJQVFmRixVQVJlO2dCQUFBO2dCQUFBO2NBQUE7O2NBQUEsTUFTWixJQUFJRyxLQUFKLENBQVUscUNBQVYsQ0FUWTs7WUFBQTtjQVlkQyxPQVpjLEdBWUosSUFBSUMsSUFBSixDQUFTTCxVQUFULEVBQXFCTSxXQUFyQixFQVpJLEVBWWdDOztjQUNwRCxLQUFJLENBQUNoQixTQUFMLENBQWVpQixNQUFmLEdBQXdCLHFCQUFxQkgsT0FBN0MsQ0Fib0IsQ0Fha0M7O2NBYmxDO2NBQUE7O1lBQUE7Y0FBQTtjQUFBO2NBY047Y0FDZGxCLEVBQUUsQ0FBQ3NCLEtBQUgsQ0FBUyxpQ0FBVCxFQUE0QyxZQUFJQyxPQUFoRDtjQUNNQyxTQWhCYyxHQWdCRixJQUFJTCxJQUFKLEdBQVdDLFdBQVgsRUFoQkU7Y0FpQnBCLEtBQUksQ0FBQ2hCLFNBQUwsQ0FBZWlCLE1BQWYsR0FBd0Isb0JBQW9CRyxTQUE1Qzs7WUFqQm9CO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBO0VBbUJ2QjtBQTlCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdGltZUxhYmVsOiBjYy5MYWJlbCwgIFxuICB9LFxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmZldGNoU2VydmVyVGltZSgpOyAvL2dvaSBxdWEgdHJpbmggbGF5IHRob2kgZ2lhbiBuZ2F5IGtoaSBub2RlIHZ1YSBjaGF5XG4gIH0sXG5cbiAgYXN5bmMgZmV0Y2hTZXJ2ZXJUaW1lKCkgeyAvLyB4YWkgYXN5bmMgdGhpIHhhaSBkYyBhd2FpdCBiZW4gdHJvbmdcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3aW5kb3cubG9jYXRpb24uaHJlZiwgeyAvL2ZldGNoLCB0dWMgZ3VpIGh0dHAgcnEgdG9pIGRpYSBjaGkgdHJhbmcgaGllbiB0YWksIFxuICAgICAgICBtZXRob2Q6ICdIRUFEJywvL25odW5nIGNoaSBjYW4gSEVBRCwgayBjYW4gbm9pIGR1bmcgdHJhbmdcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzZXJ2ZXJEYXRlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJEYXRlXCIpOyAvLyBsYXkgZ2lhIHRyaSBoZWFkZXIgdHUgRGF0ZVxuXG4gICAgICBpZiAoIXNlcnZlckRhdGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiS2jDtG5nIGzhuqV5IMSRxrDhu6NjIHRo4budaSBnaWFuIHThu6sgaGVhZGVyLlwiKTsvLyBrIGNvIGRhdGUgeHUgbHkgbG9pIG8gY2F0Y2hcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGltZVN0ciA9IG5ldyBEYXRlKHNlcnZlckRhdGUpLnRvSVNPU3RyaW5nKCk7IC8vY29udmVydCBzdHJpbmcgdGhhbmggZGF0ZSBWRDpUdWUsIDE0IE1heSAyMDI0IDA4OjMyOjQ1IEdNVCAtPiAyMDI0LTA1LTE0VDA4OjMyOjQ1LjAwMFpcbiAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IFwi8J+VkiBTZXJ2ZXIgVGltZTogXCIgKyB0aW1lU3RyOyAvL3NldCB0ZXh0IGNobyBsYWJlbFxuICAgIH0gY2F0Y2ggKGVycikgeyAvLyBuZXUgY28gbG9pIGJhdCBsb2l+XG4gICAgICBjYy5lcnJvcihcIuKdjCBM4buXaSBraGkgbOG6pXkgdGjhu51pIGdpYW4gc2VydmVyOlwiLCBlcnIubWVzc2FnZSk7XG4gICAgICBjb25zdCBsb2NhbFRpbWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSBcIvCflZIgTG9jYWwgVGltZTogXCIgKyBsb2NhbFRpbWU7XG4gICAgfVxuICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk0X0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibG9nTGFiZWwiLCJMYWJlbCIsInN0YXJ0IiwiU3RvcmUiLCJuYW1lIiwiZGVwZW5kZW5jaWVzIiwid2FpdCIsInN0b3JlIiwicHVzaCIsInJlc29sdmUiLCJzdGVwVGltZSIsInZpc2l0ZWQiLCJyZXN1bHRzIiwibG9nRnVuYyIsIlNldCIsImhhcyIsImFkZCIsImRlcCIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwibG9nIiwiY29udHJpYnV0ZSIsInN0b3JlcyIsImZpbmFsTG9nIiwiam9pbiIsImxvZ1RvTGFiZWwiLCJtc2ciLCJzdHJpbmciLCJzdG9yZTEiLCJzdG9yZTIiLCJzdG9yZTMiLCJzdG9yZTQiLCJzdG9yZTUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7Ozs7Ozs7QUFEQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNQLFdBQVNELEVBQUUsQ0FBQ0UsU0FETDtFQUdQQyxVQUFVLEVBQUU7SUFDVkMsUUFBUSxFQUFFSixFQUFFLENBQUNLO0VBREgsQ0FITDtFQU9QQyxLQVBPLG1CQU9DO0lBQUE7O0lBQUEsSUFDQUMsS0FEQTtNQUVKLGVBQVlDLElBQVosRUFBa0I7UUFDaEIsS0FBS0EsSUFBTCxHQUFZQSxJQUFaO1FBQ0EsS0FBS0MsWUFBTCxHQUFvQixFQUFwQjtNQUNELENBTEcsQ0FPSjs7O01BUEk7O01BQUEsT0FRSkMsSUFSSSxHQVFKLGNBQUtDLEtBQUwsRUFBWTtRQUNWLEtBQUtGLFlBQUwsQ0FBa0JHLElBQWxCLENBQXVCRCxLQUF2QjtNQUNELENBVkcsQ0FZSjtNQVpJOztNQUFBLE9BYUVFLE9BYkY7TUFBQTtNQUFBO1FBQUEsMEVBYUosaUJBQWNDLFFBQWQsRUFBd0JDLE9BQXhCLEVBQTZDQyxPQUE3QyxFQUEyREMsT0FBM0Q7VUFBQTs7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7a0JBQUEsSUFBd0JGLE9BQXhCO29CQUF3QkEsT0FBeEIsR0FBa0MsSUFBSUcsR0FBSixFQUFsQztrQkFBQTs7a0JBQUEsSUFBNkNGLE9BQTdDO29CQUE2Q0EsT0FBN0MsR0FBdUQsRUFBdkQ7a0JBQUE7O2tCQUFBLEtBQ01ELE9BQU8sQ0FBQ0ksR0FBUixDQUFZLElBQVosQ0FETjtvQkFBQTtvQkFBQTtrQkFBQTs7a0JBQUE7O2dCQUFBO2tCQUNpQztrQkFFL0JKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLElBQVosRUFIRixDQUdxQjtrQkFFbkI7O2tCQUxGLDRDQU1vQixLQUFLWCxZQU56Qjs7Z0JBQUE7a0JBQUE7b0JBQUE7b0JBQUE7a0JBQUE7O2tCQU1hWSxHQU5iO2tCQUFBO2tCQUFBLE9BT1VBLEdBQUcsQ0FBQ1IsT0FBSixDQUFZQyxRQUFaLEVBQXNCQyxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0NDLE9BQXhDLENBUFY7O2dCQUFBO2tCQUFBO2tCQUFBOztnQkFBQTtrQkFBQTtrQkFBQSxPQVdRLElBQUlLLE9BQUosQ0FBWSxVQUFBVCxPQUFPO29CQUFBLE9BQUlVLFVBQVUsQ0FBQ1YsT0FBRCxFQUFVQyxRQUFRLEdBQUcsSUFBckIsQ0FBZDtrQkFBQSxDQUFuQixDQVhSOztnQkFBQTtrQkFhRWQsRUFBRSxDQUFDd0IsR0FBSCxDQUFPLEtBQUtoQixJQUFaLEVBYkYsQ0FhcUI7O2tCQUNuQlMsT0FBTyxDQUFDLEtBQUtULElBQU4sQ0FBUCxDQWRGLENBY3NCOztrQkFDcEJRLE9BQU8sQ0FBQ0osSUFBUixDQUFhLEtBQUtKLElBQWxCLEVBZkYsQ0FlMkI7O2dCQWYzQjtnQkFBQTtrQkFBQTtjQUFBO1lBQUE7VUFBQTtRQUFBLENBYkk7O1FBQUE7VUFBQTtRQUFBOztRQUFBO01BQUE7O01BQUE7SUFBQSxLQWdDTjtJQUNBOzs7SUFqQ00sU0FrQ1NpQixVQWxDVDtNQUFBO0lBQUEsRUFnRE47SUFDQTs7O0lBakRNO01BQUEseUVBa0NOLGtCQUEwQlgsUUFBMUIsRUFBb0NHLE9BQXBDO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7O1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ1FGLE9BRFIsR0FDa0IsSUFBSUcsR0FBSixFQURsQixFQUM2Qjs7Z0JBQ3JCRixPQUZSLEdBRWtCLEVBRmxCLEVBRXNCOztnQkFGdEIsMkJBQWdEVSxNQUFoRDtrQkFBZ0RBLE1BQWhEO2dCQUFBOztnQkFBQSxrQkFJc0JBLE1BSnRCOztjQUFBO2dCQUFBO2tCQUFBO2tCQUFBO2dCQUFBOztnQkFJYWYsS0FKYjtnQkFBQTtnQkFBQSxPQUtVQSxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsUUFBZCxFQUF3QkMsT0FBeEIsRUFBaUNDLE9BQWpDLEVBQTBDQyxPQUExQyxDQUxWOztjQUFBO2dCQUFBO2dCQUFBO2dCQUFBOztjQUFBO2dCQVFFO2dCQUNNVSxRQVRSLEdBU21CLGVBQWVYLE9BQU8sQ0FBQ1ksSUFBUixDQUFhLEtBQWIsQ0FUbEM7Z0JBVUU1QixFQUFFLENBQUN3QixHQUFILENBQU9HLFFBQVA7Z0JBQ0FWLE9BQU8sQ0FBQ1UsUUFBRCxDQUFQOztjQVhGO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDQWxDTTtNQUFBO0lBQUE7O0lBa0ROLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBUztNQUMxQixLQUFJLENBQUMxQixRQUFMLENBQWMyQixNQUFkLElBQXdCRCxHQUFHLEdBQUcsSUFBOUI7SUFDRCxDQUZELENBbERNLENBc0ROOzs7SUFDQSxJQUFNRSxNQUFNLEdBQUcsSUFBSXpCLEtBQUosQ0FBVSxTQUFWLENBQWY7SUFDQSxJQUFNMEIsTUFBTSxHQUFHLElBQUkxQixLQUFKLENBQVUsU0FBVixDQUFmO0lBQ0EsSUFBTTJCLE1BQU0sR0FBRyxJQUFJM0IsS0FBSixDQUFVLFNBQVYsQ0FBZjtJQUNBLElBQU00QixNQUFNLEdBQUcsSUFBSTVCLEtBQUosQ0FBVSxTQUFWLENBQWY7SUFDQSxJQUFNNkIsTUFBTSxHQUFHLElBQUk3QixLQUFKLENBQVUsU0FBVixDQUFmLENBM0RNLENBNkROO0lBQ0E7O0lBQ0F5QixNQUFNLENBQUN0QixJQUFQLENBQVl3QixNQUFaO0lBQ0FBLE1BQU0sQ0FBQ3hCLElBQVAsQ0FBWXVCLE1BQVo7SUFDQUEsTUFBTSxDQUFDdkIsSUFBUCxDQUFZMEIsTUFBWjtJQUNBQSxNQUFNLENBQUMxQixJQUFQLENBQVl5QixNQUFaLEVBbEVNLENBb0VOOztJQUNBLEtBQUsvQixRQUFMLENBQWMyQixNQUFkLEdBQXVCLEVBQXZCLENBckVNLENBcUVxQjs7SUFDM0JOLFVBQVUsQ0FBQyxDQUFELEVBQUlJLFVBQUosRUFBZ0JHLE1BQWhCLEVBQXdCQyxNQUF4QixFQUFnQ0MsTUFBaEMsRUFBd0NDLE1BQXhDLEVBQWdEQyxNQUFoRCxDQUFWLENBdEVNLENBdUVOO0VBQ0Q7QUEvRU0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy9tYSBvaSBiYWkgbmF5IGtob25nIGhpZXUgZ2kgaGV0XG5cbmNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICBsb2dMYWJlbDogY2MuTGFiZWwsIFxuICB9LFxuXG4gIHN0YXJ0KCkge1xuICAgIGNsYXNzIFN0b3JlIHtcbiAgICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTsgXG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gW107XG4gICAgICB9XG5cbiAgICAgIC8vIHRoZW0gc3RvcmUgcGh1IHRodW9jIHZhb1xuICAgICAgd2FpdChzdG9yZSkge1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llcy5wdXNoKHN0b3JlKTtcbiAgICAgIH1cblxuICAgICAgLy8gR2lhaSBxdXlldCB0aGVvIHRodSB0dSBwaHUgdGh1b2NcbiAgICAgIGFzeW5jIHJlc29sdmUoc3RlcFRpbWUsIHZpc2l0ZWQgPSBuZXcgU2V0KCksIHJlc3VsdHMgPSBbXSwgbG9nRnVuYykge1xuICAgICAgICBpZiAodmlzaXRlZC5oYXModGhpcykpIHJldHVybjsgLy8gbmV1IGRhIHh1IGx5IGJvIHF1YSwgdHJhbmggbGFwIHZvIGhhbiwgRE9ORyBOQVkgS0VZLCBuZXUgZGEga2llbSB0cmEgcm9pIHRoaSBraWVtIHRyYSBzdG9yZSBrZSB0aWVwXG5cbiAgICAgICAgdmlzaXRlZC5hZGQodGhpcyk7IC8vIERhbmggZGF1IGRhIHh1IGx5ICggbmV1IGNodWEgZGFuaCBkYXUgZGEgeHUgbHkpXG5cbiAgICAgICAgLy8gR2lhaSBxdXlldCBjYWMgcGh1IHRodW9jXG4gICAgICAgIGZvciAoY29uc3QgZGVwIG9mIHRoaXMuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICAgYXdhaXQgZGVwLnJlc29sdmUoc3RlcFRpbWUsIHZpc2l0ZWQsIHJlc3VsdHMsIGxvZ0Z1bmMpOy8vIGdvaSBERVFVWSBkZSBnaWFpIHF1eWV0IGNhYyBzdG9yZSBjbyBjaHVhIGNhYyBwaHUgdGh1b2MoTmV1IGsgY28gcGh1IHRodW9jIHRoaSBmb3Igc2UgYm8gcXVhLCB4dSBseSBuZ2F5IHRoYW5nIHN0b3JlIGhpZW4gdGFpKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gxJDhu6NpIHN0ZXBUaW1lIHMgdHJ1b2Mga2hpIGdpYWkgcXV5ZXRcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHN0ZXBUaW1lICogMTAwMCkpO1xuXG4gICAgICAgIGNjLmxvZyh0aGlzLm5hbWUpOyAvLyBJbiB0w6puIHN0b3JlIHJhIGNvbnNvbGVcbiAgICAgICAgbG9nRnVuYyh0aGlzLm5hbWUpOyAvLyBHaGkgbG9nIHbDoG8gTGFiZWwgVUlcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubmFtZSk7IC8vIGx1dSB0ZW4gdmFvIHN0b3JlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g4pSA4pSA4pSAIEZVTkNUSU9OIENPTlRSSUJVVEUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgLy8gSMOgbSBjaMOtbmggdGjhu7FjIHRoaSB0b8OgbiBi4buZIGPDoWMgc3RvcmUgdHJ1eeG7gW4gdsOgbyB0aGVvIMSRw7puZyB0aOG7qSB04buxIHBo4bulIHRodeG7mWNcbiAgICBhc3luYyBmdW5jdGlvbiBjb250cmlidXRlKHN0ZXBUaW1lLCBsb2dGdW5jLCAuLi5zdG9yZXMpIHtcbiAgICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KCk7IC8vIERhbmggZGF1IHN0b3JlIGRhIHRodWMgaGllblxuICAgICAgY29uc3QgcmVzdWx0cyA9IFtdOyAvLyBMdXUga2V0IHF1YSBzdG9yZSB0aGVvIHRodSB0dVxuXG4gICAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIHN0b3Jlcykge1xuICAgICAgICBhd2FpdCBzdG9yZS5yZXNvbHZlKHN0ZXBUaW1lLCB2aXNpdGVkLCByZXN1bHRzLCBsb2dGdW5jKTsgLy8gZ2lhaSBxdXlldCB0dW5nIHN0b3JlXG4gICAgICB9XG5cbiAgICAgIC8vIFNhdSBraGkgdOG6pXQgY+G6oyBzdG9yZSB4b25nLCBsb2cga+G6v3QgcXXhuqMgY3Xhu5FpIGPDuW5nXG4gICAgICBjb25zdCBmaW5hbExvZyA9ICdIb8OgbiB04bqldDogJyArIHJlc3VsdHMuam9pbignIOKGkiAnKTtcbiAgICAgIGNjLmxvZyhmaW5hbExvZyk7XG4gICAgICBsb2dGdW5jKGZpbmFsTG9nKTtcbiAgICB9XG5cbiAgICAvLyDilIDilIDilIAgTE9HIEhFTFBFUiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgICAvLyBHaGkgbeG7mXQgZMOybmcgbG9nIHbDoG8gTGFiZWwgVUlcbiAgICBjb25zdCBsb2dUb0xhYmVsID0gKG1zZykgPT4ge1xuICAgICAgdGhpcy5sb2dMYWJlbC5zdHJpbmcgKz0gbXNnICsgJ1xcbic7XG4gICAgfTtcblxuICAgIC8vIOKUgOKUgOKUgCBU4bqgTyBDw4FDIFNUT1JFICYgUEjhu6QgVEhV4buYQyDilIDilIDilIDilIDilIDilIDilIBcbiAgICBjb25zdCBzdG9yZTEgPSBuZXcgU3RvcmUoJ3N0b3JlXzEnKTtcbiAgICBjb25zdCBzdG9yZTIgPSBuZXcgU3RvcmUoJ3N0b3JlXzInKTtcbiAgICBjb25zdCBzdG9yZTMgPSBuZXcgU3RvcmUoJ3N0b3JlXzMnKTtcbiAgICBjb25zdCBzdG9yZTQgPSBuZXcgU3RvcmUoJ3N0b3JlXzQnKTtcbiAgICBjb25zdCBzdG9yZTUgPSBuZXcgU3RvcmUoJ3N0b3JlXzUnKTtcblxuICAgIC8vIFRoaeG6v3QgbOG6rXAgcXVhbiBo4buHIHBo4bulIHRodeG7mWM6XG4gICAgLy8gc3RvcmUxIC0+IHN0b3JlMyAtPiBzdG9yZTIgLT4gc3RvcmU1IC0+IHN0b3JlNFxuICAgIHN0b3JlMS53YWl0KHN0b3JlMyk7XG4gICAgc3RvcmUzLndhaXQoc3RvcmUyKTtcbiAgICBzdG9yZTIud2FpdChzdG9yZTUpO1xuICAgIHN0b3JlNS53YWl0KHN0b3JlNCk7XG5cbiAgICAvLyDilIDilIDilIAgVEjhu7BDIFRISSBDSMONTkgg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgdGhpcy5sb2dMYWJlbC5zdHJpbmcgPSAnJzsgLy8gWMOzYSBu4buZaSBkdW5nIGxhYmVsIHRyxrDhu5tjIGtoaSBjaOG6oXlcbiAgICBjb250cmlidXRlKDMsIGxvZ1RvTGFiZWwsIHN0b3JlMSwgc3RvcmUyLCBzdG9yZTMsIHN0b3JlNCwgc3RvcmU1KTtcbiAgICAvLyBH4buNaSBjb250cmlidXRlKCkgduG7m2kgZGVsYXkgMyBnacOieSBnaeG7r2EgbeG7l2kgYsaw4bubY1xuICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai6_D7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e83dFFC/hLRJNwWeeuaBQv', 'Bai6_D7');
// Day7/Script/Bai6_D7.js

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
    //fetch anh url va thoi gian het han
    return new Promise(function (resolve, reject) {
      // 2 trang thai resolve va reject
      var controller = new AbortController(); // tao 1 controller huy fetch

      var signal = controller.signal; // dung de lien ket vs fetch

      var timeoutId = setTimeout(function () {
        controller.abort();
      }, timeout); // set time out de het time out roi goi abort

      fetch(url, {
        signal: signal
      }) // url va doi so signal
      .then(function (response) {
        // tra ve rq
        clearTimeout(timeoutId); // huy time out neu dc tra ve

        if (!response.ok) {
          throw new Error("HTTP error! Status: " + response.status);
        }

        return response.blob();
      }).then(function (blob) {
        // lay du lieu
        var img = new Image();
        img.src = URL.createObjectURL(blob);

        img.onload = function () {
          return resolve(img);
        };

        img.onerror = function (err) {
          return reject(err);
        };
      })["catch"](function (error) {
        // neu k du thoi gian
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
              //tai nhieu anh song song
              urls = ['https://picsum.photos/id/237/300/200', 'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g', 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4', 'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ', 'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g'];
              promises = urls.map(function (url) {
                return (// duyet qua URL, tao promise
                  _this.fetchImageWithTimeout(url, _this.TimeOut).then(function (img) {
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
                  })
                );
              });
              _context.next = 4;
              return Promise.all(promises);

            case 4:
              results = _context.sent;

              // doi anh tai thanh cong or that bai
              for (i = 0; i < results.length; i++) {
                result = results[i];

                if (result.status === 'fulfilled') {
                  _this.Tile.string = "Image loaded:";
                  _this.Body.string = result.url; // day la anh dc tai thanh cong

                  texture = new cc.Texture2D();
                  texture.initWithElement(result.img);
                  texture.handleLoadedTexture(); // cap nhat UI

                  spriteFrame = new cc.SpriteFrame(texture); // tao spriteframe

                  if (i < _this.spriteArray.length) {
                    // gan anh vao sprite tuong ung
                    _this.spriteArray[i].spriteFrame = spriteFrame;
                  } else {
                    console.warn("No sprite available for index " + i);
                  }
                } else {
                  // neu loi hien thi loi trong UI + log loi~
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
}); //Câu hỏi:
// abort.controller co xai dc cho khac, VD: axios
// duoc su dung o cho nao, platform nao ho tro
//Trả lời
// Abort controller có dùng được ngoài fetch không ?
// Có, nhưng không được sử dụng với các phương thức khác như axios, request, ...
// Vì AbortController bản chất chỉ là công cụ phát tín hiệu cancel thông qua signal, chứ 
// không tự huỷ được
// Vì thế API nào được thế kế để "nghe" tín hiệu này mới phản hồi
// Fetch thì đương nhiên là xài được và dùng phổ biến nhất
// ReadableStream, WritableStream xài được trong API stream
// XMLHttpRequest xài được
// navigator.sendBeacon(trình duyệt): không xài được
// setTimeout, setInterval không xài được, thay vào đó ta phải viết wrapper
// Axios thì tuỳ phiên bản, hiện tại sử dụng CancelToken ở v0.21 trở xuống
// một số bên thư viện thứ 3 : got, ky, node-fetch có hỗ trợ rõ ràng
// Web API như AudiContext, WebRTC, thì cũng tuỳ do không đồng nhất browser
// AbortController không chỉ dùng cho fetch, nhưng phụ thuộc vào việc thư viện/API có hỗ trợ signal hay không.
// fetch là ví dụ điển hình nhất vì nó hỗ trợ AbortSignal gốc từ trình duyệt.
// Một số thư viện phổ biến (Axios, jQuery Ajax...) phải dùng cơ chế riêng.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk2X0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiVGltZU91dCIsIlRpbGUiLCJMYWJlbCIsIkJvZHkiLCJzcHJpdGVBcnJheSIsInR5cGUiLCJTcHJpdGUiLCJmZXRjaEltYWdlV2l0aFRpbWVvdXQiLCJ1cmwiLCJ0aW1lb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImFib3J0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjbGVhclRpbWVvdXQiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiYmxvYiIsImltZyIsIkltYWdlIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25sb2FkIiwib25lcnJvciIsImVyciIsImVycm9yIiwibmFtZSIsImNhbGwiLCJ1cmxzIiwicHJvbWlzZXMiLCJtYXAiLCJhbGwiLCJyZXN1bHRzIiwiaSIsImxlbmd0aCIsInJlc3VsdCIsInN0cmluZyIsInRleHR1cmUiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUUsS0FERDtJQUVSQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sS0FGRDtJQUdSQyxJQUFJLEVBQUVQLEVBQUUsQ0FBQ00sS0FIRDtJQUtSRSxXQUFXLEVBQUU7TUFDVCxXQUFTLEVBREE7TUFFVEMsSUFBSSxFQUFFLENBQUNULEVBQUUsQ0FBQ1UsTUFBSjtJQUZHO0VBTEwsQ0FIUDtFQWNMQyxxQkFkSyxpQ0FjaUJDLEdBZGpCLEVBY3NCQyxPQWR0QixFQWMrQjtJQUFFO0lBQ2xDLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtNQUFFO01BQ3RDLElBQU1DLFVBQVUsR0FBRyxJQUFJQyxlQUFKLEVBQW5CLENBRG9DLENBQ007O01BQzFDLElBQU1DLE1BQU0sR0FBR0YsVUFBVSxDQUFDRSxNQUExQixDQUZvQyxDQUVGOztNQUVsQyxJQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO1FBQy9CSixVQUFVLENBQUNLLEtBQVg7TUFDSCxDQUYyQixFQUV6QlQsT0FGeUIsQ0FBNUIsQ0FKb0MsQ0FNdkI7O01BRWJVLEtBQUssQ0FBQ1gsR0FBRCxFQUFNO1FBQUVPLE1BQU0sRUFBTkE7TUFBRixDQUFOLENBQUwsQ0FBdUI7TUFBdkIsQ0FDS0ssSUFETCxDQUNVLFVBQUFDLFFBQVEsRUFBSTtRQUFFO1FBQ2hCQyxZQUFZLENBQUNOLFNBQUQsQ0FBWixDQURjLENBQ1U7O1FBQ3hCLElBQUksQ0FBQ0ssUUFBUSxDQUFDRSxFQUFkLEVBQWtCO1VBQ2QsTUFBTSxJQUFJQyxLQUFKLDBCQUFpQ0gsUUFBUSxDQUFDSSxNQUExQyxDQUFOO1FBQ0g7O1FBQ0QsT0FBT0osUUFBUSxDQUFDSyxJQUFULEVBQVA7TUFDSCxDQVBMLEVBUUtOLElBUkwsQ0FRVSxVQUFBTSxJQUFJLEVBQUk7UUFBRTtRQUNaLElBQUlDLEdBQUcsR0FBRyxJQUFJQyxLQUFKLEVBQVY7UUFDQUQsR0FBRyxDQUFDRSxHQUFKLEdBQVVDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkwsSUFBcEIsQ0FBVjs7UUFDQUMsR0FBRyxDQUFDSyxNQUFKLEdBQWE7VUFBQSxPQUFNckIsT0FBTyxDQUFDZ0IsR0FBRCxDQUFiO1FBQUEsQ0FBYjs7UUFDQUEsR0FBRyxDQUFDTSxPQUFKLEdBQWMsVUFBQUMsR0FBRztVQUFBLE9BQUl0QixNQUFNLENBQUNzQixHQUFELENBQVY7UUFBQSxDQUFqQjtNQUNILENBYkwsV0FjVyxVQUFBQyxLQUFLLEVBQUk7UUFBRTtRQUNkLElBQUlBLEtBQUssQ0FBQ0MsSUFBTixLQUFlLFlBQW5CLEVBQWlDO1VBQzdCeEIsTUFBTSxDQUFDLElBQUlZLEtBQUosQ0FBVSxtQkFBVixDQUFELENBQU47UUFDSCxDQUZELE1BRU87VUFDSFosTUFBTSxDQUFDdUIsS0FBRCxDQUFOO1FBQ0g7TUFDSixDQXBCTDtJQXFCSCxDQTdCTSxDQUFQO0VBOEJILENBN0NJO0VBK0NDRSxJQS9DRCxrQkErQ1E7SUFBQTs7SUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBRTtjQUNMQyxJQURHLEdBQ0ksQ0FDVCxzQ0FEUyxFQUVULGtHQUZTLEVBR1Qsa0dBSFMsRUFJVCxrR0FKUyxFQUtULGtHQUxTLENBREo7Y0FTSEMsUUFURyxHQVNRRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFBaEMsR0FBRztnQkFBQSxPQUFJO2tCQUM3QixLQUFJLENBQUNELHFCQUFMLENBQTJCQyxHQUEzQixFQUFnQyxLQUFJLENBQUNSLE9BQXJDLEVBQ0tvQixJQURMLENBQ1UsVUFBQU8sR0FBRztvQkFBQSxPQUFLO3NCQUFFRixNQUFNLEVBQUUsV0FBVjtzQkFBdUJFLEdBQUcsRUFBSEEsR0FBdkI7c0JBQTRCbkIsR0FBRyxFQUFIQTtvQkFBNUIsQ0FBTDtrQkFBQSxDQURiLFdBRVcsVUFBQTJCLEtBQUs7b0JBQUEsT0FBSztzQkFBRVYsTUFBTSxFQUFFLFVBQVY7c0JBQXNCVSxLQUFLLEVBQUxBLEtBQXRCO3NCQUE2QjNCLEdBQUcsRUFBSEE7b0JBQTdCLENBQUw7a0JBQUEsQ0FGaEI7Z0JBRHlCO2NBQUEsQ0FBWixDQVRSO2NBQUE7Y0FBQSxPQWVhRSxPQUFPLENBQUMrQixHQUFSLENBQVlGLFFBQVosQ0FmYjs7WUFBQTtjQWVIRyxPQWZHOztjQWVvQztjQUU3QyxLQUFTQyxDQUFULEdBQWEsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxPQUFPLENBQUNFLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO2dCQUMvQkUsTUFEK0IsR0FDdEJILE9BQU8sQ0FBQ0MsQ0FBRCxDQURlOztnQkFHckMsSUFBSUUsTUFBTSxDQUFDcEIsTUFBUCxLQUFrQixXQUF0QixFQUFtQztrQkFDL0IsS0FBSSxDQUFDeEIsSUFBTCxDQUFVNkMsTUFBVixHQUFtQixlQUFuQjtrQkFDQSxLQUFJLENBQUMzQyxJQUFMLENBQVUyQyxNQUFWLEdBQW1CRCxNQUFNLENBQUNyQyxHQUExQixDQUYrQixDQUVEOztrQkFFMUJ1QyxPQUoyQixHQUlqQixJQUFJbkQsRUFBRSxDQUFDb0QsU0FBUCxFQUppQjtrQkFLL0JELE9BQU8sQ0FBQ0UsZUFBUixDQUF3QkosTUFBTSxDQUFDbEIsR0FBL0I7a0JBQ0FvQixPQUFPLENBQUNHLG1CQUFSLEdBTitCLENBTUE7O2tCQUUzQkMsV0FSMkIsR0FRYixJQUFJdkQsRUFBRSxDQUFDd0QsV0FBUCxDQUFtQkwsT0FBbkIsQ0FSYSxFQVFlOztrQkFFOUMsSUFBSUosQ0FBQyxHQUFHLEtBQUksQ0FBQ3ZDLFdBQUwsQ0FBaUJ3QyxNQUF6QixFQUFpQztvQkFBRTtvQkFDL0IsS0FBSSxDQUFDeEMsV0FBTCxDQUFpQnVDLENBQWpCLEVBQW9CUSxXQUFwQixHQUFrQ0EsV0FBbEM7a0JBQ0gsQ0FGRCxNQUVPO29CQUNIRSxPQUFPLENBQUNDLElBQVIsb0NBQThDWCxDQUE5QztrQkFDSDtnQkFFSixDQWhCRCxNQWdCTztrQkFBRTtrQkFDTCxLQUFJLENBQUMxQyxJQUFMLENBQVU2QyxNQUFWLEdBQW1CLFFBQW5CO2tCQUNBLEtBQUksQ0FBQzNDLElBQUwsQ0FBVTJDLE1BQVYsR0FBbUJELE1BQU0sQ0FBQ1YsS0FBUCxDQUFhb0IsT0FBaEM7a0JBQ0FGLE9BQU8sQ0FBQ2xCLEtBQVIsQ0FBYyxzQkFBZCxFQUFzQ1UsTUFBTSxDQUFDckMsR0FBN0MsRUFBa0RxQyxNQUFNLENBQUNWLEtBQXpEO2dCQUNIO2NBQ0o7O1lBekNRO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBO0VBMENaLENBekZJO0VBMkZMcUIsS0EzRkssbUJBMkZHO0lBQ0osS0FBS25CLElBQUw7RUFDSDtBQTdGSSxDQUFULEdBa0dBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFRpbWVPdXQ6IDEwMDAwLFxuICAgICAgICBUaWxlOiBjYy5MYWJlbCxcbiAgICAgICAgQm9keTogY2MuTGFiZWwsXG5cbiAgICAgICAgc3ByaXRlQXJyYXk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlNwcml0ZV1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmZXRjaEltYWdlV2l0aFRpbWVvdXQodXJsLCB0aW1lb3V0KSB7IC8vZmV0Y2ggYW5oIHVybCB2YSB0aG9pIGdpYW4gaGV0IGhhblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyAvLyAyIHRyYW5nIHRoYWkgcmVzb2x2ZSB2YSByZWplY3RcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7IC8vIHRhbyAxIGNvbnRyb2xsZXIgaHV5IGZldGNoXG4gICAgICAgICAgICBjb25zdCBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDsgLy8gZHVuZyBkZSBsaWVuIGtldCB2cyBmZXRjaFxuXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTsgLy8gc2V0IHRpbWUgb3V0IGRlIGhldCB0aW1lIG91dCByb2kgZ29pIGFib3J0XG5cbiAgICAgICAgICAgIGZldGNoKHVybCwgeyBzaWduYWwgfSkgLy8gdXJsIHZhIGRvaSBzbyBzaWduYWxcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IC8vIHRyYSB2ZSBycVxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTsvLyBodXkgdGltZSBvdXQgbmV1IGRjIHRyYSB2ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGJsb2IgPT4geyAvLyBsYXkgZHUgbGlldVxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWcpO1xuICAgICAgICAgICAgICAgICAgICBpbWcub25lcnJvciA9IGVyciA9PiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IC8vIG5ldSBrIGR1IHRob2kgZ2lhblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdSZXF1ZXN0IHRpbWVkIG91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFzeW5jIGNhbGwoKSB7IC8vdGFpIG5oaWV1IGFuaCBzb25nIHNvbmdcbiAgICAgICAgY29uc3QgdXJscyA9IFtcbiAgICAgICAgICAgICdodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjM3LzMwMC8yMDAnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMy81MDAwLzMzMzMuanBnP2htYWM9R0RqWjJ1TldFM1Y1OVBrZERhT3pUT3VWM3RQV1d4SlNmNGZOY3h1NFMyZycsXG4gICAgICAgICAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8xLzUwMDAvMzMzMy5qcGc/aG1hYz1Bc3YyRFUzckFfNUQxeFNlMjJ4Wks0N1dFQU4wd2pXZUZPaHpkMTN1alc0JyxcbiAgICAgICAgICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzIvNTAwMC8zMzMzLmpwZz9obWFjPV9LRGtxUVZ0dFh3X25NLVJ5SmZMSW1JYmFmRnJxTHN1R081WXVIcUQtcVEnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMy81MDAwLzMzMzMuanBnP2htYWM9R0RqWjJ1TldFM1Y1OVBrZERhT3pUT3VWM3RQV1d4SlNmNGZOY3h1NFMyZydcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHVybHMubWFwKHVybCA9PiAvLyBkdXlldCBxdWEgVVJMLCB0YW8gcHJvbWlzZVxuICAgICAgICAgICAgdGhpcy5mZXRjaEltYWdlV2l0aFRpbWVvdXQodXJsLCB0aGlzLlRpbWVPdXQpXG4gICAgICAgICAgICAgICAgLnRoZW4oaW1nID0+ICh7IHN0YXR1czogJ2Z1bGZpbGxlZCcsIGltZywgdXJsIH0pKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBzdGF0dXM6ICdyZWplY3RlZCcsIGVycm9yLCB1cmwgfSkpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTsgLy8gZG9pIGFuaCB0YWkgdGhhbmggY29uZyBvciB0aGF0IGJhaVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5UaWxlLnN0cmluZyA9IFwiSW1hZ2UgbG9hZGVkOlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuQm9keS5zdHJpbmcgPSByZXN1bHQudXJsOy8vIGRheSBsYSBhbmggZGMgdGFpIHRoYW5oIGNvbmdcblxuICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xuICAgICAgICAgICAgICAgIHRleHR1cmUuaW5pdFdpdGhFbGVtZW50KHJlc3VsdC5pbWcpO1xuICAgICAgICAgICAgICAgIHRleHR1cmUuaGFuZGxlTG9hZGVkVGV4dHVyZSgpOyAvLyBjYXAgbmhhdCBVSVxuXG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpOy8vIHRhbyBzcHJpdGVmcmFtZVxuXG4gICAgICAgICAgICAgICAgaWYgKGkgPCB0aGlzLnNwcml0ZUFycmF5Lmxlbmd0aCkgeyAvLyBnYW4gYW5oIHZhbyBzcHJpdGUgdHVvbmcgdW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQXJyYXlbaV0uc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIHNwcml0ZSBhdmFpbGFibGUgZm9yIGluZGV4ICR7aX1gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIG5ldSBsb2kgaGllbiB0aGkgbG9pIHRyb25nIFVJICsgbG9nIGxvaX5cbiAgICAgICAgICAgICAgICB0aGlzLlRpbGUuc3RyaW5nID0gXCJFcnJvcjpcIjtcbiAgICAgICAgICAgICAgICB0aGlzLkJvZHkuc3RyaW5nID0gcmVzdWx0LmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgaW1hZ2U6XCIsIHJlc3VsdC51cmwsIHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuY2FsbCgpO1xuICAgIH0sXG59KTtcblxuXG5cbi8vQ8OidSBo4buPaTpcbi8vIGFib3J0LmNvbnRyb2xsZXIgY28geGFpIGRjIGNobyBraGFjLCBWRDogYXhpb3Ncbi8vIGR1b2Mgc3UgZHVuZyBvIGNobyBuYW8sIHBsYXRmb3JtIG5hbyBobyB0cm9cblxuXG4vL1Ry4bqjIGzhu51pXG4vLyBBYm9ydCBjb250cm9sbGVyIGPDsyBkw7luZyDEkcaw4bujYyBuZ2/DoGkgZmV0Y2gga2jDtG5nID9cbi8vIEPDsywgbmjGsG5nIGtow7RuZyDEkcaw4bujYyBz4butIGThu6VuZyB24bubaSBjw6FjIHBoxrDGoW5nIHRo4bupYyBraMOhYyBuaMawIGF4aW9zLCByZXF1ZXN0LCAuLi5cbi8vIFbDrCBBYm9ydENvbnRyb2xsZXIgYuG6o24gY2jhuqV0IGNo4buJIGzDoCBjw7RuZyBj4bulIHBow6F0IHTDrW4gaGnhu4d1IGNhbmNlbCB0aMO0bmcgcXVhIHNpZ25hbCwgY2jhu6kgXG4vLyBraMO0bmcgdOG7sSBodeG7tyDEkcaw4bujY1xuLy8gVsOsIHRo4bq/IEFQSSBuw6BvIMSRxrDhu6NjIHRo4bq/IGvhur8gxJHhu4MgXCJuZ2hlXCIgdMOtbiBoaeG7h3UgbsOgeSBt4bubaSBwaOG6o24gaOG7k2lcblxuLy8gRmV0Y2ggdGjDrCDEkcawxqFuZyBuaGnDqm4gbMOgIHjDoGkgxJHGsOG7o2MgdsOgIGTDuW5nIHBo4buVIGJp4bq/biBuaOG6pXRcbi8vIFJlYWRhYmxlU3RyZWFtLCBXcml0YWJsZVN0cmVhbSB4w6BpIMSRxrDhu6NjIHRyb25nIEFQSSBzdHJlYW1cbi8vIFhNTEh0dHBSZXF1ZXN0IHjDoGkgxJHGsOG7o2Ncbi8vIG5hdmlnYXRvci5zZW5kQmVhY29uKHRyw6xuaCBkdXnhu4d0KToga2jDtG5nIHjDoGkgxJHGsOG7o2Ncbi8vIHNldFRpbWVvdXQsIHNldEludGVydmFsIGtow7RuZyB4w6BpIMSRxrDhu6NjLCB0aGF5IHbDoG8gxJHDsyB0YSBwaOG6o2kgdmnhur90IHdyYXBwZXJcbi8vIEF4aW9zIHRow6wgdHXhu7MgcGhpw6puIGLhuqNuLCBoaeG7h24gdOG6oWkgc+G7rSBk4bulbmcgQ2FuY2VsVG9rZW4g4bufIHYwLjIxIHRy4bufIHh14buRbmdcbi8vIG3hu5l0IHPhu5EgYsOqbiB0aMawIHZp4buHbiB0aOG7qSAzIDogZ290LCBreSwgbm9kZS1mZXRjaCBjw7MgaOG7lyB0cuG7oyByw7UgcsOgbmdcbi8vIFdlYiBBUEkgbmjGsCBBdWRpQ29udGV4dCwgV2ViUlRDLCB0aMOsIGPFqW5nIHR14buzIGRvIGtow7RuZyDEkeG7k25nIG5o4bqldCBicm93c2VyXG5cbi8vIEFib3J0Q29udHJvbGxlciBraMO0bmcgY2jhu4kgZMO5bmcgY2hvIGZldGNoLCBuaMawbmcgcGjhu6UgdGh14buZYyB2w6BvIHZp4buHYyB0aMawIHZp4buHbi9BUEkgY8OzIGjhu5cgdHLhu6Mgc2lnbmFsIGhheSBraMO0bmcuXG5cbi8vIGZldGNoIGzDoCB2w60gZOG7pSDEkWnhu4NuIGjDrG5oIG5o4bqldCB2w6wgbsOzIGjhu5cgdHLhu6MgQWJvcnRTaWduYWwgZ+G7kWMgdOG7qyB0csOsbmggZHV54buHdC5cblxuLy8gTeG7mXQgc+G7kSB0aMawIHZp4buHbiBwaOG7lSBiaeG6v24gKEF4aW9zLCBqUXVlcnkgQWpheC4uLikgcGjhuqNpIGTDuW5nIGPGoSBjaOG6vyByacOqbmcuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Day7/Script/Bai2_D7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa987CDUExBRrpdRYM7EKy2', 'Bai2_D7');
// Day7/Script/Bai2_D7.js

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
              attempt = 0; // tao bien so lan thu lai

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWkyX0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGltZUxhYmVsIiwiTGFiZWwiLCJzdGFydCIsImZldGNoV2l0aEF1dG9SZXRyeSIsInNpbXVsYXRlQVBJQ2FsbCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiTWF0aCIsInJhbmRvbSIsIkVycm9yIiwiZmV0Y2hlciIsIm1heGltdW1SZXRyeUNvdW50IiwiYXR0ZW1wdCIsInJlc3VsdCIsImxvZyIsInN0cmluZyIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ1AsV0FBU0QsRUFBRSxDQUFDRSxTQURMO0VBR1BDLFVBQVUsRUFBRTtJQUNWQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0s7RUFESixDQUhMO0VBT1BDLEtBUE8sbUJBT0M7SUFDTixLQUFLQyxrQkFBTCxDQUF3QixLQUFLQyxlQUE3QixFQUE4QyxDQUE5QyxFQURNLENBQzZDO0VBQ3BELENBVE07RUFXUDtFQUNBQSxlQVpPLDZCQVlXO0lBQ2hCLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtNQUN0QztNQUNBLElBQUlDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtRQUN2QkYsTUFBTSxDQUFDLElBQUlHLEtBQUosQ0FBVSxpQkFBVixDQUFELENBQU47TUFDRCxDQUZELE1BRU87UUFDTEosT0FBTyxDQUFDLG9CQUFELENBQVA7TUFDRDtJQUNGLENBUE0sQ0FBUDtFQVFELENBckJNO0VBdUJQO0VBQ01ILGtCQXhCQyw4QkF3QmtCUSxPQXhCbEIsRUF3QjJCQyxpQkF4QjNCLEVBd0JrRDtJQUFBOztJQUFBO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBLElBQXZCQSxpQkFBdUI7Z0JBQXZCQSxpQkFBdUIsR0FBSCxDQUFHO2NBQUE7O2NBQUU7Y0FDckRDLE9BRG1ELEdBQ3pDLENBRHlDLEVBQ3RDOztZQURzQztjQUFBLE1BRWhEQSxPQUFPLEdBQUdELGlCQUZzQztnQkFBQTtnQkFBQTtjQUFBOztjQUFBO2NBQUE7Y0FBQSxPQUk5QkQsT0FBTyxFQUp1Qjs7WUFBQTtjQUk3Q0csTUFKNkM7Y0FJbEI7Y0FDakNsQixFQUFFLENBQUNtQixHQUFILENBQU8sVUFBUCxFQUFtQkQsTUFBbkIsRUFMbUQsQ0FLdEI7O2NBQzdCLEtBQUksQ0FBQ2QsU0FBTCxDQUFlZ0IsTUFBZixHQUF3QkYsTUFBeEIsQ0FObUQsQ0FNbEI7O2NBTmtCLGlDQU81Q0EsTUFQNEM7O1lBQUE7Y0FBQTtjQUFBO2NBU25ERCxPQUFPLEdBVDRDLENBU3ZDOztjQUNaakIsRUFBRSxDQUFDbUIsR0FBSCxjQUFrQkYsT0FBbEIsZUFBcUMsWUFBTUksT0FBM0MsRUFWbUQsQ0FVRzs7Y0FWSCxNQVcvQ0osT0FBTyxJQUFJRCxpQkFYb0M7Z0JBQUE7Z0JBQUE7Y0FBQTs7Y0FZakRoQixFQUFFLENBQUNtQixHQUFILENBQU8sb0JBQVAsRUFaaUQsQ0FZbEI7O2NBQy9CLEtBQUksQ0FBQ2YsU0FBTCxDQUFlZ0IsTUFBZixHQUF3QixvQkFBeEIsQ0FiaUQsQ0FhRjs7Y0FiRSxNQWMzQyxJQUFJTixLQUFKLENBQVUsb0JBQVYsQ0FkMkM7O1lBQUE7Y0FnQm5EZCxFQUFFLENBQUNtQixHQUFILG1CQUF1QkYsT0FBdkIsU0FBa0NELGlCQUFsQyxRQWhCbUQsQ0FnQk87Y0FHMUQ7O2NBbkJtRDtjQUFBLE9Bb0I3QyxJQUFJUCxPQUFKLENBQVksVUFBQUMsT0FBTztnQkFBQSxPQUFJWSxVQUFVLENBQUNaLE9BQUQsRUFBVSxJQUFWLENBQWQ7Y0FBQSxDQUFuQixDQXBCNkM7O1lBQUE7Y0FBQTtjQUFBOztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBO0VBdUJ4RDtBQS9DTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdGltZUxhYmVsOiBjYy5MYWJlbCwgIFxuICB9LFxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuZmV0Y2hXaXRoQXV0b1JldHJ5KHRoaXMuc2ltdWxhdGVBUElDYWxsLCAzKTsgIC8vIEfhu41pIGjDoG0gcmV0cnkgduG7m2kgMyBs4bqnbiB0aOG7rSBs4bqhaVxuICB9LFxuXG4gIC8vIEjDoG0gdGjhu7FjIGhp4buHbiBBUEkgQ2FsbCBnaeG6oyBs4bqtcFxuICBzaW11bGF0ZUFQSUNhbGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIEdp4bqjIGzhuq1wIDUwJSBraOG6oyBuxINuZyB0aOG6pXQgYuG6oWlcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0FQSSBjYWxsIGZhaWxlZCcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoJ0FQSSBjYWxsIHN1Y2NlZWRlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8vIEjDoG0gcmV0cnkgcmVxdWVzdFxuICBhc3luYyBmZXRjaFdpdGhBdXRvUmV0cnkoZmV0Y2hlciwgbWF4aW11bVJldHJ5Q291bnQgPSA1KSB7IC8vIHRydXllbiBzbyBsYW4gcmV0cnkgbWFjIGRpbmggbGEgNSwgbm8gc2UgY2hheSA1IG5ldSBvIHRyZW4gbmd0YSBxdWVuIHRydXllbiB2YW9cbiAgICBsZXQgYXR0ZW1wdCA9IDA7IC8vIHRhbyBiaWVuIHNvIGxhbiB0aHUgbGFpXG4gICAgd2hpbGUgKGF0dGVtcHQgPCBtYXhpbXVtUmV0cnlDb3VudCkgeyAvLyBraGkgY2h1YSBoZXQgc28gbGFuIHRodSBsYWlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoZXIoKTsgIC8vIFRo4buxYyBoaeG7h24gZ+G7jWkgQVBJXG4gICAgICAgIGNjLmxvZygnU3VjY2VzczonLCByZXN1bHQpOyAgLy8gTG9nIHRow6BuaCBjw7RuZ1xuICAgICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSByZXN1bHQ7ICAvLyBIaeG7g24gdGjhu4sga+G6v3QgcXXhuqMgbMOqbiBsYWJlbFxuICAgICAgICByZXR1cm4gcmVzdWx0OyAgLy8gTuG6v3UgdGjDoG5oIGPDtG5nLCB0cuG6oyB24buBIGvhur90IHF14bqjXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhdHRlbXB0Kys7ICAvLyBUxINuZyBz4buRIGzhuqduIHRo4butIGzhuqFpXG4gICAgICAgIGNjLmxvZyhgQXR0ZW1wdCAke2F0dGVtcHR9IGZhaWxlZDpgLCBlcnJvci5tZXNzYWdlKTsgIC8vIExvZyBs4buXaVxuICAgICAgICBpZiAoYXR0ZW1wdCA+PSBtYXhpbXVtUmV0cnlDb3VudCkge1xuICAgICAgICAgIGNjLmxvZygnQWxsIHJldHJpZXMgZmFpbGVkJyk7ICAvLyBLaGkgdsaw4bujdCBxdcOhIHPhu5EgbOG6p24gdGjhu60gbOG6oWlcbiAgICAgICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSAnQWxsIHJldHJpZXMgZmFpbGVkJzsgIC8vIEhp4buDbiB0aOG7iyB0aMO0bmcgYsOhbyBsw6puIGxhYmVsXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbGwgcmV0cmllcyBmYWlsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjYy5sb2coYFJldHJ5aW5nLi4uICgke2F0dGVtcHR9LyR7bWF4aW11bVJldHJ5Q291bnR9KWApOyAgLy8gTG9nIHJldHJ5XG5cbiAgICAgICAgXG4gICAgICAgIC8vIERlbGF5IGdp4buvYSBjw6FjIGzhuqduIHRo4butIGzhuqFpXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7ICAvLyAxIGdpw6J5XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
