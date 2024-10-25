title: 如何在画布上翻转形状或图像？
layout: demo_page
---

## 是否可以垂直或水平镜像形状？

要使用 `Konva` 翻转任何节点，可以使用负的 `scaleX` 来水平翻转，或 `scaleY` 来垂直翻转。

请记住，`scale` 属性是相对于节点的原点起作用的。例如，矩形的原点是左上角，圆形的原点是其中心。如果您想要改变节点的原点，可以使用 `offsetX` 和 `offsetY` 属性。要更好地理解原点和偏移，请查看 [位置与偏移讨论](/docs/posts/Position_vs_Offset.html)。

根据您的用例，您可能需要手动更改节点的 `{x, y}` 属性，以在缩放后保持其在原始位置。


*说明：点击翻转按钮，查看它们是如何被镜像的。*


{% iframe /downloads/code/sandbox/Mirror_Canvas_Shape.html %}

{% include_code Konva Mirror Shape sandbox/Mirror_Canvas_Shape.html %}