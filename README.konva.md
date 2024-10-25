<p align="center">
  <img src="https://konvajs.org/android-chrome-192x192.png" alt="Konva logo" height="180" />
</p>

<h1 align="center">Konva</h1>

[![Financial Contributors on Open Collective](https://opencollective.com/konva/all/badge.svg?label=financial+contributors)](https://opencollective.com/konva)
[![npm version](https://badge.fury.io/js/konva.svg)](http://badge.fury.io/js/konva)
[![Build Status](https://github.com/konvajs/konva/actions/workflows/test-browser.yml/badge.svg)](https://github.com/konvajs/konva/actions/workflows/test-browser.ym)
[![Build Status](https://github.com/konvajs/konva/actions/workflows/test-node.yml/badge.svg)](https://github.com/konvajs/konva/actions/workflows/test-node.ym)[![CDNJS version](https://img.shields.io/cdnjs/v/konva.svg)](https://cdnjs.com/libraries/konva)

Konva 是一个 HTML5 Canvas JavaScript 框架，支持高性能的动画、过渡、节点嵌套、分层、滤镜、缓存、事件处理等功能，适用于桌面和移动应用程序，及更多功能。

你可以在舞台上绘制物体，为它们添加事件监听器，独立于其他形状移动、缩放和旋转它们，以支持高性能的动画，即使你的应用程序使用成千上万个形状。以一种出色的方式提供服务。

本仓库最初是 [ericdrowell/KineticJS](https://github.com/ericdrowell/KineticJS) 的 GitHub 分支。

- **访问:** [主页](http://konvajs.org/) 并在 [Twitter](https://twitter.com/lavrton) 上关注
- **发现:** [教程](http://konvajs.org/docs), [API 文档](http://konvajs.org/api)
- **帮助:** [StackOverflow](http://stackoverflow.com/questions/tagged/konvajs), [Discord 聊天](https://discord.gg/8FqZwVT)

# 快速预览

```html
<script src="https://unpkg.com/konva@9/konva.min.js"></script>
<div id="container"></div>
<script>
  var stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // 添加画布元素
  var layer = new Konva.Layer();
  stage.add(layer);

  // 创建形状
  var box = new Konva.Rect({
    x: 50,
    y: 50,
    width: 100,
    height: 50,
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true,
  });
  layer.add(box);

  // 添加光标样式
  box.on('mouseover', function () {
    document.body.style.cursor = 'pointer';
  });
  box.on('mouseout', function () {
    document.body.style.cursor = 'default';
  });
</script>
```

# 浏览器支持

Konva 在所有现代的移动和桌面浏览器中均可使用。浏览器需要能够运行 ES2015 规范中的 JavaScript 代码。对于较旧的浏览器，你可能需要提供缺失功能的 polyfills。

目前 `Konva` 在 IE11 中无法直接使用。要使其正常工作，你只需要提供一些 polyfills，例如 `Array.prototype.find`、`String.prototype.trimLeft`、`String.prototype.trimRight`、`Array.from`。

# 调试

Chrome 检查器简单地显示画布元素。要查看 Konva 对象及其详细信息，请在 https://github.com/konvajs/konva-devtool 安装 konva-dev 扩展。

# 加载和安装 Konva

Konva 支持 UMD 加载。因此，你可以使用所有可能的方式将该框架加载到你的项目中：

### 通过经典的 `<script>` 标签从 CDN 加载 Konva:

```html
<script src="https://unpkg.com/konva@9/konva.min.js"></script>
```

### 使用 npm 安装:

```bash
npm install konva --save
```

```javascript
// 现代方式（例如，针对 webpack、parcel 的 ES6 风格导入）
import Konva from 'konva';
```

#### Typescript 使用

在你的 `tsconfig.json` 中添加 DOM 定义：

```
{
  "compilerOptions": {
    "lib": [
        "es6",
        "dom"
    ]
  }
}
```

### 3 简约包

```javascript
import Konva from 'konva/lib/Core';
// 现在你有了一个包含 Stage、Layer、FastLayer、Group、Shape 和一些附加工具函数的 Konva 对象。
// 此外，core 当前已经支持拖放和动画功能。
// 但是没有形状（矩形、圆形等），也没有滤镜。

// 但你可以简单地添加任何你需要的东西：
import { Rect } from 'konva/lib/shapes/Rect';
// 导入一个形状将自动将其注入到 Konva 对象中

var rect1 = new Rect();
// 或者：
var shape = new Konva.Rect();

// 对于滤镜，你可以使用这个：
import { Blur } from 'konva/lib/filters/Blur';
```

### 4 NodeJS 环境

为了在 NodeJS 环境下运行 `konva`，你还需要手动安装 `canvas` 包。Konva 将使用它来支持 2D 画布 API。

```bash
npm install konva canvas
```

然后你可以使用相同的 Konva API，所有 Konva 示例代码也将正常运行。你只需在舞台中不需要使用 `container` 属性。

```js
import Konva from 'konva';

const stage = new Konva.Stage({
  width: 500,
  height: 500,
});
// 接下来，所有常规的 Konva 代码将运行
```

# 支持者

![https://simpleshow.com](https://avatars.githubusercontent.com/u/99720652?s=200&v=4 'https://simpleshow.com')
![https://www.notably.ai/](https://avatars.githubusercontent.com/u/80046841?s=200&v=4 'https://www.notably.ai/')

- [myposter GmbH](https://www.myposter.de/)
- [queue.gg](https://queue.gg/)

# 更新日志

请参阅 [CHANGELOG.md](https://github.com/konvajs/konva/blob/master/CHANGELOG.md)。

## 构建 Konva 框架

要进行完整的构建，请运行 `npm run build`。该命令将编译所有 TypeScript 文件，将其合并为一个包并运行压缩工具。

## 测试

Konva 使用 Mocha 进行测试。

- 如果你只需要运行一次测试，请运行 `npm run test`。
- 在开发过程中，使用 `npm start` 很简单。只需运行它并转到 [http://localhost:1234/unit-tests.html](http://localhost:1234/unit-tests.html)。监视器将在任何更改时重建包。

Konva 有数百个测试，且有超过一千个断言。
Konva 使用 TDD（测试驱动开发），这意味着每个新特性或 bug 修复都伴随着至少一个新测试。

## 生成文档

运行 `npx gulp api` 将构建文档文件并将其放置在 `api` 文件夹中。

# 拉取请求

我很乐意审查任何可能改善 Konva 项目的拉取请求，特别是如果你有 bug 修复、增强或新形状（请参见 `src/shapes` 的示例）。在这样做之前，请首先确保所有测试通过（`npm run test`）。

## 贡献者

### 财务贡献者

成为财务贡献者，帮助我们维持社区。 [[贡献](https://opencollective.com/konva/contribute)]

#### 个人

<a href="https://opencollective.com/konva"><img src="https://opencollective.com/konva/individuals.svg?width=890"></a>

#### 组织

通过您的组织支持该项目。你的徽标将显示在这里，并链接到你的网站。 [[贡献](https://opencollective.com/konva/contribute)]

<a href="https://opencollective.com/konva/organization/0/website"><img src="https://opencollective.com/konva/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/konva/organization/1/website"><img src="https://opencollective.com/konva/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/konva/organization/2/website"><img src="https://opencollective.com/konva/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/konva/organization/3/website"><img src="https://opencollective.com/konva/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/konva/organization/4/website"><img src="https://opencollective.com/konva/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/konva/organization/5/website"><img src="https://opencollective.com/konva/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/konva/organization/6/website"><img src="https://opencollective.com/konva/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/konva/organization/7/website"><img src="https://opencollective.com/konva/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/konva/organization/8/website"><img src="https://opencollective.com/konva/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/konva/organization/9/website"><img src="https://opencollective.com/konva/organization/9/avatar.svg"></a>