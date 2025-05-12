---
title: 使用 Svelte 绘制画布形状
sidebar_label: 形状
hide_table_of_contents: true
slug: Shapes.html
---

所有的 `svelte-konva` 组件都对应同名的 `Konva` 组件。  
除了特殊说明外，`Konva` 对象的所有参数都是对应的 `svelte-konva` 组件的有效属性（props）。

核心形状包括：矩形（Rect）、圆形（Circle）、椭圆（Ellipse）、线条（Line）、图像（Image）、文本（Text）、文本路径（TextPath）、星形（Star）、标签（Label）、SVG路径（SVG Path）、正多边形（RegularPolygon）。也可以创建自定义形状。

想了解更多关于 Konva 的信息，可以阅读 [Konva 概览](/docs/overview.html)。

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/shapes?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>