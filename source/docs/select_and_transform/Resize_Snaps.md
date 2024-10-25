title: HTML5 Canvas 形状调整大小吸附

---

在某些应用中，您可能希望在某些值附近吸附旋转。吸附使形状在提供的值附近变得“粘性”，并像四舍五入一样工作。
您可以通过 [anchorDragBoundFunc](https://konvajs.org/api/Konva.Transformer.html#anchorDragBoundFunc__anchor) 方法控制锚点位置的行为。

```js
transformer.anchorDragBoundFunc(function (oldAbsPos, newAbsPos, event) {
  // 限制 x 轴上的任何其他位置
  return {
    x: 0,
    y: newAbsolutePosition.y,
  };
});
```

在演示中，我们将尝试为调整大小实现吸附。有很多可能的实现方式。

**说明：尝试调整形状的大小。您将看到变换器如何试图吸附到引导线。**

{% iframe /downloads/code/select_and_transform/Resize_Snaps.html %}

{% include_code Konva 形状变换和选择演示 select_and_transform/Resize_Snaps.html %}