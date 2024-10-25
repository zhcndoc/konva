title: HTML5 Canvas 拖放事件
---

Konva 不支持拖放事件。但是你可以编写自己的拖放事件检测。
要检测拖放目标形状，你必须将正在拖动的对象移动到另一个图层中。

在这个示例中，你可以看到 `drop`、`dragenter`、`dragleave`、`dragover` 事件的实现。

说明：将一个形状拖到另一个形状上。或者将一个形状拖放到另一个形状中。

{% iframe /downloads/code/drag_and_drop/Drop_Events.html %}

{% include_code Konva 拖放事件演示 drag_and_drop/Drop_Events.html %}