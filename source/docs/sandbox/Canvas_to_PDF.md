title: 如何将画布转换为 PDF
layout: demo_page
---

## 您想将 Konva 阶段保存为 PDF 文件吗？

PDF 是一种复杂的格式。因此，我们需要使用像 [jsPDF](https://parall.ax/products/jspdf) 这样的外部库。

将画布保存为 PDF 的方法很简单：

1. 生成画布内容
2. 将画布导出为图像
3. 将图像添加到使用 PDF 库创建的 PDF 文档中
4. 保存 PDF 文件

我还有两个小提示给您：

1. 通过 [高质量导出](/docs/data_and_serialization/High-Quality-Export.html)，您可以在将节点转换为图像时，使用 `pixelRatio` 属性来提高 PDF 的质量。

2. 在 PDF 中可以使文本可选择。即使我们将画布作为图像添加到 PDF 中，我们仍然可以手动插入文本。这并不简单，如果您有复杂样式的话可能会比较困难。此外，PDF 中的文本渲染与 `Konva` 的文本渲染是不同的。但我们可以尽量使其接近。作为演示，我们将在 PDF 文件中绘制“隐藏”文本。文本将放置在图像下方，因此不可见。但它仍然是可选择的。作为“复杂样式”的演示，我将对文本进行模糊处理。

**说明：查看画布。然后尝试将其保存为 PDF。**

{% iframe /downloads/code/sandbox/Canvas_to_PDF.html %}

{% include_code Konva PDF demo sandbox/Canvas_to_PDF.html %}