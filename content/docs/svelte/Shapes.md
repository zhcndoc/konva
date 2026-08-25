---
title: 使用 Svelte 绘制画布图形
sidebar_label: 图形
hide_table_of_contents: true
slug: Shapes.html
description: "了解如何在 Svelte 中使用 svelte-konva 组件绘制 Rect、Circle、Line、Star 等画布图形。"
---

所有 `svelte-konva` 组件都对应于同名的 `Konva` 组件。`Konva` 对象可用的所有参数都是相应 `svelte-konva` 组件的有效 props，除非另有说明。

核心图形包括：Rect、Circle、Ellipse、Line、Image、Text、TextPath、Star、Label、SVG Path、RegularPolygon。你还可以创建自定义图形。

如需了解更多关于 Konva 的信息，可以阅读 [Konva 概览](/docs/overview.html)。

<iframe loading="lazy" src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/shapes?file=/src/App.svelte" style={{width: '100%', height:'800px', border: '0px', borderRadius: '4px', overflow: 'hidden'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
