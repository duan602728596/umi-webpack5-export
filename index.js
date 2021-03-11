const bundle5 = require('@umijs/deps/compiled/webpack/5/bundle5');

// 根据webpack5的出口导出webpack
Object.defineProperty(exports, '__esModule', { value: true });

exports.isWebpack5 = true;
exports.bundle = bundle5;
exports.default = exports.webpack = exports.__WEBPACK__ = bundle5().webpack;
