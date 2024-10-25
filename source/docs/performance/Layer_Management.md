title: HTML5 画布层管理性能技巧
---

在创建 Konva 应用程序时，考虑性能时最重要的事情是层管理。 Konva 相较于其他画布库的一个显著特点是，它使我们能够创建独立的层，每层都有自己的画布元素。这意味着我们可以动画、过渡或更新某些舞台元素，而不必重新绘制其他元素。如果我们检查 Konva 舞台的 DOM，将会发现每层实际上都有一个画布元素。

这个教程有两个层，一个是动画层，另一个是包含文本的静态层。由于没有理由不断重新绘制文本，因此它被放置在自己的层中。

**注意：不要创建太多层。通常 3-5 层为上限。**

{% iframe /downloads/code/performance/Layer_Management.html %}

{% include_code Konva 层管理演示 performance/Layer_Management.html %}