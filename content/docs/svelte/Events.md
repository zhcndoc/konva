---
title: 如何在 Svelte 和 Konva 中监听画布形状的事件？
sidebar_label: 事件
hide_table_of_contents: true
slug: Events.html
---

使用 `svelte-konva`，你可以轻松监听用户输入事件（`click`、`dblclick`、`mouseover`、`tap`、`dbltap`、`touchstart` 等）以及拖拽事件（`dragstart`、`dragmove`、`dragend`）。

```js
<script>
  import { Stage, Layer, Rect } from 'svelte-konva';

  function handleClick(e) {
    const konvaEvent = e.detail;
    window.alert(`点击了矩形：${konvaEvent.type}`);
  }
</script>

<Stage config={{ width: window.innerWidth, height: window.innerHeight }}>
  <Layer>
    <Rect
      config={{ x: 100, y: 100, width: 400, height: 200, fill: 'blue' }}
      on:pointerclick={handleClick}
    />
  </Layer>
</Stage>
```

欲了解完整的事件列表，请参阅 [on() 方法文档](/api/Konva.Node.html#on)。

## 事件冒泡
Konva 事件默认会冒泡。若需阻止冒泡，可以在事件对象上调用 `preventDefault()`，或将 Konva 事件的 `cancelBubble` 属性设置为 `true`：

```js
  function handleClick(e) {
    const konvaEvent = e.detail;
    
    // 阻止冒泡
    e.preventDefault();

    // 或者
    konvaEvent.cancelBubble = true;
  }
```

<iframe 
  src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/events?file=/src/App.svelte" 
  style={{
    width: "100%",
    height: "800px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden"
  }}
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>