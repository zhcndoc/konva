title: HTML5 Canvas 优化笔画性能提示
---

### 禁用笔画的阴影

默认情况下，`Konva` 在形状具有笔画和阴影时会进行额外的内部绘制。这样做是为了使绘制结果看起来符合预期。

如果你并不真的需要笔画的阴影，应该设置 `shape.shadowForStrokeEnabled(false)`。请记住，如果你使用的是没有填充的 `Konva.Line`（因为它只是一个有笔画的形状），阴影将会被禁用。**禁用笔画的阴影将大幅提高渲染速度。**


### 从命中区域移除笔画

如果你有一个填充并且笔画非常小的形状，可以设置 `shape.hitStrokeWidth(0)` 来从命中图形中移除笔画。
如果你的笔画对命中检测至关重要（例如非封闭的线），请不要使用这个属性。默认情况下，`Konva` 使用笔画作为命中图形 - 用于检测指针下的形状以响应事件。在某些情况下，你可能不需要这个功能。


**说明：查看圆圈的非常慢的随机移动。现在尝试切换优化渲染复选框。更快了吗？**

{% iframe /downloads/code/performance/Optimize_Strokes.html %}

{% include_code Konva 优化笔画演示 performance/Optimize_Strokes.html %}