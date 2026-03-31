---
title: 为什么选择 Konva？何时在项目中中使用 Konva.js
sidebar_label: 为什么选择 Konva
sidebar_position: 5
slug: why-konva.html
description: "何时应该使用 Konva.js？了解 Konva 解决了什么问题，它并非设计用于哪些场景，带有真实示例的理想用例，以及何时选择其他库。"
---

## 为什么选择 Konva？

Konva.js 解决了一个特定问题：**在 HTML5 Canvas 上构建交互式 2D 图形**。如果用户需要点击、拖拽、调整大小或操作 canvas 上的形状，Konva 开箱即用提供所有这些功能。

## Konva 解决的问题

HTML5 Canvas API 是底层的。它只给你一个绘图表面，别无其他——没有对象，没有形状上的事件，没有拖放。你绘制像素，canvas 随即忘记你绘制了什么。

Konva 添加了缺失的内容：

- **对象模型** — 每个形状都是一个 JavaScript 对象。你可以独立地移动、隐藏、动画化和销毁形状。
- **事件系统** — 点击矩形，悬停在圆形上，拖拽组。事件像 DOM 一样从形状冒泡经过组和层。
- **拖放** — 在任何形状上设置 `draggable: true`。完成。按需添加边界、吸附和放置区域。
- **选择和变换** — 内置的 `Transformer` 为任何形状添加调整大小和旋转手柄。
- **序列化** — 将整个 canvas 状态保存为 JSON。稍后恢复。无需自定义序列化代码。
- **多层架构** — 每个 Layer 是一个单独的 `<canvas>` 元素。当交互式形状改变时，静态背景不会重新渲染。
- **框架集成** — 官方绑定支持 React (`react-konva`)、Vue (`vue-konva`)、Svelte (`svelte-konva`) 和 Angular (`ng2-konva`)。

## 理想用例

Konva 是正确的选择，当你的应用程序需要**带有用户操作的交互式 canvas 图形**时：

- **设计编辑器** — Canva 风格的工具，用户可以在其中放置、移动、调整大小和样式化对象 ([演示](/docs/sandbox/Canvas_Editor.html))
- **注释/标注工具** — 在图像上绘制边界框、多边形或标记，用于机器学习训练或审查 ([演示](/docs/sandbox/Image_Labeling.html))
- **绘图/白板应用** — 手绘、形状和协作画布 ([演示](/docs/sandbox/Free_Drawing.html))
- **交互式图表** — 流程图、组织结构图、带有可拖拽连接节点的网络图 ([演示](/docs/sandbox/Connected_Objects.html))
- **座位图和平面图** — 交互式地图，用户点击区域进行选择或预订 ([演示](/docs/sandbox/Seats_Reservation.html))
- **数据可视化仪表板** — 超越图表库提供的自定义可视化，带有交互式工具提示和点击穿透
- **表单构建器和配置器** — 拖放布局编辑器、产品配置器 ([演示](/docs/sandbox/Window_Frame_Designer.html))

## Konva 不是什么

Konva 是一个专注的工具。它不试图做所有事情：

- **不是游戏引擎** — Konva 使用 Canvas 2D，而非 WebGL。对于每秒 60 帧数千个动画精灵的 2D 游戏，请使用 [PixiJS](https://pixijs.com/)。Konva 可以处理简单的游戏，但它针对交互式应用程序进行了优化，而非游戏循环。
- **不是 3D 库** — 对于 3D 图形，请使用 Three.js 或 Babylon.js。
- **不是图表库** — 对于标准图表（柱状图、折线图、饼图），请使用 Chart.js、D3 或 Recharts。当你需要**超越图表库提供的自定义交互式可视化**时使用 Konva。
- **不是 SVG 库** — Konva 渲染到 Canvas，而非 SVG。如果你需要 SVG 输出，请考虑 Fabric.js 或 Paper.js。
- **不是 CSS 替代品** — 如果你的 UI 可以用 HTML/CSS 构建，不要使用 Canvas。Canvas 用于 HTML 无法处理的图形——自由形状、像素级操作、复杂分层视觉效果。

## 何时使用其他工具

我们坚信推荐正确的工具：

| 如果你需要... | 改用 |
|---|---|
| 具有 WebGL 性能的 2D 游戏 | [PixiJS](https://pixijs.com/) |
| SVG 导入/导出 | [Fabric.js](http://fabricjs.com/) |
| 矢量图形 / 贝塞尔数学 | [Paper.js](http://paperjs.org/) |
| 创意编码 / 生成艺术 | [p5.js](https://p5js.org/) |
| 3D 图形 | [Three.js](https://threejs.org/) |
| 标准图表 | [Chart.js](https://www.chartjs.org/) 或 [D3](https://d3js.org/) |

如需完整比较，请参阅 [最佳 JavaScript Canvas 库](/docs/guides/best-canvas-library.html)。

## 为什么开发者选择 Konva 而非替代品

与其他 Canvas 2D 框架相比：

1. **下载量最高** — npm 上下载量最高的 Canvas 2D 框架。
2. **最佳框架支持** — 唯一拥有官方 React、Vue、Svelte 和 Angular 绑定的 canvas 库。`react-konva` 是下载量最高的 React canvas 库。
3. **多层渲染** — 其他框架使用单个 canvas。Konva 的多层方法意味着复杂应用具有更好的性能。
4. **完整的交互系统** — 拖放、Transformer（调整大小/旋转手柄）、事件冒泡、命中检测——全部内置。使用替代品，你需要从头构建这些。
5. **MIT 许可** — 商业使用免费，无限制。
6. **积极维护** — 定期发布，响应迅速的问题跟踪器。请参阅 [更新日志](https://github.com/konvajs/konva/blob/master/CHANGELOG.md)。

## 开始使用

- [安装和快速示例](/docs/index.html)
- [框架概述](/docs/overview.html)
- [React 教程](/docs/react/index.html)
- [60+ 交互式演示](/docs/sandbox.html)
