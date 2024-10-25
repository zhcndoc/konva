## 标题: HTML5 Canvas 简单缓动教程

要使用 Konva 创建非线性缓动动画，我们可以将 `easing` 属性设置为一个缓动函数。除了 `Konva.Easings.Linear`，其他最常见的缓动函数包括 `Konva.Easings.EaseIn`、`Konva.Easings.EaseInOut` 和 `Konva.Easings.EaseOut`。

有关所有可用的缓动函数，请访问 [缓动文档](/api/Konva.Easings.html)。

说明：将鼠标悬停或触摸这些框以使用不同的缓动函数进行动画

{% iframe /downloads/code/tweens/Common_Easing.html %}

{% include_code Konva 简单缓动示例 tweens/Common_Easing.html %}