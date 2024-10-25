title: HTML5 Canvas 拖放教程
---

要使用 Konva 拖放形状，我们可以在实例化形状时将 `draggable` 属性设置为 true，或者可以使用 `draggable()` 方法。
`draggable()` 方法自动为桌面和移动应用启用拖放功能。

要使用 Konva 检测拖放事件，我们可以使用 `on()` 方法将 `dragstart`、`dragmove` 或 `dragend` 事件绑定到节点。
`on()` 方法需要一个事件类型和一个在事件发生时执行的函数。

{% iframe /downloads/code/drag_and_drop/Drag_and_Drop.html %}

{% include_code Konva 拖放演示 drag_and_drop/Drag_and_Drop.html %}