
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