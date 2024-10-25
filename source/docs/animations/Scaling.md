title: HTML5 Canvas Konva 缩放动画教程
---

要使用 Konva 为形状的缩放做动画，我们可以创建一个新的动画 `Konva.Animation`，并定义一个函数，在每一帧动画中修改形状的缩放。

在本教程中，我们将对一个蓝色六边形的 x 和 y 分量，黄色六边形的 y 分量，以及红色六边形的 x 分量进行缩放，缩放围绕位于形状右侧的一个轴心进行。

说明：在动画过程中拖动并放置六边形

欲查看完整的属性和方法列表，请访问 [Konva.Animation 文档](/api/Konva.Animation.html)。

{% iframe /downloads/code/animations/Scaling.html %}

{% include_code Konva 缩放动画演示 animations/Scaling.html %}