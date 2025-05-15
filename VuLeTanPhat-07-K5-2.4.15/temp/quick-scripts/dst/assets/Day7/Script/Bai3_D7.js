
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