title: 如何使用 svelte-konva 修改节点的 zIndex？
layout: svelte_page

---

在使用其他 Konva 包装器时，如 `vue-konva` 或 `react-konva`，你可能习惯于数据顺序表示组件在画布上的绘制顺序。而在 svelte-konva 中，目前并未实现此功能，因为在 Svelte 3 中目前无法实现。

相反，你应该使用 Konva 的原生函数来动态重新排序画布上的组件，例如 `node.zIndex(5)`、`node.moveToTop()` 等。[教程](/docs/groups_and_layers/Layering.html)。

### 使用 if-blocks
svelte-konva 会遵循组件的初始顺序在画布上绘制形状。这在你不需要在运行时动态更改顺序的情况下效果很好。当使用 Svelte 的 if-block 来显示/隐藏某些组件时，你应该注意以下注意事项。考虑以下示例：
```
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
基于这个顺序，人们会期望看到圆形绘制在画布的顶部，然后是环形，最后是矩形形状。然而，由于 if-block 的存在，环形可能会根据 `showRing` 的初始值和变化最终位于画布顶部。这是因为 Svelte 在 if-block 内部挂载/卸载组件，而 svelte-konva 在挂载时在画布顶部绘制形状。如果你想避免这种行为，应该避免使用 Svelte 的 if-block，而是使用 `visible` 配置属性来控制形状是否可见。这样组件就不会被挂载/卸载，并保持其在画布上的初始绘制顺序。

指令：尝试拖动一个圆形。看看它是如何上移的。这是通过在被拖动的形状处理程序上调用 `moveToTop()` 来实现的。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/zIndex?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>