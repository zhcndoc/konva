title: 画布形状上的手势事件
layout: demo_page
---

## 如何在画布形状上监听滑动、捏合缩放、旋转和其他多点触摸手势事件？

默认情况下，`Konva` 仅支持基本的触摸事件，如 `touchstart`、`touchmove`、`touchend`。

您必须手动从这些触摸事件实现手势事件。

如果您在寻求整个舞台的平移和缩放逻辑，请查看 [多点触控缩放舞台演示](/docs/sandbox/Multi-touch_Scale_Stage.html)。

但我可以稍微修改 [Hammer.js](https://hammerjs.github.io/) 使其与 Konva 一起工作！


您可以在这里找到修改过的 [hammer.js 源代码](/js/hammer-konva.js)。

说明：您可以在矩形上尝试不同的手势，如滑动、旋转、缩放、拖放、按压。

对于桌面浏览器，您可以按住 `Shift` 键来模拟触摸事件。

**注意：此演示为实验性。**


{% iframe /downloads/code/sandbox/Gestures.html %}

{% include_code Konva Touch Gestures Demo sandbox/Gestures.html %}