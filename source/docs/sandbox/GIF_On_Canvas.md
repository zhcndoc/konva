title: 如何在画布上动画 GIF
layout: demo_page
---

你不能直接将 GIF 图片插入到画布中。但我们可以使用外部库来解析 GIF，然后将其作为 `Konva.Image` 形状绘制到图层上。

在这个示例中，我将使用 [gifler](http://themadcreator.github.io/gifler/) 来解析和绘制 GIF。你可以使用任何其他库。

{% iframe /downloads/code/sandbox/GIF_On_Canvas.html %}

{% include_code Konva GIF demo sandbox/GIF_On_Canvas.html %}