---
sidebar_position: 1
title: 开始使用 Konva — HTML5 Canvas 2D 框架
sidebar_label: 简介
hide_table_of_contents: true
slug: index.html
description: "开始使用 Konva.js，最流行的 2D HTML5 Canvas JavaScript 框架。学习绘制形状、处理事件、拖放和动画 — 支持 React、Vue、Svelte 和 Angular。"
---

## 什么是 Konva？

Konva 是一个用于构建交互式 2D 图形的 HTML5 Canvas JavaScript 框架。它在 canvas 之上提供了对象模型 — 你创建形状、分组、添加事件监听器、拖动它们、动画化它们，框架负责渲染、命中检测和状态管理。

Konva 适用于桌面和移动端，支持数千个形状的高性能渲染，并且拥有 **React**、**Vue**、**Svelte** 和 **Angular** 的官方集成。

## 快速示例

```javascript
// 创建一个舞台（所有层的容器）
const stage = new Konva.Stage({
  container: 'container',
  width: 500,
  height: 400,
});

// 创建一个层
const layer = new Konva.Layer();
stage.add(layer);

// 创建一个可拖动的矩形
const rect = new Konva.Rect({
  x: 50,
  y: 50,
  width: 100,
  height: 80,
  fill: 'cornflowerblue',
  shadowBlur: 5,
  cornerRadius: 4,
  draggable: true,
});
layer.add(rect);

// 添加事件监听器
rect.on('click tap', () => {
  rect.fill(Konva.Util.getRandomColor());
});
```

就是这样 — 一个点击后改变颜色的可拖动矩形。没有样板代码，没有渲染循环。

## 安装 Konva

如果您使用的是包管理器：

```bash
npm install konva
```

或者直接使用脚本标签：

```html
<script src="https://unpkg.com/konva@10/konva.min.js"></script>
```

或者从 CDN 下载：

- [完整版 konva.js](https://unpkg.com/konva@10/konva.js)
- [最小化版 konva.min.js](https://unpkg.com/konva@10/konva.min.js)

## 在你的框架中使用 Konva

Konva 拥有所有主流框架的官方绑定：

| 框架 | 包 | 安装 |
|-----------|---------|---------|
| **React** | [`react-konva`](https://github.com/konvajs/react-konva) | `npm install react-konva konva` |
| **Vue** | [`vue-konva`](https://github.com/konvajs/vue-konva) | `npm install vue-konva konva` |
| **Svelte** | [`svelte-konva`](https://github.com/konvajs/svelte-konva) | `npm install svelte-konva konva` |
| **Angular** | [`ng2-konva`](https://github.com/nicholasgillespie/ng2-konva) | `npm install ng2-konva konva` |

开始使用你的框架：[React](/docs/react/index.html) · [Vue](/docs/vue/index.html) · [Svelte](/docs/svelte/index.html) · [Angular](/docs/angular/index.html)

## 为什么选择 Konva？

- **形状即对象** — 创建矩形、圆形、线条、文本、图像、路径等。每个形状都是一个你可以独立操作的 JavaScript 对象。
- **完整的事件系统** — `click`、`dblclick`、`mouseover`、`mouseout`、`touchstart`、`dragstart`、`dragend` 等。事件像 DOM 一样从形状冒泡到组和层。
- **拖放** — 在任何形状上设置 `draggable: true`。添加拖动边界、吸附和掉落事件。
- **调整大小和旋转** — 内置的 [`Transformer`](/docs/select_and_transform/Basic_demo.html) 组件为任何形状添加调整大小和旋转的控制柄。
- **多层渲染** — 每个层是一个独立的 `<canvas>` 元素。当交互式形状改变时，静态背景不会重新渲染。
- **序列化** — 使用 `stage.toJSON()` 保存整个 canvas 状态。使用 `Konva.Node.create(json)` 恢复它。
- **滤镜和效果** — 模糊、增亮、对比度、灰度、像素化等 — 按形状应用。
- **高性能** — 处理数千个形状。查看 [性能提示](/docs/performance/All_Performance_Tips.html) 和 [压力测试演示](/docs/sandbox/10000_Shapes_with_Tooltip.html)。

## 你可以构建什么？

开发者使用 Konva 构建设计编辑器、绘图应用、注释工具、交互式地图、数据可视化等。以下是一些示例：

- [Canvas 设计编辑器](/docs/sandbox/Canvas_Editor.html) — Canva 风格的设计工具
- [自由绘图应用](/docs/sandbox/Free_Drawing.html) — 白板 / 手绘绘图
- [图像注释](/docs/sandbox/Image_Labeling.html) — 机器学习标注工具
- [座位预订地图](/docs/sandbox/Seats_Reservation.html) — 交互式座位预订
- [交互式建筑地图](/docs/sandbox/Interactive_Building_Map.html) — 平面图可视化
- [连接对象](/docs/sandbox/Connected_Objects.html) — 图表 / 流程图构建器

[查看所有 60+ 演示 →](/docs/sandbox.html)

## 下一步

- [Konva 概述](/docs/overview.html) — 理解架构（Stage → Layer → Shape）
- [形状](/docs/shapes/Rect.html) — 了解所有可用的形状
- [事件](/docs/events/Binding_Events.html) — 处理点击、悬停、触摸等
- [拖放](/docs/drag_and_drop/Drag_and_Drop.html) — 使形状可拖动
- [动画](/docs/animations/Create_an_Animation.html) — 动画化形状属性
- [关于 Konva](/docs/about.html) — 谁在使用 Konva，关键事实和链接
