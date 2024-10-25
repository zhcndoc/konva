title: HTML5 Canvas 反转图像滤镜教程
---

要对 `Konva.Image` 应用滤镜，我们首先需要使用 `cache()` 函数进行缓存。然后使用 `filters()` 函数应用滤镜。

为了反转 Konva 图像的颜色，我们可以使用 `Konva.Filters.Invert` 滤镜。

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/filters/Invert.html %}

{% include_code Konva 反转图像演示 filters/Invert.html %}