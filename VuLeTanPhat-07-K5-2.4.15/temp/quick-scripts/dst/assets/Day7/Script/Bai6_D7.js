
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9EYXk3L1NjcmlwdC9CYWk2X0Q3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiVGltZU91dCIsIlRpbGUiLCJMYWJlbCIsIkJvZHkiLCJzcHJpdGVBcnJheSIsInR5cGUiLCJTcHJpdGUiLCJmZXRjaEltYWdlV2l0aFRpbWVvdXQiLCJ1cmwiLCJ0aW1lb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImFib3J0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjbGVhclRpbWVvdXQiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiYmxvYiIsImltZyIsIkltYWdlIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25sb2FkIiwib25lcnJvciIsImVyciIsImVycm9yIiwibmFtZSIsImNhbGwiLCJ1cmxzIiwicHJvbWlzZXMiLCJtYXAiLCJhbGwiLCJyZXN1bHRzIiwiaSIsImxlbmd0aCIsInJlc3VsdCIsInN0cmluZyIsInRleHR1cmUiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7O0FBREFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUUsS0FERDtJQUVSQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sS0FGRDtJQUdSQyxJQUFJLEVBQUVQLEVBQUUsQ0FBQ00sS0FIRDtJQUtSRSxXQUFXLEVBQUU7TUFDVCxXQUFTLEVBREE7TUFFVEMs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Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBO0VBMENaLENBekZJO0VBMkZMcUIsS0EzRkssbUJBMkZHO0lBQ0osS0FBS25CLElBQUw7RUFDSDtBQTdGSSxDQUFULEdBa0dBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFRpbWVPdXQ6IDEwMDAwLFxuICAgICAgICBUaWxlOiBjYy5MYWJlbCxcbiAgICAgICAgQm9keTogY2MuTGFiZWwsXG5cbiAgICAgICAgc3ByaXRlQXJyYXk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlNwcml0ZV1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmZXRjaEltYWdlV2l0aFRpbWVvdXQodXJsLCB0aW1lb3V0KSB7IC8vZmV0Y2ggYW5oIHVybCB2YSB0aG9pIGdpYW4gaGV0IGhhblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyAvLyAyIHRyYW5nIHRoYWkgcmVzb2x2ZSB2YSByZWplY3RcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7IC8vIHRhbyAxIGNvbnRyb2xsZXIgaHV5IGZldGNoXG4gICAgICAgICAgICBjb25zdCBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDsgLy8gZHVuZyBkZSBsaWVuIGtldCB2cyBmZXRjaFxuXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTsgLy8gc2V0IHRpbWUgb3V0IGRlIGhldCB0aW1lIG91dCByb2kgZ29pIGFib3J0XG5cbiAgICAgICAgICAgIGZldGNoKHVybCwgeyBzaWduYWwgfSkgLy8gdXJsIHZhIGRvaSBzbyBzaWduYWxcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IC8vIHRyYSB2ZSBycVxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTsvLyBodXkgdGltZSBvdXQgbmV1IGRjIHRyYSB2ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGJsb2IgPT4geyAvLyBsYXkgZHUgbGlldVxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWcpO1xuICAgICAgICAgICAgICAgICAgICBpbWcub25lcnJvciA9IGVyciA9PiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IC8vIG5ldSBrIGR1IHRob2kgZ2lhblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdSZXF1ZXN0IHRpbWVkIG91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFzeW5jIGNhbGwoKSB7IC8vdGFpIG5oaWV1IGFuaCBzb25nIHNvbmdcbiAgICAgICAgY29uc3QgdXJscyA9IFtcbiAgICAgICAgICAgICdodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjM3LzMwMC8yMDAnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMy81MDAwLzMzMzMuanBnP2htYWM9R0RqWjJ1TldFM1Y1OVBrZERhT3pUT3VWM3RQV1d4SlNmNGZOY3h1NFMyZycsXG4gICAgICAgICAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8xLzUwMDAvMzMzMy5qcGc/aG1hYz1Bc3YyRFUzckFfNUQxeFNlMjJ4Wks0N1dFQU4wd2pXZUZPaHpkMTN1alc0JyxcbiAgICAgICAgICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzIvNTAwMC8zMzMzLmpwZz9obWFjPV9LRGtxUVZ0dFh3X25NLVJ5SmZMSW1JYmFmRnJxTHN1R081WXVIcUQtcVEnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMy81MDAwLzMzMzMuanBnP2htYWM9R0RqWjJ1TldFM1Y1OVBrZERhT3pUT3VWM3RQV1d4SlNmNGZOY3h1NFMyZydcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHVybHMubWFwKHVybCA9PiAvLyBkdXlldCBxdWEgVVJMLCB0YW8gcHJvbWlzZVxuICAgICAgICAgICAgdGhpcy5mZXRjaEltYWdlV2l0aFRpbWVvdXQodXJsLCB0aGlzLlRpbWVPdXQpXG4gICAgICAgICAgICAgICAgLnRoZW4oaW1nID0+ICh7IHN0YXR1czogJ2Z1bGZpbGxlZCcsIGltZywgdXJsIH0pKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBzdGF0dXM6ICdyZWplY3RlZCcsIGVycm9yLCB1cmwgfSkpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTsgLy8gZG9pIGFuaCB0YWkgdGhhbmggY29uZyBvciB0aGF0IGJhaVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5UaWxlLnN0cmluZyA9IFwiSW1hZ2UgbG9hZGVkOlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuQm9keS5zdHJpbmcgPSByZXN1bHQudXJsOy8vIGRheSBsYSBhbmggZGMgdGFpIHRoYW5oIGNvbmdcblxuICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xuICAgICAgICAgICAgICAgIHRleHR1cmUuaW5pdFdpdGhFbGVtZW50KHJlc3VsdC5pbWcpO1xuICAgICAgICAgICAgICAgIHRleHR1cmUuaGFuZGxlTG9hZGVkVGV4dHVyZSgpOyAvLyBjYXAgbmhhdCBVSVxuXG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpOy8vIHRhbyBzcHJpdGVmcmFtZVxuXG4gICAgICAgICAgICAgICAgaWYgKGkgPCB0aGlzLnNwcml0ZUFycmF5Lmxlbmd0aCkgeyAvLyBnYW4gYW5oIHZhbyBzcHJpdGUgdHVvbmcgdW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQXJyYXlbaV0uc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIHNwcml0ZSBhdmFpbGFibGUgZm9yIGluZGV4ICR7aX1gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIG5ldSBsb2kgaGllbiB0aGkgbG9pIHRyb25nIFVJICsgbG9nIGxvaX5cbiAgICAgICAgICAgICAgICB0aGlzLlRpbGUuc3RyaW5nID0gXCJFcnJvcjpcIjtcbiAgICAgICAgICAgICAgICB0aGlzLkJvZHkuc3RyaW5nID0gcmVzdWx0LmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgaW1hZ2U6XCIsIHJlc3VsdC51cmwsIHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuY2FsbCgpO1xuICAgIH0sXG59KTtcblxuXG5cbi8vQ8OidSBo4buPaTpcbi8vIGFib3J0LmNvbnRyb2xsZXIgY28geGFpIGRjIGNobyBraGFjLCBWRDogYXhpb3Ncbi8vIGR1b2Mgc3UgZHVuZyBvIGNobyBuYW8sIHBsYXRmb3JtIG5hbyBobyB0cm9cblxuXG4vL1Ry4bqjIGzhu51pXG4vLyBBYm9ydCBjb250cm9sbGVyIGPDsyBkw7luZyDEkcaw4bujYyBuZ2/DoGkgZmV0Y2gga2jDtG5nID9cbi8vIEPDsywgbmjGsG5nIGtow7RuZyDEkcaw4bujYyBz4butIGThu6VuZyB24bubaSBjw6FjIHBoxrDGoW5nIHRo4bupYyBraMOhYyBuaMawIGF4aW9zLCByZXF1ZXN0LCAuLi5cbi8vIFbDrCBBYm9ydENvbnRyb2xsZXIgYuG6o24gY2jhuqV0IGNo4buJIGzDoCBjw7RuZyBj4bulIHBow6F0IHTDrW4gaGnhu4d1IGNhbmNlbCB0aMO0bmcgcXVhIHNpZ25hbCwgY2jhu6kgXG4vLyBraMO0bmcgdOG7sSBodeG7tyDEkcaw4bujY1xuLy8gVsOsIHRo4bq/IEFQSSBuw6BvIMSRxrDhu6NjIHRo4bq/IGvhur8gxJHhu4MgXCJuZ2hlXCIgdMOtbiBoaeG7h3UgbsOgeSBt4bubaSBwaOG6o24gaOG7k2lcblxuLy8gRmV0Y2ggdGjDrCDEkcawxqFuZyBuaGnDqm4gbMOgIHjDoGkgxJHGsOG7o2MgdsOgIGTDuW5nIHBo4buVIGJp4bq/biBuaOG6pXRcbi8vIFJlYWRhYmxlU3RyZWFtLCBXcml0YWJsZVN0cmVhbSB4w6BpIMSRxrDhu6NjIHRyb25nIEFQSSBzdHJlYW1cbi8vIFhNTEh0dHBSZXF1ZXN0IHjDoGkgxJHGsOG7o2Ncbi8vIG5hdmlnYXRvci5zZW5kQmVhY29uKHRyw6xuaCBkdXnhu4d0KToga2jDtG5nIHjDoGkgxJHGsOG7o2Ncbi8vIHNldFRpbWVvdXQsIHNldEludGVydmFsIGtow7RuZyB4w6BpIMSRxrDhu6NjLCB0aGF5IHbDoG8gxJHDsyB0YSBwaOG6o2kgdmnhur90IHdyYXBwZXJcbi8vIEF4aW9zIHRow6wgdHXhu7MgcGhpw6puIGLhuqNuLCBoaeG7h24gdOG6oWkgc+G7rSBk4bulbmcgQ2FuY2VsVG9rZW4g4bufIHYwLjIxIHRy4bufIHh14buRbmdcbi8vIG3hu5l0IHPhu5EgYsOqbiB0aMawIHZp4buHbiB0aOG7qSAzIDogZ290LCBreSwgbm9kZS1mZXRjaCBjw7MgaOG7lyB0cuG7oyByw7UgcsOgbmdcbi8vIFdlYiBBUEkgbmjGsCBBdWRpQ29udGV4dCwgV2ViUlRDLCB0aMOsIGPFqW5nIHR14buzIGRvIGtow7RuZyDEkeG7k25nIG5o4bqldCBicm93c2VyXG5cbi8vIEFib3J0Q29udHJvbGxlciBraMO0bmcgY2jhu4kgZMO5bmcgY2hvIGZldGNoLCBuaMawbmcgcGjhu6UgdGh14buZYyB2w6BvIHZp4buHYyB0aMawIHZp4buHbi9BUEkgY8OzIGjhu5cgdHLhu6Mgc2lnbmFsIGhheSBraMO0bmcuXG5cbi8vIGZldGNoIGzDoCB2w60gZOG7pSDEkWnhu4NuIGjDrG5oIG5o4bqldCB2w6wgbsOzIGjhu5cgdHLhu6MgQWJvcnRTaWduYWwgZ+G7kWMgdOG7qyB0csOsbmggZHV54buHdC5cblxuLy8gTeG7mXQgc+G7kSB0aMawIHZp4buHbiBwaOG7lSBiaeG6v24gKEF4aW9zLCBqUXVlcnkgQWpheC4uLikgcGjhuqNpIGTDuW5nIGPGoSBjaOG6vyByacOqbmcuIl19