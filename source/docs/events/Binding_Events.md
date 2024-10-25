title: HTML5 Canvas 形状事件

---

要使用 Konva 检测形状事件，我们可以使用 `on()` 方法将事件处理程序绑定到节点。

`on()` 方法需要事件类型和在事件发生时执行的函数。

鼠标事件：`mouseover`、`mouseout`、`mouseenter`、`mouseleave`、`mousemove`、`mousedown`、`mouseup`、`wheel`、`click`、`dblclick`。

触摸事件：`touchstart`、`touchmove`、`touchend`、`tap`、`dbltap`。

指针事件：`pointerdown`、`pointermove`、`pointereup`、`pointercancel`、`pointerover`、`pointerenter`、`pointerout`、`pointerleave`、`pointerclick`、`pointerdblclick`。

拖动事件：`dragstart`、`dragmove` 和 `dragend`。

变换事件：`transformstart`、`transform`、`transformend`。

说明：在三角形上触发鼠标悬停和鼠标移出事件，在圆形上触发鼠标悬停、鼠标移出、鼠标按下和鼠标抬起事件。

{% iframe /downloads/code/events/Binding_Events.html %}

{% include_code Konva Binding_Events Demo events/Binding_Events.html %}