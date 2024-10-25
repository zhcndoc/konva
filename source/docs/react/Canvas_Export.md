title: 如何从 react-konva 导出画布为图像？
layout: react_page

---

## 如何保存来自 react-konva 的绘图？

要将任何 `Konva` 节点导出为图像，可以使用 [node.toDataURL()](/api/Konva.Node.html#toDataURL) 或 [node.toImage()](https://konvajs.org/api/Konva.Node.html#toImage) API。请查看 [原生 Konva 图像导出示例](https://konvajs.org/docs/data_and_serialization/Stage_Data_URL.html)。

您需要使用 [Refs API](/docs/react/Access_Konva_Nodes.html) 直接访问 `Konva` 节点，以便调用这些方法。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/image-export?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin allow-downloads"></iframe>