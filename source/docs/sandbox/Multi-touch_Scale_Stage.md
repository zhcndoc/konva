title: 多点触控画布缩放与捏合缩放
layout: demo_page
---

## 如何启用画布舞台的平移和捏合缩放？

在 `touchmove` 回调中，我们可以通过 `e.evt.touches` 访问触摸事件的所有原生属性。因此，当在 `touchmove` 中使用两个指针时，我们只需手动计算舞台的位置和缩放属性。

注意：此实验室仅适用于支持多点触控手势的设备，因为它使用了多个触摸事件。

指令：使用支持多点触控手势的移动设备，使用两个手指来缩放舞台。

{% iframe /downloads/code/sandbox/Multi-touch_Scale_Stage.html %}

{% include_code Konva 多点触控缩放舞台沙盒/Multi-touch_Scale_Stage.html %}