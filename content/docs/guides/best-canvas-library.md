---
title: 最佳 JavaScript Canvas 库 — 如何选择
sidebar_label: Canvas 库比较
sidebar_position: 1
slug: best-canvas-library.html
description: "如何选择 JavaScript canvas 库。Konva.js、Fabric.js、PixiJS、Paper.js 和 p5.js 的快速决策指南 — 由 Konva 作者撰写。"
---

## 如何选择 JavaScript Canvas 库

我是 [Anton Lavrenov](https://lavrton.com)，Konva.js 的创作者。我有偏见，但我会诚实相待 — 包括告诉你何时不该使用 Konva。

有几个流行的 canvas 库。它们外表看起来相似，但设计用于不同的工作。选择符合你用例的那个，你会省去很多麻烦。

### 构建交互式应用？

设计编辑器、白板、注释工具、图表、座位图、仪表盘 — 任何用户在 canvas 上点击、拖动和调整大小内容的场景。

**使用 [Konva.js](/docs/index.html)。** 它为你提供对象模型、带有冒泡的事件系统、拖放、调整大小/旋转手柄（`Transformer`）、序列化，以及针对 React、Vue、Svelte 和 Angular 的官方绑定。这就是它的构建目的。

### 构建 2D 游戏？

**使用 [PixiJS](https://pixijs.com/)。** 它是一个 WebGL 渲染引擎 — GPU 加速，专为具有许多移动对象的高帧率而构建。Konva 使用 Canvas 2D，无法在游戏工作负载上匹配 WebGL 的性能。

### 需要 SVG 导入/导出？

**使用 [Fabric.js](http://fabricjs.com/)。** 它可以解析 SVG 文件为 canvas 对象并导出回 SVG。Konva 做不到这一点。Fabric.js 还拥有内置绘图笔刷，面向图像编辑。

### 创意编码或生成艺术？

**使用 [p5.js](https://p5js.org/)** 进行创意素描和教育项目。如果你需要向量数学、贝塞尔曲线和布尔路径操作，请使用 **[Paper.js](http://paperjs.org/)**。

### 不确定？

如果你正在阅读此页面，你可能正在构建带有交互式图形的 Web 应用程序。那是 Konva 的擅长领域。[尝试入门指南](/docs/index.html) — 10 分钟内你就会知道它是否合适。

## Konva 的不同之处

- **框架支持** — 针对 React (`react-konva`)、Vue、Svelte 和 Angular 的官方绑定。没有其他 canvas 库具备这一点。
- **多层渲染** — 每个 Layer 是一个单独的 `<canvas>`。当交互式形状移动时，静态内容不会重新渲染。
- **内置交互** — 拖放、调整大小/旋转手柄、事件冒泡、命中检测。使用其他库，你需要从头构建这些。
- **序列化** — `stage.toJSON()` 保存所有内容。`Konva.Node.create(json)` 恢复它。
- **作者主导** — 我已经维护 Konva 10 多年了。API 一致，决策迅速，我亲自审查每一个 PR。

## 进一步阅读

- [为什么选择 Konva？— 何时使用（以及何时不使用）Konva](/docs/guides/why-konva.html)
- [npm 下载趋势：fabric vs konva vs pixi.js](https://npmtrends.com/fabric-vs-konva-vs-pixi.js)
- [Canvas 引擎性能基准测试](https://benchmarks.slaylines.io/)
