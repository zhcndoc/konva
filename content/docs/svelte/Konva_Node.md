---
title: 访问 Konva 节点
sidebar_label: Konva 节点
hide_table_of_contents: true
slug: Konva_Node.html
---

在某些情况下，您可能需要直接访问 svelte-konva 组件的底层 Konva 节点。您可以通过访问相应组件实例的 `node` 属性，或在 Konva 事件的有效载荷中访问它来实现。

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/new/svelte-demos/konva_node?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>