title: 在画布舞台中渲染 DOM 元素
layout: react_page

---

## 如何将 DOM 元素（如输入框或 div）放入 Konva 舞台中？

如果您想将一些 DOM 节点作为画布树的一部分，可以使用 [react-konva-utils 包](https://github.com/konvajs/react-konva-utils) 中的 `<Html />` 组件。

请记住，DOM 节点不是 Konva 容器的直接子元素。`<Html />` 只是一个用于使用类似 Portal 的 API 的包装器。如果您尝试将画布导出为图像，HTML 内容将不可见。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/dom_portal?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>