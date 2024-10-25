title: 填充和描边顺序演示
---

如果一个形状同时具有填充和描边，默认情况下，`Konva` 会先绘制填充，然后在其上方绘制描边。这是大多数应用程序的最佳行为。

## 如何在描边上方绘制填充部分？

在一些少见的情况下，您可能需要一个先绘制描边，然后再在其上方填充的形状。对于这种情况，您可以使用 [fillAfterStrokeEnabled](https://konvajs.org/api/Konva.Shape.html#fillAfterStrokeEnabled) 属性。

```js
shape.fillAfterStrokeEnabled(true);
```

说明：查看两个不同的填充和描边顺序的示例。

{% iframe /downloads/code/styling/Fill_Stroke_Order.html %}

{% include_code Konva 填充 描边 顺序演示 styling/Fill_Stroke_Order.html %}