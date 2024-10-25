title: Web Worker 中的离屏画布
layout: demo_page

---

## 如何在 Web Worker 中运行 Konva？

**警告！这个演示是非常实验性的！可能在许多浏览器中无法工作。** 请查看 [离屏画布能力表](https://caniuse.com/#feat=offscreencanvas)。

通过一些额外的工作，我们可以使用 [离屏画布](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) 在 [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) 中渲染 `Konva` 舞台，以提高性能或实现一些疯狂的想法。

你可以使用 Web Worker 来进行一些与 `Konva` 相关的可视化。

但是 `Konva` 的一个主要特点是其交互性（对画布形状完全支持事件）。而在 Web Worker 中没有 DOM 事件。因此，我们必须写一些“代理”代码来传递所有的 DOM 事件到 Konva 引擎。这样我们也可以在 Web Worker 中拥有交互式对象。

这个演示基于 [跳跃的兔子](/docs/sandbox/Jumping_Bunnies.html) 性能压力测试进行了调整。

你可能需要编写更多的代码来覆盖更多的功能和不同的边缘情况（例如 HDPI 屏幕支持）。

**说明：舞台上有两个交互对象。“添加按钮”和一个可拖动的红色圆圈。尝试添加更多的兔子或拖动圆圈。**

你在屏幕上看到的所有内容都是 **在另一个 JavaScript 线程中渲染的**！因此，它不应该阻塞当前页面的主 JS 线程。

{% iframe /downloads/code/sandbox/Web_Worker.html %}

{% include_code sandbox/Web_Worker.html %}

而工作线程的代码是：

{% include_code Worker Code sandbox/Web_Worker.js %}