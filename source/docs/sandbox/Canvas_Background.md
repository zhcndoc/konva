title: 如何为画布添加背景？
layout: demo_page
---

## 如何为 Konva 阶段添加背景？

有两种方法可以为背景添加背景。

### 1. 使用 `Konva.Rect` 形状添加背景。

在画布上添加背景的 Konva 方法就是在场景底部绘制一个大小与舞台相同的 `Konva.Rect` 形状。您可以根据需要对该矩形进行样式设置，使用 [实心颜色、渐变或图案图像](/docs/styling/Fill.html)。

*您需要特别注意的是矩形的位置和大小。如果您通过移动或应用缩放变换任何背景形状的父级（例如舞台或图层），则应该“重置”背景形状的位置/大小以填满整个舞台区域。*

### 2. 使用 CSS 添加背景

为画布添加背景的另一个解决方案是直接使用 CSS 样式应用于舞台容器的 DOM 元素。该解决方案比第一种方法更简单，因为您不需要跟踪位置和大小的变化。它的性能也**略微**更好，因为您不需要绘制任何额外的形状。

**但它有一个缺点。使用 `stage.toImage()` 和 `stage.toDataURL()` 等方法导出时，CSS 背景将不可见。**

说明：在演示中，我将展示两种方法。绿色的实心背景是使用 CSS 创建的。黄橙色渐变将使用 `Konva.Rect` 实例完成。尝试拖动舞台。您会发现渐变保持在原地。

{% iframe /downloads/code/sandbox/Canvas_Background.html %}

{% include_code Konva background demo sandbox/Canvas_Background.html %}