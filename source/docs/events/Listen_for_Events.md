title: HTML5 Canvas 使用 Konva 监听或不监听事件
---

要使用 Konva 监听或不监听事件，我们可以在实例化形状时将配置对象的 `listening` 属性设置为 true 或 false，或者可以使用 `setListening()` 方法设置 `listening` 属性。一旦我们为一个或多个节点设置了 `listening` 属性，我们还需要使用 `drawHit()` 方法重绘每个受影响层的命中图。

说明：将鼠标悬停在椭圆上以观察事件处理程序未执行。点击“监听”以开始监听事件，并注意事件处理程序现在已执行。

{% iframe /downloads/code/events/Listen_for_Events.html %}

{% include_code Konva Listen_for_Events Demo events/Listen_for_Events.html %}