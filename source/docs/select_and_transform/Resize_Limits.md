title: HTML5 Canvas 形状调整大小和变换限制

---

### 如何限制形状的大小变化？

要限制或更改调整大小和变换的行为，您可以使用 `boundBoxFunc` 属性。
它的工作方式有点类似于 [dragBoundFunc](/docs/drag_and_drop/Simple_Drag_Bounds.html)。

说明：尝试调整形状的大小。您将看到它的宽度限制为 200。

您还可以单独控制每个锚点的移动。请参见 [调整大小快照演示](https://konvajs.org/docs/select_and_transform/Resize_Snaps.html)。

{% iframe /downloads/code/select_and_transform/Resize_Limits.html %}

{% include_code Konva Shape transform and selection Demo select_and_transform/Resize_Limits.html %}