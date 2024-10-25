title: HTML5 canvas Blob 教程
---

要使用 `Konva` 创建一个 blob，我们可以实例化一个 `Konva.Line()` 对象，并将 `closed = true` 和 `tension` 属性进行设置。

要定义线条的路径，你应该使用 `points` 属性。如果你有三个点，具有 `x` 和 `y` 坐标，你应该将 `points` 属性定义为: `[x1, y1, x2, y2, x3, y3]`。

一个扁平的数字数组应该比对象数组运行得更快，并且占用更少的内存。

有关属性和方法的完整列表，请查看 [Konva.Line 文档](/api/Konva.Line.html)。

{% iframe /downloads/code/shapes/Line_-_Blob.html %}

{% include_code Konva Blob 示例 shapes/Line_-_Blob.html %}