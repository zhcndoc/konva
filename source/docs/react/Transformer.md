title: 如何使用 React 和 Konva 调整画布形状的大小和旋转？
layout: react_page
---

目前没有好的、纯粹声明式的“React 方式”来使用 Transformer 工具。
但你仍然可以通过一些小的手动请求来使用它与 Konva 节点。
这样也能正常工作。

想法：你需要创建一个 `Konva.Transformer` 节点，并手动将其附加到所需的节点上。

说明：点击其中一个形状进行选择。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/transformer?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>