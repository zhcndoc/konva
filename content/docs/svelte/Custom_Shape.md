---
title: 如何使用 Svelte 绘制自定义画布形状？
sidebar_label: 自定义形状
hide_table_of_contents: true
slug: Custom_Shape.html
---

要用 `svelte-konva` 创建自定义形状，应该使用 `Shape` 组件。

在创建自定义形状时，我们需要定义一个绘制函数，该函数会接收一个 Konva.Canvas 渲染器。

我们可以使用渲染器访问 HTML5 Canvas 的上下文，以及调用诸如 `context.fillStrokeShape(shape)` 之类的特殊方法，这些方法可以自动处理填充、描边和阴影效果。

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/new/svelte-demos/custom_shape?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>