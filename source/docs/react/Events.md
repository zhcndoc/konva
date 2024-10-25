title: 如何在 React 和 Konva 中监听画布形状的事件？
layout: react_page
---

使用 `react-konva`，您可以将 Konva 支持的任何事件附加到画布节点上。

为此，您可以使用 `onEventName` 方案，比如对于 `mousedown` 使用 `onMouseDown`，对于 `dragend` 使用 `onDragEnd`，依此类推。

有关事件的完整列表，请查看 [on() 方法文档](/api/Konva.Node.html#on)。

在这个示例中，您可以看到我们是如何使用 `dragstart` 和 `dragend` 事件的。

<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/basic_demo?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>