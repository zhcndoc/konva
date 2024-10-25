title: 如何访问原生 2D 上下文
layout: demo_page
---

## 如何从 Konva 访问原生 2D 画布上下文

Konva 为您提供了一个对象模型，用于在画布上绘制形状。您的应用程序从一个舞台（div 包装器）开始，然后舞台内部有一个或多个图层（画布 DOM 元素）。

您可以直接进入 Konva 的内部（或 DOM 的内部），在画布上绘制，而无需创建任何形状。但这并不推荐。因为 Konva 对绘制具有完全控制权，可能会重置您的手动绘图或在任何导出操作中丢失它们，例如 `stage.toDataURL()`。

如果您想手动绘制内容，有两种推荐的方式：

1. [使用自定义形状](https://konvajs.org/docs/shapes/Custom.html)
2. 手动创建一个新的画布元素，然后将其用于 `Konva.Image`。


{% iframe /downloads/code/sandbox/Native_Context_Access.html %}

{% include_code Konva 20000 Nodes Demo sandbox/Native_Context_Access.html %}