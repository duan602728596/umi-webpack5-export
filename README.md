# umi-webpack5-export

有些插件和loader引入了webpack的模块（比如monaco-editor-webpack-plugin、worker-loader），   
会有`The 'compilation' argument must be an instance of Compilation`错误。   
这个错误是由存在多个webpack引起的。

这个库导出umi@3.4 webpack5模式下@umijs/deps的webpack模块，来替代原来的webpack。   
用于解决使用webpack插件引起的多个webpack冲突的问题。

## 使用

安装时覆盖webpack。

```json
{
  "devDependencies": {
    "webpack": "npm:@bbkkbkk/umi-webpack5-export"
  }
}
```

或使用`module-alias`

```javascript
import moduleAlias from 'module-alias';

moduleAlias.addAlias('webpack', '@bbkkbkk/umi-webpack5-export');
```

导入webpack。

```javascript
import webpack5, { webpack, isWebpack5, bundle } from 'webpack';
// or
const webpack = require('webpack').default;
```

## 编译

* `npm run build` 编译文件
* `npm run test` 测试
