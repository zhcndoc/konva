---
title: 通过 Konva 开始使用 Svelte 和 canvas
sidebar_label: 入门指南
hide_table_of_contents: true
slug: index.html
description: "开始使用 svelte-konva，Konva.js 的官方 Svelte 绑定。使用 Svelte 组件绘制形状、处理事件并构建交互式 canvas 应用程序。"
---

## 如何在 Svelte 中使用 canvas？

[svelte-konva](https://github.com/konvajs/svelte-konva) 是一个 JavaScript 库，用于使用 Svelte 绘制复杂的 canvas 图形。它提供了到 [Konva Framework](https://konvajs.org/) 的声明式和响应式绑定。所有 `svelte-konva` 组件都对应同名的 `Konva` 组件。所有可用于 `Konva` 对象的参数都可以作为单独的属性添加到相应的 `svelte-konva` 组件中。

为了使用 svelte-konva，需要对 `Konva` 有基本的了解。您可以查阅 [Konva 概述](https://konvajs.org/docs/overview.html) 以获取相关信息。

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

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/new/svelte-demos/basic_demo?file=/src/App.svelte" style={{width: '100%', height:'800px', border: '0px', borderRadius: '4px', overflow: 'hidden'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
