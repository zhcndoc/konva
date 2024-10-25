title: HTML5 Canvas 万花筒图像滤镜教程
---

要对 `Konva.Image` 应用滤镜，我们必须首先使用 `cache()` 函数进行缓存。然后使用 `filters()` 函数应用滤镜。

要使用 Konva 创建万花筒，我们可以使用 `Konva.Filters.Kaleidoscope` 滤镜，并设置 `kaleidoscopePower` 和 `kaleidoscopeAngle` 属性。

说明：滑动控制杆以调整万花筒角度。

有关所有可用滤镜，请访问 [滤镜文档](/api/Konva.Filters.html)。

{% iframe /downloads/code/filters/Kaleidoscope.html %}

{% include_code Konva Kaleidoscope Image Demo filters/Kaleidoscope.html %}