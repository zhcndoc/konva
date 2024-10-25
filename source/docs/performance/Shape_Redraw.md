title: HTML5 Canvas 形状重绘性能提示
---

**重要说明：我认为使用这样的技巧是一种反模式。你应该避免使用它。**

通常，当你需要更新画布时，你应该调用 `layer.draw()`。

但是在少数情况下，可以更新 `Konva.Node` 而无需更新整个图层。你可以调用 `shape.draw()`，*但请记住，在这种情况下，形状将被绘制在现有画布之上*。
因此，如果你的节点应该放在其他节点之下或者具有不透明度，则无法使用这个提示。

说明：将鼠标悬停在框上以进行高亮显示。

{% iframe /downloads/code/performance/Shape_Redraw.html %}

{% include_code Konva Shape Redraw Demo performance/Shape_Redraw.html %}