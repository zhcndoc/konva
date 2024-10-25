title: HTML5 Canvas 使用 Konva 移除事件监听器
---

要使用 Konva 移除事件监听器，我们可以使用形状对象的 `off()` 方法，该方法需要一个事件类型，例如点击或鼠标按下。

说明：点击圆形以查看从 onclick 事件绑定触发的警报。通过点击按钮移除事件监听器，然后再次点击圆形以观察事件绑定已被移除。

{% iframe /downloads/code/events/Remove_Event.html %}

{% include_code Konva Remove_Event Demo events/Remove_Event.html %}