---
title: 绑定配置属性
sidebar_label: 绑定
hide_table_of_contents: true
slug: Bindings.html
---

Svelte-Konva 能够在 `dragend` 和 `transformend` 事件后，将某些属性与 Konva 的内部状态（位置、旋转、缩放等）保持同步，前提是该属性被绑定。

### 禁用自动同步

在大多数情况下，svelte-konva 默认监听 `dragend` 和 `transformend` 事件的行为是你想要的。但在某些情况下（主要是出于性能考虑），这种行为可能并不利于你。在这种情况下，你可以通过向组件传递 `staticConfig` 属性来选择退出该行为。这样 svelte-konva 将不会监听这些事件，也不会更新绑定的属性：

```
<script>
  import { Stage, Layer, Rect } from 'svelte-konva';

  // 即使绑定了，x 和 y 值在 dragend 后也不会与实际位置同步
  const config = { x: 100, y: 100, width: 400, height: 200, fill: 'blue', draggable: true };
</script>

<Stage width={window.innerWidth} height={window.innerHeight}>
  <Layer>
    <Rect {...config} staticConfig />
  </Layer>
</Stage>
```

请记住，svelte-konva 只会在组件初始化时评估一次 `staticConfig` 属性。组件初始化后更改 `staticConfig` 属性不会产生任何效果。

拖动不同的环，并观察由 Svelte 触发的响应式变化。注意，只有绑定的环（黄色）会在 `dragend` 时自动更改坐标。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/new/svelte-demos/bindings?file=/src/App.svelte" style={{width: '100%', height:'800px', border: '0px', borderRadius: '4px', overflow: 'hidden'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>