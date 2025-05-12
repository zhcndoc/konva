---
title: 如何改变 svelte-konva 中节点的 zIndex?
sidebar_label: zIndex
hide_table_of_contents: true
slug: zIndex.html
---

在使用其他 Konva 包装器如 `vue-konva` 或 `react-konva` 时，你可能习惯了数据顺序代表画布上组件的绘制顺序。在 svelte-konva 中，目前并没有实现这样的功能，因为在 Svelte 3 中无法实现。

相反，你应该使用 Konva 的原生函数来动态重新排序画布上的组件，比如 `node.zIndex(5)`、`node.moveToTop()` 等等。[教程](/docs/groups_and_layers/Layering.html)。

### 使用 if-blocks

svelte-konva 会遵循组件的初始顺序来绘制形状在画布上。这在你不需要在运行时动态改变顺序的情况下工作良好。当使用 Svelte 的 if-blocks 来显示/隐藏某些组件时，你应该了解以下警告。考虑以下示例：

```js
<Stage bind:config={stageConfig}>
    <Layer>
        <Rect bind:config={rectConfig} />
        {#if showRing}
            <Ring bind:config={ringConfig}/>
        {/if}
        <Circle bind:config={circleConfig} />
    </Layer>
</Stage>
```

根据顺序，人们会期望圆形绘制在画布的顶部，其次是环形，然后是矩形。然而，由于 if-block 的存在，环形可能根据 `showRing` 的初始值和变化最终位于画布的顶部。这是由于 Svelte 在 if-block 内部挂载/卸载组件，并且 svelte-konva 在挂载时按照顺序绘制形状于画布的顶部。如果你想避免这种行为，应该避免使用 Svelte 的 if-blocks，而是使用 `visible` 配置属性来控制形状是否可见。这样组件不会被挂载/卸载，并保持其在画布上的初始绘制顺序。

**说明：** 尝试拖动一个圆形。看看它是如何上移到顶部的。这是通过在拖动形状的句柄上调用 `moveToTop()` 实现的。

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/zIndex?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>