title: HTML5 canvas Spline 教程
---

要使用 `Konva` 创建样条曲线，我们可以实例化一个带有 `tension` 属性的 `Konva.Line()` 对象。

要定义线条的路径，应使用 `points` 属性。如果你有三个点的 `x` 和 `y` 坐标，你应该将 `points` 属性定义为：`[x1, y1, x2, y2, x3, y3]`。

扁平的数字数组的性能应该比对象数组更快，并且占用更少的内存。

有关属性和方法的完整列表，请查看 [Konva.Line 文档](/api/Konva.Line.html)。

{% iframe /downloads/code/shapes/Line_-_Spline.html %}

{% include_code Konva Spline 示例 shapes/Line_-_Spline.html %}