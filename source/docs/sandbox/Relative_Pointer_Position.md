title: 如何找到相对鼠标位置？
layout: demo_page
---

在某些情况下，您可能需要找到一个点相对于一个节点的位置。为此，我们可以使用数学的 `Konva.Transform` 方法。

在这个示例中，我们有深度嵌套的变换节点：移动的舞台、缩放的图层和旋转的组。
现在我们想在组中点击时添加圆形。但是我们如何找到这些圆形的位置呢？
我们不能直接使用 `stage.getPointerPosition()`，因为那是相对于舞台左上角的位置。

这个想法很简单。我们只需使用反转的绝对变换。

{% iframe /downloads/code/sandbox/Relative_Pointer_Position.html %}

{% include_code 相对指针位置演示 sandbox/Relative_Pointer_Position.html %}