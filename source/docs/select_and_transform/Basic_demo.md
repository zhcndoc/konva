title: HTML5 Canvas形状选择、缩放和旋转
---

`Transformer` 是一种特殊的 `Konva.Group`。它允许你轻松地缩放和旋转任何节点或节点集。

要启用它，你需要：

1. 使用 `new Konva.Transformer()` 创建新实例
2. 将其添加到图层
3. 使用 `transformer.nodes([shape]);` 附加到节点
4. 使用 `layer.batchDraw()` 更新图层


*注意：* 变换工具在缩放节点时不会改变节点的 `width` 和 `height` 属性。相反，它会改变 `scaleX` 和 `scaleY` 属性。

**说明：尝试缩放和旋转形状。点击空白区域以取消选择。使用 SHIFT 或 CTRL 添加/移除选择中的形状。尝试在画布上选择区域。**

{% iframe /downloads/code/select_and_transform/Basic_demo.html %}

{% include_code Konva 图形变换和选择演示 select_and_transform/Basic_demo.html %}