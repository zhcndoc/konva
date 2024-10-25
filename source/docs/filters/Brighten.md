title: HTML5 Canvas 图片亮度滤镜教程
---

要将滤镜应用于 `Konva.Image`，我们必须首先使用 `cache()` 函数进行缓存。然后使用 `filters()` 函数应用滤镜。
 
要使用 Konva 增加或减少图像的亮度，可以使用 `Konva.Filters.Brighten` 滤镜，并通过 `brightness` 属性设置亮度值。 
`brightness` 属性可以设置为 -1 到 1 之间的任何整数。负值会使图像变暗，正值则会使图像变亮。

说明：滑动控件以调整亮度

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/filters/Brighten.html %}

{% include_code Konva Brighten Image Demo filters/Brighten.html %}