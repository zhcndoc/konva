title: HTML5 canvas 直线教程
---

要使用 `Konva` 创建一条直线，可以实例化一个 `Konva.Line()` 对象。

要定义直线的路径，你应该使用 `points` 属性。如果你有三个点的 `x` 和 `y` 坐标，你应该将 `points` 属性定义为：`[x1, y1, x2, y2, x3, y3]`。

平坦的数字数组在速度和内存使用上应该比对象数组更快。

有关属性和方法的完整列表，请查看 [Konva.Line 文档](/api/Konva.Line.html)。

{% iframe /downloads/code/shapes/Line_-_Simple_line.html %}

{% include_code Konva Line Demo shapes/Line_-_Simple_line.html %}