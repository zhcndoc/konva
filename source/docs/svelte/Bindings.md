title: 绑定配置属性
layout: svelte_page

---

默认情况下，svelte-konva 会将提供的配置属性对象与 Konva 的内部状态保持同步。这意味着在 `dragend` 和 `transformend` 事件后，提供的配置对象会更新为正确的值（位置、旋转、缩放等）。svelte-konva 只会更新您在配置对象中提供的键，而不会添加可能已更改的任何额外键。

### 绑定配置属性
通过绑定配置属性，任何依赖于您的配置对象的反应式语句将在 svelte-konva 更新配置值时被触发。如果没有绑定，配置对象的值仍然会被 svelte-konva 更新，但不会触发任何依赖于它的反应式块。一般来说，如果可能，您应该绑定配置属性，不仅为了保持反应性，还为了更明确地表示传递的配置对象可以被 svelte-konva 更改。

### 禁用自动同步
在大多数情况下，这种默认行为是您希望的，因为您通常希望将 Svelte 状态与画布的实际状态保持一致。不过，在某些情况下，这可能不是有利的。在这种情况下，您可以通过将 `staticConfig` 属性传递给组件来选择不使用这种行为：
```
<script>
  import { Stage, Layer, Rect } from 'svelte-konva';

  // 在拖动结束后，x 和 y 值将不会与实际位置同步
  const config = { x: 100, y: 100, width: 400, height: 200, fill: 'blue', draggable: true };
</script>

<Stage config={{ width: window.innerWidth, height: window.innerHeight }}>
  <Layer>
    <Rect {config} staticConfig />
  </Layer>
</Stage>
```
请注意，svelte-konva 仅在组件挂载期间评估 `staticConfig` 属性。挂载后更改 `staticConfig` 属性将不会产生任何效果。

拖动不同的环，并观察 Svelte 触发的反应式变化。注意，拖动红环不会触发反应式变化，但由于未绑定，实际的配置值仍会改变。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/bindings?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
