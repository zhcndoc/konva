title: HTML5 Canvas 形状吸附旋转
---

在某些应用中，您可能希望将旋转吸附到某些值附近。吸附使形状在规定值附近“粘性”，并像四舍五入一样工作。

最常见的吸附值是 0、45、90、135、180 等等。我们允许的吸附值简化旋转，使其恰好为这些值。

例如，如果您有一个在 45 度的吸附点，用户将无法将旋转设置为 43 度，它将被四舍五入到 45 度。但是用户仍然可以将旋转设置为 35 度，因为它距离 45 度太远，因此不会被吸附。

说明：尝试旋转形状。查看在 0、90、180 和 270 度的吸附效果。

{% iframe /downloads/code/select_and_transform/Rotation_Snaps.html %}

{% include_code Konva Shape transform and selection Demo select_and_transform/Rotation_Snaps.html %}