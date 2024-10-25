title: HTML5 Canvas 拖放舞台
---

要使用 Konva 拖放舞台，我们可以在实例化组时将配置对象的 `draggable` 属性设置为 `true`，或者我们可以使用 `draggable()` 方法。

与其他节点（例如形状、组和图层）的拖放不同，我们可以通过拖动舞台的任何部分来拖动整个舞台。

{% iframe /downloads/code/drag_and_drop/Drag_a_Stage.html %}

{% include_code Konva 拖放舞台演示 drag_and_drop/Drag_a_Stage.html %}