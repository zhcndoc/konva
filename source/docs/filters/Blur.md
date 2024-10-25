title: HTML5 Canvas 模糊图像滤镜教程
---

要将滤镜应用于 `Konva.Image`，我们必须先使用 `cache()` 函数进行缓存。然后使用 `filters()` 函数应用滤镜。

要使用 Konva 模糊图像，我们可以使用 `Konva.Filters.Blur` 滤镜，并通过 `blurRadius` 属性设置模糊量。

说明：滑动控制器以调整模糊半径。

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/filters/Blur.html %}

{% include_code Konva 模糊图像演示 filters/Blur.html %}