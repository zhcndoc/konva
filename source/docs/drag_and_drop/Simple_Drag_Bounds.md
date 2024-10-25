## 标题: HTML5 Canvas 简单拖拽边界教程

为了限制使用 Konva 拖动和放置的形状的移动，我们可以使用 `dragmove` 事件，并在其中重写拖拽和放置位置。

这个事件可以用来以各种方式约束拖拽和放置的移动，例如限制水平、垂直、对角线或径向运动，甚至约束节点保持在一个盒子、圆形或任何其他路径内。

```js
shape.on('dragmove', () => {
  // 锁定形状在 x 轴上的位置
  // 保持 y 位置不变
  shape.x(0);
});
```

_提示：您可以使用 `shape.absolutePosition()` 方法获取/设置节点的绝对位置，而不是相对的 `x` 和 `y`。_

说明：拖动并放置水平文本，观察它只能水平移动。拖动并放置垂直文本，观察它只能垂直移动。

{% iframe /downloads/code/drag_and_drop/Simple_Drag_Bounds.html %}

{% include_code Konva Simple Drag Bounds Demo drag_and_drop/Simple_Drag_Bounds.html %}