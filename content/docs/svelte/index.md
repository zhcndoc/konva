---
title: 使用 Konva 开始 Svelte 和 canvas
sidebar_label: 开始使用
hide_table_of_contents: true
slug: index.html
description: "开始使用 svelte-konva，这是 Konva.js 的官方 Svelte 绑定。使用 Svelte 组件绘制形状、处理事件并构建交互式 canvas 应用"
---

## 如何在 Svelte 中使用 canvas？

[svelte-konva](https://github.com/konvajs/svelte-konva) 是一个使用 Svelte 绘制复杂 canvas 图形的 JavaScript 库。它为 [Konva Framework](https://konvajs.org/) 提供声明式和响应式绑定。所有 `svelte-konva` 组件都对应于同名的 `Konva` 组件。`Konva` 对象可用的所有参数，都可以作为对应 `svalte-konva` 组件的独立 props 添加。

为了使用 svelte-konva，需要对 `Konva` 有基本了解。你可以参考 [Konva 概览](https://konvajs.org/docs/overview.html)。

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

<Stage width={window.innerWidth} height={window.innerHeight}>
  <Layer>
    <Rect x={100} y={100} width={400} height={200} fill="blue" />
  </Layer>
</Stage>
```

<iframe loading="lazy" src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/basic_demo?file=/src/App.svelte" style={{width: '100%', height:'800px', border: '0px', borderRadius: '4px', overflow: 'hidden'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
