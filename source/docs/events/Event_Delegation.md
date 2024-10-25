title: 使用 Konva 的 HTML5 Canvas 事件委托
---

要获取 Konva 中的事件目标，我们可以访问事件对象的 `target` 属性。这在使用事件委托时尤其有用，在这种情况下，我们可以将事件处理程序绑定到父节点，并监听其子节点上发生的事件。

说明：点击星形，并观察层事件绑定是否正确识别被点击的形状。

{% iframe /downloads/code/events/Event_Delegation.html %}

{% include_code Konva Event_Delegation Demo events/Event_Delegation.html %}