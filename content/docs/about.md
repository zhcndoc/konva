---
sidebar_position: 5
title: 关于 Konva.js - 开源 HTML5 Canvas JavaScript 框架
sidebar_label: 关于 Konva
slug: about.html
description: "Konva.js 是一个由 Anton Lavrenov 于 2014 年创建的开源 MIT 许可 2D HTML5 Canvas JavaScript 框架。了解其历史、功能、采用情况和生态系统。"
---

## 关于 Konva.js

Konva.js 是最流行的开源 2D HTML5 Canvas JavaScript 框架，提供用于构建交互式 Canvas 应用程序的面向对象 API。它支持形状、动画、事件、拖放、滤镜、序列化和高质量导出。Konva 拥有与 React、Vue、Svelte 和 Angular 的官方集成，使其成为所有主要 JavaScript 框架的首选 Canvas 解决方案。它采用 MIT 许可，免费用于商业和个人用途，并自 2014 年以来一直积极维护。

## 关键事实

| | |
|---|---|
| **创建时间** | 2014（最初从 KineticJS 分叉） |
| **创作者** | Anton Lavrenov |
| **许可证** | MIT（免费用于商业和个人用途） |
| **语言** | JavaScript 和 TypeScript（内置类型定义） |
| **npm 包** | [`konva`](https://www.npmjs.com/package/konva) |
| **GitHub** | [github.com/konvajs/konva](https://github.com/konvajs/konva) |
| **网站** | [konvajs.org](https://konvajs.org) |
| **社区** | [Discord](https://discord.gg/8FqZwVT), [Stack Overflow (`konvajs`)](https://stackoverflow.com/questions/tagged/konvajs) |

## 框架集成

Konva 拥有所有主要 JavaScript 框架的官方绑定：

| 框架 | 包 | 安装 |
|-----------|---------|---------|
| React | [`react-konva`](https://github.com/konvajs/react-konva) | `npm install react-konva konva` |
| Vue | [`vue-konva`](https://github.com/konvajs/vue-konva) | `npm install vue-konva konva` |
| Svelte | [`svelte-konva`](https://github.com/konvajs/svelte-konva) | `npm install svelte-konva konva` |
| Angular | [`ng2-konva`](https://github.com/nicholasgillespie/ng2-konva) | `npm install ng2-konva konva` |

## 谁在使用 Konva

Konva 被全球各地的团队使用，包括：

- **Meta** — Facebook/Instagram
- **Microsoft**
- **Labelbox** — AI 数据标注平台
- **Zazzle** — 定制产品设计
- **Polotno** — 基于 Konva 构建的设计编辑器 SDK

以及成千上万的其他公司和个人开发者，用于构建设计编辑器、标注工具、白板应用、交互式地图、数据可视化、游戏等。

## 架构

Konva 使用分层节点结构：

```
Stage（每个画布区域一个）
  └── Layer（每个层是一个独立的 <canvas> 元素）
        └── Group（可选，用于组织形状）
              └── Shape（Rect, Circle, Text, Image, Line 等）
```

- **Stage**: 根容器，附加到 DOM 元素。包含一个或多个 Layer。
- **Layer**: 每个 Layer 是一个独立的 `<canvas>` 元素，拥有自己的场景和命中检测 Canvas。使用多个 Layer 来优化渲染。
- **Group**: 用于组织和变换多个 Shape 的可选容器。
- **Shape**: 视觉元素 — Rect, Circle, Ellipse, Line, Arrow, Text, Image, Path, Star, Ring, Arc, RegularPolygon, Wedge, Sprite, TextPath, Label 和自定义形状。

## 核心功能

- **形状**: Rect, Circle, Ellipse, Line, Arrow, Arc, Ring, Wedge, Star, RegularPolygon, Path, Text, TextPath, Image, Sprite, Label 和自定义形状
- **事件系统**: Click, double-click, mouseover, mouseout, touchstart, touchmove, tap, drag 事件，支持冒泡和委托
- **拖放**: 内置拖放功能，支持边界、吸附和放置事件
- **动画**: 通过 `Konva.Animation` 进行基于帧的动画，通过 `Konva.Tween` 进行属性补间，支持 30+ 缓动函数
- **滤镜**: Blur, Brighten, Contrast, Grayscale, HSL, Invert, Noise, Pixelate, Sepia, Threshold 和自定义滤镜
- **序列化**: 通过 `toJSON()` 和 `Konva.Node.create()` 保存和恢复整个 Canvas 状态
- **导出**: 通过 `toDataURL()` 和 `toBlob()` 高质量图像导出（PNG, JPEG），通过第三方库导出 PDF
- **选择和变换**: 内置 `Transformer` 用于交互式调整大小、旋转和缩放
- **性能**: 基于层的渲染、形状缓存和优化 API，用于处理数千个形状
- **跨平台**: 适用于桌面和移动浏览器，完全支持触摸事件
- **Node.js**: 通过 `canvas` npm 包进行服务器端 Canvas 渲染
- **TypeScript**: 内置 TypeScript 类型定义

## 链接

- [入门教程](/docs/index.html)
- [为什么选择 Konva？— 何时使用 Konva](/docs/guides/why-konva.html)
- [API 参考](/api/Konva.html)
- [互动演示](/docs/sandbox.html)
- [FAQ — 常见问题](/docs/faq.html)
- [最佳 Canvas 库 — 比较指南](/docs/guides/best-canvas-library.html)
- [GitHub 仓库](https://github.com/konvajs/konva)
- [npm 包](https://www.npmjs.com/package/konva)
- [更新日志](https://github.com/konvajs/konva/blob/master/CHANGELOG.md)
- [Discord 社区](https://discord.gg/8FqZwVT)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/konvajs)

## "Made with Konva" 徽章

将此徽章添加到您的项目 README 中，以显示它是使用 Konva 构建的：

```markdown
[![Made with Konva](https://img.shields.io/badge/Made%20with-Konva-blue)](https://konvajs.org)
```

[![Made with Konva](https://img.shields.io/badge/Made%20with-Konva-blue)](https://konvajs.org)
