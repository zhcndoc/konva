title: 拖拽画布形状
layout: react_page
---

要为画布上的任何节点启用拖拽功能，只需将 `draggable` 属性传递给组件。

当你拖拽一个形状时，建议将其位置保存到你的应用商店中。你可以使用 `onDragMove` 和 `onDragEnd` 事件来实现这一目的。


<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/drag_and_drop?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>