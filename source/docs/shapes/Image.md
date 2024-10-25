title: HTML5 canvas 图像教程
---

要使用 `Konva` 创建图像，我们可以实例化一个 `Konva.Image()` 对象并设置 `image` 属性。

对于 `image` 属性，您可以使用：
1. `window.Image` 的实例或 `document.createElement('image')`
2. 画布元素
3. 视频元素

有关属性和方法的完整列表，请查看 [Konva.Image 文档](/api/Konva.Image.html)。

如果您想将 SVG 图像绘制到画布上，请查看 [如何在画布上绘制 SVG 图像](/docs/sandbox/SVG_On_Canvas.html) 的文章。

{% iframe /downloads/code/shapes/Image.html %}

{% include_code Konva Image Demo shapes/Image.html %}