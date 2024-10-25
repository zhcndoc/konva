title: HTML5 Canvas 批量绘制技巧
---

**更新：此演示与新的 `konva@8` 无关。在新版本中，`Konva` 在画布上的任何更改时会自动进行所有批量绘制。**

如果您使用 `Konva.autoDrawEnabled = false`，该演示可能仍然相关。

在某些情况下，我们可能希望尽可能快地更新一个 Konva 形状，但又不想导致太多的重绘。例如，如果我们通过鼠标移动更新舞台上的一个元素，我们不想使用 `draw()` 方法重绘图层，因为鼠标移动事件可能每秒触发数百次，这将导致超过每秒一百帧的强制帧率。通常，这会导致动画跳动，因为浏览器根本无法处理过多的重绘。

对于这种情况，使用 `batchDraw()` 方法要好得多，它会自动将重绘挂钩到 Konva 动画引擎中。不管你调用多少次 `batchDraw()`，Konva 会根据浏览器在任何时刻能够处理的最大帧数自动限制每秒的重绘次数。

说明：将鼠标移动到舞台上以旋转矩形

{% iframe /downloads/code/performance/BatchDraw.html %}

{% include_code Konva 批量绘制演示 performance/BatchDraw.html %}