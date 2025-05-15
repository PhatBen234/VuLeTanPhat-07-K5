
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk2LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiVGltZU91dCIsIlRpbGUiLCJMYWJlbCIsIkJvZHkiLCJzcHJpdGVBcnJheSIsInR5cGUiLCJTcHJpdGUiLCJmZXRjaEltYWdlV2l0aFRpbWVvdXQiLCJ1cmwiLCJ0aW1lb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImFib3J0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjbGVhclRpbWVvdXQiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiYmxvYiIsImltZyIsIkltYWdlIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25sb2FkIiwib25lcnJvciIsImVyciIsImVycm9yIiwibmFtZSIsImNhbGwiLCJ1cmxzIiwicHJvbWlzZXMiLCJtYXAiLCJhbGwiLCJyZXN1bHRzIiwiaSIsImxlbmd0aCIsInJlc3VsdCIsInN0cmluZyIsInRleHR1cmUiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUUsS0FERDtJQUVSQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sS0FGRDtJQUdSQyxJQUFJLEVBQUVQLEVBQUUsQ0FBQ00sS0FIRDtJQUtSRSxXQUFXLEVBQUU7TUFDVCxXQUFTLEVBREE7TUFFVEMsSUFB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IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgVGltZU91dDogMTAwMDAsXG4gICAgICAgIFRpbGU6IGNjLkxhYmVsLFxuICAgICAgICBCb2R5OiBjYy5MYWJlbCxcblxuICAgICAgICBzcHJpdGVBcnJheToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlXVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZldGNoSW1hZ2VXaXRoVGltZW91dCh1cmwsIHRpbWVvdXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7IFxuICAgICAgICAgICAgY29uc3Qgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWw7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuXG4gICAgICAgICAgICBmZXRjaCh1cmwsIHsgc2lnbmFsIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihibG9iID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSBlcnIgPT4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdSZXF1ZXN0IHRpbWVkIG91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFzeW5jIGNhbGwoKSB7XG4gICAgICAgIGNvbnN0IHVybHMgPSBbXG4gICAgICAgICAgICAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8zMDAvMjAwJyxcbiAgICAgICAgICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzMvNTAwMC8zMzMzLmpwZz9obWFjPUdEaloydU5XRTNWNTlQa2REYU96VE91VjN0UFdXeEpTZjRmTmN4dTRTMmcnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMS81MDAwLzMzMzMuanBnP2htYWM9QXN2MkRVM3JBXzVEMXhTZTIyeFpLNDdXRUFOMHdqV2VGT2h6ZDEzdWpXNCcsXG4gICAgICAgICAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8yLzUwMDAvMzMzMy5qcGc/aG1hYz1fS0RrcVFWdHRYd19uTS1SeUpmTEltSWJhZkZycUxzdUdPNVl1SHFELXFRJyxcbiAgICAgICAgICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzMvNTAwMC8zMzMzLmpwZz9obWFjPUdEaloydU5XRTNWNTlQa2REYU96VE91VjN0UFdXeEpTZjRmTmN4dTRTMmcnXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSB1cmxzLm1hcCh1cmwgPT5cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hJbWFnZVdpdGhUaW1lb3V0KHVybCwgdGhpcy5UaW1lT3V0KVxuICAgICAgICAgICAgICAgIC50aGVuKGltZyA9PiAoeyBzdGF0dXM6ICdmdWxmaWxsZWQnLCBpbWcsIHVybCB9KSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgc3RhdHVzOiAncmVqZWN0ZWQnLCBlcnJvciwgdXJsIH0pKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlRpbGUuc3RyaW5nID0gXCJJbWFnZSBsb2FkZWQ6XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5Cb2R5LnN0cmluZyA9IHJlc3VsdC51cmw7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmluaXRXaXRoRWxlbWVudChyZXN1bHQuaW1nKTtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcblxuICAgICAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcblxuICAgICAgICAgICAgICAgIGlmIChpIDwgdGhpcy5zcHJpdGVBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVBcnJheVtpXS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTm8gc3ByaXRlIGF2YWlsYWJsZSBmb3IgaW5kZXggJHtpfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlRpbGUuc3RyaW5nID0gXCJFcnJvcjpcIjtcbiAgICAgICAgICAgICAgICB0aGlzLkJvZHkuc3RyaW5nID0gcmVzdWx0LmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgaW1hZ2U6XCIsIHJlc3VsdC51cmwsIHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuY2FsbCgpO1xuICAgIH0sXG59KTsiXX0=