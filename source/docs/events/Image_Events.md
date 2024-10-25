title: HTML5 Canvas 图像事件与 Konva
---

## HTML5 Canvas 图像事件与 Konva

为了仅检测 Konva 中图像的非透明像素事件，我们可以使用 `drawHitFromCache()` 方法来生成更精确的图像命中区域。
默认情况下，即使图像是透明的，事件也可以在图像的任何像素内触发。 `drawHitFromCache()` 方法还接受一个可选的回调方法，当图像命中区域创建时将执行该回调。

*注意：`drawHitFromCache()` 方法要求图像托管在与执行代码相同域的网络服务器上。*

说明：将鼠标悬停在猴子和狮子上，观察鼠标悬停事件绑定。请注意，如果您将鼠标悬停在图像的任何部分，包括透明像素，猴子事件将被触发。由于我们为狮子创建了一个图像命中区域，透明像素被忽略，这使得事件检测更精确。

{% iframe /downloads/code/events/Image_Events.html %}

{% include_code Konva Image_Events Demo events/Image_Events.html %}