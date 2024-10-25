title: HTML5 Canvas 动画教程
---

要使用 Konva 进行属性动画，我们可以实例化一个 `Konva.Tween` 对象，然后通过调用 `play()` 来开始动画。`Shape`、`Group`、`Layer` 或 `Stage` 的任何数值属性都可以进行过渡，例如 `x`、`y`、`rotation`、`width`、`height`、`radius`、`strokeWidth`、`opacity`、`scaleX`、`offsetX` 等等。

有关属性和方法的完整列表，请查看 [Konva.Tween 文档](/api/Konva.Tween.html)。

{% iframe /downloads/code/tweens/Linear_Easing.html %}

{% include_code Konva 动画演示 tweens/Linear_Easing.html %}