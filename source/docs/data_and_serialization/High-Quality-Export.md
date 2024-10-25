title: HTML5 Canvas 导出高质量图像教程
---

## 如何从画布导出高质量图像？

如果你需要将画布导出为图像或作为 base64，你可以使用 `stage.toDataURL()` 或 `stage.toImage()` 方法。

在 `Konva` 中，默认情况下导出的图像的 `pixelRatio` 属性设置为 `1`。这意味着，如果你导出一个大小为 `500x500` 的画布，则导出的图像的大小也将为 `500x500`。

在某些情况下，你可能希望导出一个更适合更高（或更小）分辨率的图像。例如，你可能希望将某些内容导出为图像，然后在 HDPI 设备（具有高像素比率的设备，如视网膜显示屏）上的画布中使用该图像。另一个场景可能是你需要在运行高分辨率的计算机上导出用户的绘画。

如果你使用默认设置进行此操作，则你会看到模糊的图像。你可以在这里阅读更多关于全局 `pixelRatio` 属性的内容 [MDN - devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)。

对于这两种使用情况，你可以使用：

```
stage.toDataURL({
  pixelRatio: 2 // 或你需要的其他值
})
```

现在，大小为 `500x500` 的画布将导出为大小为 `1000x1000` 的图像。`Konva` 中几乎所有节点都以矢量数据存储，除了位图图像和缓存节点。这导致导出的图像具有高质量。

**使用：尝试将画布保存为图像。你会发现它具有高分辨率。**

{% iframe /downloads/code/data_and_serialization/High-Quality-Export.html %}

{% include_code Konva 像素比演示 data_and_serialization/High-Quality-Export.html %}