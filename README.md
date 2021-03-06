# MyElement

## 待办

- [ ] 页面样式优化
  - [ ] vuepress 首页优化
- [ ] 架构优化
  - [ ] 公共资源引用
  - [ ] SvgIcon优化 不再使用组件的方式引用SVG
  - [ ] 组件主题风格切换方式
  - [ ] 单文件引入、导出
  - [ ] MyComponent rollup 组件打包优化
  - [ ] css 样式组件提取
  - [ ] 天机scss变量文件移植
  - [ ] 添加组件测试功能
- [ ] 目录结构优化：
  - [ ] 各`package` 的`README.md`文件处于自己的包内而不是集合写在vuepress下 
  - [ ] vuepress识别makrdown的插件开发 PS：参考Element3/lerna官网的包管理方式
- [ ] 文档
  - [x] 添加新组件流程指导文件
  - [ ] lerna 常用命令使用文档
  - [x] lerna changelog 生成方式
  - [ ] (**bug**) convention-changelog 生成的文档没有日期，并且没有按照时间先后排列
  - [ ] lerna 基础使用
  - [ ] 组件库结构分析
  - [ ] `package.json` 各字段作用
  - [ ] vue常见测试文件书写方法

## 环境准备

lerna 全局安装： `yarn add -g lerna`

lerna 命令查询: `lerna help | lerna add help`

[lerna官网命令查询](https://github.com/lerna/lerna)

安装相关依赖：直接执行`yarn`

## 注意

开发的组件进行本地测试的时候，可以在 vuepress 中引入并进行测试。
vuepress 目前安装了 scss ts 相关依赖，如果组件中使用了其他第三方依赖，除了在组件包中进行引入，还需要在vuepress中引入（生产环境下引用的是打包之后的文件，无需如此）

## 组件开发

### 创建组件：`lerna create`

```shell
Positionals:
  name  The package name (including scope), which must be locally unique _and_
        publicly available                                   [string] [required]
  loc   A custom package location, defaulting to the first configured package
        location   
```

`lerna <包名>  <目标目录>`

将会在目标目录下创建一个包

**注意：注意对`package.json`中入口文件的管理**

### 添加依赖：`lerna add`
```shell
$ lerna add <package>[@version] [--dev] [--exact] [--peer]
```

`lerna add help` 说明底部有Examples

`lerna add element-ui --scope=@sdfz/baseselectmulti`

`scope` 会指定要添加依赖的包名

不指定依赖范围，会给所有包添加依赖

### 导出组件

需要在 `packages/index.js` 中将新增的组件导出

```javascript
import BaseseSelectMulti from "./src/index.vue";
import ElementUI from "element-ui";

const components = {
  BaseseSelectMulti,
};
```

引入组件，并将组件添加到`components`中即可。


### 组件调试

`lerna add` 添加的依赖是一个软连接，可以在 `node_module` 目录下看到指定的依赖有一个小箭头

如果需要引入其他地方（本地其他目录下）的依赖，可以在 `package.json` 中使用如下代码
```json
{
  "html2pdf": "file:../../../code/utils/html2pdf.js"
}
```

组件的本地调试与文档的书写合并

### 文档书写 

在 `websitevuepress/docs/comps` 下创建以组件名命名的markdown文件，就可以书写对应文档了

需要注意的是，在 md 中使用组件的方式。
```javascript
:::demo
<BaseSelectMulti> </BaseSelectMulti>
:::

```
在 `:::demo` 与 `:::` 之间使用组件，这部分内容会被 `vuepress-plugin-demo-container` 插件处理 vue 组件就会被渲染成html元素

在文档中正确引入组件之后就可以进行本地的测试了



### 清除 node_modules

`lerna clean` 会删除指定包中的所有 `node_module` 目录，


### 组件打包

使用的是 `rollup` 进行的打包，在`packages`目录下执行 `yarn build` 命令即可


# 问题：如何创建 _variables.scss 并被所有组件引用

这个文件存放的是样式的变量文件
- 能够被全局引用
- 在单个组件被引用的时候，同样有效。

先只考虑全局引用，即使是 `element` ，单组件引用的时候好像也很麻烦
## 全局组件引用
将样式提取出来，每个组件的样式单独写成一个 scss 文件。
打包的时候将所有的 scss 文件合并成一个。

1. `8d14554 test(独立scss)`: 单组件中scss样式
独立存在，组件中通过. @import 引入 scss
2. `d3192d0 test(独立scss)`: 上次是scss引入方式错误，@import "./style.scss"
3. 建立全局引用的样式包，成功
   1. **问题：**`lerna add` 向 baseselect中添加包的时候，没有在根 `node_modules` 下生成软连接。需要删除 `node_modules` 目录，然后重新安装依赖的时候，才会建立软连接。