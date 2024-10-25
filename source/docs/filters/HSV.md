title: HTML5 Canvas 色调、饱和度和亮度滤镜图像教程
---

要对 `Konva.Node` 应用滤镜，我们首先必须使用 `cache()` 函数进行缓存。然后使用 `filters()` 函数应用滤镜。

要使用 Konva 更改图像的色调、饱和度和亮度组件，我们可以使用 `Konva.Filters.HSV`。

操作说明：滑动控件以更改 hsv 值。

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/filters/HSV.html %}

{% include_code Konva 色调、饱和度和亮度图像演示 filters/HSV.html %}