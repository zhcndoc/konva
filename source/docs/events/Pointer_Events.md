title: HTML5 Canvas 指针事件教程

---

指针事件对于处理移动设备和桌面事件的统一处理非常有用。

要将指针事件处理程序绑定到 Konva 中的形状，我们可以使用 `on()` 方法。
`on()` 方法需要一个事件类型和一个在事件发生时执行的函数。
Konva 支持 `pointerdown`、`pointermove`、`pointerup`、`pointercancel`、`pointerover`、`pointerenter`、`pointerout`、`pointerleave`、`pointerclick`、`pointerdblclick` 等事件。

_注意：这个示例在移动设备和桌面设备上都可以工作。_

指令：在三角形上移动鼠标/手指以查看指针坐标。

{% iframe /downloads/code/events/Pointer_Events.html %}

{% include_code Konva 指针事件演示 events/Pointer_Events.html %}