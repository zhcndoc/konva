title: 免费绘图 Konva 演示
layout: demo_page
---

在 Konva 中实现免费绘图工具有多种方法。

我看到的两种最常见和简单的方法是：

1. 基于 Konva 的矢量图形（简单）
2. 手动绘制到 2D 画布（高级）


## 使用 Konva 节点进行自由绘图

因此，第一个也是可能是最简单的方法是：

1. 在 `mousedown`/`touchstart` 时开始新的 `Konva.Line`
2. 在 `mousemove`/`touchmove` 时向线条添加新点

这种方法对于许多应用程序都能正常工作。此外，简单地将绘图状态以矢量表现形式存储在某个地方（如 React 存储或 JSON 存储到数据库）也是非常容易的。

{% iframe /downloads/code/sandbox/Free_Drawing_Vector.html %}

<details><summary>显示源代码！</summary>
<p>
{% include_code Canvas Scrolling Large sandbox/Free_Drawing_Vector.html %}
</p>
</details>


## 手动绘图

第一种方法有其限制，如果我们想直接使用某些低级 2D 画布 API。如果需要高级访问画布，最好使用 [原生上下文访问](/docs/sandbox/Native_Context_Access.html)

我们将创建一个特殊的离屏画布，在其中添加所有绘图。
通过原生访问画布，我们可以使用低级的 2D 上下文函数。
为了在舞台上显示画布，我们将使用 `Konva.Image`。

{% iframe /downloads/code/sandbox/Free_Drawing_Manual.html %}

<details><summary>显示源代码！</summary>
<p>
{% include_code Canvas Scrolling Large sandbox/Free_Drawing_Manual.html %}
</p>
</details>