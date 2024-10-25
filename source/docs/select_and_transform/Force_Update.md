title: HTML5 Canvas 强制更新教程
---

`Konva.Transformer` 会自动追踪附加节点的属性。
因此，它会自动采用自己的属性。

但在某些情况下，`Konva.Transformer` 无法做到这一点。目前，`Konva.Transformer` 不能追踪 `Konva.Group` 节点内部的深层变化。在这种情况下，您需要使用 `forceUpdate` 方法来重置变换工具。

说明：点击按钮。查看变换器如何变化。

{% iframe /downloads/code/select_and_transform/Force_Update.html %}

{% include_code Transformer Force Update Demo select_and_transform/Force_Update.html %}