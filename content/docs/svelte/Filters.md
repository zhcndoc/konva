---
title: 如何使用 Svelte 和 Konva 应用画布滤镜？
sidebar_label: 滤镜
hide_table_of_contents: true
slug: Filters.html
---

要应用滤镜，你需要手动缓存 `Konva.Node`。你可以在 `onMount()` 方法中首次完成此操作。

如果你动态更改节点的样式，则需要手动重新缓存它们，以使更改在画布上生效。这可以通过在更改后直接调用受影响节点的 `cache()` 方法（如在演示中所示）或在 `afterUpdate()` 方法中完成，以便在组件的每个状态更改中自动重新缓存节点。

**说明：** 将鼠标悬停在矩形上以查看更改

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/filters?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>