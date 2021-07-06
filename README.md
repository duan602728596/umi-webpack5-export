# umi-webpack5-export

有些插件和loader引入了webpack的模块（比如monaco-editor-webpack-plugin、worker-loader），   
会有`The 'compilation' argument must be an instance of Compilation`错误。   
这个错误是由存在多个webpack引起的。

这个库导出umi@3.4 webpack5模式下@umijs/deps的webpack模块，重定向到`webpack`模块。  
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

或者使用`module-alias`，在config.js文件头部加载如下`alias.js`文件。

```javascript
// alias.js
import moduleAlias from 'module-alias';

moduleAlias.addAlias('webpack', function(fromPath, request, alias) {
  if (/@umijs[\\/]/.test(fromPath)) {
    return 'webpack';
  }

  return '@bbkkbkk/umi-webpack5-export';
});
```

导入webpack。

```javascript
import webpack from 'webpack';
// or
const webpack = require('webpack');
```

导入@umi/deps的bundle。

```javascript
import { bundle } from '@bbkkbkk/umi-webpack5-export/bundle';
```

## 编译

* `npm run build` 编译文件
* `npm run test` 测试
