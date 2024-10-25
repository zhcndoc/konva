title: 如何在不改变描边大小的情况下调整画布上的形状大小？
---

### 你想在不改变形状描边大小的情况下改变形状大小吗？

请记住，`Konva.Transformer` 正在改变节点的 `scaleX` 和 `scaleY` 属性。
默认情况下，如果您正在变换一个形状，它的描边也会被缩放。在某些情况下，这并不是一个好的行为。

有两种方法可以防止描边缩放：（1）重置形状的缩放；或（2）使用 `shape.strokeScaleEnabled(false)` 和 `transformer.ignoreStroke(false)` 的组合。

**说明：有两个矩形需要调整大小。绿色的矩形将重置其缩放。红色的矩形将仅禁用描边缩放。**

{% iframe /downloads/code/select_and_transform/Ignore_Stroke_On_Transform.html %}

{% include_code Konva ignore stroke select_and_transform/Ignore_Stroke_On_Transform.html %}