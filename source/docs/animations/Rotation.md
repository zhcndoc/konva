title: 旋转动画教程
---

## 如何动画形状旋转？

要使用 Konva 动画一个形状的旋转，我们可以创建一个新的动画 `Konva.Animation`，并定义一个函数，在每个动画帧中修改形状的旋转。

在本教程中，我们将围绕左上角旋转一个蓝色矩形，围绕中心旋转一个黄色矩形，以及围绕一个外部点旋转一个红色矩形。

有关属性和方法的完整列表，请查看 [Konva.Animation 文档](/api/Konva.Animation.html)。

{% iframe /downloads/code/animations/Rotation.html %}

{% include_code Konva 旋转动画演示 animations/Rotation.html %}