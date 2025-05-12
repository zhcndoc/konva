---
title: 访问 Konva 节点
sidebar_label: Konva 节点
hide_table_of_contents: true
slug: Konva_Node.html
---

在某些情况下，您可能需要直接访问 svelte-konva 组件的底层 Konva 节点。您可以通过绑定组件的 `handle` 属性或在 Konva 事件的有效载荷中访问它来实现。

**注意：** 节点最初是未定义的，并且在组件挂载后一刻才会变得定义。如果您想在组件挂载后直接访问节点，您需要等待 Svelte 的 `tick()`，然后 `handle` 属性才会被定义。

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/konva_node?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>