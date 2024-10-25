title: HTML5 Canvas 移动滚动和原生事件与 Konva
---

默认情况下，`Konva` 会阻止对舞台的所有指针交互的默认行为。
这将防止在移动设备上尝试拖放形状时页面意外滚动。

但在某些情况下，您可能想要保留浏览器事件的默认行为。在这种情况下，您可以将形状的 `preventDefault` 属性设置为 `false`。

说明：如果您在移动设备上，请尝试通过每个矩形滚动页面。
绿色 - 应该阻止默认行为（无页面滚动）。
红色 - 将保留默认行为（滚动应有效）。

{% iframe /downloads/code/events/Mobile_Scrolling.html %}

{% include_code Konva 移动滚动演示 events/Mobile_Scrolling.html %}