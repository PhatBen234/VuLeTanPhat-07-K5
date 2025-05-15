
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk2X0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiVGltZU91dCIsIlRpbGUiLCJMYWJlbCIsIkJvZHkiLCJzcHJpdGVBcnJheSIsInR5cGUiLCJTcHJpdGUiLCJmZXRjaEltYWdlV2l0aFRpbWVvdXQiLCJ1cmwiLCJ0aW1lb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImFib3J0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjbGVhclRpbWVvdXQiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiYmxvYiIsImltZyIsIkltYWdlIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25sb2FkIiwib25lcnJvciIsImVyciIsImVycm9yIiwibmFtZSIsImNhbGwiLCJ1cmxzIiwicHJvbWlzZXMiLCJtYXAiLCJhbGwiLCJyZXN1bHRzIiwiaSIsImxlbmd0aCIsInJlc3VsdCIsInN0cmluZyIsInRleHR1cmUiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUUsS0FERDtJQUVSQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sS0FGRDtJQUdSQyxJQUFJLEVBQUVQLEVBQUUsQ0FBQ00sS0FIRDtJQUtSRSxXQUFXLEVBQUU7TUFDVCxXQUFTLEVBREE7TUFFVEMs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBUaW1lT3V0OiAxMDAwMCxcbiAgICAgICAgVGlsZTogY2MuTGFiZWwsXG4gICAgICAgIEJvZHk6IGNjLkxhYmVsLFxuXG4gICAgICAgIHNwcml0ZUFycmF5OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5TcHJpdGVdXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZmV0Y2hJbWFnZVdpdGhUaW1lb3V0KHVybCwgdGltZW91dCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTsgXG4gICAgICAgICAgICBjb25zdCBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcblxuICAgICAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG5cbiAgICAgICAgICAgIGZldGNoKHVybCwgeyBzaWduYWwgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGJsb2IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWcpO1xuICAgICAgICAgICAgICAgICAgICBpbWcub25lcnJvciA9IGVyciA9PiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1JlcXVlc3QgdGltZWQgb3V0JykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYXN5bmMgY2FsbCgpIHtcbiAgICAgICAgY29uc3QgdXJscyA9IFtcbiAgICAgICAgICAgICdodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjM3LzMwMC8yMDAnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMy81MDAwLzMzMzMuanBnP2htYWM9R0RqWjJ1TldFM1Y1OVBrZERhT3pUT3VWM3RQV1d4SlNmNGZOY3h1NFMyZycsXG4gICAgICAgICAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8xLzUwMDAvMzMzMy5qcGc/aG1hYz1Bc3YyRFUzckFfNUQxeFNlMjJ4Wks0N1dFQU4wd2pXZUZPaHpkMTN1alc0JyxcbiAgICAgICAgICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzIvNTAwMC8zMzMzLmpwZz9obWFjPV9LRGtxUVZ0dFh3X25NLVJ5SmZMSW1JYmFmRnJxTHN1R081WXVIcUQtcVEnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMy81MDAwLzMzMzMuanBnP2htYWM9R0RqWjJ1TldFM1Y1OVBrZERhT3pUT3VWM3RQV1d4SlNmNGZOY3h1NFMyZydcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHVybHMubWFwKHVybCA9PlxuICAgICAgICAgICAgdGhpcy5mZXRjaEltYWdlV2l0aFRpbWVvdXQodXJsLCB0aGlzLlRpbWVPdXQpXG4gICAgICAgICAgICAgICAgLnRoZW4oaW1nID0+ICh7IHN0YXR1czogJ2Z1bGZpbGxlZCcsIGltZywgdXJsIH0pKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBzdGF0dXM6ICdyZWplY3RlZCcsIGVycm9yLCB1cmwgfSkpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZnVsZmlsbGVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuVGlsZS5zdHJpbmcgPSBcIkltYWdlIGxvYWRlZDpcIjtcbiAgICAgICAgICAgICAgICB0aGlzLkJvZHkuc3RyaW5nID0gcmVzdWx0LnVybDtcblxuICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xuICAgICAgICAgICAgICAgIHRleHR1cmUuaW5pdFdpdGhFbGVtZW50KHJlc3VsdC5pbWcpO1xuICAgICAgICAgICAgICAgIHRleHR1cmUuaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkgPCB0aGlzLnNwcml0ZUFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUFycmF5W2ldLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBObyBzcHJpdGUgYXZhaWxhYmxlIGZvciBpbmRleCAke2l9YCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuVGlsZS5zdHJpbmcgPSBcIkVycm9yOlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuQm9keS5zdHJpbmcgPSByZXN1bHQuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBpbWFnZTpcIiwgcmVzdWx0LnVybCwgcmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5jYWxsKCk7XG4gICAgfSxcbn0pO1xuXG5cblxuLy9Dw6J1IGjhu49pOlxuLy8gYWJvcnQuY29udHJvbGxlciBjbyB4YWkgZGMgY2hvIGtoYWMsIFZEOiBheGlvc1xuLy8gZHVvYyBzdSBkdW5nIG8gY2hvIG5hbywgcGxhdGZvcm0gbmFvIGhvIHRyb1xuXG5cbi8vVHLhuqMgbOG7nWlcbi8vIEFib3J0IGNvbnRyb2xsZXIgY8OzIGTDuW5nIMSRxrDhu6NjIG5nb8OgaSBmZXRjaCBraMO0bmcgP1xuLy8gQ8OzLCBuaMawbmcga2jDtG5nIMSRxrDhu6NjIHPhu60gZOG7pW5nIHbhu5tpIGPDoWMgcGjGsMahbmcgdGjhu6ljIGtow6FjIG5oxrAgYXhpb3MsIHJlcXVlc3QsIC4uLlxuLy8gVsOsIEFib3J0Q29udHJvbGxlciBi4bqjbiBjaOG6pXQgY2jhu4kgbMOgIGPDtG5nIGPhu6UgcGjDoXQgdMOtbiBoaeG7h3UgY2FuY2VsIHRow7RuZyBxdWEgc2lnbmFsLCBjaOG7qSBcbi8vIGtow7RuZyB04buxIGh14bu3IMSRxrDhu6NjXG4vLyBWw6wgdGjhur8gQVBJIG7DoG8gxJHGsOG7o2MgdGjhur8ga+G6vyDEkeG7gyBcIm5naGVcIiB0w61uIGhp4buHdSBuw6B5IG3hu5tpIHBo4bqjbiBo4buTaVxuXG4vLyBGZXRjaCB0aMOsIMSRxrDGoW5nIG5oacOqbiBsw6AgeMOgaSDEkcaw4bujYyB2w6AgZMO5bmcgcGjhu5UgYmnhur9uIG5o4bqldFxuLy8gUmVhZGFibGVTdHJlYW0sIFdyaXRhYmxlU3RyZWFtIHjDoGkgxJHGsOG7o2MgdHJvbmcgQVBJIHN0cmVhbVxuLy8gWE1MSHR0cFJlcXVlc3QgeMOgaSDEkcaw4bujY1xuLy8gbmF2aWdhdG9yLnNlbmRCZWFjb24odHLDrG5oIGR1eeG7h3QpOiBraMO0bmcgeMOgaSDEkcaw4bujY1xuLy8gc2V0VGltZW91dCwgc2V0SW50ZXJ2YWwga2jDtG5nIHjDoGkgxJHGsOG7o2MsIHRoYXkgdsOgbyDEkcOzIHRhIHBo4bqjaSB2aeG6v3Qgd3JhcHBlclxuLy8gQXhpb3MgdGjDrCB0deG7syBwaGnDqm4gYuG6o24sIGhp4buHbiB04bqhaSBz4butIGThu6VuZyBDYW5jZWxUb2tlbiDhu58gdjAuMjEgdHLhu58geHXhu5FuZ1xuLy8gbeG7mXQgc+G7kSBiw6puIHRoxrAgdmnhu4duIHRo4bupIDMgOiBnb3QsIGt5LCBub2RlLWZldGNoIGPDsyBo4buXIHRy4bujIHLDtSByw6BuZ1xuLy8gV2ViIEFQSSBuaMawIEF1ZGlDb250ZXh0LCBXZWJSVEMsIHRow6wgY8WpbmcgdHXhu7MgZG8ga2jDtG5nIMSR4buTbmcgbmjhuqV0IGJyb3dzZXJcblxuLy8gQWJvcnRDb250cm9sbGVyIGtow7RuZyBjaOG7iSBkw7luZyBjaG8gZmV0Y2gsIG5oxrBuZyBwaOG7pSB0aHXhu5ljIHbDoG8gdmnhu4djIHRoxrAgdmnhu4duL0FQSSBjw7MgaOG7lyB0cuG7oyBzaWduYWwgaGF5IGtow7RuZy5cblxuLy8gZmV0Y2ggbMOgIHbDrSBk4bulIMSRaeG7g24gaMOsbmggbmjhuqV0IHbDrCBuw7MgaOG7lyB0cuG7oyBBYm9ydFNpZ25hbCBn4buRYyB04burIHRyw6xuaCBkdXnhu4d0LlxuXG4vLyBN4buZdCBz4buRIHRoxrAgdmnhu4duIHBo4buVIGJp4bq/biAoQXhpb3MsIGpRdWVyeSBBamF4Li4uKSBwaOG6o2kgZMO5bmcgY8ahIGNo4bq/IHJpw6puZy4iXX0=