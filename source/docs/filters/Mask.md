title: HTML5 Canvas 蒙版图像滤镜教程
---

要将滤镜应用于 `Konva.Image`，我们必须先使用 `cache()` 函数缓存它。然后使用 `filters()` 函数应用滤镜。

要使用 Konva 标记图像的颜色，我们可以使用
`Konva.Filters.Mask` 滤镜。

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/filters/Mask.html %}

{% include_code Konva 蒙版图像示例 filters/Mask.html %}