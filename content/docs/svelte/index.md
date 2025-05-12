---
title: 使用 Svelte 和 Konva 开始使用 Canvas
sidebar_label: 开始使用
hide_table_of_contents: true
slug: index.html
---

## 如何在 Svelte 中使用 Canvas？

`svelte-konva` 是一个用于使用 Svelte 绘制复杂 Canvas 图形的 JavaScript 库。

GitHub: https://github.com/konvajs/svelte-konva

它提供了对 [Konva 框架](https://konvajs.org/) 的声明式和响应式绑定。

所有 `svelte-konva` 组件对应于同名的 `Konva` 组件。所有可用于 `Konva` 对象的参数都可以作为 `config` 属性添加到相应的 `svelte-konva` 组件中。

要获取更多关于 `Konva` 的信息，可以阅读 [Konva 概述](https://konvajs.org/docs/overview.html)。

## 快速开始

### 1 通过 npm 安装

```npm
npm i svelte-konva konva
```

### 2 导入并使用 svelte-konva 组件

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

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/basic_demo?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>