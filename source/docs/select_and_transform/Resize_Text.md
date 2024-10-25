title: 如何在画布上调整文本大小？
---

### 如何使用变换工具改变文本的宽度？

请记住，`Konva.Transformer`正在改变节点的 `scaleX` 和 `scaleY` 属性。
如果您想改变文本的宽度，而不改变其大小，您应该将文本的缩放重置为 1，并相应地调整 `width`。

您可以使用 `transform` 事件来根据需要更新文本的属性。

指示：尝试调整文本大小。

{% iframe /downloads/code/select_and_transform/Resize_Text.html %}

{% include_code Konva Text resize Demo select_and_transform/Resize_Text.html %}