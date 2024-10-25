title: 将图像缩放以适应固定区域在画布上
layout: demo_page
---

## 如何缩放图像以适应可用区域而不拉伸？

此演示展示了如何使用 `Konva.Image` 的 [crop](/api/Konva.Image.html#crop) 属性来模拟 CSS 的 `object-fit: cover`。

[crop](https://konvajs.org/api/Konva.Image.html#crop) 属性允许您仅使用源图像的指定区域在画布上绘制。如果您进行正确的计算，则生成的图像可以在不拉伸的情况下绘制。


**说明：尝试调整图像大小或更改裁剪策略**。

{% iframe /downloads/code/sandbox/Scale_Image_To_Fit.html %}

{% include_code Konva Crop Image sandbox/Scale_Image_To_Fit.html %}