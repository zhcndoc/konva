title: HTML5 Canvas 对比度滤镜图像教程
---

要在 `Konva.Node` 上应用滤镜，我们首先必须使用 `cache()` 函数进行缓存。然后使用 `filters()` 函数应用滤镜。

要使用 Konva 改变图像的对比度，我们可以使用 `Konva.Filters.Contrast`。

说明：滑动控制条以更改对比度值。

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/filters/Contrast.html %}

{% include_code Konva 对比度图像演示 filters/Contrast.html %}