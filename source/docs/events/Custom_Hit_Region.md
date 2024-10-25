title: HTML5 Canvas 自定义命中检测函数教程
---

有两种方式可以改变形状的命中区域：`hitFunc` 和 `hitStrokeWidth` 属性。

## 1. 什么是 `hitFunc`？

为了为 Konva 中的形状创建自定义的命中绘制函数，我们可以设置 `hitFunc` 属性。命中绘制函数是 Konva 用于绘制用于命中检测的区域的函数。使用自定义绘制命中函数可以带来几个好处，例如使命中区域更大，以便用户更容易与形状交互，使形状的某些部分可检测而其他部分不可检测，或简化命中绘制函数以提高渲染性能。

同时，也可以查看一些 [最佳实践](/docs/shapes/Custom.html)，编写可以用于 `hitFunc` 的自定义 `sceneFunc`。

`hitFunc` 是一个具有两个参数的函数：[Konva.Context](/api/Konva.Context.html) 渲染器和形状实例。

使用 `hitFunc` 您可以完全控制绘制过程。

## 2. 什么是 `hitStrokeWidth`？

对于某些形状，例如 `Konva.Line`，覆盖 `hitFunc` 是非常困难的。在某些情况下，您只是想使其在事件中变得更厚。在这种情况下，最好使用大值的 `hitStrokeWidth` 属性。


说明：将鼠标移到星形上、移出、按下和抬起鼠标，并观察命中区域是一个超大圆形，包围着形状。对于一条线，也尝试同样的操作。
您还可以切换命中画布，以查看其外观。这可能对调试很有用。



{% iframe /downloads/code/events/Custom_Hit_Region.html %}

{% include_code Konva Custom_Hit_Region Demo events/Custom_Hit_Region.html %}