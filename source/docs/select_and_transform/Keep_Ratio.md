## 标题: HTML5 Canvas 图形按比例缩放

## 如何按比例缩放图形？

默认情况下，当您使用角锚点（`左上`, `右上`, `左下` 或 `右下`）进行缩放时，变换器会保持节点的比例。

如果您不需要这种行为，可以将 `keepRatio` 设置为 `false`。

即使您将 `keepRatio` 设置为 `false`，您仍然可以按住 `SHIFT` 键来保持比例。

说明：尝试缩放文本。

{% iframe /downloads/code/select_and_transform/Keep_Ratio.html %}

{% include_code Konva Shape transform and selection Demo select_and_transform/Keep_Ratio.html %}