
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
require('./assets/Day6/Bai10_D6');
require('./assets/Day6/Bai11_D6');
require('./assets/Day6/Bai12_D6');
require('./assets/Day6/Bai13_D6');
require('./assets/Day6/Bai14_D6');
require('./assets/Day6/Bai15_D6');
require('./assets/Day6/Bai1_D6');
require('./assets/Day6/Bai2_D6');
require('./assets/Day6/Bai3_D6');
require('./assets/Day6/Bai4_D6');
require('./assets/Day6/Bai5_D6');
require('./assets/Day6/Bai6_D6');
require('./assets/Day6/Bai7_D6');
require('./assets/Day6/Bai8_D6');
require('./assets/Day6/Bai9_D6');
require('./assets/Day7/Script/Bai1');
require('./assets/Day7/Script/Bai2');
require('./assets/Day7/Script/Bai3');
require('./assets/Day7/Script/Bai4');
require('./assets/Day7/Script/Bai5');
require('./assets/Day7/Script/Bai6');
require('./assets/Day7/Script/Bai7');
require('./assets/Day7/Script/Bai8');
require('./assets/Day7/Script/Bai9');

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