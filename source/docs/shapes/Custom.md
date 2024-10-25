title: HTML5 Canvas 自定义形状教程
---

要使用 Konva 创建自定义形状，我们可以实例化一个 `Konva.Shape()` 对象。

在创建自定义形状时，我们需要定义一个绘制函数，该函数接受一个 [Konva.Context](/api/Konva.Context.html) 渲染器和一个形状实例：

```javascript
var rect = new Konva.Shape({
  x: 10,
  y: 20,
  fill: '#00D2FF',
  width: 100,
  height: 50,
  sceneFunc: function (context, shape) {
    context.beginPath();
    // 不需要设置矩形的位置，Konva 会自动处理
    context.rect(0, 0, shape.getAttr('width'), shape.getAttr('height'));
    // (!) Konva 特有的方法，这非常重要
    // 它将应用所有所需的样式
    context.fillStrokeShape(shape);
  }
});
```

`Konva.Context` 是一个对原生 2D 画布上下文的包装器，具有相同的属性和方法，并附加了一些额外的 API。

我们可以使用渲染器访问 HTML5 Canvas 上下文，并使用特定方法如 `context.fillStrokeShape(shape)`，该方法自动处理填充、描边和应用阴影。

可以用于绘制自定义形状的两个属性是：`sceneFunc` 和 `hitFunc`。

`sceneFunc` 应用于定义形状的视觉外观。`Konva` 将使用 `sceneFunc` 来绘制其用于事件检测的命中图。因此在很多情况下，您只需要定义 `sceneFunc`。如果您想覆盖命中测试，请查看 [自定义命中区域演示](/docs/events/Custom_Hit_Region.html)。

### 编写 `sceneFunc` 和 `hitFunc` 的一些最佳实践：

1. 尽可能使其优化，因为该函数每秒可能会被调用多次。在这里创建图像 (`document.createElement('image')` 或 `new window.Image()`) 或其他大型对象是不合适的。

2. 该函数不应有任何副作用，比如移动形状、附加事件或改变应用的状态。

3. 如果您想手动将复杂样式应用到画布或绘制图像，请记得定义自定义的 `hitFunc`。

4. 不要在 `sceneFunc` 中手动应用位置和缩放。如果您直接在形状实例中设置这些属性，`Konva` 可以自动处理。示例：`shape.x(10)`。

5. 如果可能，不要在 `sceneFunc` 中手动应用样式。只需使用一些路径绘制形状。最后的 `context.fillStrokeShape(shape)` 函数将完成所有样式工作。

6. 如果您需要更多演示，请查看 [Konva 核心形状实现](https://github.com/konvajs/konva/tree/master/src/shapes) 的仓库。

有关属性和方法的完整列表，请查看 [Konva.Shape 文档](/api/Konva.Shape.html)。

{% iframe /downloads/code/shapes/Custom.html %}

{% include_code Konva Custom Demo shapes/Custom.html %}
