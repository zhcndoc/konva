title: HTML5 canvas 多边形教程

---

要使用 `Konva` 创建一个多边形，我们可以实例化一个 `Konva.Line()` 对象，并将 `closed = true` 属性设置为闭合。

要定义线的路径，您应该使用 `points` 属性。如果您有三个点的 `x` 和 `y` 坐标，您应该将 `points` 属性定义为：`[x1, y1, x2, y2, x3, y3]`。

扁平的数字数组应该比对象数组运行得更快且占用更少的内存。

有关属性和方法的完整列表，请查看 [Konva.Line 文档](/api/Konva.Line.html)。

{% iframe /downloads/code/shapes/Line_-_Polygon.html %}

{% include_code Konva 多边形示例 shapes/Line_-_Polygon.html %}