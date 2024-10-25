title: HTML5 Canvas 移动触摸事件教程
---

要在移动设备上使用 Konva 绑定事件处理程序到形状，我们可以使用 `on()` 方法。
`on()` 方法需要一个事件类型和一个在事件发生时执行的函数。
Konva 支持 `touchstart`、`touchmove`、`touchend`、`tap`、`dbltap`、`dragstart`、`dragmove` 和 `dragend` 移动事件。

对于更复杂的手势，如 `rotate`，请查看 [手势演示](/docs/sandbox/Gestures.html)。

如果您需要整个舞台的平移和缩放逻辑，请查看 [多点触控缩放舞台演示](/docs/sandbox/Multi-touch_Scale_Stage.html)。

*注意：此示例仅适用于移动设备，因为它使用触摸事件而不是鼠标事件。*

说明：在三角形上滑动您的手指查看触摸坐标，并在圆圈上进行触摸开始和触摸结束。

{% iframe /downloads/code/events/Mobile_Events.html %}

{% include_code Konva Mobile_Events Demo events/Mobile_Events.html %}