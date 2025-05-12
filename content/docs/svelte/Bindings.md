---
title: 绑定配置属性
sidebar_label: 绑定
hide_table_of_contents: true
slug: Bindings.html
---

默认情况下，svelte-konva 会将提供的配置属性对象与 Konva 的内部状态保持同步。这意味着在 `dragend` 和 `transformend` 事件之后，提供的配置对象将被更新为正确的值（位置、旋转、缩放等）。svelte-konva 只会更新您在配置对象中提供的键，而不会添加任何可能已更改的其他键。

### 绑定配置属性

通过绑定配置属性，任何依赖于配置对象的反应语句将在 svelte-konva 更新配置值时被触发。如果未绑定，配置对象的值仍将由 svelte-konva 更新，但不会触发任何依赖于它的反应块。通常，如果可能的话，您应该绑定配置属性，这不仅可以保持反应性，还可以更明确地表明传递的配置对象可以被 svelte-konva 修改。

### 禁用自动同步

在大多数情况下，这种默认行为是您所需要的，因为您通常希望保持 Svelte 状态与画布的实际状态一致。然而，在某些情况下，这可能不是有益的。在这种情况下，您可以通过将 `staticConfig` 属性传递给组件来选择退出此行为：

```js
<script>
  import { Stage, Layer, Rect } from 'svelte-konva';

  // x 和 y 值在 dragend 之后不会与实际位置同步
  const config = { x: 100, y: 100, width: 400, height: 200, fill: 'blue', draggable: true };
</script>

<Stage config={{ width: window.innerWidth, height: window.innerHeight }}>
  <Layer>
    <Rect {config} staticConfig />
  </Layer>
</Stage>
```

请记住，svelte-konva 会在组件挂载期间仅评估一次 `staticConfig` 属性。组件挂载后更改 `staticConfig` 属性将不会产生任何效果。

**指令：** 拖动不同的环并观察 Svelte 触发的反应变化。注意，拖动红色环不会触发反应变化，但仍会由于未绑定而更改配置的实际值。

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/bindings?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>