---
title: 使用 Svelte 拖放画布形状
sidebar_label: 拖放
hide_table_of_contents: true
slug: Drag_And_Drop.html
---

要为画布上的任何节点启用拖放功能，只需将 `draggable: true` 属性传递到组件的配置属性中。

svelte-konva 会在 `dragend` 时自动保持您的配置与 Konva 节点的同步。有关更多详细信息，请参见 [绑定](/docs/svelte/Bindings.html) 文档页面。

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/drag_and_drop?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>