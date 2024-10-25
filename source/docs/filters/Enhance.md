title: HTML5 Canvas 图片增强滤镜教程
---

要对 `Konva.Image` 应用滤镜，我们必须首先使用 `cache()` 函数缓存它。然后使用 `filters()` 函数应用滤镜。

要使用 Konva 增强图像，我们可以使用 `Konva.Filters.Enhance` 滤镜，并通过 `enhance` 属性设置增强值。

说明：滑动控制条以调整增强值。

有关所有可用滤镜的信息，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/filters/Enhance.html %}

{% include_code Konva Enhance Image Demo filters/Enhance.html %}