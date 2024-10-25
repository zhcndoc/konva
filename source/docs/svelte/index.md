title: 使用 Svelte 和 Konva 开始使用 canvas
layout: svelte_page

---

## 如何在 Svelte 中使用 canvas？

`svelte-konva` 是一个用于使用 Svelte 绘制复杂 canvas 图形的 JavaScript 库。

GitHub: https://github.com/konvajs/svelte-konva

它提供了对 [Konva 框架](https://konvajs.org/) 的声明式和响应式绑定。

所有 `svelte-konva` 组件对应于同名的 `Konva` 组件。所有可用于 `Konva` 对象的参数都可以作为 `config` 属性添加到对应的 `svelte-konva` 组件中。

要获取有关 `Konva` 的更多信息，您可以阅读 [Konva 概述](https://konvajs.org/docs/overview.html)。

## 快速开始

### 1 通过 npm 安装

```npm
npm i svelte-konva konva
```

### 2 导入并使用 svelte konva 组件

```js
<script>
  import { Stage, Layer, Rect } from 'svelte-konva';
</script>

<Stage config={{ width: window.innerWidth, height: window.innerHeight }}>
  <Layer>
    <Rect config={{ x: 100, y: 100, width: 400, height: 200, fill: 'blue' }} />
  </Layer>
</Stage>
```

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/basic_demo?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>