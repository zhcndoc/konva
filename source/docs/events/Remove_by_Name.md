title: HTML5 Canvas 根据名称移除事件监听器与 Konva
---

要使用 Konva 根据名称移除事件监听器，我们可以使用 `on()` 方法对事件类型进行命名空间处理，这样我们就可以使用相同的命名空间通过 `off()` 方法移除事件监听器。

指示：点击圆圈以查看来自两个不同 onclick 事件绑定触发的两个警报。使用左侧的按钮移除事件监听器，然后再次点击圆圈以观察新的 onclick 绑定。

{% iframe /downloads/code/events/Remove_by_Name.html %}

{% include_code Konva 根据名称移除演示 events/Remove_by_Name.html %}