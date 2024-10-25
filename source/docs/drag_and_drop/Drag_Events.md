title: HTML5 Canvas 拖放事件
---

要检测 Konva 中的拖放事件，我们可以使用 `on()` 方法将 `dragstart`、`dragmove` 或 `dragend` 事件绑定到一个节点。
`on()` 方法需要一个事件类型和一个在事件发生时执行的函数。

{% iframe /downloads/code/drag_and_drop/Drag_Events.html %}

{% include_code Konva 拖放事件演示 drag_and_drop/Drag_Events.html %}