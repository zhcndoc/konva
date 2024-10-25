title: 图像非透明部分的边框
layout: demo_page
---


## 如何在带有 alpha 通道的图像周围绘制轮廓？

这个演示展示了如何使用 `Konva` 框架的自定义滤镜。

如需了解有关自定义滤镜的更多信息，请查看 [自定义滤镜教程](/docs/filters/Custom_Filter.html)。

在这个演示中，我们将创建一个自定义滤镜，它将在图像的轮廓周围绘制一个实心边框。
由于跟随轮廓是一件复杂的事情，我们将采用一种方法。我们将使用模糊的阴影作为边框基础。
我们将把透明/模糊的像素替换为我们想要用作边框的实色。

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/sandbox/Image_Border.html %}

{% include_code Konva Custom Filter Image Demo sandbox/Image_Border.html %}