title: HTML5 Canvas 灰度图像滤镜教程
---

要对 `Konva.Image` 应用滤镜，我们首先需要使用 `cache()` 函数将其缓存。然后使用 `filters()` 函数应用滤镜。

要反转图像的颜色，可以使用 `Konva.Filters.Grayscale` 滤镜。

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/filters/Grayscale.html %}

{% include_code Konva 灰度图像示例 filters/Grayscale.html %}