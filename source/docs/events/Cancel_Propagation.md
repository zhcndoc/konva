title: HTML5 Canvas 取消事件冒泡传播与 Konva
---

要使用 Konva 取消事件冒泡传播，我们可以将 Event 对象的 `cancelBubble` 属性设置为 true。

说明：点击圆形可以观察到只有圆形事件绑定被处理，因为当触发圆形事件时事件传播被取消，从而防止事件对象向上传播。

{% iframe /downloads/code/events/Cancel_Propagation.html %}

{% include_code Konva 取消传播演示 events/Cancel_Propagation.html %}