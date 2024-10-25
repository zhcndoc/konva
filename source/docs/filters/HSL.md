title: HTML5 Canvas 色相、饱和度和亮度滤镜图像教程
---

要对 `Konva.Node` 应用滤镜，我们首先需要使用 `cache()` 函数对其进行缓存。然后使用 `filters()` 函数应用滤镜。

要使用 Konva 更改图像的色相、饱和度和亮度成分，我们可以使用 `Konva.Filters.HSL`。

说明：滑动控件以更改 HSL 值。

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/filters/HSL.html %}

{% include_code Konva 色相、饱和度和亮度图像演示 filters/HSL.html %}