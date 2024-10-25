title: 如何在 Canvas 上使用 Konva 显示丰富的 HTML
layout: demo_page
---

## 如何展示复杂的样式（如粗体）并启用丰富文本编辑功能？

Canvas 的文本 API 非常有限。[Konva.Text](/docs/shapes/Text.html) 允许您添加多种不同的样式，支持多行文本等。但目前存在一些限制。您不能为 `Konva.Text` 的不同部分使用不同的样式。对此，您需要使用多个 `Konva.Text` 实例。

如果您想在 Canvas 上显示复杂样式，我们可以采用一种黑科技的解决方案。这个思路很简单：

1. 创建 DOM 元素并将带样式的文本放入其中
2. 使用 [html2canvas](https://html2canvas.hertzen.com/) 将 DOM 元素转换为图像。
3. 将该图像用作 `Konva.Image`。

说明：尝试在编辑器中输入文本

{% iframe /downloads/code/sandbox/Rich_Text.html %}

{% include_code Konva Rich Text Demo sandbox/Rich_Text.html %}