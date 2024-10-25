title: HTML5 Canvas 禁用完美绘制提示
---



在某些情况下，在画布上绘制的结果可能会出乎意料。
例如，让我们绘制一个带填充、描边和不透明度的形状。
由于描边是在填充上绘制的，因此形状内部有一条半宽度的描边线，这条线看起来更暗
因为它是填充和描边的交集。

这可能不是你所期望的结果。因此，`Konva` 使用缓冲画布修复了这种行为。

在这种情况下，`Konva` 是这样做的：

1. 在缓冲画布上绘制形状
2. 无视不透明度进行填充和描边
3. 在层的画布上应用不透明度
4. 然后将来自缓冲的结果绘制到层的画布上

但使用缓冲画布可能会降低性能。因此，您可以禁用这种修复：

```javascript
shape.perfectDrawEnabled(false);
```

在这里查看差异：

{% iframe /downloads/code/performance/Disable_Perfect_Draw.html %}

{% include_code Konva 禁用完美绘制演示 performance/Disable_Perfect_Draw.html %}