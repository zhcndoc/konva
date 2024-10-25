title: 如何在 Canvas 上显示视频
layout: demo_page

---

要在画布上绘制视频，我们可以使用 `<video>` DOM 元素，类似于 `<img>` 元素，但我们必须频繁地重绘图层。为此，我们可以使用 `Konva.Animation`。作为替代方案，您可以使用 `requestAnimationFrame` 并只需调用 `layer.draw()`。

> 另请查看此帖子以获取更多信息：https://lavrton.com/case-study-video-editor-for-stream/

说明：点击“播放”按钮。您可以拖放图像。

{% iframe /downloads/code/sandbox/Video_On_Canvas.html %}

{% include_code Konva 视频演示 sandbox/Video_On_Canvas.html %}