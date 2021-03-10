# umi-webpack5-export

umi@3.4 webpack5模式下导出的webpack模块。用于解决使用webpack插件引起的多个webpack冲突的问题。

## 使用

安装时覆盖webpack。

```json
{
  "devDependencies": {
    "webpack": "npm:@bbkkbkk/umi-webpack5-export"
  }
}
```

导入webpack。

```javascript
import { __WEBPACK__ as webpack } from 'webpack';
```

## 编译

* `npm run build` 编译文件
* `npm run test` 测试
