title: 如何使用 Svelte 和 Konva 监听画布形状上的事件？
layout: svelte_page

---

使用 `svelte-konva`，您可以轻松监听用户输入事件（`click`、`dblclick`、`mouseover`、`tap`、`dbltap`、`touchstart` 等）以及拖放事件（`dragstart`、`dragmove`、`dragend`）。

```js
<script>
  import { Stage, Layer, Rect } from 'svelte-konva';

  function handleClick(e) {
    const konvaEvent = e.detail;
    window.alert(`点击矩形: ${konvaEvent.type}`);
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

要查看完整的事件列表，请查看 [on() 方法文档](/api/Konva.Node.html#on)。

## 冒泡
Konva 事件默认会冒泡。要防止这种情况，您可以在事件对象上调用 `preventDefault()`，或者将 Konva 事件的 `cancelBubble` 属性设置为 `false`：

```js
  function handleClick(e) {
    const konvaEvent = e.detail;
    
    // 取消冒泡
    e.preventDefault();

    // 或者
    konvaEvent.cancelBubble = true;
  }
```

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/events?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
```