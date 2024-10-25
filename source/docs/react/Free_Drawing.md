title: 如何在 Canvas 上使用 React 实现自由绘画？
layout: react_page
---

本演示展示了如何用 "react 的方式" 实现一个自由绘画应用，并提供完整的矢量表示。

这种实现对于许多白板应用来说应该效果不错。它允许你简单地添加 [撤销/重做功能](/docs/react/Undo-Redo.html) 并将完整状态保存到后端。

如果状态中的线条太多，它的性能会变得较慢。因此，如果你想支持绘制数百或数千条线，你需要进行一些额外的优化。


<iframe src="https://codesandbox.io/embed/github/konvajs/site/tree/master/react-demos/free-drawing?hidenavigation=1&view=split&fontsize=10" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>