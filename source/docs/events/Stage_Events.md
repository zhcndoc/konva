title: HTML5 Canvas 特殊舞台事件 Konva
---

所有事件均从形状开始。因此，如果您在画布中的空白区域单击，`click` 事件不会在 `Layer` 上触发，而是会在 `Stage` 对象上触发。

{% iframe /downloads/code/events/Stage_Events.html %}

{% include_code Konva Stage Events Demo events/Stage_Events.html %}