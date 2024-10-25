## 标题: HTML5 Canvas 复杂拖放边界

## 如何使用 Konva 限制拖动能力？

要限制在区域内拖动和放置节点的移动，可以使用 `dragmove` 事件来定义节点无法越过的边界。

_提示：您可以使用 `shape.absolutePosition()` 方法获取/设置节点的绝对位置，而不是相对的 `x` 和 `y`。_

说明：拖动并放置浅蓝色矩形，观察它被限制在 y = 50 的一个虚拟边界下。拖动并放置黄色矩形，观察它被限制在一个虚拟圆形内。

{% iframe /downloads/code/drag_and_drop/Complex_Drag_and_Drop.html %}

{% include_code Konva 复杂拖放边界演示 drag_and_drop/Complex_Drag_and_Drop.html %}