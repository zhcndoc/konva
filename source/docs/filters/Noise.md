title: HTML5 Canvas 噪声滤镜图像教程
---

要对 `Konva.Node` 应用滤镜，我们首先需要使用 `cache()` 函数进行缓存。然后使用 `filters()` 函数应用滤镜。

要使用 Konva 更改图像的噪声，我们可以使用 `Konva.Filters.Noise`。

说明：滑动控件以更改噪声值。

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/filters/Noise.html %}

{% include_code Konva Noise Image Demo filters/Noise.html %}