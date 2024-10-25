title: Konva 中 position 和 offset 有什么区别
---

在 Konva 中有几个属性看起来相似，可能会导致一些混淆，但它们的效果和用途是不同的。

在这篇文章中，我将解释 position（x 和 y 坐标）和 offset（offsetX 和 offsetY）之间的区别。

因此，x 和 y 属性定义了节点在画布上的位置。如果你设置 `draggable = true` 属性并开始拖动，Konva 将会改变节点的 x 和 y 属性。这一逻辑将适用于所有节点（即使是 Konva.Line）。

一个矩形形状的位置定义了它的左上角。一个圆的位置定义了它的中心。

{% iframe /downloads/code/posts/Position_vs_Offset_Basic_x_y.html %}


## 为什么我们需要 `offset` 属性？

当你改变 offset 属性时，可能看起来你在改变节点的位置。但实际上不是。你是在改变形状的原点。

什么是原点？你可以把它看作是“我们开始绘制形状的点”或“形状的中心”或“我们围绕着这个点旋转形状”。

简单提醒一下，早在以前，offset 属性在 Konva 的代码库（当它是 KineticJS 项目时）被称为“center”。但后来它被重构为“offset”。

请查看这个 [动画教程](/docs/animations/Rotation.html)。这里所有的矩形都有相同的 `y` 位置，但具有不同的 `offset` 属性。

{% iframe /downloads/code/animations/Rotation.html %}

你应该理解，Konva 有两种主要方法来定义形状的原点。
因此，“圆形”形状的原点位于形状的实际中心（圆形、椭圆、扇形、星形、环等）。
当你设置一个圆的 {x, y} 时，你是在定义“圆的中心将位于何处”。

而“矩形”形状的原点则位于左上角（矩形、精灵、文本、图像等）。
当你设置一个矩形的 {x, y} 时，你是在定义“矩形的左上角将位于何处”。

因此，形状将围绕其原点（其“中心”）进行旋转。假设你将一个星形的旋转角度设置为 45 度，它将围绕其实际中心进行旋转。

但如果你将一个矩形的旋转角度设置为 45 度，它将围绕左上角进行旋转。但在某些情况下，这并不方便。有时你可能想要围绕其中心旋转形状。

在这种情况下，你可以设置 `offset` 属性。通过使用它，我们将告诉 Konva：“嘿，使用这个点作为形状的新原点”。

## 如何设置形状的旋转点？

现在假设你在 `x = 0, y = 0` 放置了一个 100x100 的矩形，现在你想要围绕它的中心进行旋转。

如果你不使用 offset，你需要重新计算它的左上边缘的位置（回想一下你在学校的三角函数课）。

你可以使用如下的代码：

```javascript
const rotatePoint = ({ x, y }, rad) => {
  const rcos = Math.cos(rad);
  const rsin = Math.sin(rad);
  return { x: x * rcos - y * rsin, y: y * rcos + x * rsin };
};

// 将适用于以左上角为原点的形状，如矩形
function rotateAroundCenter(node, rotation) {
  // 当前旋转原点 (0, 0) 相对于理想的原点 - 中心 (node.width()/2, node.height()/2)
  const topLeft = { x: -node.width() / 2, y: -node.height() / 2 };
  const current = rotatePoint(topLeft, Konva.getAngle(node.rotation()));
  const rotated = rotatePoint(topLeft, Konva.getAngle(rotation));
  const dx = rotated.x - current.x,
    dy = rotated.y - current.y;

  node.rotation(rotation);
  node.x(node.x() + dx);
  node.y(node.y() + dy);
}

// 然后使用它
rotateAroundCenter(rect, 180);
```

或者你可以设置 `offsetX = width / 2` 和 `offsetY = height / 2`。但矩形将在画布上移动（因为你改变了它的原点）。所以你需要调整位置。

还有问题吗？请在评论中询问。